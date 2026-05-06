import { describe, it, expect } from "vitest";
import {
    small,
    infinite,
    UNDEFINED,
    rad,
    twopi,
    halfpi,
    ft2m,
    mile2m,
    nm2m,
    mile2ft,
    mileph2kmph,
    nmph2kmph,
} from "../js/constmath.js";

describe("constmath", () => {
    it("small and infinite", () => {
        expect(small).toBe(0.00000001);
        expect(infinite).toBe(999999.9);
        expect(UNDEFINED).toBe(999999.1);
    });

    it("mathematical constants", () => {
        expect(rad).toBe(180.0 / Math.PI);
        expect(twopi).toBe(2.0 * Math.PI);
        expect(halfpi).toBe(Math.PI * 0.5);
    });

    it("unit conversions", () => {
        expect(ft2m).toBe(0.3048);
        expect(mile2m).toBe(1609.344);
        expect(nm2m).toBe(1852);
        expect(mile2ft).toBe(5280);
        expect(mileph2kmph).toBe(0.44704);
        expect(nmph2kmph).toBe(0.5144444);
    });
});
