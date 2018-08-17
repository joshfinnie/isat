import chai from 'chai';

const expect = chai.expect;

import {
    UNDEFINED,
    ft2m,
    halfpi,
    infinite,
    mile2ft,
    mile2m,
    mileph2kmph,
    nm2m,
    nmph2kmph,
    rad,
    small,
    twopi,
} from '../js/constmath';

describe('constmath', () => {
    it('should equal, small and infinite', () => {
        expect(small).to.be.equal(0.00000001);
        expect(infinite).to.be.equal(999999.9);
        expect(UNDEFINED).to.be.equal(999999.1);
    });

    it('should equal, mathematical', () => {
        expect(rad).to.be.equal(180.0 / Math.PI);
        expect(twopi).to.be.equal(2.0 * Math.PI);
        expect(halfpi).to.be.equal(Math.PI * 0.5);
    });

    it('should equal, conversions', () => {
        expect(ft2m).to.be.equal(0.3048);
        expect(mile2m).to.be.equal(1609.344);
        expect(nm2m).to.be.equal(1852);
        expect(mile2ft).to.be.equal(5280);
        expect(mileph2kmph).to.be.equal(0.44704);
        expect(nmph2kmph).to.be.equal(0.5144444);
    });
});
