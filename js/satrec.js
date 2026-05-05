class Satrec {
    constructor() {
        // Identification / TLE-derived fields
        this.satnum = 0;
        this.epochyr = 0;
        this.epochdays = 0.0;
        this.jdsatepoch = 0.0;
        this.ndot = 0.0;
        this.nddot = 0.0;
        this.bstar = 0.0;
        this.ecco = 0.0;
        this.inclo = 0.0;
        this.nodeo = 0.0;
        this.argpo = 0.0;
        this.mo = 0.0;
        this.no = 0.0;
        this.a = 0.0;
        this.alta = 0.0;
        this.altp = 0.0;
        this.error = 0;
        this.init = "y";

        // Near-earth secular coefficients
        this.isimp = 0;
        this.method = "n";
        this.aycof = 0.0;
        this.con41 = 0.0;
        this.cc1 = 0.0;
        this.cc4 = 0.0;
        this.cc5 = 0.0;
        this.d2 = 0.0;
        this.d3 = 0.0;
        this.d4 = 0.0;
        this.delmo = 0.0;
        this.eta = 0.0;
        this.argpdot = 0.0;
        this.omgcof = 0.0;
        this.sinmao = 0.0;
        this.t = 0.0;
        this.t2cof = 0.0;
        this.t3cof = 0.0;
        this.t4cof = 0.0;
        this.t5cof = 0.0;
        this.x1mth2 = 0.0;
        this.x7thm1 = 0.0;
        this.mdot = 0.0;
        this.nodedot = 0.0;
        this.xlcof = 0.0;
        this.xmcof = 0.0;
        this.nodecf = 0.0;

        // Deep-space resonance flag and secular rates
        this.irez = 0;
        this.d2201 = 0.0;
        this.d2211 = 0.0;
        this.d3210 = 0.0;
        this.d3222 = 0.0;
        this.d4410 = 0.0;
        this.d4422 = 0.0;
        this.d5220 = 0.0;
        this.d5232 = 0.0;
        this.d5421 = 0.0;
        this.d5433 = 0.0;
        this.dedt = 0.0;
        this.del1 = 0.0;
        this.del2 = 0.0;
        this.del3 = 0.0;
        this.didt = 0.0;
        this.dmdt = 0.0;
        this.dnodt = 0.0;
        this.domdt = 0.0;

        // Deep-space long-period periodic terms
        this.e3 = 0.0;
        this.ee2 = 0.0;
        this.peo = 0.0;
        this.pgho = 0.0;
        this.pho = 0.0;
        this.pinco = 0.0;
        this.plo = 0.0;
        this.se2 = 0.0;
        this.se3 = 0.0;
        this.sgh2 = 0.0;
        this.sgh3 = 0.0;
        this.sgh4 = 0.0;
        this.sh2 = 0.0;
        this.sh3 = 0.0;
        this.si2 = 0.0;
        this.si3 = 0.0;
        this.sl2 = 0.0;
        this.sl3 = 0.0;
        this.sl4 = 0.0;
        this.xgh2 = 0.0;
        this.xgh3 = 0.0;
        this.xgh4 = 0.0;
        this.xh2 = 0.0;
        this.xh3 = 0.0;
        this.xi2 = 0.0;
        this.xi3 = 0.0;
        this.xl2 = 0.0;
        this.xl3 = 0.0;
        this.xl4 = 0.0;

        // Deep-space resonance state
        this.gsto = 0.0;
        this.xfact = 0.0;
        this.xlamo = 0.0;
        this.zmol = 0.0;
        this.zmos = 0.0;
        this.atime = 0.0;
        this.xli = 0.0;
        this.xni = 0.0;
    }
}

export { Satrec };
