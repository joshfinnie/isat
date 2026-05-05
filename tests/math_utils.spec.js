import { describe, it, expect } from "vitest";
import { sign, cross, dot } from "../js/math_utils.js";

describe("math_utils", () => {
    describe("sign", () => {
        it("returns -1 for negative values", () => {
            expect(sign(-123.45)).toBe(-1);
            expect(sign(-1)).toBe(-1);
        });
        it("returns 0 for zero", () => {
            expect(sign(0)).toBe(0);
        });
        it("returns +1 for positive values", () => {
            expect(sign(+1)).toBe(+1);
            expect(sign(+123.45)).toBe(+1);
        });
    });

    describe("cross", () => {
        it("computes 3D cross products", () => {
            expect(cross([1, 2, 3], [4, 5, 6])).toEqual([-3, 6, -3]);
            expect(cross([1, 1, 1], [4, 5, 6])).toEqual([1, -2, 1]);
            expect(cross([0, 0, 0], [4, 5, 6])).toEqual([0, 0, 0]);
        });
    });

    describe("dot", () => {
        it("computes dot products", () => {
            expect(dot([1, 2, 3], [4, 5, 6])).toBe(32);
            expect(dot([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toBe(130);
        });
    });
});
