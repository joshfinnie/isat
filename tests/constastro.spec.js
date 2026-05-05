import { describe, it, expect } from "vitest";
import { nm2m, ft2m } from "../js/constmath.js";
import {
    re,
    flat,
    omegaearth,
    mu,
    mum,
    eccearth,
    eccearthsqrd,
    renm,
    reft,
    tusec,
    tumin,
    tuday,
    omegaearthradptu,
    omegaearthradpmin,
    velkmps,
    velftps,
    velradpmin,
    degpsec,
    radpday,
    speedoflight,
    au,
    earth2moon,
    moonradius,
    sunradius,
    masssun,
    massearth,
    massmoon,
} from "../js/constastro.js";

describe("constastro", () => {
    it("WGS-84/EGM-96 base constants", () => {
        expect(re).toBe(6378.137);
        expect(flat).toBe(1.0 / 298.257223563);
        expect(omegaearth).toBe(7.292115e-11);
        expect(mu).toBe(398600.4418);
        expect(mum).toBe(3.986004418e14);
    });

    it("derived values", () => {
        expect(eccearth).toBe(Math.sqrt(2.0 * flat - flat * flat));
        expect(eccearthsqrd).toBe(eccearth * eccearth);

        expect(renm).toBe(re / nm2m);
        expect(reft).toBe((re * 1000.0) / ft2m);

        expect(tusec).toBe(Math.sqrt(Math.pow(re, 3) / mu));
        expect(tumin).toBe(tusec / 60.0);
        expect(tuday).toBe(tusec / 86400.0);

        expect(omegaearthradptu).toBe(omegaearth * tusec);
        expect(omegaearthradpmin).toBe(omegaearth * 60.0);

        expect(velkmps).toBe(Math.sqrt(mu / re));
        expect(velftps).toBe((velkmps * 1000.0) / ft2m);
        expect(velradpmin).toBe((velkmps * 60.0) / re);

        expect(degpsec).toBe(180.0 / Math.PI / tusec);
        expect(radpday).toBe(2.0 * Math.PI * 1.002737909350795);

        expect(speedoflight).toBe(2.99792458e8);
        expect(au).toBe(149597870.0);
        expect(earth2moon).toBe(384400.0);
        expect(moonradius).toBe(1738.0);
        expect(sunradius).toBe(696000.0);

        expect(masssun).toBe(1.9891e30);
        expect(massearth).toBe(5.9742e24);
        expect(massmoon).toBe(7.3483e22);
    });
});
