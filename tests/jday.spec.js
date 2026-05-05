import { describe, it, expect } from "vitest";
import { jday } from "../js/jday.js";
import { isequalRel } from "./helpers.js";

describe("jday", () => {
    it("sample dates", () => {
        expect(jday(2012, 2, 8, 0, 0, 0)).not.toBe(42); // bogus check
        expect(jday(2012, 2, 8, 0, 0, 0)).toBe(2455965.5); // aa.usno.navy.mil
        expect(jday(2000, 1, 1, 1, 0, 0)).toBe(2451544.541666666511); // matlab
        expect(jday(2012, 2, 8, 12, 9, 55)).toBe(2455966.006886573974); // matlab
        expect(jday(2100, 12, 31, 23, 5, 59)).toBe(2488435.462488425896); // matlab
    });

    it("dates from testmat.m run", () => {
        const TOL = 0.000001;
        expect(isequalRel(jday(2000, 6, 27, 18, 50, 19.733567999083), 2451723.284950620029, TOL)).toBe(true); // 5
        expect(isequalRel(jday(2004, 1, 31, 21, 51, 25.308575999977), 2453036.410709590185, TOL)).toBe(true); // 4632
        expect(isequalRel(jday(2006, 6, 25, 19, 46, 43.980095999214), 2453912.324120140169, TOL)).toBe(true); // 6251
        expect(isequalRel(jday(2006, 6, 25, 7, 58, 18.143616000925), 2453911.832154440228, TOL)).toBe(true); // 8195
        expect(isequalRel(jday(2006, 6, 25, 13, 28, 40.058400000471), 2453912.061574750114, TOL)).toBe(true); // 9880
        expect(isequalRel(jday(2005, 5, 28, 19, 3, 37.089792000752), 2453519.294179279823, TOL)).toBe(true); // 9998
        expect(isequalRel(jday(1980, 8, 17, 7, 6, 40.136831999771), 2444468.796297879890, TOL)).toBe(true); // 11801
        expect(isequalRel(jday(2006, 6, 25, 0, 40, 57.987551999668), 2453911.528448930010, TOL)).toBe(true); // 14128
        expect(isequalRel(jday(2006, 5, 31, 16, 10, 47.226144000251), 2453887.174157709815, TOL)).toBe(true); // 16925
        expect(isequalRel(jday(2005, 12, 29, 19, 0, 0.000287998591), 2453734.291666669771, TOL)).toBe(true); // 20413
        expect(isequalRel(jday(2006, 6, 25, 0, 33, 42.834815998885), 2453911.523412439972, TOL)).toBe(true); // 21897
        expect(isequalRel(jday(2006, 4, 4, 11, 5, 47.827968000183), 2453829.962359120138, TOL)).toBe(true); // 22312
        expect(isequalRel(jday(2006, 6, 25, 13, 25, 5.468447999465), 2453912.059091070201, TOL)).toBe(true); // 22674
        expect(isequalRel(jday(2006, 6, 24, 10, 58, 49.772928000239), 2453910.957520519849, TOL)).toBe(true); // 23177
        expect(isequalRel(jday(1994, 11, 1, 11, 59, 59.999135999315), 2449657.999999990221, TOL)).toBe(true); // 23333
        expect(isequalRel(jday(2006, 6, 20, 18, 22, 6.640031999159), 2453907.265354630072, TOL)).toBe(true); // 23599
        expect(isequalRel(jday(2006, 6, 26, 0, 58, 29.343360000184), 2453912.540617399849, TOL)).toBe(true); // 24208
        expect(isequalRel(jday(2004, 2, 8, 16, 20, 1.494239999761), 2453044.180572850164, TOL)).toBe(true); // 25954
        expect(isequalRel(jday(2006, 4, 16, 17, 52, 50.805407999842), 2453842.245032470208, TOL)).toBe(true); // 26900
        expect(isequalRel(jday(2006, 6, 23, 20, 35, 47.504544000640), 2453910.358188710175, TOL)).toBe(true); // 26975
        expect(isequalRel(jday(2006, 6, 26, 18, 52, 4.079712000548), 2453913.286158329807, TOL)).toBe(true); // 28057
        expect(isequalRel(jday(2006, 6, 24, 13, 41, 49.461503999137), 2453911.070711359847, TOL)).toBe(true); // 28129
        expect(isequalRel(jday(2006, 6, 16, 5, 13, 45.407424000423), 2453902.717886659782, TOL)).toBe(true); // 28350
        expect(isequalRel(jday(2006, 6, 26, 19, 27, 32.414976000637), 2453913.310791839845, TOL)).toBe(true); // 28623
        expect(isequalRel(jday(2006, 6, 25, 11, 12, 14.455008000896), 2453911.966833970044, TOL)).toBe(true); // 28626
        expect(isequalRel(jday(2005, 11, 29, 0, 28, 58.939103998018), 2453703.520126610063, TOL)).toBe(true); // 28872
        expect(isequalRel(jday(2006, 6, 19, 6, 25, 41.242079999938), 2453905.767838450149, TOL)).toBe(true); // 29141
        expect(isequalRel(jday(2006, 6, 26, 6, 53, 44.456639998971), 2453912.787320099771, TOL)).toBe(true); // 29238
        expect(isequalRel(jday(1980, 10, 1, 23, 41, 24.113759998763), 2444514.487084649969, TOL)).toBe(true); // 88888
    });
});
