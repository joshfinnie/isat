import chai from 'chai';

const expect = chai.expect;

import angl from '../js/angl';

describe('angl', () => {
    const TOLERANCE = 1e-15;

    it('should be the same vector', () => {
        expect(angl([0, 0, 1], [0, 0, 1])).to.equal(0.00000000000000e+00);
    });

    it('should be under tolerance for two dimensions', () => {
        expect(Math.abs(angl([0, 0, 1], [0, 1, 1]) - 7.85398163397448e-01)).to.be.below(TOLERANCE);
    });

    it('should be under tolerance for three dimensions', () => {
        expect(Math.abs(angl([0, 0, 1], [1, 1, 1]) - 9.55316618124509e-01)).to.be.below(TOLERANCE);
    });

    it('should be under tolerance for different sizes', () => {
        expect(Math.abs(angl([1, 2, 3], [4, 5, 6]) - 2.25726128552734e-01)).to.be.below(TOLERANCE);
    });
});
