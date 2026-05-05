import { describe, it, expect } from "vitest";
import { getgravc } from "../js/getgravc.js";
import { isequalRel } from "./helpers.js";

const TOL = 0.000001;

function parseGravc(whichconst) {
    const [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(whichconst);
    return { tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2 };
}

describe("getgravc", () => {
    it("WGS-72 low precision (721)", () => {
        const r = parseGravc(721);
        expect(isequalRel(r.tumin,         13.446839702958, TOL)).toBe(true);
        expect(isequalRel(r.mu,            398600.799639999983, TOL)).toBe(true);
        expect(isequalRel(r.radiusearthkm, 6378.135, TOL)).toBe(true);
        expect(isequalRel(r.xke,           0.074366916100, TOL)).toBe(true);
        expect(isequalRel(r.j2,            0.001082616, TOL)).toBe(true);
        expect(isequalRel(r.j3,            -0.000002538810, TOL)).toBe(true);
        expect(isequalRel(r.j4,            -0.000001655970, TOL)).toBe(true);
        expect(isequalRel(r.j3oj2,         -0.002345069720, TOL)).toBe(true);
    });

    it("WGS-72 (72)", () => {
        const r = parseGravc(72);
        expect(isequalRel(r.tumin,         13.446839696959, TOL)).toBe(true);
        expect(isequalRel(r.mu,            398600.799999999988, TOL)).toBe(true);
        expect(isequalRel(r.radiusearthkm, 6378.135, TOL)).toBe(true);
        expect(isequalRel(r.xke,           0.074366916133, TOL)).toBe(true);
        expect(isequalRel(r.j2,            0.001082616, TOL)).toBe(true);
        expect(isequalRel(r.j3,            -0.000002538810, TOL)).toBe(true);
        expect(isequalRel(r.j4,            -0.000001655970, TOL)).toBe(true);
        expect(isequalRel(r.j3oj2,         -0.002345069720, TOL)).toBe(true);
    });

    it("WGS-84 (84)", () => {
        const r = parseGravc(84);
        expect(isequalRel(r.tumin,         13.446851082045, TOL)).toBe(true);
        expect(isequalRel(r.mu,            398600.5, TOL)).toBe(true);
        expect(isequalRel(r.radiusearthkm, 6378.137, TOL)).toBe(true);
        expect(isequalRel(r.xke,           0.074366853169, TOL)).toBe(true);
        expect(isequalRel(r.j2,            0.00108262998905, TOL)).toBe(true);
        expect(isequalRel(r.j3,            -0.00000253215306, TOL)).toBe(true);
        expect(isequalRel(r.j4,            -0.00000161098761, TOL)).toBe(true);
        expect(isequalRel(r.j3oj2,         -0.002338890559, TOL)).toBe(true);
    });

    it("throws on unknown gravity constant", () => {
        expect(() => getgravc(999)).toThrow("unknown gravity option");
    });
});
