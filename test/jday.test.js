import chai from "chai";
import chaiAlmost from "chai-almost";

chai.use(chaiAlmost(0.000001));
const expect = chai.expect;

import jday from "../js/jday";

describe("jday", () => {
    it("should work with sample dates", () => {
        expect(jday(2012, 2, 8, 0, 0, 0)).not.to.be.equal(42); // bogus
        expect(jday(2012, 2, 8, 0, 0, 0)).to.be.equal(2455965.5); // aa.usno.navy.mil
        expect(jday(2000, 1, 1, 1, 0, 0)).to.be.equal(2451544.541666666511); // matlab
        expect(jday(2012, 2, 8, 12, 9, 55)).to.be.equal(2455966.006886573974); // matlab
        expect(jday(2100, 12, 31, 23, 5, 59)).to.be.equal(2488435.462488425896); // matlab
    });

    it("should work with dates from testmat.m run", () => {
        expect(jday(2000, 6, 27, 18, 50, 19.733567999083)).to.almost.equal(2451723.284950620029);
        expect(jday(2004, 1, 31, 21, 51, 25.308575999977)).to.almost.equal(2453036.410709590185);
        expect(jday(2006, 6, 25, 19, 46, 43.980095999214)).to.almost.equal(2453912.324120140169);
        expect(jday(2006, 6, 25, 7, 58, 18.143616000925)).to.almost.equal(2453911.832154440228);
        expect(jday(2006, 6, 25, 13, 28, 40.058400000471)).to.almost.equal(2453912.061574750114);
        expect(jday(2005, 5, 28, 19, 3, 37.089792000752)).to.almost.equal(2453519.294179279823);
        expect(jday(1980, 8, 17, 7, 6, 40.136831999771)).to.almost.equal(2444468.79629787989);
        expect(jday(2006, 6, 25, 0, 40, 57.987551999668)).to.almost.equal(2453911.52844893001);
        expect(jday(2006, 5, 31, 16, 10, 47.226144000251)).to.almost.equal(2453887.174157709815);
        expect(jday(2005, 12, 29, 19, 0, 0.000287998591)).to.almost.equal(2453734.291666669771);
        expect(jday(2006, 6, 25, 0, 33, 42.834815998885)).to.almost.equal(2453911.523412439972);
        expect(jday(2006, 4, 4, 11, 5, 47.827968000183)).to.almost.equal(2453829.962359120138);
        expect(jday(2006, 6, 25, 13, 25, 5.468447999465)).to.almost.equal(2453912.059091070201);
        expect(jday(2006, 6, 24, 10, 58, 49.772928000239)).to.almost.equal(2453910.957520519849);
        expect(jday(1994, 11, 1, 11, 59, 59.999135999315)).to.almost.equal(2449657.999999990221);
        expect(jday(2006, 6, 20, 18, 22, 6.640031999159)).to.almost.equal(2453907.265354630072);
        expect(jday(2006, 6, 26, 0, 58, 29.343360000184)).to.almost.equal(2453912.540617399849);
        expect(jday(2004, 2, 8, 16, 20, 1.494239999761)).to.almost.equal(2453044.180572850164);
        expect(jday(2006, 4, 16, 17, 52, 50.805407999842)).to.almost.equal(2453842.245032470208);
        expect(jday(2006, 6, 23, 20, 35, 47.50454400064)).to.almost.equal(2453910.358188710175);
        expect(jday(2006, 6, 26, 18, 52, 4.079712000548)).to.almost.equal(2453913.286158329807);
        expect(jday(2006, 6, 24, 13, 41, 49.461503999137)).to.almost.equal(2453911.070711359847);
        expect(jday(2006, 6, 16, 5, 13, 45.407424000423)).to.almost.equal(2453902.717886659782);
        expect(jday(2006, 6, 26, 19, 27, 32.414976000637)).to.almost.equal(2453913.310791839845);
        expect(jday(2006, 6, 25, 11, 12, 14.455008000896)).to.almost.equal(2453911.966833970044);
        expect(jday(2005, 11, 29, 0, 28, 58.939103998018)).to.almost.equal(2453703.520126610063);
        expect(jday(2006, 6, 19, 6, 25, 41.242079999938)).to.almost.equal(2453905.767838450149);
        expect(jday(2006, 6, 26, 6, 53, 44.456639998971)).to.almost.equal(2453912.787320099771);
        expect(jday(1980, 10, 1, 23, 41, 24.113759998763)).to.almost.equal(2444514.487084649969);
    });
});
