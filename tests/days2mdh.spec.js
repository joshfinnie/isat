import { describe, it, expect } from "vitest";
import { days2mdh } from "../js/days2mdh.js";
import { isequalRel } from "./helpers.js";

const TOL = 0.00000001;

describe("days2mdh", () => {
    it("julian date 2001, 1", () => {
        const [mon, day, hr, minute] = days2mdh(2000, 1);
        expect(mon).toBe(1);
        expect(day).toBe(1);
        expect(hr).toBe(0);
        expect(minute).toBe(0);
    });

    it("julian date 2012, 39", () => {
        const [mon, day, hr, minute] = days2mdh(2012, 39);
        expect(mon).toBe(2);
        expect(day).toBe(8);
        expect(hr).toBe(0);
        expect(minute).toBe(0);
    });

    it("julian date 2012, 39.015625", () => {
        const [mon, day, hr, minute] = days2mdh(2012, 39.015625);
        expect(mon).toBe(2);
        expect(day).toBe(8);
        expect(hr).toBe(0);
        expect(minute).toBe(22);
    });

    it("julian date 2100, 365", () => {
        const [mon, day] = days2mdh(2100, 365);
        expect(mon).toBe(12);
        expect(day).toBe(30);
    });

    it("2000, 179.784950620000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2000, 179.784950620000);
        expect(mon).toBe(6); expect(day).toBe(27); expect(hr).toBe(18); expect(minute).toBe(50);
        expect(isequalRel(sec, 19.733567999083, TOL)).toBe(true);
    });

    it("2004, 31.910709590000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2004, 31.910709590000);
        expect(mon).toBe(1); expect(day).toBe(31); expect(hr).toBe(21); expect(minute).toBe(51);
        expect(isequalRel(sec, 25.308575999977, TOL)).toBe(true);
    });

    it("2006, 176.824120140000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 176.824120140000);
        expect(mon).toBe(6); expect(day).toBe(25); expect(hr).toBe(19); expect(minute).toBe(46);
        expect(isequalRel(sec, 43.980095999214, TOL)).toBe(true);
    });

    it("2006, 176.332154440000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 176.332154440000);
        expect(mon).toBe(6); expect(day).toBe(25); expect(hr).toBe(7); expect(minute).toBe(58);
        expect(isequalRel(sec, 18.143616000925, TOL)).toBe(true);
    });

    it("2006, 176.561574750000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 176.561574750000);
        expect(mon).toBe(6); expect(day).toBe(25); expect(hr).toBe(13); expect(minute).toBe(28);
        expect(isequalRel(sec, 40.058400000471, TOL)).toBe(true);
    });

    it("2005, 148.794179280000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2005, 148.794179280000);
        expect(mon).toBe(5); expect(day).toBe(28); expect(hr).toBe(19); expect(minute).toBe(3);
        expect(isequalRel(sec, 37.089792000752, TOL)).toBe(true);
    });

    it("1980, 230.296297880000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(1980, 230.296297880000);
        expect(mon).toBe(8); expect(day).toBe(17); expect(hr).toBe(7); expect(minute).toBe(6);
        expect(isequalRel(sec, 40.136831999771, TOL)).toBe(true);
    });

    it("2006, 176.028448930000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 176.028448930000);
        expect(mon).toBe(6); expect(day).toBe(25); expect(hr).toBe(0); expect(minute).toBe(40);
        expect(isequalRel(sec, 57.987551999668, TOL)).toBe(true);
    });

    it("2006, 151.674157710000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 151.674157710000);
        expect(mon).toBe(5); expect(day).toBe(31); expect(hr).toBe(16); expect(minute).toBe(10);
        expect(isequalRel(sec, 47.226144000251, TOL)).toBe(true);
    });

    it("2005, 363.791666670000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2005, 363.791666670000);
        expect(mon).toBe(12); expect(day).toBe(29); expect(hr).toBe(19); expect(minute).toBe(0);
        expect(isequalRel(sec, 0.000287998591, TOL)).toBe(true);
    });

    it("2006, 176.023412440000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 176.023412440000);
        expect(mon).toBe(6); expect(day).toBe(25); expect(hr).toBe(0); expect(minute).toBe(33);
        expect(isequalRel(sec, 42.834815998885, TOL)).toBe(true);
    });

    it("2006, 94.462359120000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 94.462359120000);
        expect(mon).toBe(4); expect(day).toBe(4); expect(hr).toBe(11); expect(minute).toBe(5);
        expect(isequalRel(sec, 47.827968000183, TOL)).toBe(true);
    });

    it("2006, 176.559091070000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 176.559091070000);
        expect(mon).toBe(6); expect(day).toBe(25); expect(hr).toBe(13); expect(minute).toBe(25);
        expect(isequalRel(sec, 5.468447999465, TOL)).toBe(true);
    });

    it("2006, 175.457520520000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 175.457520520000);
        expect(mon).toBe(6); expect(day).toBe(24); expect(hr).toBe(10); expect(minute).toBe(58);
        expect(isequalRel(sec, 49.772928000239, TOL)).toBe(true);
    });

    it("1994, 305.499999990000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(1994, 305.499999990000);
        expect(mon).toBe(11); expect(day).toBe(1); expect(hr).toBe(11); expect(minute).toBe(59);
        expect(isequalRel(sec, 59.999135999315, TOL)).toBe(true);
    });

    it("2006, 171.765354630000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 171.765354630000);
        expect(mon).toBe(6); expect(day).toBe(20); expect(hr).toBe(18); expect(minute).toBe(22);
        expect(isequalRel(sec, 6.640031999159, TOL)).toBe(true);
    });

    it("2006, 177.040617400000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 177.040617400000);
        expect(mon).toBe(6); expect(day).toBe(26); expect(hr).toBe(0); expect(minute).toBe(58);
        expect(isequalRel(sec, 29.343360000184, TOL)).toBe(true);
    });

    it("2004, 39.680572850000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2004, 39.680572850000);
        expect(mon).toBe(2); expect(day).toBe(8); expect(hr).toBe(16); expect(minute).toBe(20);
        expect(isequalRel(sec, 1.494239999761, TOL)).toBe(true);
    });

    it("2006, 106.745032470000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 106.745032470000);
        expect(mon).toBe(4); expect(day).toBe(16); expect(hr).toBe(17); expect(minute).toBe(52);
        expect(isequalRel(sec, 50.805407999842, TOL)).toBe(true);
    });

    it("2006, 174.858188710000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 174.858188710000);
        expect(mon).toBe(6); expect(day).toBe(23); expect(hr).toBe(20); expect(minute).toBe(35);
        expect(isequalRel(sec, 47.504544000640, TOL)).toBe(true);
    });

    it("2006, 177.786158330000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 177.786158330000);
        expect(mon).toBe(6); expect(day).toBe(26); expect(hr).toBe(18); expect(minute).toBe(52);
        expect(isequalRel(sec, 4.079712000548, TOL)).toBe(true);
    });

    it("2006, 175.570711360000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 175.570711360000);
        expect(mon).toBe(6); expect(day).toBe(24); expect(hr).toBe(13); expect(minute).toBe(41);
        expect(isequalRel(sec, 49.461503999137, TOL)).toBe(true);
    });

    it("2006, 167.217886660000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 167.217886660000);
        expect(mon).toBe(6); expect(day).toBe(16); expect(hr).toBe(5); expect(minute).toBe(13);
        expect(isequalRel(sec, 45.407424000423, TOL)).toBe(true);
    });

    it("2006, 177.810791840000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 177.810791840000);
        expect(mon).toBe(6); expect(day).toBe(26); expect(hr).toBe(19); expect(minute).toBe(27);
        expect(isequalRel(sec, 32.414976000637, TOL)).toBe(true);
    });

    it("2006, 176.466833970000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 176.466833970000);
        expect(mon).toBe(6); expect(day).toBe(25); expect(hr).toBe(11); expect(minute).toBe(12);
        expect(isequalRel(sec, 14.455008000896, TOL)).toBe(true);
    });

    it("2005, 333.020126610000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2005, 333.020126610000);
        expect(mon).toBe(11); expect(day).toBe(29); expect(hr).toBe(0); expect(minute).toBe(28);
        expect(isequalRel(sec, 58.939103998018, TOL)).toBe(true);
    });

    it("2006, 170.267838450000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 170.267838450000);
        expect(mon).toBe(6); expect(day).toBe(19); expect(hr).toBe(6); expect(minute).toBe(25);
        expect(isequalRel(sec, 41.242079999938, TOL)).toBe(true);
    });

    it("2006, 177.287320100000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(2006, 177.287320100000);
        expect(mon).toBe(6); expect(day).toBe(26); expect(hr).toBe(6); expect(minute).toBe(53);
        expect(isequalRel(sec, 44.456639998971, TOL)).toBe(true);
    });

    it("1980, 275.987084650000", () => {
        const [mon, day, hr, minute, sec] = days2mdh(1980, 275.987084650000);
        expect(mon).toBe(10); expect(day).toBe(1); expect(hr).toBe(23); expect(minute).toBe(41);
        expect(isequalRel(sec, 24.113759998763, TOL)).toBe(true);
    });
});
