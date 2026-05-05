#!/usr/bin/env python3
"""
Convert QUnit test files to Vitest format.
Handles the specific patterns found in isat/js/*_test.js files.
"""

import re
import sys
from pathlib import Path


def find_matching_paren(s, start):
    """Return index of closing paren matching the open paren at `start`."""
    depth = 0
    for i in range(start, len(s)):
        if s[i] == '(':
            depth += 1
        elif s[i] == ')':
            depth -= 1
            if depth == 0:
                return i
    return -1


def transform_line(line, in_test_var_block=False):
    """Apply line-level transformations."""

    # Drop QUnit module() calls
    if re.match(r'\s*module\(', line):
        return None

    # Drop /*global ... */ single-line comments
    if re.match(r'\s*/\*global.*\*/', line):
        return None

    # Drop expect(N); QUnit assertion count
    if re.match(r'\s*expect\(\d+\);\s*$', line):
        return None

    # var TOLERANCE / var TOL = ... -> const
    line = re.sub(r'^(\s*)var (TOLERANCE|TOL)\b', r'\1const \2', line)

    # test('name', function () { -> it('name', () => {
    line = re.sub(
        r"^(\s*)test\(('(?:[^'\\]|\\.)*'|\"(?:[^\"\\]|\\.)*\"),\s*function\s*\(\)\s*\{",
        r"\1it(\2, () => {",
        line
    )

    # ok(Math.abs(...) < TOL, "msg") -> expect(Math.abs(...)).toBeLessThan(TOL)
    # ok(Math.abs(...) < TOL)
    line = re.sub(
        r'\bok\(Math\.abs\((.+?)\)\s*<\s*(\w+)(?:,\s*"[^"]*")?\)',
        r'expect(Math.abs(\1)).toBeLessThan(\2)',
        line
    )

    # ok(isequalRel(...)) -> expect(isequalRel(...)).toBe(true)
    line = re.sub(r'\bok\((isequalRel\(.+\))\)', r'expect(\1).toBe(true)', line)

    # ok(! isequalRel(...)) -> expect(isequalRel(...)).toBe(false)
    line = re.sub(r'\bok\(!\s*(isequalRel\(.+\))\)', r'expect(\1).toBe(false)', line)

    # ok(condition) -> expect(condition).toBe(true)  (catch-all, must come after specific ok() transforms)
    line = re.sub(r'\bok\((.+)\)(?=;)', r'expect(\1).toBe(true)', line)

    # assert(isequalRel(...)) -> expect(isequalRel(...)).toBe(true)
    line = re.sub(r'\bassert\((isequalRel\(.+\))\)', r'expect(\1).toBe(true)', line)

    # assert(condition) -> expect(condition).toBe(true)  (catch-all)
    line = re.sub(r'\bassert\((.+)\)(?=;)', r'expect(\1).toBe(true)', line)

    # equal(fn([array]), scalar, "msg") -> expect(fn([array])).toBe(scalar)
    # Must come before general equal() to handle array args in first position.
    line = re.sub(
        r'\bequal\((\w+\(\[[^\]]*\]\)),\s*([^,"]+?),\s*"[^"]*"\)',
        r'expect(\1).toBe(\2)',
        line
    )

    # equal(a, b, "msg") -> expect(a).toBe(b)
    line = re.sub(r'\bequal\((.+?),\s*(.+?),\s*"[^"]*"\)', r'expect(\1).toBe(\2)', line)
    # equal(a, b) -> expect(a).toBe(b)
    line = re.sub(r'\bequal\((.+?),\s*(.+?)\)(?=;)', r'expect(\1).toBe(\2)', line)

    # notEqual(a, b) -> expect(a).not.toBe(b)
    line = re.sub(r'\bnotEqual\((.+?),\s*(.+?)\)(?=;)', r'expect(\1).not.toBe(\2)', line)

    return line


def parse_var_block(lines_list):
    """
    Parse a multi-line JS var declaration block into (const_decls, let_names).

    Input: list of stripped lines collected from the var block (including first line
    with 'var' and last line ending with ';').

    Returns:
        const_decls: list of (name, value) for initialized vars
        let_names:   list of bare names (uninitialized vars)
    """
    # Join, strip 'var ' prefix, strip trailing ';'
    joined = ' '.join(lines_list)
    joined = re.sub(r'^\s*var\s+', '', joined.strip()).rstrip(';')
    parts = [p.strip() for p in joined.split(',')]

    const_decls = []
    let_names = []
    for part in parts:
        part = part.strip()
        if not part:
            continue
        if '=' in part:
            name, val = part.split('=', 1)
            const_decls.append((name.strip(), val.strip()))
        else:
            let_names.append(part)
    return const_decls, let_names


def transform_mag(src_path, dst_path):
    """Transform mag_test.js. Two tests, mostly single-arg mag() calls."""
    lines = Path(src_path).read_text().splitlines()
    out = [
        'import { describe, it, expect } from "vitest";',
        'import { isequalRel } from "./helpers.js";',
        'import { mag } from "../js/mag.js";',
        '',
        'describe("mag", () => {',
    ]

    skip_global_comment = False
    for line in lines:
        stripped = line.strip()

        # Skip /*global ... */ block
        if stripped.startswith('/*') and 'global' in stripped:
            skip_global_comment = True
        if skip_global_comment:
            if '*/' in stripped:
                skip_global_comment = False
            continue

        # Fix the two-arg mag() calls in first test: mag([a,b,c], [d,e,f]) -> mag([a,b,c])
        # These appear as: equal(mag([...], [...]), val, msg) or ok(... mag([...], [...]) ...)
        # Strategy: find mag( and remove the second array argument
        if 'mag(' in line and line.count('[') > 1:
            # Match mag([...], [...]) and replace with mag([...])
            line = re.sub(
                r'mag\((\[[^\]]+\]),\s*\[[^\]]+\]\)',
                r'mag(\1)',
                line
            )

        result = transform_line(line)
        if result is None:
            continue
        out.append(result)

    out.append('});')
    Path(dst_path).write_text('\n'.join(out) + '\n')
    print(f"Written: {dst_path}")


def transform_newtonnu(src_path, dst_path):
    """
    Transform newtonnu_test.js.

    Patterns handled:
    1. Multi-line var declaration with TOLERANCE/ecc/rets/e0/m:
         var TOLERANCE = 1e-14,
             TOLERANCE_BIG = 1e-13,
             ecc = 0.0,
             rets, e0, m;
       -> const TOLERANCE = 1e-14;
          const TOLERANCE_BIG = 1e-13;
          const ecc = 0.0;
          let rets;        (only when rets used inline via .shift())
          let e0, m;       (reassigned across multiple calls)

    2. rets = newtonnu(ecc, nu); e0 = rets.shift(); m = rets.shift();
       -> [e0, m] = newtonnu(ecc, nu);   (assignment to already-declared let vars)

    3. rets = newtonnu(ecc, nu); ok(isequalRel(rets.shift(), val, TOL));
       -> rets = newtonnu(ecc, nu);  (assignment to already-declared let rets)
          expect(isequalRel(rets.shift(), val, TOL)).toBe(true);
    """
    lines = Path(src_path).read_text().splitlines()
    out = [
        'import { describe, it, expect } from "vitest";',
        'import { isequalRel } from "./helpers.js";',
        'import { newtonnu } from "../js/newtonnu.js";',
        '',
        'describe("newtonnu", () => {',
    ]

    skip_global_comment = False

    # State for multi-line var block
    in_var_block = False
    var_block_lines = []

    # State for collecting rets.shift() sequences
    pending_call = None   # "newtonnu(ecc, nu)" string
    pending_vars = []     # ["e0", "m", ...]
    collecting_shifts = False

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Skip /*global */ blocks
        if stripped.startswith('/*') and 'global' in stripped:
            skip_global_comment = True
        if skip_global_comment:
            if '*/' in stripped:
                skip_global_comment = False
            i += 1
            continue

        # Detect start of multi-line var block: var TOLERANCE... or var TOL...
        if not in_var_block and not collecting_shifts and re.match(r'\s*var\s+(?:TOLERANCE|TOL)\b', line):
            in_var_block = True
            var_block_lines = [stripped]
            i += 1
            continue

        # Collect continuation lines of the var block
        if in_var_block:
            var_block_lines.append(stripped)
            if stripped.endswith(';'):
                # Parse the var block into const decls and let names
                const_decls, let_names = parse_var_block(var_block_lines)
                indent = '        '
                for name, val in const_decls:
                    out.append(f'{indent}const {name} = {val};')
                # Separate rets from other let names (e0, m)
                rets_names = [n for n in let_names if n == 'rets']
                other_lets = [n for n in let_names if n != 'rets']
                if rets_names:
                    out.append(f'{indent}let rets;')
                if other_lets:
                    out.append(f'{indent}let {", ".join(other_lets)};')
                in_var_block = False
                var_block_lines = []
            i += 1
            continue

        # Detect: rets = newtonnu(...);
        m = re.match(r'\s*rets\s*=\s*(newtonnu\([^)]+\));', line)
        if m:
            pending_call = m.group(1)
            pending_vars = []
            collecting_shifts = True
            i += 1
            continue

        # Collect: varname = rets.shift();
        if collecting_shifts:
            ms = re.match(r'\s*(\w+)\s*=\s*rets\.shift\(\);', line)
            if ms:
                pending_vars.append(ms.group(1))
                i += 1
                continue
            else:
                # Flush the collected shift pattern
                indent = '        '
                if pending_vars:
                    # Destructuring assignment (vars already declared with let)
                    out.append(f'{indent}[{", ".join(pending_vars)}] = {pending_call};')
                else:
                    # No vars collected — inline rets.shift() usage (testmat pattern)
                    out.append(f'{indent}rets = {pending_call};')
                pending_call = None
                pending_vars = []
                collecting_shifts = False
                # Fall through to process current line

        # Drop pure var declarations of rets/e0/m (already handled by var block or shift pattern)
        if re.match(r'\s*var\s+(?:rets|e0|m)\b', line):
            i += 1
            continue

        result = transform_line(line)
        if result is None:
            i += 1
            continue
        out.append(result)
        i += 1

    # Flush any pending shift pattern at EOF
    if collecting_shifts:
        indent = '        '
        if pending_vars:
            out.append(f'{indent}[{", ".join(pending_vars)}] = {pending_call};')
        elif pending_call:
            out.append(f'{indent}rets = {pending_call};')

    out.append('});')
    Path(dst_path).write_text('\n'.join(out) + '\n')
    print(f"Written: {dst_path}")


def transform_rv2coe(src_path, dst_path):
    """
    Transform rv2coe_test.js.
    Key pattern (multi-line var declaration):
        var rets = rv2coe([...], [...], mu),
            TOL  = 0.000001,
            p    = rets.shift(),
            a    = rets.shift(),
            ...
            lonper = rets.shift();
    -> const TOL = 0.000001;
       const [p, a, ...] = rv2coe([...], [...], mu);
    """
    text = Path(src_path).read_text()
    lines = text.splitlines()

    out = [
        'import { describe, it, expect } from "vitest";',
        'import { isequalRel } from "./helpers.js";',
        'import { rv2coe } from "../js/rv2coe.js";',
        '',
        'describe("rv2coe", () => {',
    ]

    skip_global_comment = False
    # State machine for multi-line var rets = rv2coe(...), TOL=..., p=rets.shift(),...
    in_rv2coe_var = False
    rv2coe_call = None
    rv2coe_tol = None
    rv2coe_vars = []
    # Buffer lines of the var block to parse all at once
    var_block_lines = []

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Skip /*global */ blocks
        if stripped.startswith('/*') and 'global' in stripped:
            skip_global_comment = True
        if skip_global_comment:
            if '*/' in stripped:
                skip_global_comment = False
            i += 1
            continue

        # Detect start of var rets = rv2coe(...
        if not in_rv2coe_var and re.match(r'\s*var\s+rets\s*=\s*rv2coe\(', line):
            in_rv2coe_var = True
            var_block_lines = [line.rstrip()]
            i += 1
            continue

        # Collect continuation lines of the var block (ends with ;)
        if in_rv2coe_var:
            var_block_lines.append(line.rstrip())
            if stripped.endswith(';'):
                # Parse the whole block
                block = ' '.join(var_block_lines)
                # Extract rv2coe call
                cm = re.search(r'rets\s*=\s*(rv2coe\(.*?\))', block)
                if cm:
                    rv2coe_call = cm.group(1)
                # Extract TOL if present
                tm = re.search(r'TOL\s*=\s*([\d.e+]+)', block)
                if tm:
                    rv2coe_tol = tm.group(1)
                # Extract variable names assigned from rets.shift()
                rv2coe_vars = re.findall(r'(\w+)\s*=\s*rets\.shift\(\)', block)

                indent = '        '
                if rv2coe_tol:
                    out.append(f'{indent}const TOL = {rv2coe_tol};')
                if rv2coe_call and rv2coe_vars:
                    out.append(f'{indent}const [{", ".join(rv2coe_vars)}] = {rv2coe_call};')

                in_rv2coe_var = False
                var_block_lines = []
                rv2coe_call = rv2coe_tol = None
                rv2coe_vars = []
            i += 1
            continue

        result = transform_line(line)
        if result is None:
            i += 1
            continue
        out.append(result)
        i += 1

    out.append('});')
    Path(dst_path).write_text('\n'.join(out) + '\n')
    print(f"Written: {dst_path}")


def parse_shift_block(block_text):
    """
    Parse a var block like:
        var rets = fn(arg1, arg2, ...),
            v1 = rets.shift(),
            v2 = rets.shift(),
            ...,
            TOL = 0.000001;
    Returns (fn_call_str, shift_var_names, const_pairs).
    const_pairs is a list of (name, value) for non-shift initialised vars.
    """
    # Remove leading 'var ' and trailing ';'
    text = re.sub(r'^\s*var\s+', '', block_text.strip()).rstrip(';')

    # Find 'rets = fn(' and extract the matching close paren
    m = re.search(r'rets\s*=\s*(\w+)\s*\(', text)
    if not m:
        return None, [], []

    fn_start = m.start(1)
    paren_start = text.index('(', fn_start)
    paren_end = find_matching_paren(text, paren_start)
    fn_call = text[m.start(1):paren_end + 1]

    # Everything after the call paren
    rest = text[paren_end + 1:].lstrip(',').strip()

    # Extract shift var names in order
    shift_vars = re.findall(r'(\w+)\s*=\s*rets\.shift\(\)', rest)

    # Extract other name=value pairs (e.g. TOL = 0.000001)
    rest_no_shifts = re.sub(r'\w+\s*=\s*rets\.shift\(\)\s*,?', '', rest)
    const_pairs = []
    for cm in re.finditer(r'([A-Z_][A-Z_0-9]*)\s*=\s*([^\s,;]+)', rest_no_shifts):
        const_pairs.append((cm.group(1), cm.group(2)))

    return fn_call, shift_vars, const_pairs


def transform_inline_shifts(src_path, dst_path, fn_name, header_lines,
                             skip_module_getgravc=False,
                             module_getgravc_vars=None,
                             inject_extra_args=None):
    """
    Generic transformer for files where each test follows the inline-shift pattern:
        var rets = fn(
            arg1, arg2, ...),
        v1 = rets.shift(),
        v2 = rets.shift(),
        ...,
        TOL = 0.000001;
    -> const [v1, v2, ...] = fn(arg1, arg2, ...);
       const TOL = 0.000001;

    Parameters:
        fn_name: the function name to match (e.g. "dscom")
        header_lines: list of strings to emit at the top of the file
        skip_module_getgravc: if True, skip module-level 'var rets = getgravc(...)' block
        module_getgravc_vars: if set, a list of var names to emit at describe level
                              via getgravc destructuring (for initl)
        inject_extra_args: if set, a string to append inside the fn call's last paren
                           (e.g. ", xke, j2, opsmode" for initl)
    """
    lines = Path(src_path).read_text().splitlines()
    out = header_lines[:]

    skip_global_comment = False
    in_module_getgravc = False  # for skipping/capturing module-level getgravc block

    in_var_block = False        # inside the test-level var rets = fn(...) block
    var_block_lines = []
    var_block_paren_depth = 0

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Skip /*global */ blocks
        if stripped.startswith('/*') and 'global' in stripped:
            skip_global_comment = True
        if skip_global_comment:
            if '*/' in stripped:
                skip_global_comment = False
            i += 1
            continue

        # Handle module-level 'var rets = getgravc(...)' block
        if re.match(r'\s*var\s+rets\s*=\s*getgravc\(', line):
            if skip_module_getgravc:
                in_module_getgravc = True
                i += 1
                continue
            elif module_getgravc_vars:
                # Emit as describe-level destructuring + opsmode const
                indent = '    '
                out.append(f'{indent}const [{", ".join(module_getgravc_vars)}] = getgravc(72);')
                in_module_getgravc = True
                i += 1
                continue

        if in_module_getgravc:
            # Detect opsmode = "i" line to emit as const
            if module_getgravc_vars and re.match(r'\s*opsmode\s*=\s*"i"', line):
                out.append('    const opsmode = "i";')
            # End of module setup block (ends with ;)
            if stripped.endswith(';'):
                in_module_getgravc = False
            i += 1
            continue

        # Detect start of test-level inline var block: var rets = fn(
        if not in_var_block and re.match(rf'\s*var\s+rets\s*=\s*{fn_name}\s*\(', line):
            in_var_block = True
            var_block_lines = [line.rstrip()]
            var_block_paren_depth = line.count('(') - line.count(')')
            i += 1
            continue

        if in_var_block:
            var_block_lines.append(line.rstrip())
            var_block_paren_depth += line.count('(') - line.count(')')
            if stripped.endswith(';'):
                # End of block — parse and emit
                block_text = '\n'.join(var_block_lines)
                fn_call, shift_vars, const_pairs = parse_shift_block(block_text)
                if inject_extra_args and fn_call:
                    # Insert extra args before the closing paren of the fn call
                    fn_call = fn_call.rstrip(')')  + inject_extra_args + ')'
                indent = '        '
                if shift_vars and fn_call:
                    out.append(f'{indent}const [{", ".join(shift_vars)}] = {fn_call};')
                for name, val in const_pairs:
                    out.append(f'{indent}const {name} = {val};')
                in_var_block = False
                var_block_lines = []
                var_block_paren_depth = 0
            i += 1
            continue

        result = transform_line(line)
        if result is None:
            i += 1
            continue
        out.append(result)
        i += 1

    out.append('});')
    Path(dst_path).write_text('\n'.join(out) + '\n')
    print(f"Written: {dst_path}")


def transform_dpper(src_path, dst_path):
    """
    Transform dpper_test.js.
    Patterns:
    - module-level 'var opsmode = ...' -> DROP (opsmode is now a default param)
    - test-level 'var TOL = ..., rets, ep, ...' -> const TOL = ...; (drop uninit vars)
    - 'rets = dpper(\\n  ...\\n  ...);' (multi-line) -> collect call
    - 'ep = rets.shift();' etc. -> collect shift vars
    - flush -> const [ep, inclp, nodep, argpp, mp] = dpper(...);
    """
    lines = Path(src_path).read_text().splitlines()
    out = [
        'import { describe, it, expect } from "vitest";',
        'import { isequalRel } from "./helpers.js";',
        'import { dpper } from "../js/dpper.js";',
        '',
        'describe("dpper", () => {',
    ]

    skip_global_comment = False
    in_var_block = False
    var_block_lines = []

    # State for collecting multi-line rets = dpper(...) call + shifts
    in_dpper_call = False
    dpper_call_lines = []
    dpper_paren_depth = 0
    collecting_shifts = False
    pending_call = None
    pending_vars = []

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Skip /*global */ blocks
        if stripped.startswith('/*') and 'global' in stripped:
            skip_global_comment = True
        if skip_global_comment:
            if '*/' in stripped:
                skip_global_comment = False
            i += 1
            continue

        # Drop module-level 'var opsmode = ...'
        if re.match(r'\s*var\s+opsmode\s*=', line):
            i += 1
            continue

        # Handle test-level var block: 'var TOL = ..., rets, ep, ...'
        if not in_var_block and not in_dpper_call and re.match(r'\s*var\s+TOL\b', line):
            if stripped.endswith(';'):
                # Single-line block — process immediately
                m = re.search(r'TOL\s*=\s*([\d.e+\-]+)', stripped)
                if m:
                    out.append(f'         const TOL = {m.group(1)};')
            else:
                in_var_block = True
                var_block_lines = [stripped]
            i += 1
            continue
        if in_var_block:
            var_block_lines.append(stripped)
            if stripped.endswith(';'):
                # Extract only TOL = value from the block
                block_text = ' '.join(var_block_lines)
                m = re.search(r'TOL\s*=\s*([\d.e+\-]+)', block_text)
                if m:
                    out.append(f'         const TOL = {m.group(1)};')
                in_var_block = False
                var_block_lines = []
            i += 1
            continue

        # Flush pending shift collection if current line is not a shift
        if collecting_shifts:
            ms = re.match(r'\s*(\w+)\s*=\s*rets\.shift\(\);', line)
            if ms:
                pending_vars.append(ms.group(1))
                i += 1
                continue
            else:
                # Flush
                if pending_vars and pending_call:
                    indent = '         '
                    out.append(f'{indent}const [{", ".join(pending_vars)}] = {pending_call};')
                pending_call = None
                pending_vars = []
                collecting_shifts = False
                # Fall through

        # Detect start of 'rets = dpper('
        if not in_dpper_call and re.match(r'\s*rets\s*=\s*dpper\s*\(', line):
            in_dpper_call = True
            dpper_call_lines = [line.rstrip()]
            dpper_paren_depth = line.count('(') - line.count(')')
            i += 1
            continue

        if in_dpper_call:
            dpper_call_lines.append(line.rstrip())
            dpper_paren_depth += line.count('(') - line.count(')')
            if dpper_paren_depth == 0:
                # Call complete — reconstruct call text
                call_text = ' '.join(l.strip() for l in dpper_call_lines)
                # Extract just the dpper(...) part
                m = re.search(r'(dpper\(.*\))', call_text, re.DOTALL)
                if m:
                    pending_call = m.group(1)
                pending_vars = []
                collecting_shifts = True
                in_dpper_call = False
                dpper_call_lines = []
            i += 1
            continue

        result = transform_line(line)
        if result is None:
            i += 1
            continue
        out.append(result)
        i += 1

    # Flush any remaining shift collection
    if collecting_shifts and pending_vars and pending_call:
        out.append(f'         const [{", ".join(pending_vars)}] = {pending_call};')

    out.append('});')
    Path(dst_path).write_text('\n'.join(out) + '\n')
    print(f"Written: {dst_path}")


def transform_sgp4init(src_path, dst_path):
    """
    Transform sgp4init_test.js.

    Patterns handled:
    - module-level 'var rets = getgravc(72), ..., opsmode = "i";' -> SKIP (unused)
    - test-level 'var satin, rets, satrec, TOL = 0.000001;' -> 'const TOL = 0.000001;'
    - 'satin = { ... };' (multi-line) -> 'const satin = { ... };'
    - 'satrec = sgp4init(...)' -> 'const satrec = sgp4init(...)'
    - 'assert(isequalRel(...))' -> 'expect(isequalRel(...)).toBe(true)' (via transform_line)
    """
    lines = Path(src_path).read_text().splitlines()
    out = [
        'import { describe, it, expect } from "vitest";',
        'import { isequalRel } from "./helpers.js";',
        'import { sgp4init } from "../js/sgp4init.js";',
        '',
        'describe("sgp4init", () => {',
    ]

    skip_global_comment = False
    in_module_getgravc = False
    in_satin_obj = False
    satin_brace_depth = 0

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Skip /*global */ blocks
        if stripped.startswith('/*') and 'global' in stripped:
            skip_global_comment = True
        if skip_global_comment:
            if '*/' in stripped:
                skip_global_comment = False
            i += 1
            continue

        # Skip module-level var rets = getgravc(...) block (ends with opsmode = "i";)
        if re.match(r'\s*var\s+rets\s*=\s*getgravc\(', line):
            in_module_getgravc = True
            i += 1
            continue
        if in_module_getgravc:
            if stripped.endswith(';'):
                in_module_getgravc = False
            i += 1
            continue

        # Test-level var block: 'var satin, rets, satrec, TOL = 0.000001;'
        # Emit only 'const TOL = ...' if present, drop the rest.
        if re.match(r'\s*var\s+(?:satin|rets|satrec)\b', line):
            m = re.search(r'TOL\s*=\s*([\d.e+\-]+)', stripped)
            if m:
                out.append(f'        const TOL = {m.group(1)};')
            i += 1
            continue

        # satin = { ... }; -> const satin = { ... };  (multi-line)
        if not in_satin_obj and re.match(r'\s*satin\s*=\s*\{', line):
            in_satin_obj = True
            satin_brace_depth = line.count('{') - line.count('}')
            out.append(line.replace('satin = {', 'const satin = {', 1))
            if satin_brace_depth == 0:
                in_satin_obj = False
            i += 1
            continue
        if in_satin_obj:
            out.append(line)
            satin_brace_depth += line.count('{') - line.count('}')
            if satin_brace_depth == 0:
                in_satin_obj = False
            i += 1
            continue

        # satrec = sgp4init(...) -> const satrec = sgp4init(...)
        if re.match(r'\s*satrec\s*=\s*sgp4init\(', line):
            out.append(re.sub(r'(\s*)satrec\s*=\s*sgp4init', r'\1const satrec = sgp4init', line))
            i += 1
            continue

        result = transform_line(line)
        if result is None:
            i += 1
            continue
        out.append(result)
        i += 1

    out.append('});')
    Path(dst_path).write_text('\n'.join(out) + '\n')
    print(f"Written: {dst_path}")


def transform_twoline2rv(src_path, dst_path):
    """
    Transform twoline2rv_test.js.

    Patterns handled:
    - 'var opsmode = ...' -> DROP
    - multi-line 'var rets = twoline2rv(72, str1, str2, type, input);'
      followed by comma-shift sequence:
        satrec   = rets.shift(),
        startmfe = rets.shift(),
        stopmfe  = rets.shift(),
        deltamin = rets.shift(),
        TOL      = 0.000001;
      -> 'const [satrec, startmfe, stopmfe, deltamin] = twoline2rv(...);'
         'const TOL = 0.000001;'
    """
    lines = Path(src_path).read_text().splitlines()
    out = [
        'import { describe, it, expect } from "vitest";',
        'import { isequalRel } from "./helpers.js";',
        'import { twoline2rv } from "../js/twoline2rv.js";',
        '',
        'describe("twoline2rv", () => {',
    ]

    skip_global_comment = False
    in_twoline2rv_call = False
    twoline2rv_call_lines = []
    twoline2rv_paren_depth = 0
    collecting_comma_shifts = False
    pending_call = None
    pending_vars = []
    pending_tol = None

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Skip /*global */ blocks
        if stripped.startswith('/*') and 'global' in stripped:
            skip_global_comment = True
        if skip_global_comment:
            if '*/' in stripped:
                skip_global_comment = False
            i += 1
            continue

        # Drop module-level 'var opsmode = ...'
        if re.match(r'\s*var\s+opsmode\s*=', line):
            i += 1
            continue

        # Collect comma-separated shifts after twoline2rv call
        if collecting_comma_shifts:
            # varname = rets.shift(), or varname = rets.shift();
            ms = re.match(r'\s*(\w+)\s*=\s*rets\.shift\(\)\s*[,;]', line)
            if ms:
                pending_vars.append(ms.group(1))
                if stripped.endswith(';'):
                    indent = '        '
                    out.append(f'{indent}const [{", ".join(pending_vars)}] = {pending_call};')
                    if pending_tol:
                        out.append(f'{indent}const TOL = {pending_tol};')
                    collecting_comma_shifts = False
                    pending_call = None
                    pending_vars = []
                    pending_tol = None
                i += 1
                continue
            # TOL = value, or TOL = value;
            mt = re.match(r'\s*TOL\s*=\s*([\d.e+\-]+)\s*[,;]', line)
            if mt:
                pending_tol = mt.group(1)
                if stripped.endswith(';'):
                    indent = '        '
                    out.append(f'{indent}const [{", ".join(pending_vars)}] = {pending_call};')
                    if pending_tol:
                        out.append(f'{indent}const TOL = {pending_tol};')
                    collecting_comma_shifts = False
                    pending_call = None
                    pending_vars = []
                    pending_tol = None
                i += 1
                continue
            # Unexpected line — flush and fall through
            indent = '        '
            out.append(f'{indent}const [{", ".join(pending_vars)}] = {pending_call};')
            if pending_tol:
                out.append(f'{indent}const TOL = {pending_tol};')
            collecting_comma_shifts = False
            pending_call = None
            pending_vars = []
            pending_tol = None

        # Detect start of: var rets = twoline2rv(
        if not in_twoline2rv_call and re.match(r'\s*var\s+rets\s*=\s*twoline2rv\s*\(', line):
            in_twoline2rv_call = True
            twoline2rv_call_lines = [line.rstrip()]
            twoline2rv_paren_depth = line.count('(') - line.count(')')
            i += 1
            continue

        if in_twoline2rv_call:
            twoline2rv_call_lines.append(line.rstrip())
            twoline2rv_paren_depth += line.count('(') - line.count(')')
            if twoline2rv_paren_depth == 0 and stripped.endswith(';'):
                call_text = ' '.join(l.strip() for l in twoline2rv_call_lines)
                m = re.search(r'twoline2rv\(', call_text)
                if m:
                    paren_start = m.end() - 1
                    paren_end = find_matching_paren(call_text, paren_start)
                    pending_call = call_text[m.start():paren_end + 1]
                pending_vars = []
                pending_tol = None
                collecting_comma_shifts = True
                in_twoline2rv_call = False
                twoline2rv_call_lines = []
            i += 1
            continue

        result = transform_line(line)
        if result is None:
            i += 1
            continue
        out.append(result)
        i += 1

    # Flush any remaining shift collection
    if collecting_comma_shifts and pending_vars and pending_call:
        indent = '        '
        out.append(f'{indent}const [{", ".join(pending_vars)}] = {pending_call};')
        if pending_tol:
            out.append(f'{indent}const TOL = {pending_tol};')

    out.append('});')
    Path(dst_path).write_text('\n'.join(out) + '\n')
    print(f"Written: {dst_path}")


if __name__ == '__main__':
    base = Path('/Users/josh/src/p/isat')
    js = base / 'js'
    tests = base / 'tests'

    transform_mag(js / 'mag_test.js', tests / 'mag.spec.js')
    transform_newtonnu(js / 'newtonnu_test.js', tests / 'newtonnu.spec.js')
    transform_rv2coe(js / 'rv2coe_test.js', tests / 'rv2coe.spec.js')

    transform_dpper(js / 'dpper_test.js', tests / 'dpper.spec.js')

    transform_inline_shifts(
        js / 'dscom_test.js', tests / 'dscom.spec.js',
        fn_name='dscom',
        header_lines=[
            'import { describe, it, expect } from "vitest";',
            'import { isequalRel } from "./helpers.js";',
            'import { dscom } from "../js/dscom.js";',
            '',
            'describe("dscom", () => {',
        ],
    )

    transform_inline_shifts(
        js / 'dsinit_test.js', tests / 'dsinit.spec.js',
        fn_name='dsinit',
        header_lines=[
            'import { describe, it, expect } from "vitest";',
            'import { isequalRel } from "./helpers.js";',
            'import { getgravc } from "../js/getgravc.js";',
            'import { dsinit } from "../js/dsinit.js";',
            '',
            'describe("dsinit", () => {',
        ],
        module_getgravc_vars=['tumin', 'mu', 'radiusearthkm', 'xke', 'j2', 'j3', 'j4', 'j3oj2'],
        inject_extra_args=', xke',
    )

    transform_inline_shifts(
        js / 'dspace_test.js', tests / 'dspace.spec.js',
        fn_name='dspace',
        header_lines=[
            'import { describe, it, expect } from "vitest";',
            'import { isequalRel } from "./helpers.js";',
            'import { dspace } from "../js/dspace.js";',
            '',
            'describe("dspace", () => {',
        ],
    )

    transform_inline_shifts(
        js / 'initl_test.js', tests / 'initl.spec.js',
        fn_name='initl',
        header_lines=[
            'import { describe, it, expect } from "vitest";',
            'import { isequalRel } from "./helpers.js";',
            'import { getgravc } from "../js/getgravc.js";',
            'import { initl } from "../js/initl.js";',
            '',
            'describe("initl", () => {',
        ],
        module_getgravc_vars=['tumin', 'mu', 'radiusearthkm', 'xke', 'j2', 'j3', 'j4', 'j3oj2'],
        inject_extra_args=', xke, j2, opsmode',
    )

    transform_sgp4init(js / 'sgp4init_test.js', tests / 'sgp4init.spec.js')
    transform_twoline2rv(js / 'twoline2rv_test.js', tests / 'twoline2rv.spec.js')
