import { describe, it, expect } from "vitest";
import { invjday } from "../js/invjday.js";
import { isequalRel } from "./helpers.js";

const TOL = 0.000001;

describe("invjday", () => {
    it("2456026.500000000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456026.5);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(0);
        expect(min).toBe(0);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456026.552083333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456026.552083333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(1);
        expect(min).toBe(15);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456026.604166666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456026.604166666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(2);
        expect(min).toBe(29);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456026.656250000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456026.65625);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(3);
        expect(min).toBe(45);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456026.708333333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456026.708333333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(5);
        expect(min).toBe(0);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456026.760416666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456026.760416666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(6);
        expect(min).toBe(14);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456026.812500000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456026.8125);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(7);
        expect(min).toBe(30);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456026.864583333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456026.864583333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(8);
        expect(min).toBe(45);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456026.916666666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456026.916666666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(9);
        expect(min).toBe(59);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456026.968750000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456026.96875);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(11);
        expect(min).toBe(15);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456027.020833333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.020833333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(12);
        expect(min).toBe(30);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456027.072916666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.072916666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(13);
        expect(min).toBe(44);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456027.125000000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.125);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(15);
        expect(min).toBe(0);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456027.177083333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.177083333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(16);
        expect(min).toBe(15);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456027.229166666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.229166666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(17);
        expect(min).toBe(29);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456027.281250000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.28125);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(18);
        expect(min).toBe(45);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456027.333333333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.333333333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(20);
        expect(min).toBe(0);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456027.385416666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.385416666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(21);
        expect(min).toBe(14);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456027.437500000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.4375);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(22);
        expect(min).toBe(30);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456027.489583333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.489583333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(9);
        expect(hr).toBe(23);
        expect(min).toBe(45);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456027.541666666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.541666666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(0);
        expect(min).toBe(59);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456027.593750000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.59375);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(2);
        expect(min).toBe(15);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456027.645833333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.645833333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(3);
        expect(min).toBe(30);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456027.697916666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.697916666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(4);
        expect(min).toBe(44);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456027.750000000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.75);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(6);
        expect(min).toBe(0);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456027.802083333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.802083333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(7);
        expect(min).toBe(15);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456027.854166666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.854166666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(8);
        expect(min).toBe(29);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456027.906250000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.90625);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(9);
        expect(min).toBe(45);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456027.958333333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456027.958333333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(11);
        expect(min).toBe(0);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456028.010416666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456028.010416666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(12);
        expect(min).toBe(14);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456028.062500000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456028.0625);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(13);
        expect(min).toBe(30);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456028.114583333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456028.114583333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(14);
        expect(min).toBe(45);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456028.166666666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456028.166666666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(15);
        expect(min).toBe(59);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456028.218750000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456028.21875);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(17);
        expect(min).toBe(15);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456028.270833333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456028.270833333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(18);
        expect(min).toBe(30);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456028.322916666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456028.322916666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(19);
        expect(min).toBe(44);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456028.375000000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456028.375);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(21);
        expect(min).toBe(0);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });

    it("2456028.427083333489", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456028.427083333489);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(22);
        expect(min).toBe(15);
        expect(isequalRel(sec, 0.000013411045, TOL)).toBe(true);
    });

    it("2456028.479166666511", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456028.479166666511);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(10);
        expect(hr).toBe(23);
        expect(min).toBe(29);
        expect(isequalRel(sec, 59.999986588955, TOL)).toBe(true);
    });

    it("2456028.500000000000", () => {
        const [year, mon, day, hr, min, sec] = invjday(2456028.5);
        expect(year).toBe(2012);
        expect(mon).toBe(4);
        expect(day).toBe(11);
        expect(hr).toBe(0);
        expect(min).toBe(0);
        expect(isequalRel(sec, 0.0, TOL)).toBe(true);
    });
});
