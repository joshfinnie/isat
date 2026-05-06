import { describe, it, expect } from "vitest";
import { angl } from "../js/angl.js";

describe("angl", () => {
    it("angl samples", () => {
        const TOLERANCE = 1e-15;
        expect(angl([0, 0, 1], [0, 0, 1])).toBe(0); // same vectors
        expect(Math.abs(angl([0, 0, 1], [0, 1, 1]) - 7.85398163397448e-1)).toBeLessThan(TOLERANCE);
        expect(Math.abs(angl([0, 0, 1], [1, 1, 1]) - 9.55316618124509e-1)).toBeLessThan(TOLERANCE);
        expect(Math.abs(angl([1, 2, 3], [4, 5, 6]) - 2.25726128552734e-1)).toBeLessThan(TOLERANCE);
    });
});
