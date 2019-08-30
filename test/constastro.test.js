import chai from "chai";

const expect = chai.expect;

import {
    au,
    degpsec,
    earth2moon,
    eccearth,
    eccearthsqrd,
    flat,
    massearth,
    massmoon,
    masssun,
    moonradius,
    mu,
    mum,
    omegaearth,
    omegaearthradpmin,
    omegaearthradptu,
    radpday,
    re,
    reft,
    renm,
    speedoflight,
    sunradius,
    tuday,
    tumin,
    tusec,
    velftps,
    velkmps,
    velradpmin
} from "../js/constastro";
import {ft2m, nm2m} from "../js/constmath";

describe("constastro", () => {
    it("should give WGS-84/EGM-96 constants", () => {
        expect(re).to.be.equal(6378.137);
        expect(flat).to.be.equal(1.0 / 298.257223563);
        expect(omegaearth).to.be.equal(7.292115e-11);
        expect(mu).to.be.equal(398600.4418);
        expect(mum).to.be.equal(3.986004418e14);
    });

    it("should give derived values", function() {
        expect(eccearth).to.be.equal(Math.sqrt(2.0 * flat - flat * flat));
        expect(eccearthsqrd).to.be.equal(eccearth * eccearth);
        expect(renm).to.be.equal(re / nm2m);
        expect(reft).to.be.equal(re * 1000.0 / ft2m);
        expect(tusec).to.be.equal(Math.sqrt(Math.pow(re, 3) / mu));
        expect(tumin).to.be.equal(tusec / 60.0);
        expect(tuday).to.be.equal(tusec / 86400.0);
        expect(omegaearthradptu).to.be.equal(omegaearth * tusec);
        expect(omegaearthradpmin).to.be.equal(omegaearth * 60.0);
        expect(velkmps).to.be.equal(Math.sqrt(mu / re));
        expect(velftps).to.be.equal(velkmps * 1000.0 / ft2m);
        expect(velradpmin).to.be.equal(velkmps * 60.0 / re);
        expect(degpsec).to.be.equal(180.0 / Math.PI / tusec);
        expect(radpday).to.be.equal(2.0 * Math.PI * 1.002737909350795);
    });

    it("should give other constants", () => {
        expect(speedoflight).to.be.equal(2.99792458e8);
        expect(au).to.be.equal(149597870.0);
        expect(earth2moon).to.be.equal(384400.0);
        expect(moonradius).to.be.equal(1738.0);
        expect(sunradius).to.be.equal(696000.0);
        expect(masssun).to.be.equal(1.9891e30);
        expect(massearth).to.be.equal(5.9742e24);
        expect(massmoon).to.be.equal(7.3483e22);
    });
});
