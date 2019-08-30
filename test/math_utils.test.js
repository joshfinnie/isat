import chai from "chai";

const expect = chai.expect;

import {sign, cross, dot} from "../js/math_utils";

describe("math_utils", () => {
    it("should be good for sign", () => {
        expect(sign(-123.45)).to.be.equal(-1);
        expect(sign(-1)).to.be.equal(-1);
        expect(sign(0)).to.be.equal(0);
        expect(sign(+1)).to.be.equal(+1);
        expect(sign(+123.45)).to.be.equal(+1);
    });

    it("should be good for cross", () => {
        let xyz = cross([1, 2, 3], [4, 5, 6]);
        expect(xyz[0]).to.be.equal(-3);
        expect(xyz[1]).to.be.equal(6);
        expect(xyz[2]).to.be.equal(-3);

        xyz = cross([1, 1, 1], [4, 5, 6]);
        expect(xyz[0]).to.be.equal(1);
        expect(xyz[1]).to.be.equal(-2);
        expect(xyz[2]).to.be.equal(1);

        xyz = cross([0, 0, 0], [4, 5, 6]);
        expect(xyz[0]).to.be.equal(0);
        expect(xyz[1]).to.be.equal(0);
        expect(xyz[2]).to.be.equal(0);
    });

    it("should be good for dot", () => {
        expect(dot([1, 2, 3], [4, 5, 6])).to.be.equal(32);
        expect(dot([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).to.be.equal(130);
    });
});
