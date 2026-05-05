/**
 * Relative floating-point equality check, ported from js/test_utils.js.
 * Returns true if x and y agree within `tol` relative tolerance.
 */
export function isequalRel(x, y, tol) {
    var EPS = Math.pow(2, -52); // IEEE 754 double precision epsilon
    return Math.abs(x - y) <= tol * Math.max(Math.abs(x), Math.abs(y)) + EPS;
}
