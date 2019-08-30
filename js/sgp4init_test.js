/*global sgp4init: true, getgravc: true,
  module: true, assert: true, test: true, expect: true, ok: true, isequalRel: true, equal: true
*/
// input opsmode afspc a, improved i i
// input type of run c, v, m: v
// input constants 721, 72, 84 72
// input elset filename: SGP4-VER.TLE

var rets = getgravc(72),
    tumin = rets.shift(),
    mu = rets.shift(),
    radiusearthkm = rets.shift(),
    xke = rets.shift(),
    j2 = rets.shift(),
    j3 = rets.shift(),
    j4 = rets.shift(),
    j3oj2 = rets.shift(),
    opsmode = "i";

module("sgp4init");

test("72, satin,  2.809800000000e-05,  1.859667000000e-01,  1.844178495062e+04,  5.790416027489e+00,  5.980929187319e-01,  3.373093125574e-01,  4.722944544078e-02,  6.086385471383e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 5.0,
        epochyr: 0.0,
        epochdays: 1.7978495062e2,
        ndot: 6.96919666595e-13,
        nddot: 0.0,
        bstar: 2.8098e-5,
        inclo: 5.980929187319e-1,
        nodeo: 6.086385471383,
        ecco: 1.859667e-1,
        argpo: 5.790416027489,
        mo: 3.373093125574e-1,
        no: 4.722944544078e-2,
        a: 1.353457482755,
        alta: 6.051555044136e-1,
        altp: 1.01759461097e-1,
        jdsatepoch: 2.451723284951e6
    };
    satrec = sgp4init(
        72,
        satin,
        2.8098e-5,
        1.859667e-1,
        1.844178495062e4,
        5.790416027489,
        5.980929187319e-1,
        3.373093125574e-1,
        4.722944544078e-2,
        6.086385471383
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 5.0, TOL));
    assert(isequalRel(satrec.epochyr, 0.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7978495062e2, TOL));
    assert(isequalRel(satrec.ndot, 6.96919666595e-13, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 2.8098e-5, TOL));
    assert(isequalRel(satrec.inclo, 5.980929187319e-1, TOL));
    assert(isequalRel(satrec.nodeo, 6.086385471383, TOL));
    assert(isequalRel(satrec.ecco, 1.859667e-1, TOL));
    assert(isequalRel(satrec.argpo, 5.790416027489, TOL));
    assert(isequalRel(satrec.mo, 3.373093125574e-1, TOL));
    assert(isequalRel(satrec.no, 4.720630155918e-2, TOL));
    assert(isequalRel(satrec.a, 1.353457482755, TOL));
    assert(isequalRel(satrec.alta, 6.051555044136e-1, TOL));
    assert(isequalRel(satrec.altp, 1.01759461097e-1, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.451723284951e6, TOL));
    assert(isequalRel(satrec.isimp, 0.0, TOL));
    assert(isequalRel(satrec.aycof, 6.602162317959e-4, TOL));
    assert(isequalRel(satrec.con41, 1.048865087996, TOL));
    assert(isequalRel(satrec.cc1, 9.531093269423e-12, TOL));
    assert(isequalRel(satrec.cc4, 5.259360731617e-7, TOL));
    assert(isequalRel(satrec.cc5, 1.646515247679e-5, TOL));
    assert(isequalRel(satrec.d2, 1.439873790292e-21, TOL));
    assert(isequalRel(satrec.d3, 3.217106892468e-31, TOL));
    assert(isequalRel(satrec.d4, 8.358359772163e-41, TOL));
    assert(isequalRel(satrec.delmo, 4.873084659112, TOL));
    assert(isequalRel(satrec.eta, 7.36909542928e-1, TOL));
    assert(isequalRel(satrec.argpdot, 5.429305256054e-5, TOL));
    assert(isequalRel(satrec.omgcof, 6.70131238441e-15, TOL));
    assert(isequalRel(satrec.sinmao, 3.309492298727e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 1.429663990413e-11, TOL));
    assert(isequalRel(satrec.t3cof, 1.621557268113e-21, TOL));
    assert(isequalRel(satrec.t4cof, 2.846182838253e-31, TOL));
    assert(isequalRel(satrec.t5cof, 6.080661397341e-41, TOL));
    assert(isequalRel(satrec.x1mth2, 3.170449706681e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 3.780685205323, TOL));
    assert(isequalRel(satrec.mdot, 4.722944338321e-2, TOL));
    assert(isequalRel(satrec.nodedot, -3.717135384537e-5, TOL));
    assert(isequalRel(satrec.xlcof, 1.289057728039e-3, TOL));
    assert(isequalRel(satrec.xmcof, -1.885936118348e-11, TOL));
    assert(isequalRel(satrec.nodecf, -1.194221173313e-15, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 0.0, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 0.0, TOL));
    assert(isequalRel(satrec.dmdt, 0.0, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 0.0, TOL));
    assert(isequalRel(satrec.e3, 0.0, TOL));
    assert(isequalRel(satrec.ee2, 0.0, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 0.0, TOL));
    assert(isequalRel(satrec.se3, 0.0, TOL));
    assert(isequalRel(satrec.sgh2, 0.0, TOL));
    assert(isequalRel(satrec.sgh3, 0.0, TOL));
    assert(isequalRel(satrec.sgh4, 0.0, TOL));
    assert(isequalRel(satrec.sh2, 0.0, TOL));
    assert(isequalRel(satrec.sh3, 0.0, TOL));
    assert(isequalRel(satrec.si2, 0.0, TOL));
    assert(isequalRel(satrec.si3, 0.0, TOL));
    assert(isequalRel(satrec.sl2, 0.0, TOL));
    assert(isequalRel(satrec.sl3, 0.0, TOL));
    assert(isequalRel(satrec.sl4, 0.0, TOL));
    assert(isequalRel(satrec.gsto, 3.469172342379, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 0.0, TOL));
    assert(isequalRel(satrec.xgh3, 0.0, TOL));
    assert(isequalRel(satrec.xgh4, 0.0, TOL));
    assert(isequalRel(satrec.xh2, 0.0, TOL));
    assert(isequalRel(satrec.xh3, 0.0, TOL));
    assert(isequalRel(satrec.xi2, 0.0, TOL));
    assert(isequalRel(satrec.xi3, 0.0, TOL));
    assert(isequalRel(satrec.xl2, 0.0, TOL));
    assert(isequalRel(satrec.xl3, 0.0, TOL));
    assert(isequalRel(satrec.xl4, 0.0, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 0.0, TOL));
    assert(isequalRel(satrec.zmos, 0.0, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "n");
    equal(satrec.init, "n");
});
// 5

test("72, satin,  1.000000000000e-04,  1.450506000000e-01,  1.975491070959e+04,  3.623303527140e+00,  2.000636014976e-01,  2.512139658858e+00,  5.246109836613e-03,  4.766670465451e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 4.632e3,
        epochyr: 4.0,
        epochdays: 3.191070959e1,
        ndot: -2.545271825825e-12,
        nddot: 0.0,
        bstar: 1.0e-4,
        inclo: 2.000636014976e-1,
        nodeo: 4.766670465451,
        ecco: 1.450506e-1,
        argpo: 3.62330352714,
        mo: 2.512139658858,
        no: 5.246109836613e-3,
        a: 5.857265750666,
        alta: 5.706865662159,
        altp: 4.007665839172,
        jdsatepoch: 2.45303641071e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.0e-4,
        1.450506e-1,
        1.975491070959e4,
        3.62330352714,
        2.000636014976e-1,
        2.512139658858,
        5.246109836613e-3,
        4.766670465451
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 4.632e3, TOL));
    assert(isequalRel(satrec.epochyr, 4.0, TOL));
    assert(isequalRel(satrec.epochdays, 3.191070959e1, TOL));
    assert(isequalRel(satrec.ndot, -2.545271825825e-12, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.0e-4, TOL));
    assert(isequalRel(satrec.inclo, 2.000636014976e-1, TOL));
    assert(isequalRel(satrec.nodeo, 4.766670465451, TOL));
    assert(isequalRel(satrec.ecco, 1.450506e-1, TOL));
    assert(isequalRel(satrec.argpo, 3.62330352714, TOL));
    assert(isequalRel(satrec.mo, 2.512139658858, TOL));
    assert(isequalRel(satrec.no, 5.245868658927e-3, TOL));
    assert(isequalRel(satrec.a, 5.857265750666, TOL));
    assert(isequalRel(satrec.alta, 5.706865662159, TOL));
    assert(isequalRel(satrec.altp, 4.007665839172, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.45303641071e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 2.330198039387e-4, TOL));
    assert(isequalRel(satrec.con41, 1.881517177058, TOL));
    assert(isequalRel(satrec.cc1, 1.343526634302e-17, TOL));
    assert(isequalRel(satrec.cc4, 9.961442478352e-14, TOL));
    assert(isequalRel(satrec.cc5, 5.042388615446e-11, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 6.321876200893e-1, TOL));
    assert(isequalRel(satrec.eta, 1.753535760959e-1, TOL));
    assert(isequalRel(satrec.argpdot, 4.927036138558e-7, TOL));
    assert(isequalRel(satrec.omgcof, -2.103491826186e-21, TOL));
    assert(isequalRel(satrec.sinmao, 5.8870267452e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 2.015289951454e-17, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 3.949427431409e-2, TOL));
    assert(isequalRel(satrec.x7thm1, 5.723540079801, TOL));
    assert(isequalRel(satrec.mdot, 5.246109831442e-3, TOL));
    assert(isequalRel(satrec.nodedot, -2.539711450894e-7, TOL));
    assert(isequalRel(satrec.xlcof, 4.648659461777e-4, TOL));
    assert(isequalRel(satrec.xmcof, -8.942199364406e-15, TOL));
    assert(isequalRel(satrec.nodecf, -1.168869017451e-23, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, -5.739257257134e-10, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, -2.669482583786e-8, TOL));
    assert(isequalRel(satrec.dmdt, -6.045613838815e-8, TOL));
    assert(isequalRel(satrec.dnodt, -6.171410259572e-8, TOL));
    assert(isequalRel(satrec.domdt, 6.528741483006e-8, TOL));
    assert(isequalRel(satrec.e3, -3.259811599808e-4, TOL));
    assert(isequalRel(satrec.ee2, 9.631690304302e-5, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -1.598763953845e-3, TOL));
    assert(isequalRel(satrec.se3, -1.532829312733e-3, TOL));
    assert(isequalRel(satrec.sgh2, 1.009321688332e-2, TOL));
    assert(isequalRel(satrec.sgh3, -1.031125833038e-2, TOL));
    assert(isequalRel(satrec.sgh4, -1.698290639332e-4, TOL));
    assert(isequalRel(satrec.sh2, -1.436571665398e-3, TOL));
    assert(isequalRel(satrec.sh3, -2.604666666759e-4, TOL));
    assert(isequalRel(satrec.si2, -2.75201937038e-4, TOL));
    assert(isequalRel(satrec.si3, 1.412253967491e-3, TOL));
    assert(isequalRel(satrec.sl2, -9.737328456846e-3, TOL));
    assert(isequalRel(satrec.sl3, 9.584139594897e-3, TOL));
    assert(isequalRel(satrec.sl4, 4.041147860756e-4, TOL));
    assert(isequalRel(satrec.gsto, 1.71602708407, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 2.069563786522e-3, TOL));
    assert(isequalRel(satrec.xgh3, 6.246874813546e-4, TOL));
    assert(isequalRel(satrec.xgh4, -8.940507699742e-5, TOL));
    assert(isequalRel(satrec.xh2, -5.956657020046e-5, TOL));
    assert(isequalRel(satrec.xh3, -2.660535481999e-4, TOL));
    assert(isequalRel(satrec.xi2, -2.550806983774e-4, TOL));
    assert(isequalRel(satrec.xi3, 6.513825317331e-5, TOL));
    assert(isequalRel(satrec.xl2, -1.862212872508e-3, TOL));
    assert(isequalRel(satrec.xl3, -5.873201141188e-4, TOL));
    assert(isequalRel(satrec.xl4, 2.127428175609e-4, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 3.145380241287, TOL));
    assert(isequalRel(satrec.zmos, 4.795490950675e-1, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 4632

test("72, satin,  1.280800000000e-04,  3.003500000000e-03,  2.063082412014e+04,  2.428744336539e+00,  1.013301511794e+00,  3.860413487341e+00,  6.791020666036e-02,  9.432195610090e-01", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 6.251e3,
        epochyr: 6.0,
        epochdays: 1.7682412014e2,
        ndot: 2.692230972911e-10,
        nddot: 0.0,
        bstar: 1.2808e-4,
        inclo: 1.013301511794,
        nodeo: 9.43219561009e-1,
        ecco: 3.0035e-3,
        argpo: 2.428744336539,
        mo: 3.860413487341,
        no: 6.791020666036e-2,
        a: 1.062420593358,
        alta: 6.561157360986e-2,
        altp: 5.922961310556e-2,
        jdsatepoch: 2.45391232412e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.2808e-4,
        3.0035e-3,
        2.063082412014e4,
        2.428744336539,
        1.013301511794,
        3.860413487341,
        6.791020666036e-2,
        9.43219561009e-1
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 6.251e3, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7682412014e2, TOL));
    assert(isequalRel(satrec.ndot, 2.692230972911e-10, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.2808e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.013301511794, TOL));
    assert(isequalRel(satrec.nodeo, 9.43219561009e-1, TOL));
    assert(isequalRel(satrec.ecco, 3.0035e-3, TOL));
    assert(isequalRel(satrec.argpo, 2.428744336539, TOL));
    assert(isequalRel(satrec.mo, 3.860413487341, TOL));
    assert(isequalRel(satrec.no, 6.791803699335e-2, TOL));
    assert(isequalRel(satrec.a, 1.062420593358, TOL));
    assert(isequalRel(satrec.alta, 6.561157360986e-2, TOL));
    assert(isequalRel(satrec.altp, 5.922961310556e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.45391232412e6, TOL));
    assert(isequalRel(satrec.isimp, 0.0, TOL));
    assert(isequalRel(satrec.aycof, 9.949933492029e-4, TOL));
    assert(isequalRel(satrec.con41, -1.602801925378e-1, TOL));
    assert(isequalRel(satrec.cc1, 2.786746389227e-9, TOL));
    assert(isequalRel(satrec.cc4, 5.199527839737e-6, TOL));
    assert(isequalRel(satrec.cc5, 6.501942743088e-4, TOL));
    assert(isequalRel(satrec.d2, 6.585618757245e-16, TOL));
    assert(isequalRel(satrec.d3, 2.328345454584e-22, TOL));
    assert(isequalRel(satrec.d4, 9.598355084426e-29, TOL));
    assert(isequalRel(satrec.delmo, 8.630169062242e-1, TOL));
    assert(isequalRel(satrec.eta, 6.367505613325e-2, TOL));
    assert(isequalRel(satrec.argpdot, 1.940705735802e-5, TOL));
    assert(isequalRel(satrec.omgcof, -5.189726839277e-8, TOL));
    assert(isequalRel(satrec.sinmao, -6.584977098201e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 4.180119583841e-9, TOL));
    assert(isequalRel(satrec.t3cof, 6.740937866003e-16, TOL));
    assert(isequalRel(satrec.t4cof, 1.801857482522e-22, TOL));
    assert(isequalRel(satrec.t5cof, 5.969868409204e-29, TOL));
    assert(isequalRel(satrec.x1mth2, 7.200933975126e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 9.593462174118e-1, TOL));
    assert(isequalRel(satrec.mdot, 6.791021042403e-2, TOL));
    assert(isequalRel(satrec.nodedot, -5.167653849627e-5, TOL));
    assert(isequalRel(satrec.xlcof, 1.836761984615e-3, TOL));
    assert(isequalRel(satrec.xmcof, -1.331465223622e-4, TOL));
    assert(isequalRel(satrec.nodecf, -5.043135183865e-13, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 0.0, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 0.0, TOL));
    assert(isequalRel(satrec.dmdt, 0.0, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 0.0, TOL));
    assert(isequalRel(satrec.e3, 0.0, TOL));
    assert(isequalRel(satrec.ee2, 0.0, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 0.0, TOL));
    assert(isequalRel(satrec.se3, 0.0, TOL));
    assert(isequalRel(satrec.sgh2, 0.0, TOL));
    assert(isequalRel(satrec.sgh3, 0.0, TOL));
    assert(isequalRel(satrec.sgh4, 0.0, TOL));
    assert(isequalRel(satrec.sh2, 0.0, TOL));
    assert(isequalRel(satrec.sh3, 0.0, TOL));
    assert(isequalRel(satrec.si2, 0.0, TOL));
    assert(isequalRel(satrec.si3, 0.0, TOL));
    assert(isequalRel(satrec.sl2, 0.0, TOL));
    assert(isequalRel(satrec.sl3, 0.0, TOL));
    assert(isequalRel(satrec.sl4, 0.0, TOL));
    assert(isequalRel(satrec.gsto, 3.673754967933, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 0.0, TOL));
    assert(isequalRel(satrec.xgh3, 0.0, TOL));
    assert(isequalRel(satrec.xgh4, 0.0, TOL));
    assert(isequalRel(satrec.xh2, 0.0, TOL));
    assert(isequalRel(satrec.xh3, 0.0, TOL));
    assert(isequalRel(satrec.xi2, 0.0, TOL));
    assert(isequalRel(satrec.xi3, 0.0, TOL));
    assert(isequalRel(satrec.xl2, 0.0, TOL));
    assert(isequalRel(satrec.xl3, 0.0, TOL));
    assert(isequalRel(satrec.xl4, 0.0, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 0.0, TOL));
    assert(isequalRel(satrec.zmos, 0.0, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "n");
    equal(satrec.init, "n");
});
// 6251

test("72, satin,  1.187300000000e-04,  6.877146000000e-01,  2.063033215444e+04,  4.621022739372e+00,  1.119778813470e+00,  3.530050585206e-01,  8.748086888067e-03,  4.870720014138e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 8.195e3,
        epochyr: 6.0,
        epochdays: 1.7633215444e2,
        ndot: 2.999784651865e-12,
        nddot: 0.0,
        bstar: 1.1873e-4,
        inclo: 1.11977881347,
        nodeo: 4.870720014138,
        ecco: 6.877146e-1,
        argpo: 4.621022739372,
        mo: 3.530050585206e-1,
        no: 8.748086888067e-3,
        a: 4.165282448733,
        alta: 6.02980800185,
        altp: 3.007568956154e-1,
        jdsatepoch: 2.453911832154e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.1873e-4,
        6.877146e-1,
        2.063033215444e4,
        4.621022739372,
        1.11977881347,
        3.530050585206e-1,
        8.748086888067e-3,
        4.870720014138
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 8.195e3, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7633215444e2, TOL));
    assert(isequalRel(satrec.ndot, 2.999784651865e-12, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.1873e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.11977881347, TOL));
    assert(isequalRel(satrec.nodeo, 4.870720014138, TOL));
    assert(isequalRel(satrec.ecco, 6.877146e-1, TOL));
    assert(isequalRel(satrec.argpo, 4.621022739372, TOL));
    assert(isequalRel(satrec.mo, 3.530050585206e-1, TOL));
    assert(isequalRel(satrec.no, 8.74854701963e-3, TOL));
    assert(isequalRel(satrec.a, 4.165282448733, TOL));
    assert(isequalRel(satrec.alta, 6.02980800185, TOL));
    assert(isequalRel(satrec.altp, 3.007568956154e-1, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453911832154e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.055286126372e-3, TOL));
    assert(isequalRel(satrec.con41, -4.300218866316e-1, TOL));
    assert(isequalRel(satrec.cc1, 1.942515834721e-13, TOL));
    assert(isequalRel(satrec.cc4, 1.205662340036e-9, TOL));
    assert(isequalRel(satrec.cc5, 2.066270127143e-7, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 6.357151283114, TOL));
    assert(isequalRel(satrec.eta, 9.085028530233e-1, TOL));
    assert(isequalRel(satrec.argpdot, -7.437009265334e-8, TOL));
    assert(isequalRel(satrec.omgcof, -3.510477365587e-21, TOL));
    assert(isequalRel(satrec.sinmao, 3.457191249346e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 2.913773752081e-13, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 8.100072955439e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 3.299489311928e-1, TOL));
    assert(isequalRel(satrec.mdot, 8.748086886633e-3, TOL));
    assert(isequalRel(satrec.nodedot, -1.284567215801e-6, TOL));
    assert(isequalRel(satrec.xlcof, 1.903275763135e-3, TOL));
    assert(isequalRel(satrec.xmcof, -2.410528625981e-15, TOL));
    assert(isequalRel(satrec.nodecf, -4.604617513548e-19, TOL));
    assert(isequalRel(satrec.irez, 2.0, TOL));
    assert(isequalRel(satrec.d2201, -1.197359551623e-11, TOL));
    assert(isequalRel(satrec.d2211, 6.453213834121e-11, TOL));
    assert(isequalRel(satrec.d3210, -3.893722738131e-12, TOL));
    assert(isequalRel(satrec.d3222, -7.364857538023e-12, TOL));
    assert(isequalRel(satrec.d4410, 2.576960140946e-12, TOL));
    assert(isequalRel(satrec.d4422, 4.361455592714e-12, TOL));
    assert(isequalRel(satrec.d5220, -2.528789465953e-12, TOL));
    assert(isequalRel(satrec.d5232, 6.767712568551e-13, TOL));
    assert(isequalRel(satrec.d5421, -2.280698046562e-12, TOL));
    assert(isequalRel(satrec.d5433, -1.659570821491e-12, TOL));
    assert(isequalRel(satrec.dedt, -2.888547623461e-8, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, -9.784108269214e-9, TOL));
    assert(isequalRel(satrec.dmdt, 9.270786742527e-8, TOL));
    assert(isequalRel(satrec.dnodt, -6.124323489695e-8, TOL));
    assert(isequalRel(satrec.domdt, -1.415521073384e-8, TOL));
    assert(isequalRel(satrec.e3, -4.408046133189e-4, TOL));
    assert(isequalRel(satrec.ee2, -1.093428053938e-4, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 2.501941522642e-3, TOL));
    assert(isequalRel(satrec.se3, 1.00724198853e-3, TOL));
    assert(isequalRel(satrec.sgh2, -1.261915509701e-3, TOL));
    assert(isequalRel(satrec.sgh3, 2.455746281541e-3, TOL));
    assert(isequalRel(satrec.sgh4, -7.471990261373e-5, TOL));
    assert(isequalRel(satrec.sh2, 9.458037270825e-4, TOL));
    assert(isequalRel(satrec.sh3, -3.97022369062e-3, TOL));
    assert(isequalRel(satrec.si2, -1.110569917439e-3, TOL));
    assert(isequalRel(satrec.si3, 2.735745904365e-5, TOL));
    assert(isequalRel(satrec.sl2, 4.083492666433e-3, TOL));
    assert(isequalRel(satrec.sl3, -2.119115873088e-3, TOL));
    assert(isequalRel(satrec.sl4, 2.888302541444e-4, TOL));
    assert(isequalRel(satrec.gsto, 5.741801269032e-1, TOL));
    assert(isequalRel(satrec.xfact, -8.753597222054e-3, TOL));
    assert(isequalRel(satrec.xgh2, 4.54920244383e-4, TOL));
    assert(isequalRel(satrec.xgh3, -2.464815107882e-5, TOL));
    assert(isequalRel(satrec.xgh4, -3.933566193975e-5, TOL));
    assert(isequalRel(satrec.xh2, -6.438340814882e-4, TOL));
    assert(isequalRel(satrec.xh3, 3.079429279349e-4, TOL));
    assert(isequalRel(satrec.xi2, 1.142408298542e-4, TOL));
    assert(isequalRel(satrec.xi3, 1.200089628145e-4, TOL));
    assert(isequalRel(satrec.xl2, -7.862643771994e-4, TOL));
    assert(isequalRel(satrec.xl3, -4.559423560477e-4, TOL));
    assert(isequalRel(satrec.xl4, 1.520522489668e-4, TOL));
    assert(isequalRel(satrec.xlamo, 2.66289952581, TOL));
    assert(isequalRel(satrec.zmol, 1.703291771992, TOL));
    assert(isequalRel(satrec.zmos, 2.972158040326, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 2.66289952581, TOL));
    assert(isequalRel(satrec.xni, 8.74854701963e-3, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 8195

test("72, satin,  1.000000000000e-04,  7.069051000000e-01,  2.063056157475e+04,  4.712788660783e+00,  1.127426846252e+00,  2.850471734357e-01,  8.762146867822e-03,  6.097806906008e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 9.88e3,
        epochyr: 6.0,
        epochdays: 1.7656157475e2,
        ndot: 1.275665998419e-11,
        nddot: 0.0,
        bstar: 1.0e-4,
        inclo: 1.127426846252,
        nodeo: 6.097806906008,
        ecco: 7.069051e-1,
        argpo: 4.712788660783,
        mo: 2.850471734357e-1,
        no: 8.762146867822e-3,
        a: 4.160825439041,
        alta: 6.102134162109,
        altp: 2.195167159733e-1,
        jdsatepoch: 2.453912061575e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.0e-4,
        7.069051e-1,
        2.063056157475e4,
        4.712788660783,
        1.127426846252,
        2.850471734357e-1,
        8.762146867822e-3,
        6.097806906008
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 9.88e3, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7656157475e2, TOL));
    assert(isequalRel(satrec.ndot, 1.275665998419e-11, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.0e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.127426846252, TOL));
    assert(isequalRel(satrec.nodeo, 6.097806906008, TOL));
    assert(isequalRel(satrec.ecco, 7.069051e-1, TOL));
    assert(isequalRel(satrec.argpo, 4.712788660783, TOL));
    assert(isequalRel(satrec.mo, 2.850471734357e-1, TOL));
    assert(isequalRel(satrec.no, 8.762667060363e-3, TOL));
    assert(isequalRel(satrec.a, 4.160825439041, TOL));
    assert(isequalRel(satrec.alta, 6.102134162109, TOL));
    assert(isequalRel(satrec.altp, 2.195167159733e-1, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453912061575e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.059164029957e-3, TOL));
    assert(isequalRel(satrec.con41, -4.479141048878e-1, TOL));
    assert(isequalRel(satrec.cc1, 5.23352016606e-13, TOL));
    assert(isequalRel(satrec.cc4, 3.662175839859e-9, TOL));
    assert(isequalRel(satrec.cc5, 6.266742443382e-7, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 6.820964768241, TOL));
    assert(isequalRel(satrec.eta, 9.341770109733e-1, TOL));
    assert(isequalRel(satrec.argpdot, -1.318643338756e-7, TOL));
    assert(isequalRel(satrec.omgcof, 1.27574050989e-23, TOL));
    assert(isequalRel(satrec.sinmao, 2.812027215197e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 7.850280249091e-13, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 8.159713682959e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 2.882004219285e-1, TOL));
    assert(isequalRel(satrec.mdot, 8.762146865654e-3, TOL));
    assert(isequalRel(satrec.nodedot, -1.408338623247e-6, TOL));
    assert(isequalRel(satrec.xlcof, 1.906710134565e-3, TOL));
    assert(isequalRel(satrec.xmcof, -1.931807263939e-15, TOL));
    assert(isequalRel(satrec.nodecf, -1.29111344318e-18, TOL));
    assert(isequalRel(satrec.irez, 2.0, TOL));
    assert(isequalRel(satrec.d2201, -1.22306600034e-11, TOL));
    assert(isequalRel(satrec.d2211, 7.174605316403e-11, TOL));
    assert(isequalRel(satrec.d3210, -4.151751044682e-12, TOL));
    assert(isequalRel(satrec.d3222, -8.877536621154e-12, TOL));
    assert(isequalRel(satrec.d4410, 3.097256488149e-12, TOL));
    assert(isequalRel(satrec.d4422, 5.507367501422e-12, TOL));
    assert(isequalRel(satrec.d5220, -3.254911516032e-12, TOL));
    assert(isequalRel(satrec.d5232, 7.95136450968e-13, TOL));
    assert(isequalRel(satrec.d5421, -2.951741474264e-12, TOL));
    assert(isequalRel(satrec.d5433, -2.267801942329e-12, TOL));
    assert(isequalRel(satrec.dedt, -4.867357573014e-9, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, -1.740817385888e-9, TOL));
    assert(isequalRel(satrec.dmdt, 7.2752906293e-9, TOL));
    assert(isequalRel(satrec.dnodt, -8.615750092681e-8, TOL));
    assert(isequalRel(satrec.domdt, 2.335815977949e-8, TOL));
    assert(isequalRel(satrec.e3, 1.249431839564e-4, TOL));
    assert(isequalRel(satrec.ee2, 6.476652597055e-4, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -3.006446485103e-3, TOL));
    assert(isequalRel(satrec.se3, 2.366248156382e-3, TOL));
    assert(isequalRel(satrec.sgh2, -2.805617954096e-3, TOL));
    assert(isequalRel(satrec.sgh3, -3.7559059517e-3, TOL));
    assert(isequalRel(satrec.sgh4, -7.268074853619e-5, TOL));
    assert(isequalRel(satrec.sh2, 2.94890219518e-3, TOL));
    assert(isequalRel(satrec.sh3, 3.166374712604e-3, TOL));
    assert(isequalRel(satrec.si2, 6.569128551896e-4, TOL));
    assert(isequalRel(satrec.si3, -6.992498193738e-4, TOL));
    assert(isequalRel(satrec.sl2, 4.534351771255e-3, TOL));
    assert(isequalRel(satrec.sl3, 6.836119210765e-3, TOL));
    assert(isequalRel(satrec.sl4, 2.911149634817e-4, TOL));
    assert(isequalRel(satrec.gsto, 2.019617116981, TOL));
    assert(isequalRel(satrec.xfact, -8.754040087689e-3, TOL));
    assert(isequalRel(satrec.xgh2, -1.815715485263e-4, TOL));
    assert(isequalRel(satrec.xgh3, 8.134154625503e-4, TOL));
    assert(isequalRel(satrec.xgh4, -3.826216649032e-5, TOL));
    assert(isequalRel(satrec.xh2, 4.816111792216e-5, TOL));
    assert(isequalRel(satrec.xh3, -6.696421947166e-4, TOL));
    assert(isequalRel(satrec.xi2, -1.383644676752e-4, TOL));
    assert(isequalRel(satrec.xi3, -7.113039969238e-7, TOL));
    assert(isequalRel(satrec.xl2, 4.111399428162e-4, TOL));
    assert(isequalRel(satrec.xl3, -1.491371542789e-3, TOL));
    assert(isequalRel(satrec.xl4, 1.532550149097e-4, TOL));
    assert(isequalRel(satrec.xlamo, 2.158241444311, TOL));
    assert(isequalRel(satrec.zmol, 1.755605827278, TOL));
    assert(isequalRel(satrec.zmos, 2.97610452322, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 2.158241444311, TOL));
    assert(isequalRel(satrec.xni, 8.762667060363e-3, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 9880

test("72, satin,  0.000000000000e+00,  2.709710000000e-02,  2.023779417928e+04,  5.716345999363e+00,  1.657329751109e-01,  5.377307065517e-01,  5.069604863892e-03,  5.465934884933e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 9.998e3,
        epochyr: 5.0,
        epochdays: 1.4879417928e2,
        ndot: -3.393695767767e-12,
        nddot: 0.0,
        bstar: 0.0,
        inclo: 1.657329751109e-1,
        nodeo: 5.465934884933,
        ecco: 2.70971e-2,
        argpo: 5.716345999363,
        mo: 5.377307065517e-1,
        no: 5.069604863892e-3,
        a: 5.99244110549,
        alta: 5.15481888137,
        altp: 4.830063329611,
        jdsatepoch: 2.453519294179e6
    };
    satrec = sgp4init(
        72,
        satin,
        0.0,
        2.70971e-2,
        2.023779417928e4,
        5.716345999363,
        1.657329751109e-1,
        5.377307065517e-1,
        5.069604863892e-3,
        5.465934884933
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 9.998e3, TOL));
    assert(isequalRel(satrec.epochyr, 5.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.4879417928e2, TOL));
    assert(isequalRel(satrec.ndot, -3.393695767767e-12, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 0.0, TOL));
    assert(isequalRel(satrec.inclo, 1.657329751109e-1, TOL));
    assert(isequalRel(satrec.nodeo, 5.465934884933, TOL));
    assert(isequalRel(satrec.ecco, 2.70971e-2, TOL));
    assert(isequalRel(satrec.argpo, 5.716345999363, TOL));
    assert(isequalRel(satrec.mo, 5.377307065517e-1, TOL));
    assert(isequalRel(satrec.no, 5.06938472225e-3, TOL));
    assert(isequalRel(satrec.a, 5.99244110549, TOL));
    assert(isequalRel(satrec.alta, 5.15481888137, TOL));
    assert(isequalRel(satrec.altp, 4.830063329611, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453519294179e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.934392983882e-4, TOL));
    assert(isequalRel(satrec.con41, 1.918349444333, TOL));
    assert(isequalRel(satrec.cc1, 0.0, TOL));
    assert(isequalRel(satrec.cc4, 1.472053521037e-14, TOL));
    assert(isequalRel(satrec.cc5, 3.693461648587e-11, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 1.086383607728, TOL));
    assert(isequalRel(satrec.eta, 3.260440040582e-2, TOL));
    assert(isequalRel(satrec.argpdot, 4.436332962536e-7, TOL));
    assert(isequalRel(satrec.omgcof, 0.0, TOL));
    assert(isequalRel(satrec.sinmao, 5.121882768119e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 0.0, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 2.721685188894e-2, TOL));
    assert(isequalRel(satrec.x7thm1, 5.809482036777, TOL));
    assert(isequalRel(satrec.mdot, 5.069604859229e-3, TOL));
    assert(isequalRel(satrec.nodedot, -2.264779093452e-7, TOL));
    assert(isequalRel(satrec.xlcof, 3.862113846602e-4, TOL));
    assert(isequalRel(satrec.xmcof, -0.0, TOL));
    assert(isequalRel(satrec.nodecf, -0.0, TOL));
    assert(isequalRel(satrec.irez, 1.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 2.142414632713e-10, TOL));
    assert(isequalRel(satrec.del1, -1.069242230635e-12, TOL));
    assert(isequalRel(satrec.del2, 2.268988798894e-11, TOL));
    assert(isequalRel(satrec.del3, 3.47829658441e-12, TOL));
    assert(isequalRel(satrec.didt, -2.100861346923e-8, TOL));
    assert(isequalRel(satrec.dmdt, -1.007233935453e-7, TOL));
    assert(isequalRel(satrec.dnodt, 5.240300896038e-8, TOL));
    assert(isequalRel(satrec.domdt, -2.079390322813e-8, TOL));
    assert(isequalRel(satrec.e3, 4.759541749927e-5, TOL));
    assert(isequalRel(satrec.ee2, -5.215931631248e-5, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -4.545493382307e-4, TOL));
    assert(isequalRel(satrec.se3, -1.40830728242e-5, TOL));
    assert(isequalRel(satrec.sgh2, 3.34176277591e-4, TOL));
    assert(isequalRel(satrec.sgh3, -1.63125070816e-2, TOL));
    assert(isequalRel(satrec.sgh4, -1.77554683431e-4, TOL));
    assert(isequalRel(satrec.sh2, -7.925299564105e-4, TOL));
    assert(isequalRel(satrec.sh3, -7.614980505856e-4, TOL));
    assert(isequalRel(satrec.si2, -7.593552438778e-4, TOL));
    assert(isequalRel(satrec.si3, 7.406357152159e-4, TOL));
    assert(isequalRel(satrec.sl2, -6.650365679906e-5, TOL));
    assert(isequalRel(satrec.sl3, 1.569236751846e-2, TOL));
    assert(isequalRel(satrec.sl4, 4.14576861433e-4, TOL));
    assert(isequalRel(satrec.gsto, 3.007604046768, TOL));
    assert(isequalRel(satrec.xfact, -4.374900909933e-3, TOL));
    assert(isequalRel(satrec.xgh2, -1.706031133674e-3, TOL));
    assert(isequalRel(satrec.xgh3, -1.810449604366e-3, TOL));
    assert(isequalRel(satrec.xgh4, -9.347216416174e-5, TOL));
    assert(isequalRel(satrec.xh2, -2.227234299372e-4, TOL));
    assert(isequalRel(satrec.xh3, 5.491720843604e-6, TOL));
    assert(isequalRel(satrec.xi2, -6.826729645968e-6, TOL));
    assert(isequalRel(satrec.xi3, 2.099107684283e-4, TOL));
    assert(isequalRel(satrec.xl2, 1.640123445179e-3, TOL));
    assert(isequalRel(satrec.xl3, 1.647042035558e-3, TOL));
    assert(isequalRel(satrec.xl4, 2.182504888112e-4, TOL));
    assert(isequalRel(satrec.xlamo, 2.4292222369, TOL));
    assert(isequalRel(satrec.zmol, 1.585773955921e-1, TOL));
    assert(isequalRel(satrec.zmos, 2.502914127169, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 2.4292222369, TOL));
    assert(isequalRel(satrec.xni, 5.06938472225e-3, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 9998

test("72, satin,  1.431100000000e-02,  7.318036000000e-01,  1.118729629788e+04,  8.285461931653e-01,  8.166674822762e-01,  1.817184457299e-01,  9.971844782556e-03,  4.021856443150e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 1.1801e4,
        epochyr: 8.0e1,
        epochdays: 2.3029629788e2,
        ndot: 4.336364459231e-8,
        nddot: 0.0,
        bstar: 1.4311e-2,
        inclo: 8.166674822762e-1,
        nodeo: 4.02185644315,
        ecco: 7.318036e-1,
        argpo: 8.285461931653e-1,
        mo: 1.817184457299e-1,
        no: 9.971844782556e-3,
        a: 3.817123180279,
        alta: 5.610507665251,
        altp: 2.373869530742e-2,
        jdsatepoch: 2.444468796298e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.4311e-2,
        7.318036e-1,
        1.118729629788e4,
        8.285461931653e-1,
        8.166674822762e-1,
        1.817184457299e-1,
        9.971844782556e-3,
        4.02185644315
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 1.1801e4, TOL));
    assert(isequalRel(satrec.epochyr, 8.0e1, TOL));
    assert(isequalRel(satrec.epochdays, 2.3029629788e2, TOL));
    assert(isequalRel(satrec.ndot, 4.336364459231e-8, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.4311e-2, TOL));
    assert(isequalRel(satrec.inclo, 8.166674822762e-1, TOL));
    assert(isequalRel(satrec.nodeo, 4.02185644315, TOL));
    assert(isequalRel(satrec.ecco, 7.318036e-1, TOL));
    assert(isequalRel(satrec.argpo, 8.285461931653e-1, TOL));
    assert(isequalRel(satrec.mo, 1.817184457299e-1, TOL));
    assert(isequalRel(satrec.no, 9.971131604593e-3, TOL));
    assert(isequalRel(satrec.a, 3.817123180279, TOL));
    assert(isequalRel(satrec.alta, 5.610507665251, TOL));
    assert(isequalRel(satrec.altp, 2.373869530742e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.444468796298e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 8.546234428971e-4, TOL));
    assert(isequalRel(satrec.con41, 4.062531798299e-1, TOL));
    assert(isequalRel(satrec.cc1, 2.455322245841e-6, TOL));
    assert(isequalRel(satrec.cc4, 1.110884261662e-4, TOL));
    assert(isequalRel(satrec.cc5, 1.667324930436e-2, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 7.753547418864, TOL));
    assert(isequalRel(satrec.eta, 9.956413460076e-1, TOL));
    assert(isequalRel(satrec.argpdot, 3.460657560909e-6, TOL));
    assert(isequalRel(satrec.omgcof, 7.183331930496e-18, TOL));
    assert(isequalRel(satrec.sinmao, 1.807199902444e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 3.682983368762e-6, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 5.312489400567e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 2.281257419603, TOL));
    assert(isequalRel(satrec.mdot, 9.971844927633e-3, TOL));
    assert(isequalRel(satrec.nodedot, -3.528457562328e-6, TOL));
    assert(isequalRel(satrec.xlcof, 1.629259507468e-3, TOL));
    assert(isequalRel(satrec.xmcof, -5.857169839716e-13, TOL));
    assert(isequalRel(satrec.nodecf, -1.407642839643e-11, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 2.638606466889e-8, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, -3.476737419877e-8, TOL));
    assert(isequalRel(satrec.dmdt, 8.037814258571e-8, TOL));
    assert(isequalRel(satrec.dnodt, -6.033631306028e-8, TOL));
    assert(isequalRel(satrec.domdt, 9.465204016205e-9, TOL));
    assert(isequalRel(satrec.e3, -7.49951331553e-5, TOL));
    assert(isequalRel(satrec.ee2, 3.984687909508e-4, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -2.35922531126e-3, TOL));
    assert(isequalRel(satrec.se3, -7.047176327541e-5, TOL));
    assert(isequalRel(satrec.sgh2, -1.822566953373e-4, TOL));
    assert(isequalRel(satrec.sgh3, -2.213029457235e-3, TOL));
    assert(isequalRel(satrec.sgh4, -6.154293814758e-5, TOL));
    assert(isequalRel(satrec.sh2, -1.139407335123e-3, TOL));
    assert(isequalRel(satrec.sh3, 2.509518062136e-3, TOL));
    assert(isequalRel(satrec.si2, -5.208303751558e-5, TOL));
    assert(isequalRel(satrec.si3, 3.287353432187e-3, TOL));
    assert(isequalRel(satrec.sl2, 2.78168400938e-3, TOL));
    assert(isequalRel(satrec.sl3, 3.3383632782e-3, TOL));
    assert(isequalRel(satrec.sl4, 2.590677065105e-4, TOL));
    assert(isequalRel(satrec.gsto, 1.265125075736, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 1.51025602248e-4, TOL));
    assert(isequalRel(satrec.xgh3, 3.555337411429e-4, TOL));
    assert(isequalRel(satrec.xgh4, -3.239876023751e-5, TOL));
    assert(isequalRel(satrec.xh2, 1.128589566218e-4, TOL));
    assert(isequalRel(satrec.xh3, -4.733943399734e-4, TOL));
    assert(isequalRel(satrec.xi2, -6.414087511194e-5, TOL));
    assert(isequalRel(satrec.xi3, -5.695169719647e-4, TOL));
    assert(isequalRel(satrec.xl2, -7.034864700241e-4, TOL));
    assert(isequalRel(satrec.xl3, -5.240671428885e-4, TOL));
    assert(isequalRel(satrec.xl4, 1.363840070226e-4, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 3.567468389971, TOL));
    assert(isequalRel(satrec.zmos, 3.896090412269, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 11801

test("72, satin,  1.000000000000e-04,  1.156200000000e-03,  2.063002844893e+04,  4.617827041512e-01,  1.996377411601e-01,  5.821811010073e+00,  4.314022552805e-03,  6.145897708218e-01", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 1.4128e4,
        epochyr: 6.0,
        epochdays: 1.7602844893e2,
        ndot: -4.787535100957e-12,
        nddot: 0.0,
        bstar: 1.0e-4,
        inclo: 1.996377411601e-1,
        nodeo: 6.145897708218e-1,
        ecco: 1.1562e-3,
        argpo: 4.617827041512e-1,
        mo: 5.821811010073,
        no: 4.314022552805e-3,
        a: 6.673160557243,
        alta: 5.680876065479,
        altp: 5.665445049007,
        jdsatepoch: 2.453911528449e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.0e-4,
        1.1562e-3,
        2.063002844893e4,
        4.617827041512e-1,
        1.996377411601e-1,
        5.821811010073,
        4.314022552805e-3,
        6.145897708218e-1
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 1.4128e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7602844893e2, TOL));
    assert(isequalRel(satrec.ndot, -4.787535100957e-12, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.0e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.996377411601e-1, TOL));
    assert(isequalRel(satrec.nodeo, 6.145897708218e-1, TOL));
    assert(isequalRel(satrec.ecco, 1.1562e-3, TOL));
    assert(isequalRel(satrec.argpo, 4.617827041512e-1, TOL));
    assert(isequalRel(satrec.mo, 5.821811010073, TOL));
    assert(isequalRel(satrec.no, 4.313874514604e-3, TOL));
    assert(isequalRel(satrec.a, 6.673160557243, TOL));
    assert(isequalRel(satrec.alta, 5.680876065479, TOL));
    assert(isequalRel(satrec.altp, 5.665445049007, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453911528449e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 2.325304065199e-4, TOL));
    assert(isequalRel(satrec.con41, 1.882014339061, TOL));
    assert(isequalRel(satrec.cc1, 5.271206196097e-18, TOL));
    assert(isequalRel(satrec.cc4, 3.653132465373e-16, TOL));
    assert(isequalRel(satrec.cc5, 2.443440693174e-11, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 1.003665753747, TOL));
    assert(isequalRel(satrec.eta, 1.362934170593e-3, TOL));
    assert(isequalRel(satrec.argpdot, 2.992039723459e-7, TOL));
    assert(isequalRel(satrec.omgcof, 1.004726027146e-19, TOL));
    assert(isequalRel(satrec.sinmao, -4.451791296916e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 7.906809294146e-18, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 3.932855364617e-2, TOL));
    assert(isequalRel(satrec.x7thm1, 5.724700124477, TOL));
    assert(isequalRel(satrec.mdot, 4.314022550354e-3, TOL));
    assert(isequalRel(satrec.nodedot, -1.54209500554e-7, TOL));
    assert(isequalRel(satrec.xlcof, 4.638946303203e-4, TOL));
    assert(isequalRel(satrec.xmcof, -7.745061119293e-11, TOL));
    assert(isequalRel(satrec.nodecf, -2.844567605756e-24, TOL));
    assert(isequalRel(satrec.irez, 1.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 7.405672912273e-12, TOL));
    assert(isequalRel(satrec.del1, -5.40161705918e-13, TOL));
    assert(isequalRel(satrec.del2, 1.319183725301e-11, TOL));
    assert(isequalRel(satrec.del3, 1.815021571877e-12, TOL));
    assert(isequalRel(satrec.didt, 1.917646021027e-8, TOL));
    assert(isequalRel(satrec.dmdt, -1.336452685205e-7, TOL));
    assert(isequalRel(satrec.dnodt, 6.865572727316e-8, TOL));
    assert(isequalRel(satrec.domdt, -2.09497409653e-8, TOL));
    assert(isequalRel(satrec.e3, -2.023952527045e-6, TOL));
    assert(isequalRel(satrec.ee2, 3.000360099525e-6, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -3.298847558934e-6, TOL));
    assert(isequalRel(satrec.se3, 2.290506347297e-5, TOL));
    assert(isequalRel(satrec.sgh2, -1.939779689075e-2, TOL));
    assert(isequalRel(satrec.sgh3, -2.730323108731e-3, TOL));
    assert(isequalRel(satrec.sgh4, -2.087272183414e-4, TOL));
    assert(isequalRel(satrec.sh2, -2.47378206738e-4, TOL));
    assert(isequalRel(satrec.sh3, -1.070558033105e-3, TOL));
    assert(isequalRel(satrec.si2, -1.04341984531e-3, TOL));
    assert(isequalRel(satrec.si3, 2.771277863689e-4, TOL));
    assert(isequalRel(satrec.sl2, 1.883089760893e-2, TOL));
    assert(isequalRel(satrec.sl3, 2.55866163592e-3, TOL));
    assert(isequalRel(satrec.sl4, 4.870307806874e-4, TOL));
    assert(isequalRel(satrec.gsto, 4.943902851905, TOL));
    assert(isequalRel(satrec.xfact, -4.375061997072e-3, TOL));
    assert(isequalRel(satrec.xgh2, 1.723156593166e-3, TOL));
    assert(isequalRel(satrec.xgh3, 2.484248746878e-3, TOL));
    assert(isequalRel(satrec.xgh4, -1.098826820044e-4, TOL));
    assert(isequalRel(satrec.xh2, -1.51043991948e-4, TOL));
    assert(isequalRel(satrec.xh3, 1.680607206591e-4, TOL));
    assert(isequalRel(satrec.xi2, 1.739604100604e-4, TOL));
    assert(isequalRel(satrec.xi3, 1.380206186465e-4, TOL));
    assert(isequalRel(satrec.xl2, -1.687937988178e-3, TOL));
    assert(isequalRel(satrec.xl3, -2.328138479321e-3, TOL));
    assert(isequalRel(satrec.xl4, 2.56393242941e-4, TOL));
    assert(isequalRel(satrec.xlamo, 1.954280633142, TOL));
    assert(isequalRel(satrec.zmol, 1.634038675524, TOL));
    assert(isequalRel(satrec.zmos, 2.966933705124, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 1.954280633142, TOL));
    assert(isequalRel(satrec.xni, 4.313874514604e-3, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 14128

test("72, satin,  1.878400000000e-04,  5.596327000000e-01,  2.060567415771e+04,  4.278836976885e+00,  1.083685404539e+00,  8.372169888892e-01,  2.131535163460e-02,  5.149138427074e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 1.6925e4,
        epochyr: 6.0,
        epochdays: 1.5167415771e2,
        ndot: 7.729123930576e-8,
        nddot: -6.5052148227e-16,
        bstar: 1.8784e-4,
        inclo: 1.083685404539,
        nodeo: 5.149138427074,
        ecco: 5.596327e-1,
        argpo: 4.278836976885,
        mo: 8.372169888892e-1,
        no: 2.13153516346e-2,
        a: 2.300337259586,
        alta: 2.587681211079,
        altp: 1.29933080933e-2,
        jdsatepoch: 2.453887174158e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.8784e-4,
        5.596327e-1,
        2.060567415771e4,
        4.278836976885,
        1.083685404539,
        8.372169888892e-1,
        2.13153516346e-2,
        5.149138427074
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 1.6925e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.5167415771e2, TOL));
    assert(isequalRel(satrec.ndot, 7.729123930576e-8, TOL));
    assert(isequalRel(satrec.nddot, -6.5052148227e-16, TOL));
    assert(isequalRel(satrec.bstar, 1.8784e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.083685404539, TOL));
    assert(isequalRel(satrec.nodeo, 5.149138427074, TOL));
    assert(isequalRel(satrec.ecco, 5.596327e-1, TOL));
    assert(isequalRel(satrec.argpo, 4.278836976885, TOL));
    assert(isequalRel(satrec.mo, 8.372169888892e-1, TOL));
    assert(isequalRel(satrec.no, 2.131732105901e-2, TOL));
    assert(isequalRel(satrec.a, 2.300337259586, TOL));
    assert(isequalRel(satrec.alta, 2.587681211079, TOL));
    assert(isequalRel(satrec.altp, 1.29933080933e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453887174158e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.036155981069e-3, TOL));
    assert(isequalRel(satrec.con41, -3.427179465249e-1, TOL));
    assert(isequalRel(satrec.cc1, 2.418296387339e-6, TOL));
    assert(isequalRel(satrec.cc4, 1.320286569381e-2, TOL));
    assert(isequalRel(satrec.cc5, 9.335374337378e-1, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 4.611401199408, TOL));
    assert(isequalRel(satrec.eta, 9.924481486794e-1, TOL));
    assert(isequalRel(satrec.argpdot, 6.555617764618e-7, TOL));
    assert(isequalRel(satrec.omgcof, -2.050582310845e-16, TOL));
    assert(isequalRel(satrec.sinmao, 7.427826822235e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 3.627444581008e-6, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 7.80905982175e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 5.336581247751e-1, TOL));
    assert(isequalRel(satrec.mdot, 2.131535165822e-2, TOL));
    assert(isequalRel(satrec.nodedot, -6.488927718517e-6, TOL));
    assert(isequalRel(satrec.xlcof, 1.884597590117e-3, TOL));
    assert(isequalRel(satrec.xmcof, -4.813611076178e-12, TOL));
    assert(isequalRel(satrec.nodecf, -3.774194128382e-11, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, -2.324540208861e-9, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, -9.012956177194e-9, TOL));
    assert(isequalRel(satrec.dmdt, 3.250770527931e-8, TOL));
    assert(isequalRel(satrec.dnodt, -2.039277854983e-8, TOL));
    assert(isequalRel(satrec.domdt, -1.115284366841e-8, TOL));
    assert(isequalRel(satrec.e3, -1.668567580056e-4, TOL));
    assert(isequalRel(satrec.ee2, -8.275330366745e-5, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 1.125966825154e-3, TOL));
    assert(isequalRel(satrec.se3, 5.6850806024e-5, TOL));
    assert(isequalRel(satrec.sgh2, -8.864271738038e-5, TOL));
    assert(isequalRel(satrec.sgh3, 1.625809438486e-3, TOL));
    assert(isequalRel(satrec.sgh4, -3.500523155064e-5, TOL));
    assert(isequalRel(satrec.sh2, 2.744561082561e-4, TOL));
    assert(isequalRel(satrec.sh3, -9.759618675546e-4, TOL));
    assert(isequalRel(satrec.si2, -4.991454790905e-4, TOL));
    assert(isequalRel(satrec.si3, -4.573037379522e-4, TOL));
    assert(isequalRel(satrec.sl2, 1.462141038683e-4, TOL));
    assert(isequalRel(satrec.sl3, -1.456991037415e-3, TOL));
    assert(isequalRel(satrec.sl4, 1.117866087106e-4, TOL));
    assert(isequalRel(satrec.gsto, 2.298863660699, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 2.432700701456e-4, TOL));
    assert(isequalRel(satrec.xgh3, -1.126161998557e-4, TOL));
    assert(isequalRel(satrec.xgh4, -1.842820863294e-5, TOL));
    assert(isequalRel(satrec.xh2, -1.621327565099e-4, TOL));
    assert(isequalRel(satrec.xh3, 5.347365712173e-5, TOL));
    assert(isequalRel(satrec.xi2, -1.237488399592e-5, TOL));
    assert(isequalRel(satrec.xi3, 1.015094158511e-4, TOL));
    assert(isequalRel(satrec.xl2, -2.580143538619e-4, TOL));
    assert(isequalRel(satrec.xl3, 5.639729900996e-5, TOL));
    assert(isequalRel(satrec.xl4, 5.884911644441e-5, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 2.363784803869, TOL));
    assert(isequalRel(satrec.zmos, 2.547991747703, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 16925

test("72, satin,  0.000000000000e+00,  7.864447000000e-01,  2.045279166667e+04,  3.426128445555e+00,  2.155725972308e-01,  6.222933050742e+00,  1.077308058718e-03,  3.271188586538e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.0413e4,
        epochyr: 5.0,
        epochdays: 3.6379166667e2,
        ndot: 0.0,
        nddot: 0.0,
        bstar: 0.0,
        inclo: 2.155725972308e-1,
        nodeo: 3.271188586538,
        ecco: 7.864447e-1,
        argpo: 3.426128445555,
        mo: 6.222933050742,
        no: 1.077308058718e-3,
        a: 1.682777032576e1,
        alta: 2.906188111126e1,
        altp: 2.593659540248,
        jdsatepoch: 2.453734291667e6
    };
    satrec = sgp4init(
        72,
        satin,
        0.0,
        7.864447e-1,
        2.045279166667e4,
        3.426128445555,
        2.155725972308e-1,
        6.222933050742,
        1.077308058718e-3,
        3.271188586538
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.0413e4, TOL));
    assert(isequalRel(satrec.epochyr, 5.0, TOL));
    assert(isequalRel(satrec.epochdays, 3.6379166667e2, TOL));
    assert(isequalRel(satrec.ndot, 0.0, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 0.0, TOL));
    assert(isequalRel(satrec.inclo, 2.155725972308e-1, TOL));
    assert(isequalRel(satrec.nodeo, 3.271188586538, TOL));
    assert(isequalRel(satrec.ecco, 7.864447e-1, TOL));
    assert(isequalRel(satrec.argpo, 3.426128445555, TOL));
    assert(isequalRel(satrec.mo, 6.222933050742, TOL));
    assert(isequalRel(satrec.no, 1.077283640185e-3, TOL));
    assert(isequalRel(satrec.a, 1.682777032576e1, TOL));
    assert(isequalRel(satrec.alta, 2.906188111126e1, TOL));
    assert(isequalRel(satrec.altp, 2.593659540248, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453734291667e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 2.508131883204e-4, TOL));
    assert(isequalRel(satrec.con41, 1.862731633406, TOL));
    assert(isequalRel(satrec.cc1, 0.0, TOL));
    assert(isequalRel(satrec.cc4, 9.750860292069e-14, TOL));
    assert(isequalRel(satrec.cc5, 1.358849252297e-10, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 6.181481065556, TOL));
    assert(isequalRel(satrec.eta, 8.367780746978e-1, TOL));
    assert(isequalRel(satrec.argpdot, 8.005078790527e-8, TOL));
    assert(isequalRel(satrec.omgcof, -0.0, TOL));
    assert(isequalRel(satrec.sinmao, -6.021580708088e-2, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 0.0, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 4.575612219784e-2, TOL));
    assert(isequalRel(satrec.x7thm1, 5.679707144615, TOL));
    assert(isequalRel(satrec.mdot, 1.077308058974e-3, TOL));
    assert(isequalRel(satrec.nodedot, -4.147025214065e-8, TOL));
    assert(isequalRel(satrec.xlcof, 5.001580578347e-4, TOL));
    assert(isequalRel(satrec.xmcof, -0.0, TOL));
    assert(isequalRel(satrec.nodecf, -0.0, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 9.991744175572e-8, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, -2.656246157481e-7, TOL));
    assert(isequalRel(satrec.dmdt, -7.442607144689e-7, TOL));
    assert(isequalRel(satrec.dnodt, -7.900872576398e-7, TOL));
    assert(isequalRel(satrec.domdt, 9.925475448625e-7, TOL));
    assert(isequalRel(satrec.e3, -4.548826202443e-3, TOL));
    assert(isequalRel(satrec.ee2, 2.057187923104e-3, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 2.969569919355e-2, TOL));
    assert(isequalRel(satrec.se3, 1.468368332662e-2, TOL));
    assert(isequalRel(satrec.sgh2, -1.634808994984e-2, TOL));
    assert(isequalRel(satrec.sgh3, 4.324216378214e-2, TOL));
    assert(isequalRel(satrec.sgh4, -5.162579880111e-4, TOL));
    assert(isequalRel(satrec.sh2, 1.425174198066e-2, TOL));
    assert(isequalRel(satrec.sh3, 4.931955088329e-3, TOL));
    assert(isequalRel(satrec.si2, 5.144176519066e-2, TOL));
    assert(isequalRel(satrec.si3, -8.646214930954e-4, TOL));
    assert(isequalRel(satrec.sl2, 3.951910009817e-2, TOL));
    assert(isequalRel(satrec.sl3, -1.241558054094e-1, TOL));
    assert(isequalRel(satrec.sl4, 2.467220444289e-3, TOL));
    assert(isequalRel(satrec.gsto, 4.071885638059e-1, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 6.919617584769e-3, TOL));
    assert(isequalRel(satrec.xgh3, 2.084732624778e-3, TOL));
    assert(isequalRel(satrec.xgh4, -2.717796594982e-4, TOL));
    assert(isequalRel(satrec.xh2, 7.186248636015e-4, TOL));
    assert(isequalRel(satrec.xh3, -2.561986795698e-3, TOL));
    assert(isequalRel(satrec.xi2, -5.475272881099e-4, TOL));
    assert(isequalRel(satrec.xi3, -9.211923499783e-3, TOL));
    assert(isequalRel(satrec.xl2, -2.030877598251e-2, TOL));
    assert(isequalRel(satrec.xl3, -4.76734155212e-3, TOL));
    assert(isequalRel(satrec.xl4, 1.298847374429e-3, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 5.201540682068, TOL));
    assert(isequalRel(satrec.zmos, 6.201295960309, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 20413

test("72, satin, -1.352500000000e-04,  7.421690000000e-01,  2.063002341244e+04,  4.416489349660e+00,  1.085156717098e+00,  3.517903093612e-01,  8.782060201923e-03,  3.455919470557e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.1897e4,
        epochyr: 6.0,
        epochdays: 1.7602341244e2,
        ndot: -3.857298850328e-11,
        nddot: 0.0,
        bstar: -1.3525e-4,
        inclo: 1.085156717098,
        nodeo: 3.455919470557,
        ecco: 7.42169e-1,
        argpo: 4.41648934966,
        mo: 3.517903093612e-1,
        no: 8.782060201923e-3,
        a: 4.154533274527,
        alta: 6.237899080349,
        altp: 7.116746870457e-2,
        jdsatepoch: 2.453911523412e6
    };
    satrec = sgp4init(
        72,
        satin,
        -1.3525e-4,
        7.42169e-1,
        2.063002341244e4,
        4.41648934966,
        1.085156717098,
        3.517903093612e-1,
        8.782060201923e-3,
        3.455919470557
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.1897e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7602341244e2, TOL));
    assert(isequalRel(satrec.ndot, -3.857298850328e-11, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, -1.3525e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.085156717098, TOL));
    assert(isequalRel(satrec.nodeo, 3.455919470557, TOL));
    assert(isequalRel(satrec.ecco, 7.42169e-1, TOL));
    assert(isequalRel(satrec.argpo, 4.41648934966, TOL));
    assert(isequalRel(satrec.mo, 3.517903093612e-1, TOL));
    assert(isequalRel(satrec.no, 8.782535528761e-3, TOL));
    assert(isequalRel(satrec.a, 4.154533274527, TOL));
    assert(isequalRel(satrec.alta, 6.237899080349, TOL));
    assert(isequalRel(satrec.altp, 7.116746870457e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453911523412e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.036962365648e-3, TOL));
    assert(isequalRel(satrec.con41, -3.463657886765e-1, TOL));
    assert(isequalRel(satrec.cc1, -5.832456330155e-11, TOL));
    assert(isequalRel(satrec.cc4, 2.711979715083e-7, TOL));
    assert(isequalRel(satrec.cc5, 4.632159335659e-5, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 7.090728303385, TOL));
    assert(isequalRel(satrec.eta, 9.812550443388e-1, TOL));
    assert(isequalRel(satrec.argpdot, 1.816762761577e-7, TOL));
    assert(isequalRel(satrec.omgcof, 1.188366956468e-20, TOL));
    assert(isequalRel(satrec.sinmao, 3.445790247894e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, -8.748684495232e-11, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 7.821219295588e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 5.251464930881e-1, TOL));
    assert(isequalRel(satrec.mdot, 8.782060217382e-3, TOL));
    assert(isequalRel(satrec.nodedot, -1.910984836962e-6, TOL));
    assert(isequalRel(satrec.xlcof, 1.885437909935e-3, TOL));
    assert(isequalRel(satrec.xmcof, 2.388216628336e-15, TOL));
    assert(isequalRel(satrec.nodecf, 1.752965458283e-16, TOL));
    assert(isequalRel(satrec.irez, 2.0, TOL));
    assert(isequalRel(satrec.d2201, -1.35843048033e-11, TOL));
    assert(isequalRel(satrec.d2211, 8.393534226859e-11, TOL));
    assert(isequalRel(satrec.d3210, -7.731467500396e-12, TOL));
    assert(isequalRel(satrec.d3222, -1.225068944742e-11, TOL));
    assert(isequalRel(satrec.d4410, 4.702956210526e-12, TOL));
    assert(isequalRel(satrec.d4422, 8.003291640479e-12, TOL));
    assert(isequalRel(satrec.d5220, -6.224656265138e-12, TOL));
    assert(isequalRel(satrec.d5232, 2.558930440722e-12, TOL));
    assert(isequalRel(satrec.d5421, -5.640794406041e-12, TOL));
    assert(isequalRel(satrec.d5433, -3.910753384831e-12, TOL));
    assert(isequalRel(satrec.dedt, 1.441546149773e-8, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, -1.685608671533e-9, TOL));
    assert(isequalRel(satrec.dmdt, 1.94884956772e-7, TOL));
    assert(isequalRel(satrec.dnodt, -6.831807033508e-9, TOL));
    assert(isequalRel(satrec.domdt, -7.014119890435e-8, TOL));
    assert(isequalRel(satrec.e3, -5.809658803806e-5, TOL));
    assert(isequalRel(satrec.ee2, 1.029719050358e-4, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -5.827763896555e-4, TOL));
    assert(isequalRel(satrec.se3, 7.782941825865e-4, TOL));
    assert(isequalRel(satrec.sgh2, -1.403967386252e-5, TOL));
    assert(isequalRel(satrec.sgh3, -1.23224304936e-3, TOL));
    assert(isequalRel(satrec.sgh4, -6.871312109088e-5, TOL));
    assert(isequalRel(satrec.sh2, 1.040864137284e-3, TOL));
    assert(isequalRel(satrec.sh3, 1.047903595216e-3, TOL));
    assert(isequalRel(satrec.si2, 1.704326979978e-3, TOL));
    assert(isequalRel(satrec.si3, 5.269146587838e-4, TOL));
    assert(isequalRel(satrec.sl2, 6.958156453603e-4, TOL));
    assert(isequalRel(satrec.sl3, -1.138733166786e-3, TOL));
    assert(isequalRel(satrec.sl4, 2.956953768062e-4, TOL));
    assert(isequalRel(satrec.gsto, 4.912171010008, TOL));
    assert(isequalRel(satrec.xfact, -8.754654235733e-3, TOL));
    assert(isequalRel(satrec.xgh2, -1.645505874222e-4, TOL));
    assert(isequalRel(satrec.xgh3, 1.06742686648e-4, TOL));
    assert(isequalRel(satrec.xgh4, -3.617344251676e-5, TOL));
    assert(isequalRel(satrec.xh2, -7.385557332388e-5, TOL));
    assert(isequalRel(satrec.xh3, -1.37934692438e-4, TOL));
    assert(isequalRel(satrec.xi2, -1.440041796867e-4, TOL));
    assert(isequalRel(satrec.xi3, -2.339553088854e-4, TOL));
    assert(isequalRel(satrec.xl2, -1.733725252342e-4, TOL));
    assert(isequalRel(satrec.xl3, 1.029442407285e-4, TOL));
    assert(isequalRel(satrec.xl4, 1.556663348362e-4, TOL));
    assert(isequalRel(satrec.xlamo, -2.560712769541, TOL));
    assert(isequalRel(satrec.zmol, 1.632890219145, TOL));
    assert(isequalRel(satrec.zmos, 2.966847067538, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, -2.560712769541, TOL));
    assert(isequalRel(satrec.xni, 8.782535528761e-3, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 21897

test("72, satin,  4.994900000000e-04,  3.087230000000e-02,  2.054846235912e+04,  4.676136746492e+00,  1.084697695505e+00,  1.548791215586e+00,  6.962749021661e-02,  1.352103080862e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.2312e4,
        epochyr: 6.0,
        epochdays: 9.446235912e1,
        ndot: 3.030085476634e-6,
        nddot: 1.723108624943e-14,
        bstar: 4.9949e-4,
        inclo: 1.084697695505,
        nodeo: 1.352103080862,
        ecco: 3.08723e-2,
        argpo: 4.676136746492,
        mo: 1.548791215586,
        no: 6.962749021661e-2,
        a: 1.044879048565,
        alta: 7.713686801602e-2,
        altp: 1.2621229114e-2,
        jdsatepoch: 2.453829962359e6
    };
    satrec = sgp4init(
        72,
        satin,
        4.9949e-4,
        3.08723e-2,
        2.054846235912e4,
        4.676136746492,
        1.084697695505,
        1.548791215586,
        6.962749021661e-2,
        1.352103080862
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.2312e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 9.446235912e1, TOL));
    assert(isequalRel(satrec.ndot, 3.030085476634e-6, TOL));
    assert(isequalRel(satrec.nddot, 1.723108624943e-14, TOL));
    assert(isequalRel(satrec.bstar, 4.9949e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.084697695505, TOL));
    assert(isequalRel(satrec.nodeo, 1.352103080862, TOL));
    assert(isequalRel(satrec.ecco, 3.08723e-2, TOL));
    assert(isequalRel(satrec.argpo, 4.676136746492, TOL));
    assert(isequalRel(satrec.mo, 1.548791215586, TOL));
    assert(isequalRel(satrec.no, 6.964539419426e-2, TOL));
    assert(isequalRel(satrec.a, 1.044879048565, TOL));
    assert(isequalRel(satrec.alta, 7.713686801602e-2, TOL));
    assert(isequalRel(satrec.altp, 1.2621229114e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453829962359e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.036711029802e-3, TOL));
    assert(isequalRel(satrec.con41, -3.452285162292e-1, TOL));
    assert(isequalRel(satrec.cc1, 3.375003429857e-5, TOL));
    assert(isequalRel(satrec.cc4, 1.304503580746e-1, TOL));
    assert(isequalRel(satrec.cc5, 2.91035615816, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 1.052100787201, TOL));
    assert(isequalRel(satrec.eta, 7.759622143528e-1, TOL));
    assert(isequalRel(satrec.argpdot, 4.626953140656e-6, TOL));
    assert(isequalRel(satrec.omgcof, -8.249597709173e-8, TOL));
    assert(isequalRel(satrec.sinmao, 9.997578973099e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 5.062505144786e-5, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 7.817428387431e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 5.278001287984e-1, TOL));
    assert(isequalRel(satrec.mdot, 6.962748907452e-2, TOL));
    assert(isequalRel(satrec.nodedot, -4.84442041201e-5, TOL));
    assert(isequalRel(satrec.xlcof, 1.885176460051e-3, TOL));
    assert(isequalRel(satrec.xmcof, -2.814305098253e-4, TOL));
    assert(isequalRel(satrec.nodecf, -5.724210237297e-9, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 0.0, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 0.0, TOL));
    assert(isequalRel(satrec.dmdt, 0.0, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 0.0, TOL));
    assert(isequalRel(satrec.e3, 0.0, TOL));
    assert(isequalRel(satrec.ee2, 0.0, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 0.0, TOL));
    assert(isequalRel(satrec.se3, 0.0, TOL));
    assert(isequalRel(satrec.sgh2, 0.0, TOL));
    assert(isequalRel(satrec.sgh3, 0.0, TOL));
    assert(isequalRel(satrec.sgh4, 0.0, TOL));
    assert(isequalRel(satrec.sh2, 0.0, TOL));
    assert(isequalRel(satrec.sh3, 0.0, TOL));
    assert(isequalRel(satrec.si2, 0.0, TOL));
    assert(isequalRel(satrec.si3, 0.0, TOL));
    assert(isequalRel(satrec.sl2, 0.0, TOL));
    assert(isequalRel(satrec.sl3, 0.0, TOL));
    assert(isequalRel(satrec.sl4, 0.0, TOL));
    assert(isequalRel(satrec.gsto, 6.267076519855, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 0.0, TOL));
    assert(isequalRel(satrec.xgh3, 0.0, TOL));
    assert(isequalRel(satrec.xgh4, 0.0, TOL));
    assert(isequalRel(satrec.xh2, 0.0, TOL));
    assert(isequalRel(satrec.xh3, 0.0, TOL));
    assert(isequalRel(satrec.xi2, 0.0, TOL));
    assert(isequalRel(satrec.xi3, 0.0, TOL));
    assert(isequalRel(satrec.xl2, 0.0, TOL));
    assert(isequalRel(satrec.xl3, 0.0, TOL));
    assert(isequalRel(satrec.xl4, 0.0, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 0.0, TOL));
    assert(isequalRel(satrec.zmos, 0.0, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "n");
    equal(satrec.init, "n");
});
// 22312
//# *** error: t:= 494.202867 *** code =   1

test("72, satin,  2.986800000000e-04,  7.541712000000e-01,  2.063055909107e+04,  4.421379762224e+00,  1.108345161540e+00,  3.276925483789e-01,  8.581775554476e-03,  6.186235757890e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.2674e4,
        epochyr: 6.0,
        epochdays: 1.7655909107e2,
        ndot: 6.426811360208e-11,
        nddot: 0.0,
        bstar: 2.9868e-4,
        inclo: 1.10834516154,
        nodeo: 6.18623575789,
        ecco: 7.541712e-1,
        argpo: 4.421379762224,
        mo: 3.276925483789e-1,
        no: 8.581775554476e-3,
        a: 4.218924436776,
        alta: 6.400715741968,
        altp: 3.713313158324e-2,
        jdsatepoch: 2.453912059091e6
    };
    satrec = sgp4init(
        72,
        satin,
        2.9868e-4,
        7.541712e-1,
        2.063055909107e4,
        4.421379762224,
        1.10834516154,
        3.276925483789e-1,
        8.581775554476e-3,
        6.18623575789
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.2674e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7655909107e2, TOL));
    assert(isequalRel(satrec.ndot, 6.426811360208e-11, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 2.9868e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.10834516154, TOL));
    assert(isequalRel(satrec.nodeo, 6.18623575789, TOL));
    assert(isequalRel(satrec.ecco, 7.541712e-1, TOL));
    assert(isequalRel(satrec.argpo, 4.421379762224, TOL));
    assert(isequalRel(satrec.mo, 3.276925483789e-1, TOL));
    assert(isequalRel(satrec.no, 8.58233251624e-3, TOL));
    assert(isequalRel(satrec.a, 4.218924436776, TOL));
    assert(isequalRel(satrec.alta, 6.400715741968, TOL));
    assert(isequalRel(satrec.altp, 3.713313158324e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453912059091e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.049373693837e-3, TOL));
    assert(isequalRel(satrec.con41, -4.028688855919e-1, TOL));
    assert(isequalRel(satrec.cc1, 2.595887844361e-9, TOL));
    assert(isequalRel(satrec.cc4, 5.255038362816e-6, TOL));
    assert(isequalRel(satrec.cc5, 9.189456533467e-4, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 7.295146735799, TOL));
    assert(isequalRel(satrec.eta, 9.922473468655e-1, TOL));
    assert(isequalRel(satrec.argpdot, -1.142224275335e-8, TOL));
    assert(isequalRel(satrec.omgcof, -2.270642728079e-20, TOL));
    assert(isequalRel(satrec.sinmao, 3.218592207367e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 3.893831766541e-9, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 8.009562951973e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 3.933059336189e-1, TOL));
    assert(isequalRel(satrec.mdot, 8.581775564227e-3, TOL));
    assert(isequalRel(satrec.nodedot, -1.877848338725e-6, TOL));
    assert(isequalRel(satrec.xlcof, 1.897798118762e-3, TOL));
    assert(isequalRel(satrec.xmcof, -4.732771188141e-15, TOL));
    assert(isequalRel(satrec.nodecf, -7.360860344711e-15, TOL));
    assert(isequalRel(satrec.irez, 2.0, TOL));
    assert(isequalRel(satrec.d2201, -1.241189028817e-11, TOL));
    assert(isequalRel(satrec.d2211, 8.551864262335e-11, TOL));
    assert(isequalRel(satrec.d3210, -6.602089272382e-12, TOL));
    assert(isequalRel(satrec.d3222, -1.302466004394e-11, TOL));
    assert(isequalRel(satrec.d4410, 4.891528985291e-12, TOL));
    assert(isequalRel(satrec.d4422, 8.891260588609e-12, TOL));
    assert(isequalRel(satrec.d5220, -6.477888050339e-12, TOL));
    assert(isequalRel(satrec.d5232, 2.138467008675e-12, TOL));
    assert(isequalRel(satrec.d5421, -5.750904185904e-12, TOL));
    assert(isequalRel(satrec.d5433, -4.51054933261e-12, TOL));
    assert(isequalRel(satrec.dedt, 7.330390566401e-9, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, -2.350896248702e-8, TOL));
    assert(isequalRel(satrec.dmdt, -2.726008010046e-9, TOL));
    assert(isequalRel(satrec.dnodt, -9.800554699737e-8, TOL));
    assert(isequalRel(satrec.domdt, 3.479071142642e-8, TOL));
    assert(isequalRel(satrec.e3, -1.880237977527e-4, TOL));
    assert(isequalRel(satrec.ee2, 6.551908742706e-4, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -1.668215845123e-3, TOL));
    assert(isequalRel(satrec.se3, 3.610858069376e-3, TOL));
    assert(isequalRel(satrec.sgh2, -4.299448087716e-3, TOL));
    assert(isequalRel(satrec.sgh3, -1.722984622184e-3, TOL));
    assert(isequalRel(satrec.sgh4, -6.889598529018e-5, TOL));
    assert(isequalRel(satrec.sh2, 3.935976325614e-3, TOL));
    assert(isequalRel(satrec.sh3, 3.05974318466e-3, TOL));
    assert(isequalRel(satrec.si2, 1.789568818084e-3, TOL));
    assert(isequalRel(satrec.si3, 2.366876188168e-4, TOL));
    assert(isequalRel(satrec.sl2, 9.202998763432e-3, TOL));
    assert(isequalRel(satrec.sl3, 2.742276317175e-3, TOL));
    assert(isequalRel(satrec.sl4, 3.044773891692e-4, TOL));
    assert(isequalRel(satrec.gsto, 2.003968969617, TOL));
    assert(isequalRel(satrec.xfact, -8.755049561816e-3, TOL));
    assert(isequalRel(satrec.xgh2, 2.558144451794e-4, TOL));
    assert(isequalRel(satrec.xgh3, 7.760342525429e-4, TOL));
    assert(isequalRel(satrec.xgh4, -3.626970983073e-5, TOL));
    assert(isequalRel(satrec.xh2, -4.44280459088e-5, TOL));
    assert(isequalRel(satrec.xh3, -7.585547023917e-4, TOL));
    assert(isequalRel(satrec.xi2, -1.445258766608e-4, TOL));
    assert(isequalRel(satrec.xi3, -2.241607759555e-4, TOL));
    assert(isequalRel(satrec.xl2, -6.443953743437e-4, TOL));
    assert(isequalRel(satrec.xl3, -1.634546261908e-3, TOL));
    assert(isequalRel(satrec.xl4, 1.602895511062e-4, TOL));
    assert(isequalRel(satrec.xlamo, 2.409040817745, TOL));
    assert(isequalRel(satrec.zmol, 1.75503948087, TOL));
    assert(isequalRel(satrec.zmos, 2.976061799015, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 2.409040817745, TOL));
    assert(isequalRel(satrec.xni, 8.58233251624e-3, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 22674

test("72, satin,  7.659000000000e-04,  7.258491000000e-01,  2.062945752052e+04,  5.167015834603e+00,  1.230387309486e-01,  1.449687929999e-01,  9.857037897024e-03,  3.138517383448e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.3177e4,
        epochyr: 6.0,
        epochdays: 1.7545752052e2,
        ndot: 1.169613005677e-11,
        nddot: 0.0,
        bstar: 7.659e-4,
        inclo: 1.230387309486e-1,
        nodeo: 3.138517383448,
        ecco: 7.258491e-1,
        argpo: 5.167015834603,
        mo: 1.449687929999e-1,
        no: 9.857037897024e-3,
        a: 3.846705136955,
        alta: 5.638832598578,
        altp: 5.457767533072e-2,
        jdsatepoch: 2.453910957521e6
    };
    satrec = sgp4init(
        72,
        satin,
        7.659e-4,
        7.258491e-1,
        2.062945752052e4,
        5.167015834603,
        1.230387309486e-1,
        1.449687929999e-1,
        9.857037897024e-3,
        3.138517383448
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.3177e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7545752052e2, TOL));
    assert(isequalRel(satrec.ndot, 1.169613005677e-11, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 7.659e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.230387309486e-1, TOL));
    assert(isequalRel(satrec.nodeo, 3.138517383448, TOL));
    assert(isequalRel(satrec.ecco, 7.258491e-1, TOL));
    assert(isequalRel(satrec.argpo, 5.167015834603, TOL));
    assert(isequalRel(satrec.mo, 1.449687929999e-1, TOL));
    assert(isequalRel(satrec.no, 9.853789469239e-3, TOL));
    assert(isequalRel(satrec.a, 3.846705136955, TOL));
    assert(isequalRel(satrec.alta, 5.638832598578, TOL));
    assert(isequalRel(satrec.altp, 5.457767533072e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453910957521e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.439034777135e-4, TOL));
    assert(isequalRel(satrec.con41, 1.954813125046, TOL));
    assert(isequalRel(satrec.cc1, 1.125288811171e-9, TOL));
    assert(isequalRel(satrec.cc4, 9.659235530288e-7, TOL));
    assert(isequalRel(satrec.cc5, 1.465564872513e-4, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 7.699641690923, TOL));
    assert(isequalRel(satrec.eta, 9.849822474735e-1, TOL));
    assert(isequalRel(satrec.argpdot, 9.499446270781e-6, TOL));
    assert(isequalRel(satrec.omgcof, 2.696879352118e-20, TOL));
    assert(isequalRel(satrec.sinmao, 1.444615501293e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 1.687933216756e-9, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 1.506229165127e-2, TOL));
    assert(isequalRel(satrec.x7thm1, 5.894563958441, TOL));
    assert(isequalRel(satrec.mdot, 9.857038097825e-3, TOL));
    assert(isequalRel(satrec.nodedot, -4.803174199882e-6, TOL));
    assert(isequalRel(satrec.xlcof, 2.875339560094e-4, TOL));
    assert(isequalRel(satrec.xmcof, -2.077874548988e-14, TOL));
    assert(isequalRel(satrec.nodecf, -8.929851828102e-15, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, -1.045444380488e-8, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 2.376724085775e-8, TOL));
    assert(isequalRel(satrec.dmdt, -2.642690499755e-8, TOL));
    assert(isequalRel(satrec.dnodt, -4.838389780477e-7, TOL));
    assert(isequalRel(satrec.domdt, 4.812656940526e-7, TOL));
    assert(isequalRel(satrec.e3, 5.88377187831e-4, TOL));
    assert(isequalRel(satrec.ee2, 1.201802618946e-4, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -3.42460098058e-3, TOL));
    assert(isequalRel(satrec.se3, -1.945460736508e-3, TOL));
    assert(isequalRel(satrec.sgh2, 2.807746435654e-3, TOL));
    assert(isequalRel(satrec.sgh3, -4.28792990199e-3, TOL));
    assert(isequalRel(satrec.sgh4, -6.28550031631e-5, TOL));
    assert(isequalRel(satrec.sh2, -1.27747773131e-4, TOL));
    assert(isequalRel(satrec.sh3, 3.309216641173e-3, TOL));
    assert(isequalRel(satrec.si2, 7.513453732828e-4, TOL));
    assert(isequalRel(satrec.si3, -1.615208443659e-3, TOL));
    assert(isequalRel(satrec.sl2, -6.591258953724e-3, TOL));
    assert(isequalRel(satrec.sl3, 8.653034599493e-3, TOL));
    assert(isequalRel(satrec.sl4, 2.61359641742e-4, TOL));
    assert(isequalRel(satrec.gsto, 1.346832291139, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, -7.58087389708e-4, TOL));
    assert(isequalRel(satrec.xgh3, 8.944532635768e-5, TOL));
    assert(isequalRel(satrec.xgh4, -3.308948578837e-5, TOL));
    assert(isequalRel(satrec.xh2, 4.59217407868e-4, TOL));
    assert(isequalRel(satrec.xh3, -3.581021323765e-4, TOL));
    assert(isequalRel(satrec.xi2, -3.094906804917e-4, TOL));
    assert(isequalRel(satrec.xi3, 8.206020674696e-5, TOL));
    assert(isequalRel(satrec.xl2, 1.595875573261e-3, TOL));
    assert(isequalRel(satrec.xl3, -2.025915791658e-5, TOL));
    assert(isequalRel(satrec.xl4, 1.375905769766e-4, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 1.503851507578, TOL));
    assert(isequalRel(satrec.zmos, 2.957112607744, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 23177

test("72, satin,  1.000000000000e-04,  9.728298000000e-01,  1.637649999999e+04,  5.312084111370e-01,  5.017647066558e-01,  2.356194490192e-02,  3.189367114872e-04,  4.139920985731e-02", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.3333e4,
        epochyr: 9.4e1,
        epochdays: 3.0549999999e2,
        ndot: -5.240714689374e-9,
        nddot: 5.674466379549e-13,
        bstar: 1.0e-4,
        inclo: 5.017647066558e-1,
        nodeo: 4.139920985731e-2,
        ecco: 9.728298e-1,
        argpo: 5.31208411137e-1,
        mo: 2.356194490192e-2,
        no: 3.189367114872e-4,
        a: 3.788350677218e1,
        alta: 7.373771108867e1,
        altp: 2.930245570162e-2,
        jdsatepoch: 2.449658e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.0e-4,
        9.728298e-1,
        1.637649999999e4,
        5.31208411137e-1,
        5.017647066558e-1,
        2.356194490192e-2,
        3.189367114872e-4,
        4.139920985731e-2
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.3333e4, TOL));
    assert(isequalRel(satrec.epochyr, 9.4e1, TOL));
    assert(isequalRel(satrec.epochdays, 3.0549999999e2, TOL));
    assert(isequalRel(satrec.ndot, -5.240714689374e-9, TOL));
    assert(isequalRel(satrec.nddot, 5.674466379549e-13, TOL));
    assert(isequalRel(satrec.bstar, 1.0e-4, TOL));
    assert(isequalRel(satrec.inclo, 5.017647066558e-1, TOL));
    assert(isequalRel(satrec.nodeo, 4.139920985731e-2, TOL));
    assert(isequalRel(satrec.ecco, 9.728298e-1, TOL));
    assert(isequalRel(satrec.argpo, 5.31208411137e-1, TOL));
    assert(isequalRel(satrec.mo, 2.356194490192e-2, TOL));
    assert(isequalRel(satrec.no, 3.189177226396e-4, TOL));
    assert(isequalRel(satrec.a, 3.788350677218e1, TOL));
    assert(isequalRel(satrec.alta, 7.373771108867e1, TOL));
    assert(isequalRel(satrec.altp, 2.930245570162e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.449658e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 5.639581568863e-4, TOL));
    assert(isequalRel(satrec.con41, 1.305993571902, TOL));
    assert(isequalRel(satrec.cc1, 3.721578957178e-10, TOL));
    assert(isequalRel(satrec.cc4, 2.666792794038e-7, TOL));
    assert(isequalRel(satrec.cc5, 1.254245061371e-3, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 7.991104360376, TOL));
    assert(isequalRel(satrec.eta, 9.995358627143e-1, TOL));
    assert(isequalRel(satrec.argpdot, 1.787618353473e-7, TOL));
    assert(isequalRel(satrec.omgcof, 1.758924860415e-27, TOL));
    assert(isequalRel(satrec.sinmao, 2.355976483361e-2, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 5.582368435766e-10, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 2.313354760326e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 4.380651667771, TOL));
    assert(isequalRel(satrec.mdot, 3.18936717334e-4, TOL));
    assert(isequalRel(satrec.nodedot, -1.102439219498e-7, TOL));
    assert(isequalRel(satrec.xlcof, 1.109395794943e-3, TOL));
    assert(isequalRel(satrec.xmcof, -6.973844182638e-20, TOL));
    assert(isequalRel(satrec.nodecf, -7.687599963907e-18, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 2.968135603242e-9, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, -3.439044884764e-7, TOL));
    assert(isequalRel(satrec.dmdt, -3.438051105625e-6, TOL));
    assert(isequalRel(satrec.dnodt, -5.053925231474e-7, TOL));
    assert(isequalRel(satrec.domdt, 6.914571527623e-7, TOL));
    assert(isequalRel(satrec.e3, 6.618130467595e-3, TOL));
    assert(isequalRel(satrec.ee2, -7.503198877723e-3, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 4.629809809051e-2, TOL));
    assert(isequalRel(satrec.se3, 4.271626851497e-2, TOL));
    assert(isequalRel(satrec.sgh2, -4.391480163694e-2, TOL));
    assert(isequalRel(satrec.sgh3, 4.776472532865e-2, TOL));
    assert(isequalRel(satrec.sgh4, -6.536713592881e-4, TOL));
    assert(isequalRel(satrec.sh2, 5.087055669958e-2, TOL));
    assert(isequalRel(satrec.sh3, 2.194123446194e-2, TOL));
    assert(isequalRel(satrec.si2, 8.750068533754e-2, TOL));
    assert(isequalRel(satrec.si3, 3.511647715856e-2, TOL));
    assert(isequalRel(satrec.sl2, 3.692252174204e-1, TOL));
    assert(isequalRel(satrec.sl3, -4.025541103842e-1, TOL));
    assert(isequalRel(satrec.sl4, 9.259903790801e-3, TOL));
    assert(isequalRel(satrec.gsto, 3.849219568564, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, -6.878292929739e-3, TOL));
    assert(isequalRel(satrec.xgh3, -7.775516402908e-3, TOL));
    assert(isequalRel(satrec.xgh4, -3.441197687525e-4, TOL));
    assert(isequalRel(satrec.xh2, -1.179576494215e-2, TOL));
    assert(isequalRel(satrec.xh3, 1.16903746388e-2, TOL));
    assert(isequalRel(satrec.xi2, -1.95658987138e-2, TOL));
    assert(isequalRel(satrec.xi3, 2.039566495961e-2, TOL));
    assert(isequalRel(satrec.xl2, 5.82532842332e-2, TOL));
    assert(isequalRel(satrec.xl3, 6.572632496892e-2, TOL));
    assert(isequalRel(satrec.xl4, 4.874798177836e-3, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 5.60786819621, TOL));
    assert(isequalRel(satrec.zmos, 5.196058843771, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 23333

test("72, satin,  1.295600000000e-03,  5.782022000000e-01,  2.062576535463e+04,  4.789944431026e+00,  1.209984410530e-01,  4.405647364347e-01,  1.953881109593e-02,  4.972443038932e-03", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.3599e4,
        epochyr: 6.0,
        epochdays: 1.7176535463e2,
        ndot: 2.593328981965e-9,
        nddot: 2.71255779652e-16,
        bstar: 1.2956e-3,
        inclo: 1.20998441053e-1,
        nodeo: 4.972443038932e-3,
        ecco: 5.782022e-1,
        argpo: 4.789944431026,
        mo: 4.405647364347e-1,
        no: 1.953881109593e-2,
        a: 2.437742106707,
        alta: 2.847249955837,
        altp: 2.823425757631e-2,
        jdsatepoch: 2.453907265355e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.2956e-3,
        5.782022e-1,
        2.062576535463e4,
        4.789944431026,
        1.20998441053e-1,
        4.405647364347e-1,
        1.953881109593e-2,
        4.972443038932e-3
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.3599e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7176535463e2, TOL));
    assert(isequalRel(satrec.ndot, 2.593328981965e-9, TOL));
    assert(isequalRel(satrec.nddot, 2.71255779652e-16, TOL));
    assert(isequalRel(satrec.bstar, 1.2956e-3, TOL));
    assert(isequalRel(satrec.inclo, 1.20998441053e-1, TOL));
    assert(isequalRel(satrec.nodeo, 4.972443038932e-3, TOL));
    assert(isequalRel(satrec.ecco, 5.782022e-1, TOL));
    assert(isequalRel(satrec.argpo, 4.789944431026, TOL));
    assert(isequalRel(satrec.mo, 4.405647364347e-1, TOL));
    assert(isequalRel(satrec.no, 1.952919673236e-2, TOL));
    assert(isequalRel(satrec.a, 2.437742106707, TOL));
    assert(isequalRel(satrec.alta, 2.847249955837, TOL));
    assert(isequalRel(satrec.altp, 2.823425757631e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453907265355e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.415289540171e-4, TOL));
    assert(isequalRel(satrec.con41, 1.956292061635, TOL));
    assert(isequalRel(satrec.cc1, 8.878203501276e-8, TOL));
    assert(isequalRel(satrec.cc4, 6.394027779674e-5, TOL));
    assert(isequalRel(satrec.cc5, 4.806366086277e-3, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 6.795809884804, TOL));
    assert(isequalRel(satrec.eta, 9.885421902905e-1, TOL));
    assert(isequalRel(satrec.argpdot, 2.370814015402e-5, TOL));
    assert(isequalRel(satrec.omgcof, 6.113727976134e-19, TOL));
    assert(isequalRel(satrec.sinmao, 4.264503433455e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 1.331730525191e-7, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 1.456931278838e-2, TOL));
    assert(isequalRel(satrec.x7thm1, 5.898014810481, TOL));
    assert(isequalRel(satrec.mdot, 1.953881035267e-2, TOL));
    assert(isequalRel(satrec.nodedot, -1.198223317894e-5, TOL));
    assert(isequalRel(satrec.xlcof, 2.827982657092e-4, TOL));
    assert(isequalRel(satrec.xmcof, -6.86543242229e-13, TOL));
    assert(isequalRel(satrec.nodecf, -2.471318865063e-12, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, -4.020215919893e-10, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, -8.390202397339e-10, TOL));
    assert(isequalRel(satrec.dmdt, -3.093486129009e-8, TOL));
    assert(isequalRel(satrec.dnodt, 1.298165842561e-7, TOL));
    assert(isequalRel(satrec.domdt, -1.214482290414e-7, TOL));
    assert(isequalRel(satrec.e3, 1.917688589693e-4, TOL));
    assert(isequalRel(satrec.ee2, 2.600403830731e-4, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -2.021959812118e-3, TOL));
    assert(isequalRel(satrec.se3, 4.664465684109e-4, TOL));
    assert(isequalRel(satrec.sgh2, -7.734435306744e-4, TOL));
    assert(isequalRel(satrec.sgh3, -3.41597765541e-3, TOL));
    assert(isequalRel(satrec.sgh4, -3.761802411036e-5, TOL));
    assert(isequalRel(satrec.sh2, -2.320545150812e-4, TOL));
    assert(isequalRel(satrec.sh3, -6.75628629511e-4, TOL));
    assert(isequalRel(satrec.si2, -1.848221304876e-4, TOL));
    assert(isequalRel(satrec.si3, 1.18572201118e-4, TOL));
    assert(isequalRel(satrec.sl2, 1.207731977398e-3, TOL));
    assert(isequalRel(satrec.sl3, 5.449750974362e-3, TOL));
    assert(isequalRel(satrec.sl4, 1.229961546518e-4, TOL));
    assert(isequalRel(satrec.gsto, 3.217495488339, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, -3.210545596328e-4, TOL));
    assert(isequalRel(satrec.xgh3, 4.292321013506e-4, TOL));
    assert(isequalRel(satrec.xgh4, -1.98036912186e-5, TOL));
    assert(isequalRel(satrec.xh2, -7.343991154683e-5, TOL));
    assert(isequalRel(satrec.xh3, 1.243873320172e-4, TOL));
    assert(isequalRel(satrec.xi2, 4.375268409065e-5, TOL));
    assert(isequalRel(satrec.xi3, 1.33908186429e-5, TOL));
    assert(isequalRel(satrec.xl2, 5.069978526244e-4, TOL));
    assert(isequalRel(satrec.xl3, -6.661160092554e-4, TOL));
    assert(isequalRel(satrec.xl4, 6.475028727329e-5, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 6.61937508863e-1, TOL));
    assert(isequalRel(satrec.zmos, 2.893600055028, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 23599

test("72, satin,  1.000000000000e-04,  2.664000000000e-03,  2.063104061740e+04,  5.429679160382e+00,  6.725800805485e-02,  8.429940287133e-01,  4.397272140132e-03,  1.396474586435e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.4208e4,
        epochyr: 6.0,
        epochdays: 1.770406174e2,
        ndot: -2.848280376519e-12,
        nddot: 0.0,
        bstar: 1.0e-4,
        inclo: 6.725800805485e-2,
        nodeo: 1.396474586435,
        ecco: 2.664e-3,
        argpo: 5.429679160382,
        mo: 8.429940287133e-1,
        no: 4.397272140132e-3,
        a: 6.588667917946,
        alta: 5.606220129279,
        altp: 5.571115706612,
        jdsatepoch: 2.453912540617e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.0e-4,
        2.664e-3,
        2.06310406174e4,
        5.429679160382,
        6.725800805485e-2,
        8.429940287133e-1,
        4.397272140132e-3,
        1.396474586435
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.4208e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.770406174e2, TOL));
    assert(isequalRel(satrec.ndot, -2.848280376519e-12, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.0e-4, TOL));
    assert(isequalRel(satrec.inclo, 6.725800805485e-2, TOL));
    assert(isequalRel(satrec.nodeo, 1.396474586435, TOL));
    assert(isequalRel(satrec.ecco, 2.664e-3, TOL));
    assert(isequalRel(satrec.argpo, 5.429679160382, TOL));
    assert(isequalRel(satrec.mo, 8.429940287133e-1, TOL));
    assert(isequalRel(satrec.no, 4.397108759492e-3, TOL));
    assert(isequalRel(satrec.a, 6.588667917946, TOL));
    assert(isequalRel(satrec.alta, 5.606220129279, TOL));
    assert(isequalRel(satrec.altp, 5.571115706612, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453912540617e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 7.880291502327e-5, TOL));
    assert(isequalRel(satrec.con41, 1.986449532035, TOL));
    assert(isequalRel(satrec.cc1, 5.634192653482e-18, TOL));
    assert(isequalRel(satrec.cc4, 8.790422114838e-16, TOL));
    assert(isequalRel(satrec.cc5, 2.562217395482e-11, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 1.006294703824, TOL));
    assert(isequalRel(satrec.eta, 3.147552327709e-3, TOL));
    assert(isequalRel(satrec.argpdot, 3.271746274001e-7, TOL));
    assert(isequalRel(satrec.omgcof, 1.19234727772e-20, TOL));
    assert(isequalRel(satrec.sinmao, 7.466381822854e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 8.451288980223e-18, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 4.51682265512e-3, TOL));
    assert(isequalRel(satrec.x7thm1, 5.968382241414, TOL));
    assert(isequalRel(satrec.mdot, 4.397272137107e-3, TOL));
    assert(isequalRel(satrec.nodedot, -1.641412021814e-7, TOL));
    assert(isequalRel(satrec.xlcof, 1.57561236931e-4, TOL));
    assert(isequalRel(satrec.xmcof, -1.545771663735e-11, TOL));
    assert(isequalRel(satrec.nodecf, -3.236204349649e-24, TOL));
    assert(isequalRel(satrec.irez, 1.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 9.92869738968e-11, TOL));
    assert(isequalRel(satrec.del1, -6.44692189363e-13, TOL));
    assert(isequalRel(satrec.del2, 1.431037712307e-11, TOL));
    assert(isequalRel(satrec.del3, 2.011847944584e-12, TOL));
    assert(isequalRel(satrec.didt, 3.031124826307e-8, TOL));
    assert(isequalRel(satrec.dmdt, -1.325603345647e-7, TOL));
    assert(isequalRel(satrec.dnodt, 1.822046740261e-8, TOL));
    assert(isequalRel(satrec.domdt, 4.338936906528e-8, TOL));
    assert(isequalRel(satrec.e3, -7.726902954388e-6, TOL));
    assert(isequalRel(satrec.ee2, -5.176143424006e-7, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 3.935674677679e-5, TOL));
    assert(isequalRel(satrec.se3, 3.101303936462e-5, TOL));
    assert(isequalRel(satrec.sgh2, -1.095943198289e-2, TOL));
    assert(isequalRel(satrec.sgh3, 1.543789357065e-2, TOL));
    assert(isequalRel(satrec.sgh4, -2.047755658748e-4, TOL));
    assert(isequalRel(satrec.sh2, 1.170723269672e-3, TOL));
    assert(isequalRel(satrec.sh3, -1.086189670839e-3, TOL));
    assert(isequalRel(satrec.si2, -1.002689875952e-3, TOL));
    assert(isequalRel(satrec.si3, -1.074034874057e-3, TOL));
    assert(isequalRel(satrec.sl2, 1.012379841762e-2, TOL));
    assert(isequalRel(satrec.sl3, -1.636988036209e-2, TOL));
    assert(isequalRel(satrec.sl4, 4.778128024756e-4, TOL));
    assert(isequalRel(satrec.gsto, 5.037771726289, TOL));
    assert(isequalRel(satrec.xfact, -4.375013627469e-3, TOL));
    assert(isequalRel(satrec.xgh2, 2.915576106025e-3, TOL));
    assert(isequalRel(satrec.xgh3, -4.189146928255e-4, TOL));
    assert(isequalRel(satrec.xgh4, -1.078023679235e-4, TOL));
    assert(isequalRel(satrec.xh2, -3.065019513911e-4, TOL));
    assert(isequalRel(satrec.xh3, -3.781667774154e-5, TOL));
    assert(isequalRel(satrec.xi2, -2.998211222471e-5, TOL));
    assert(isequalRel(satrec.xi3, 2.707830507804e-4, TOL));
    assert(isequalRel(satrec.xl2, -2.963865666279e-3, TOL));
    assert(isequalRel(satrec.xl3, 7.064676449674e-4, TOL));
    assert(isequalRel(satrec.xl4, 2.515405161303e-4, TOL));
    assert(isequalRel(satrec.xlamo, 2.631376049241, TOL));
    assert(isequalRel(satrec.zmol, 1.864840548802, TOL));
    assert(isequalRel(satrec.zmos, 2.984345003862, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 2.631376049241, TOL));
    assert(isequalRel(satrec.xni, 4.397108759492e-3, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 24208

test("72, satin,  0.000000000000e+00,  1.765000000000e-04,  1.976268057285e+04,  2.710391608592e-01,  6.981317007977e-06,  3.964236143225e-01,  4.375160345672e-03,  4.255350081140e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.5954e4,
        epochyr: 4.0,
        epochdays: 3.968057285e1,
        ndot: -3.272492347489e-12,
        nddot: 0.0,
        bstar: 0.0,
        inclo: 6.981317007977e-6,
        nodeo: 4.25535008114,
        ecco: 1.765e-4,
        argpo: 2.710391608592e-1,
        mo: 3.964236143225e-1,
        no: 4.375160345672e-3,
        a: 6.610848412423,
        alta: 5.612015227168,
        altp: 5.609681597679,
        jdsatepoch: 2.453044180573e6
    };
    satrec = sgp4init(
        72,
        satin,
        0.0,
        1.765e-4,
        1.976268057285e4,
        2.710391608592e-1,
        6.981317007977e-6,
        3.964236143225e-1,
        4.375160345672e-3,
        4.25535008114
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.5954e4, TOL));
    assert(isequalRel(satrec.epochyr, 4.0, TOL));
    assert(isequalRel(satrec.epochdays, 3.968057285e1, TOL));
    assert(isequalRel(satrec.ndot, -3.272492347489e-12, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 0.0, TOL));
    assert(isequalRel(satrec.inclo, 6.981317007977e-6, TOL));
    assert(isequalRel(satrec.nodeo, 4.25535008114, TOL));
    assert(isequalRel(satrec.ecco, 1.765e-4, TOL));
    assert(isequalRel(satrec.argpo, 2.710391608592e-1, TOL));
    assert(isequalRel(satrec.mo, 3.964236143225e-1, TOL));
    assert(isequalRel(satrec.no, 4.374997775854e-3, TOL));
    assert(isequalRel(satrec.a, 6.610848412423, TOL));
    assert(isequalRel(satrec.alta, 5.612015227168, TOL));
    assert(isequalRel(satrec.altp, 5.609681597679, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453044180573e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 8.185837560538e-9, TOL));
    assert(isequalRel(satrec.con41, 1.999999999854, TOL));
    assert(isequalRel(satrec.cc1, 0.0, TOL));
    assert(isequalRel(satrec.cc4, 7.533441570767e-17, TOL));
    assert(isequalRel(satrec.cc5, 2.530147989142e-11, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 1.000576853575, TOL));
    assert(isequalRel(satrec.eta, 2.084102332028e-4, TOL));
    assert(isequalRel(satrec.argpdot, 3.251801634695e-7, TOL));
    assert(isequalRel(satrec.omgcof, 0.0, TOL));
    assert(isequalRel(satrec.sinmao, 3.86121789552e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 0.0, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 4.873879078104e-11, TOL));
    assert(isequalRel(satrec.x7thm1, 5.999999999659, TOL));
    assert(isequalRel(satrec.mdot, 4.37516034265e-3, TOL));
    assert(isequalRel(satrec.nodedot, -1.625870617371e-7, TOL));
    assert(isequalRel(satrec.xlcof, 1.637167512103e-8, TOL));
    assert(isequalRel(satrec.xmcof, -0.0, TOL));
    assert(isequalRel(satrec.nodecf, -0.0, TOL));
    assert(isequalRel(satrec.irez, 1.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 3.553156778959e-12, TOL));
    assert(isequalRel(satrec.del1, -6.397483834459e-13, TOL));
    assert(isequalRel(satrec.del2, 1.410403339869e-11, TOL));
    assert(isequalRel(satrec.del3, 1.978471517958e-12, TOL));
    assert(isequalRel(satrec.didt, -2.555341579158e-8, TOL));
    assert(isequalRel(satrec.dmdt, -9.603349062976e-8, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 2.359014000576e-8, TOL));
    assert(isequalRel(satrec.e3, -1.443253711966e-7, TOL));
    assert(isequalRel(satrec.ee2, -4.967861523155e-7, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -2.393510838524e-6, TOL));
    assert(isequalRel(satrec.se3, 2.297499314735e-6, TOL));
    assert(isequalRel(satrec.sgh2, -1.26471565845e-2, TOL));
    assert(isequalRel(satrec.sgh3, -1.273189516222e-2, TOL));
    assert(isequalRel(satrec.sgh4, -2.058112167495e-4, TOL));
    assert(isequalRel(satrec.sh2, -1.099705176855e-3, TOL));
    assert(isequalRel(satrec.sh3, 1.167960133285e-3, TOL));
    assert(isequalRel(satrec.si2, 1.176752281702e-3, TOL));
    assert(isequalRel(satrec.si3, 9.654718969481e-4, TOL));
    assert(isequalRel(satrec.sl2, 1.215221622343e-2, TOL));
    assert(isequalRel(satrec.sl3, 1.153344263874e-2, TOL));
    assert(isequalRel(satrec.sl4, 4.80226186307e-4, TOL));
    assert(isequalRel(satrec.gsto, 4.036986406591e-1, TOL));
    assert(isequalRel(satrec.xfact, -4.375016371464e-3, TOL));
    assert(isequalRel(satrec.xgh2, 6.708089970693e-4, TOL));
    assert(isequalRel(satrec.xgh3, -2.691818508104e-3, TOL));
    assert(isequalRel(satrec.xgh4, -1.083475775834e-4, TOL));
    assert(isequalRel(satrec.xh2, -2.68854816114e-4, TOL));
    assert(isequalRel(satrec.xh3, -1.12093166889e-4, TOL));
    assert(isequalRel(satrec.xi2, -7.859155231505e-5, TOL));
    assert(isequalRel(satrec.xi3, 2.67701604071e-4, TOL));
    assert(isequalRel(satrec.xl2, -4.478395208697e-4, TOL));
    assert(isequalRel(satrec.xl3, 2.528608623316e-3, TOL));
    assert(isequalRel(satrec.xl4, 2.528110216744e-4, TOL));
    assert(isequalRel(satrec.xlamo, 4.519114215663, TOL));
    assert(isequalRel(satrec.zmol, 4.917119876491, TOL));
    assert(isequalRel(satrec.zmos, 6.132061041587e-1, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 4.519114215663, TOL));
    assert(isequalRel(satrec.xni, 4.374997775854e-3, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 25954

test("72, satin,  1.000000000000e-04,  3.319000000000e-04,  2.056074503247e+04,  1.504114277393e+00,  2.862339973271e-04,  3.181019641392e+00,  4.375271959478e-03,  4.651962191022e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.69e4,
        epochyr: 6.0,
        epochdays: 1.0674503247e2,
        ndot: 1.363538478121e-12,
        nddot: 0.0,
        bstar: 1.0e-4,
        inclo: 2.862339973271e-4,
        nodeo: 4.651962191022,
        ecco: 3.319e-4,
        argpo: 1.504114277393,
        mo: 3.181019641392,
        no: 4.375271959478e-3,
        a: 6.610735982828,
        alta: 5.6129300861,
        altp: 5.608541879555,
        jdsatepoch: 2.453842245032e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.0e-4,
        3.319e-4,
        2.056074503247e4,
        1.504114277393,
        2.862339973271e-4,
        3.181019641392,
        4.375271959478e-3,
        4.651962191022
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.69e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.0674503247e2, TOL));
    assert(isequalRel(satrec.ndot, 1.363538478121e-12, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.0e-4, TOL));
    assert(isequalRel(satrec.inclo, 2.862339973271e-4, TOL));
    assert(isequalRel(satrec.nodeo, 4.651962191022, TOL));
    assert(isequalRel(satrec.ecco, 3.319e-4, TOL));
    assert(isequalRel(satrec.argpo, 1.504114277393, TOL));
    assert(isequalRel(satrec.mo, 3.181019641392, TOL));
    assert(isequalRel(satrec.no, 4.375109379983e-3, TOL));
    assert(isequalRel(satrec.a, 6.610735982828, TOL));
    assert(isequalRel(satrec.alta, 5.6129300861, TOL));
    assert(isequalRel(satrec.altp, 5.608541879555, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453842245032e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 3.356193354019e-7, TOL));
    assert(isequalRel(satrec.con41, 1.99999975421, TOL));
    assert(isequalRel(satrec.cc1, 5.53616423396e-18, TOL));
    assert(isequalRel(satrec.cc4, 1.245710890009e-16, TOL));
    assert(isequalRel(satrec.cc5, 2.530310386868e-11, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 9.988256529794e-1, TOL));
    assert(isequalRel(satrec.eta, 3.919069069565e-4, TOL));
    assert(isequalRel(satrec.argpdot, 3.251995395495e-7, TOL));
    assert(isequalRel(satrec.omgcof, 4.030634987259e-23, TOL));
    assert(isequalRel(satrec.sinmao, -3.941677380405e-2, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 8.304246350939e-18, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 8.192989897626e-8, TOL));
    assert(isequalRel(satrec.x7thm1, 5.999999426491, TOL));
    assert(isequalRel(satrec.mdot, 4.375271956456e-3, TOL));
    assert(isequalRel(satrec.nodedot, -1.625967594802e-7, TOL));
    assert(isequalRel(satrec.xlcof, 6.712386673667e-7, TOL));
    assert(isequalRel(satrec.xmcof, -9.808470215307e-10, TOL));
    assert(isequalRel(satrec.nodecf, -3.149999696385e-24, TOL));
    assert(isequalRel(satrec.irez, 1.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, -3.521807114582e-12, TOL));
    assert(isequalRel(satrec.del1, -6.398136216901e-13, TOL));
    assert(isequalRel(satrec.del2, 1.410522936173e-11, TOL));
    assert(isequalRel(satrec.del3, 1.978672345716e-12, TOL));
    assert(isequalRel(satrec.didt, -3.07381148514e-8, TOL));
    assert(isequalRel(satrec.dmdt, -1.613621211138e-7, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 9.08879256671e-8, TOL));
    assert(isequalRel(satrec.e3, -4.297357109584e-7, TOL));
    assert(isequalRel(satrec.ee2, -8.575863014313e-7, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 4.977710503291e-6, TOL));
    assert(isequalRel(satrec.se3, -3.758122880832e-6, TOL));
    assert(isequalRel(satrec.sgh2, 1.1702388132e-2, TOL));
    assert(isequalRel(satrec.sgh3, 1.596617407202e-2, TOL));
    assert(isequalRel(satrec.sgh4, -2.058059586065e-4, TOL));
    assert(isequalRel(satrec.sh2, -1.469489949578e-3, TOL));
    assert(isequalRel(satrec.sh3, 7.031457064751e-4, TOL));
    assert(isequalRel(satrec.si2, 6.596584265507e-4, TOL));
    assert(isequalRel(satrec.si3, 1.342180142943e-3, TOL));
    assert(isequalRel(satrec.sl2, -1.219566699304e-2, TOL));
    assert(isequalRel(satrec.sl3, -1.716537238492e-2, TOL));
    assert(isequalRel(satrec.sl4, 4.802139525359e-4, TOL));
    assert(isequalRel(satrec.gsto, 1.971276525301, TOL));
    assert(isequalRel(satrec.xfact, -4.375014382954e-3, TOL));
    assert(isequalRel(satrec.xgh2, 1.468610866371e-3, TOL));
    assert(isequalRel(satrec.xgh3, -2.762771903365e-3, TOL));
    assert(isequalRel(satrec.xgh4, -1.083448094784e-4, TOL));
    assert(isequalRel(satrec.xh2, 2.44397722928e-4, TOL));
    assert(isequalRel(satrec.xh3, 1.980068154638e-4, TOL));
    assert(isequalRel(satrec.xi2, 1.700595365594e-4, TOL));
    assert(isequalRel(satrec.xi3, -2.181240526799e-4, TOL));
    assert(isequalRel(satrec.xl2, -1.672610170679e-3, TOL));
    assert(isequalRel(satrec.xl3, 2.984308463316e-3, TOL));
    assert(isequalRel(satrec.xl4, 2.528045813088e-4, TOL));
    assert(isequalRel(satrec.xlamo, 1.082634277327, TOL));
    assert(isequalRel(satrec.zmol, 4.685095846573, TOL));
    assert(isequalRel(satrec.zmos, 1.775121968701, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 1.082634277327, TOL));
    assert(isequalRel(satrec.xni, 4.375109379983e-3, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 26900

test("72, satin,  1.000000000000e-04,  5.602877000000e-01,  2.062885818871e+04,  2.159817024075e+00,  1.195051373450e+00,  5.280959654819e+00,  8.973503578612e-03,  4.121251198722e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.6975e4,
        epochyr: 6.0,
        epochdays: 1.7485818871e2,
        ndot: 1.878653014299e-11,
        nddot: 0.0,
        bstar: 1.0e-4,
        inclo: 1.19505137345,
        nodeo: 4.121251198722,
        ecco: 5.602877e-1,
        argpo: 2.159817024075,
        mo: 5.280959654819,
        no: 8.973503578612e-3,
        a: 4.09523179194,
        alta: 5.389739793613,
        altp: 8.007237902671e-1,
        jdsatepoch: 2.453910358189e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.0e-4,
        5.602877e-1,
        2.062885818871e4,
        2.159817024075,
        1.19505137345,
        5.280959654819,
        8.973503578612e-3,
        4.121251198722
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.6975e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7485818871e2, TOL));
    assert(isequalRel(satrec.ndot, 1.878653014299e-11, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.0e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.19505137345, TOL));
    assert(isequalRel(satrec.nodeo, 4.121251198722, TOL));
    assert(isequalRel(satrec.ecco, 5.602877e-1, TOL));
    assert(isequalRel(satrec.argpo, 2.159817024075, TOL));
    assert(isequalRel(satrec.mo, 5.280959654819, TOL));
    assert(isequalRel(satrec.no, 8.973959238486e-3, TOL));
    assert(isequalRel(satrec.a, 4.09523179194, TOL));
    assert(isequalRel(satrec.alta, 5.389739793613, TOL));
    assert(isequalRel(satrec.altp, 8.007237902671e-1, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453910358189e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.090732388372e-3, TOL));
    assert(isequalRel(satrec.con41, -5.960087184875e-1, TOL));
    assert(isequalRel(satrec.cc1, 4.81127380574e-15, TOL));
    assert(isequalRel(satrec.cc4, 4.594680777195e-11, TOL));
    assert(isequalRel(satrec.cc5, 7.696169715955e-9, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 2.748275216336, TOL));
    assert(isequalRel(satrec.eta, 7.442528818758e-1, TOL));
    assert(isequalRel(satrec.argpdot, -3.016738966805e-7, TOL));
    assert(isequalRel(satrec.omgcof, -2.62133546976e-20, TOL));
    assert(isequalRel(satrec.sinmao, -8.426714247932e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 7.21691070861e-15, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 8.653362394958e-1, TOL));
    assert(isequalRel(satrec.x7thm1, -5.735367647089e-2, TOL));
    assert(isequalRel(satrec.mdot, 8.973503564981e-3, TOL));
    assert(isequalRel(satrec.nodedot, -6.772847467554e-7, TOL));
    assert(isequalRel(satrec.xlcof, 1.9289086394e-3, TOL));
    assert(isequalRel(satrec.xmcof, -3.327990358418e-15, TOL));
    assert(isequalRel(satrec.nodecf, -7.827127474091e-21, TOL));
    assert(isequalRel(satrec.irez, 2.0, TOL));
    assert(isequalRel(satrec.d2201, -9.786807233862e-12, TOL));
    assert(isequalRel(satrec.d2211, 4.375070167297e-11, TOL));
    assert(isequalRel(satrec.d3210, -7.299736059955e-13, TOL));
    assert(isequalRel(satrec.d3222, -3.088972920727e-12, TOL));
    assert(isequalRel(satrec.d4410, 1.175930799908e-12, TOL));
    assert(isequalRel(satrec.d4422, 1.666014658389e-12, TOL));
    assert(isequalRel(satrec.d5220, -5.223073387126e-13, TOL));
    assert(isequalRel(satrec.d5232, -4.239623278319e-14, TOL));
    assert(isequalRel(satrec.d5421, -5.046358599919e-13, TOL));
    assert(isequalRel(satrec.d5433, -3.893572552863e-13, TOL));
    assert(isequalRel(satrec.dedt, -3.971152052616e-8, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 9.978447336132e-10, TOL));
    assert(isequalRel(satrec.dmdt, 2.773996268752e-9, TOL));
    assert(isequalRel(satrec.dnodt, -6.124174505388e-9, TOL));
    assert(isequalRel(satrec.domdt, 1.574985894206e-8, TOL));
    assert(isequalRel(satrec.e3, -2.267021997425e-4, TOL));
    assert(isequalRel(satrec.ee2, -2.551224465045e-4, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 2.254910627255e-3, TOL));
    assert(isequalRel(satrec.se3, -2.280386619192e-4, TOL));
    assert(isequalRel(satrec.sgh2, -3.389917058225e-3, TOL));
    assert(isequalRel(satrec.sgh3, 1.654422300963e-3, TOL));
    assert(isequalRel(satrec.sgh4, -8.3109264815e-5, TOL));
    assert(isequalRel(satrec.sh2, -9.721139826925e-4, TOL));
    assert(isequalRel(satrec.sh3, -2.919237403379e-3, TOL));
    assert(isequalRel(satrec.si2, 6.537866741737e-4, TOL));
    assert(isequalRel(satrec.si3, 3.149325116495e-3, TOL));
    assert(isequalRel(satrec.sl2, 9.242202107515e-3, TOL));
    assert(isequalRel(satrec.sl3, -3.312631236734e-3, TOL));
    assert(isequalRel(satrec.sl4, 2.656187161612e-4, TOL));
    assert(isequalRel(satrec.gsto, 3.853994597295, TOL));
    assert(isequalRel(satrec.xfact, -8.752357893374e-3, TOL));
    assert(isequalRel(satrec.xgh2, 5.870668970928e-4, TOL));
    assert(isequalRel(satrec.xgh3, 3.411079917117e-4, TOL));
    assert(isequalRel(satrec.xgh4, -4.375217084695e-5, TOL));
    assert(isequalRel(satrec.xh2, -2.939157970135e-4, TOL));
    assert(isequalRel(satrec.xh3, 4.419605173894e-4, TOL));
    assert(isequalRel(satrec.xi2, 3.177266725877e-4, TOL));
    assert(isequalRel(satrec.xi3, -4.193605290405e-4, TOL));
    assert(isequalRel(satrec.xl2, -1.435489158349e-3, TOL));
    assert(isequalRel(satrec.xl3, -9.317921317489e-4, TOL));
    assert(isequalRel(satrec.xl4, 1.398327307491e-4, TOL));
    assert(isequalRel(satrec.xlamo, 5.815472857673, TOL));
    assert(isequalRel(satrec.zmol, 1.3671875939, TOL));
    assert(isequalRel(satrec.zmos, 2.946802915738, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 5.815472857673, TOL));
    assert(isequalRel(satrec.xni, 8.973959238486e-3, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 26975

test("72, satin,  3.594000000000e-05,  8.840000000000e-05,  2.063178615833e+04,  1.539317568406e+00,  1.717897912141e+00,  4.746112232192e+00,  6.263454709052e-02,  4.323112489349e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.8057e4,
        epochyr: 6.0,
        epochdays: 1.7778615833e2,
        ndot: 1.818051304161e-12,
        nddot: 0.0,
        bstar: 3.594e-5,
        inclo: 1.717897912141,
        nodeo: 4.323112489349,
        ecco: 8.84e-5,
        argpo: 1.539317568406,
        mo: 4.746112232192,
        no: 6.263454709052e-2,
        a: 1.121270907313,
        alta: 1.213700276612e-1,
        altp: 1.211717869648e-1,
        jdsatepoch: 2.453913286158e6
    };
    satrec = sgp4init(
        72,
        satin,
        3.594e-5,
        8.84e-5,
        2.063178615833e4,
        1.539317568406,
        1.717897912141,
        4.746112232192,
        6.263454709052e-2,
        4.323112489349
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.8057e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7778615833e2, TOL));
    assert(isequalRel(satrec.ndot, 1.818051304161e-12, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 3.594e-5, TOL));
    assert(isequalRel(satrec.inclo, 1.717897912141, TOL));
    assert(isequalRel(satrec.nodeo, 4.323112489349, TOL));
    assert(isequalRel(satrec.ecco, 8.84e-5, TOL));
    assert(isequalRel(satrec.argpo, 1.539317568406, TOL));
    assert(isequalRel(satrec.mo, 4.746112232192, TOL));
    assert(isequalRel(satrec.no, 6.267239862091e-2, TOL));
    assert(isequalRel(satrec.a, 1.121270907313, TOL));
    assert(isequalRel(satrec.alta, 1.213700276612e-1, TOL));
    assert(isequalRel(satrec.altp, 1.211717869648e-1, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453913286158e6, TOL));
    assert(isequalRel(satrec.isimp, 0.0, TOL));
    assert(isequalRel(satrec.aycof, 1.159871551252e-3, TOL));
    assert(isequalRel(satrec.con41, -9.355502628635e-1, TOL));
    assert(isequalRel(satrec.cc1, 3.328688812461e-11, TOL));
    assert(isequalRel(satrec.cc4, -4.387798057377e-8, TOL));
    assert(isequalRel(satrec.cc5, 3.031301664072e-5, TOL));
    assert(isequalRel(satrec.d2, 4.574585313329e-20, TOL));
    assert(isequalRel(satrec.d3, 9.379455598865e-29, TOL));
    assert(isequalRel(satrec.d4, 2.240943706149e-37, TOL));
    assert(isequalRel(satrec.delmo, 1.00009229525, TOL));
    assert(isequalRel(satrec.eta, 9.124259161262e-4, TOL));
    assert(isequalRel(satrec.argpdot, -3.607711622942e-5, TOL));
    assert(isequalRel(satrec.omgcof, 0.0, TOL));
    assert(isequalRel(satrec.sinmao, -9.994314250315e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 4.993033218692e-11, TOL));
    assert(isequalRel(satrec.t3cof, 4.796188697533e-20, TOL));
    assert(isequalRel(satrec.t4cof, 7.500633436595e-29, TOL));
    assert(isequalRel(satrec.t5cof, 1.447687575846e-37, TOL));
    assert(isequalRel(satrec.x1mth2, 9.785167542878e-1, TOL));
    assert(isequalRel(satrec.x7thm1, -8.496172800149e-1, TOL));
    assert(isequalRel(satrec.mdot, 6.263452620104e-2, TOL));
    assert(isequalRel(satrec.nodedot, 1.183970648571e-5, TOL));
    assert(isequalRel(satrec.xlcof, 1.540605749216e-3, TOL));
    assert(isequalRel(satrec.xmcof, 0.0, TOL));
    assert(isequalRel(satrec.nodecf, 1.383445114983e-15, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 0.0, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 0.0, TOL));
    assert(isequalRel(satrec.dmdt, 0.0, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 0.0, TOL));
    assert(isequalRel(satrec.e3, 0.0, TOL));
    assert(isequalRel(satrec.ee2, 0.0, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 0.0, TOL));
    assert(isequalRel(satrec.se3, 0.0, TOL));
    assert(isequalRel(satrec.sgh2, 0.0, TOL));
    assert(isequalRel(satrec.sgh3, 0.0, TOL));
    assert(isequalRel(satrec.sgh4, 0.0, TOL));
    assert(isequalRel(satrec.sh2, 0.0, TOL));
    assert(isequalRel(satrec.sh3, 0.0, TOL));
    assert(isequalRel(satrec.si2, 0.0, TOL));
    assert(isequalRel(satrec.si3, 0.0, TOL));
    assert(isequalRel(satrec.sl2, 0.0, TOL));
    assert(isequalRel(satrec.sl3, 0.0, TOL));
    assert(isequalRel(satrec.sl4, 0.0, TOL));
    assert(isequalRel(satrec.gsto, 3.451783621544, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 0.0, TOL));
    assert(isequalRel(satrec.xgh3, 0.0, TOL));
    assert(isequalRel(satrec.xgh4, 0.0, TOL));
    assert(isequalRel(satrec.xh2, 0.0, TOL));
    assert(isequalRel(satrec.xh3, 0.0, TOL));
    assert(isequalRel(satrec.xi2, 0.0, TOL));
    assert(isequalRel(satrec.xi3, 0.0, TOL));
    assert(isequalRel(satrec.xl2, 0.0, TOL));
    assert(isequalRel(satrec.xl3, 0.0, TOL));
    assert(isequalRel(satrec.xl4, 0.0, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 0.0, TOL));
    assert(isequalRel(satrec.zmos, 0.0, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "n");
    equal(satrec.init, "n");
});
// 28057

test("72, satin,  1.000000000000e-04,  4.850600000000e-03,  2.062957071136e+04,  4.647183479530e+00,  9.552152089580e-01,  1.626058686901e+00,  8.751201646284e-03,  5.669000452744e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.8129e4,
        epochyr: 6.0,
        epochdays: 1.7557071136e2,
        ndot: -3.151288927212e-12,
        nddot: 0.0,
        bstar: 1.0e-4,
        inclo: 9.55215208958e-1,
        nodeo: 5.669000452744,
        ecco: 4.8506e-3,
        argpo: 4.64718347953,
        mo: 1.626058686901,
        no: 8.751201646284e-3,
        a: 4.164294042188,
        alta: 3.184493366869,
        altp: 3.144094717507,
        jdsatepoch: 2.453911070711e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.0e-4,
        4.8506e-3,
        2.062957071136e4,
        4.64718347953,
        9.55215208958e-1,
        1.626058686901,
        8.751201646284e-3,
        5.669000452744
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.8129e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7557071136e2, TOL));
    assert(isequalRel(satrec.ndot, -3.151288927212e-12, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.0e-4, TOL));
    assert(isequalRel(satrec.inclo, 9.55215208958e-1, TOL));
    assert(isequalRel(satrec.nodeo, 5.669000452744, TOL));
    assert(isequalRel(satrec.ecco, 4.8506e-3, TOL));
    assert(isequalRel(satrec.argpo, 4.64718347953, TOL));
    assert(isequalRel(satrec.mo, 1.626058686901, TOL));
    assert(isequalRel(satrec.no, 8.751201528747e-3, TOL));
    assert(isequalRel(satrec.a, 4.164294042188, TOL));
    assert(isequalRel(satrec.alta, 3.184493366869, TOL));
    assert(isequalRel(satrec.altp, 3.144094717507, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453911070711e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 9.573020490049e-4, TOL));
    assert(isequalRel(satrec.con41, 2.868387191268e-4, TOL));
    assert(isequalRel(satrec.cc1, 6.943749715587e-17, TOL));
    assert(isequalRel(satrec.cc4, 2.116354478564e-14, TOL));
    assert(isequalRel(satrec.cc5, 1.586907226023e-10, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 9.989385058711e-1, TOL));
    assert(isequalRel(satrec.eta, 6.408283505618e-3, TOL));
    assert(isequalRel(satrec.argpdot, 2.73316753283e-7, TOL));
    assert(isequalRel(satrec.omgcof, -2.720221625576e-19, TOL));
    assert(isequalRel(satrec.sinmao, 9.984734243415e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 1.041562457338e-16, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 6.665710537603e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 1.334002623678, TOL));
    assert(isequalRel(satrec.mdot, 8.751201649839e-3, TOL));
    assert(isequalRel(satrec.nodedot, -4.732303306962e-7, TOL));
    assert(isequalRel(satrec.xlcof, 1.786381798147e-3, TOL));
    assert(isequalRel(satrec.xmcof, -4.085200213224e-11, TOL));
    assert(isequalRel(satrec.nodecf, -1.150070791226e-22, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, -1.106805331423e-10, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, -8.158095760647e-9, TOL));
    assert(isequalRel(satrec.dmdt, -2.27484745765e-8, TOL));
    assert(isequalRel(satrec.dnodt, -1.962977385408e-8, TOL));
    assert(isequalRel(satrec.domdt, 8.552991333113e-9, TOL));
    assert(isequalRel(satrec.e3, -3.876849228949e-6, TOL));
    assert(isequalRel(satrec.ee2, 5.421891510864e-6, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -2.399586065802e-6, TOL));
    assert(isequalRel(satrec.se3, 3.979795711446e-5, TOL));
    assert(isequalRel(satrec.sgh2, -7.340466124056e-3, TOL));
    assert(isequalRel(satrec.sgh3, -9.267102539452e-4, TOL));
    assert(isequalRel(satrec.sgh4, -1.028902184234e-4, TOL));
    assert(isequalRel(satrec.sh2, 1.019818515817e-3, TOL));
    assert(isequalRel(satrec.sh3, -1.260734846663e-4, TOL));
    assert(isequalRel(satrec.si2, -3.379233009896e-4, TOL));
    assert(isequalRel(satrec.si3, -1.160185387548e-3, TOL));
    assert(isequalRel(satrec.sl2, 6.096109975713e-3, TOL));
    assert(isequalRel(satrec.sl3, 1.773703432654e-3, TOL));
    assert(isequalRel(satrec.sl4, 2.400824215399e-4, TOL));
    assert(isequalRel(satrec.gsto, 2.059978512381, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 6.595724207569e-4, TOL));
    assert(isequalRel(satrec.xgh3, 1.091630835372e-3, TOL));
    assert(isequalRel(satrec.xgh4, -5.416568688173e-5, TOL));
    assert(isequalRel(satrec.xh2, -1.288582105817e-4, TOL));
    assert(isequalRel(satrec.xh3, -9.703376083569e-5, TOL));
    assert(isequalRel(satrec.xi2, -8.270003713552e-5, TOL));
    assert(isequalRel(satrec.xi3, 1.575914794162e-4, TOL));
    assert(isequalRel(satrec.xl2, -4.514061623044e-4, TOL));
    assert(isequalRel(satrec.xl3, -1.081448579815e-3, TOL));
    assert(isequalRel(satrec.xl4, 1.263893640252e-4, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 1.529662090192, TOL));
    assert(isequalRel(satrec.zmos, 2.95905971397, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 28129

test("72, satin,  1.867800000000e-04,  2.487000000000e-03,  2.062121788666e+04,  4.551082160257e+00,  1.134423871224e+00,  1.744613667001e+00,  7.190131350005e-02,  6.032084787695e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.835e4,
        epochyr: 6.0,
        epochdays: 1.6721788666e2,
        ndot: 4.894949208109e-7,
        nddot: 1.604830078871e-14,
        bstar: 1.8678e-4,
        inclo: 1.134423871224,
        nodeo: 6.032084787695,
        ecco: 2.487e-3,
        argpo: 4.551082160257,
        mo: 1.744613667001,
        no: 7.190131350005e-2,
        a: 1.022732284475,
        alta: 2.527581966614e-2,
        altp: 2.018874928316e-2,
        jdsatepoch: 2.453902717887e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.8678e-4,
        2.487e-3,
        2.062121788666e4,
        4.551082160257,
        1.134423871224,
        1.744613667001,
        7.190131350005e-2,
        6.032084787695
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.835e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.6721788666e2, TOL));
    assert(isequalRel(satrec.ndot, 4.894949208109e-7, TOL));
    assert(isequalRel(satrec.nddot, 1.604830078871e-14, TOL));
    assert(isequalRel(satrec.bstar, 1.8678e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.134423871224, TOL));
    assert(isequalRel(satrec.nodeo, 6.032084787695, TOL));
    assert(isequalRel(satrec.ecco, 2.487e-3, TOL));
    assert(isequalRel(satrec.argpo, 4.551082160257, TOL));
    assert(isequalRel(satrec.mo, 1.744613667001, TOL));
    assert(isequalRel(satrec.no, 7.192721985507e-2, TOL));
    assert(isequalRel(satrec.a, 1.022732284475, TOL));
    assert(isequalRel(satrec.alta, 2.527581966614e-2, TOL));
    assert(isequalRel(satrec.altp, 2.018874928316e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453902717887e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.062657581303e-3, TOL));
    assert(isequalRel(satrec.con41, -4.64089158438e-1, TOL));
    assert(isequalRel(satrec.cc1, 4.544683509554e-6, TOL));
    assert(isequalRel(satrec.cc4, 1.268170994709e-2, TOL));
    assert(isequalRel(satrec.cc5, 7.841276141148e-1, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 9.133197917493e-1, TOL));
    assert(isequalRel(satrec.eta, 1.721425121901e-1, TOL));
    assert(isequalRel(satrec.argpdot, -6.06508024837e-6, TOL));
    assert(isequalRel(satrec.omgcof, -7.957944273337e-5, TOL));
    assert(isequalRel(satrec.sinmao, 9.849317608904e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 6.817025264331e-6, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 8.213630528127e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 2.504586303113e-1, TOL));
    assert(isequalRel(satrec.mdot, 7.190130726551e-2, TOL));
    assert(isequalRel(satrec.nodedot, -4.713799132252e-5, TOL));
    assert(isequalRel(satrec.xlcof, 1.909689949638e-3, TOL));
    assert(isequalRel(satrec.xmcof, -9.27155310806e-2, TOL));
    assert(isequalRel(satrec.nodecf, -7.511102051252e-10, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 0.0, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 0.0, TOL));
    assert(isequalRel(satrec.dmdt, 0.0, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 0.0, TOL));
    assert(isequalRel(satrec.e3, 0.0, TOL));
    assert(isequalRel(satrec.ee2, 0.0, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 0.0, TOL));
    assert(isequalRel(satrec.se3, 0.0, TOL));
    assert(isequalRel(satrec.sgh2, 0.0, TOL));
    assert(isequalRel(satrec.sgh3, 0.0, TOL));
    assert(isequalRel(satrec.sgh4, 0.0, TOL));
    assert(isequalRel(satrec.sh2, 0.0, TOL));
    assert(isequalRel(satrec.sh3, 0.0, TOL));
    assert(isequalRel(satrec.si2, 0.0, TOL));
    assert(isequalRel(satrec.si3, 0.0, TOL));
    assert(isequalRel(satrec.sl2, 0.0, TOL));
    assert(isequalRel(satrec.sl3, 0.0, TOL));
    assert(isequalRel(satrec.sl4, 0.0, TOL));
    assert(isequalRel(satrec.gsto, 5.982608943601, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 0.0, TOL));
    assert(isequalRel(satrec.xgh3, 0.0, TOL));
    assert(isequalRel(satrec.xgh4, 0.0, TOL));
    assert(isequalRel(satrec.xh2, 0.0, TOL));
    assert(isequalRel(satrec.xh3, 0.0, TOL));
    assert(isequalRel(satrec.xi2, 0.0, TOL));
    assert(isequalRel(satrec.xi3, 0.0, TOL));
    assert(isequalRel(satrec.xl2, 0.0, TOL));
    assert(isequalRel(satrec.xl3, 0.0, TOL));
    assert(isequalRel(satrec.xl4, 0.0, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 0.0, TOL));
    assert(isequalRel(satrec.zmos, 0.0, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "n");
    equal(satrec.init, "n");
});
// 28350
//# *** error: t:= 1560.000000 *** code =   1

test("72, satin,  9.639000000000e-04,  6.249053000000e-01,  2.063181079184e+04,  2.971510317983e+00,  4.977679026688e-01,  3.715744890972e+00,  1.655781478256e-02,  2.006838915138e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.8623e4,
        epochyr: 6.0,
        epochdays: 1.7781079184e2,
        ndot: 1.932115842984e-8,
        nddot: 1.453052254138e-15,
        bstar: 9.639e-4,
        inclo: 4.977679026688e-1,
        nodeo: 2.006838915138,
        ecco: 6.249053e-1,
        argpo: 2.971510317983,
        mo: 3.715744890972,
        no: 1.655781478256e-2,
        a: 2.722186242514,
        alta: 3.423294853048,
        altp: 2.107763197986e-2,
        jdsatepoch: 2.453913310792e6
    };
    satrec = sgp4init(
        72,
        satin,
        9.639e-4,
        6.249053e-1,
        2.063181079184e4,
        2.971510317983,
        4.977679026688e-1,
        3.715744890972,
        1.655781478256e-2,
        2.006838915138
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.8623e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7781079184e2, TOL));
    assert(isequalRel(satrec.ndot, 1.932115842984e-8, TOL));
    assert(isequalRel(satrec.nddot, 1.453052254138e-15, TOL));
    assert(isequalRel(satrec.bstar, 9.639e-4, TOL));
    assert(isequalRel(satrec.inclo, 4.977679026688e-1, TOL));
    assert(isequalRel(satrec.nodeo, 2.006838915138, TOL));
    assert(isequalRel(satrec.ecco, 6.249053e-1, TOL));
    assert(isequalRel(satrec.argpo, 2.971510317983, TOL));
    assert(isequalRel(satrec.mo, 3.715744890972, TOL));
    assert(isequalRel(satrec.no, 1.655279727416e-2, TOL));
    assert(isequalRel(satrec.a, 2.722186242514, TOL));
    assert(isequalRel(satrec.alta, 3.423294853048, TOL));
    assert(isequalRel(satrec.altp, 2.107763197986e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453913310792e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 5.598449387749e-4, TOL));
    assert(isequalRel(satrec.con41, 1.316080099741, TOL));
    assert(isequalRel(satrec.cc1, 7.794470372523e-7, TOL));
    assert(isequalRel(satrec.cc4, 6.870308409853e-4, TOL));
    assert(isequalRel(satrec.cc5, 6.136467900309e-2, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 4.602372744525e-3, TOL));
    assert(isequalRel(satrec.eta, 9.928637385504e-1, TOL));
    assert(isequalRel(satrec.argpdot, 1.398466945436e-5, TOL));
    assert(isequalRel(satrec.omgcof, -3.459244932824e-17, TOL));
    assert(isequalRel(satrec.sinmao, -5.431231594784e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 1.169170555878e-6, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 2.279733000863e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 4.404186899396, TOL));
    assert(isequalRel(satrec.mdot, 1.655781496506e-2, TOL));
    assert(isequalRel(satrec.nodedot, -8.592532289781e-6, TOL));
    assert(isequalRel(satrec.xlcof, 1.10160857296e-3, TOL));
    assert(isequalRel(satrec.xmcof, -1.089540957252e-12, TOL));
    assert(isequalRel(satrec.nodecf, -1.426027039134e-11, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, -1.284368777035e-8, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 2.182189987367e-8, TOL));
    assert(isequalRel(satrec.dmdt, -1.266772856942e-8, TOL));
    assert(isequalRel(satrec.dnodt, -1.981003275567e-8, TOL));
    assert(isequalRel(satrec.domdt, 2.122734368629e-8, TOL));
    assert(isequalRel(satrec.e3, 2.080207273239e-4, TOL));
    assert(isequalRel(satrec.ee2, 2.279612848318e-4, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -2.010666927152e-3, TOL));
    assert(isequalRel(satrec.se3, 1.234888459603e-4, TOL));
    assert(isequalRel(satrec.sgh2, 4.404694052449e-4, TOL));
    assert(isequalRel(satrec.sgh3, -3.174852765982e-3, TOL));
    assert(isequalRel(satrec.sgh4, -4.246782106577e-5, TOL));
    assert(isequalRel(satrec.sh2, 4.897361699131e-4, TOL));
    assert(isequalRel(satrec.sh3, -1.594883558919e-4, TOL));
    assert(isequalRel(satrec.si2, -1.422358125944e-3, TOL));
    assert(isequalRel(satrec.si3, -1.642085155919e-3, TOL));
    assert(isequalRel(satrec.sl2, -1.791873501287e-3, TOL));
    assert(isequalRel(satrec.sl3, 5.840111590196e-3, TOL));
    assert(isequalRel(satrec.sl4, 1.481689063817e-4, TOL));
    assert(isequalRel(satrec.gsto, 3.606984295022, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, -3.876052640328e-4, TOL));
    assert(isequalRel(satrec.xgh3, 2.628367881541e-4, TOL));
    assert(isequalRel(satrec.xgh4, -2.235682588341e-5, TOL));
    assert(isequalRel(satrec.xh2, -7.296812344377e-5, TOL));
    assert(isequalRel(satrec.xh3, -4.081833544751e-5, TOL));
    assert(isequalRel(satrec.xi2, -6.94862806138e-5, TOL));
    assert(isequalRel(satrec.xi3, 3.512666727653e-4, TOL));
    assert(isequalRel(satrec.xl2, 8.272799129225e-4, TOL));
    assert(isequalRel(satrec.xl3, -3.372511878045e-4, TOL));
    assert(isequalRel(satrec.xl4, 7.800226991119e-5, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 2.040461217495, TOL));
    assert(isequalRel(satrec.zmos, 2.997593526865, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 28623

test("72, satin,  1.000000000000e-04,  3.350000000000e-05,  2.063046683397e+04,  2.407123197766e-01,  3.316125578789e-05,  9.712827100519e-01,  4.375111781885e-03,  5.008105351538e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.8626e4,
        epochyr: 6.0,
        epochdays: 1.7646683397e2,
        ndot: -6.211675289216e-12,
        nddot: 0.0,
        bstar: 1.0e-4,
        inclo: 3.316125578789e-5,
        nodeo: 5.008105351538,
        ecco: 3.35e-5,
        argpo: 2.407123197766e-1,
        mo: 9.712827100519e-1,
        no: 4.375111781885e-3,
        a: 6.610897332657,
        alta: 5.611118797718,
        altp: 5.610675867596,
        jdsatepoch: 2.453911966834e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.0e-4,
        3.35e-5,
        2.063046683397e4,
        2.407123197766e-1,
        3.316125578789e-5,
        9.712827100519e-1,
        4.375111781885e-3,
        5.008105351538
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.8626e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7646683397e2, TOL));
    assert(isequalRel(satrec.ndot, -6.211675289216e-12, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.0e-4, TOL));
    assert(isequalRel(satrec.inclo, 3.316125578789e-5, TOL));
    assert(isequalRel(satrec.nodeo, 5.008105351538, TOL));
    assert(isequalRel(satrec.ecco, 3.35e-5, TOL));
    assert(isequalRel(satrec.argpo, 2.407123197766e-1, TOL));
    assert(isequalRel(satrec.mo, 9.712827100519e-1, TOL));
    assert(isequalRel(satrec.no, 4.374949216286e-3, TOL));
    assert(isequalRel(satrec.a, 6.610897332657, TOL));
    assert(isequalRel(satrec.alta, 5.611118797718, TOL));
    assert(isequalRel(satrec.altp, 5.610675867596, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453911966834e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 3.888272840575e-8, TOL));
    assert(isequalRel(satrec.con41, 1.999999996701, TOL));
    assert(isequalRel(satrec.cc1, 5.535451443276e-18, TOL));
    assert(isequalRel(satrec.cc4, 3.00361811925e-17, TOL));
    assert(isequalRel(satrec.cc5, 2.530077451701e-11, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 1.000066959797, TOL));
    assert(isequalRel(satrec.eta, 3.95565635814e-5, TOL));
    assert(isequalRel(satrec.argpdot, 3.251717209515e-7, TOL));
    assert(isequalRel(satrec.omgcof, 0.0, TOL));
    assert(isequalRel(satrec.sinmao, 8.256101499198e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 8.303177164914e-18, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 1.099668800464e-9, TOL));
    assert(isequalRel(satrec.x7thm1, 5.999999992302, TOL));
    assert(isequalRel(satrec.mdot, 4.375111778864e-3, TOL));
    assert(isequalRel(satrec.nodedot, -1.625828407295e-7, TOL));
    assert(isequalRel(satrec.xlcof, 7.776545680615e-8, TOL));
    assert(isequalRel(satrec.xmcof, 0.0, TOL));
    assert(isequalRel(satrec.nodecf, -3.149324885339e-24, TOL));
    assert(isequalRel(satrec.irez, 1.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, -1.163351218344e-12, TOL));
    assert(isequalRel(satrec.del1, -6.397199405204e-13, TOL));
    assert(isequalRel(satrec.del2, 1.410351263886e-11, TOL));
    assert(isequalRel(satrec.del3, 1.978384035449e-12, TOL));
    assert(isequalRel(satrec.didt, -2.947177196394e-8, TOL));
    assert(isequalRel(satrec.dmdt, -1.045030124521e-7, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 3.403399555001e-8, TOL));
    assert(isequalRel(satrec.e3, 9.730286584479e-8, TOL));
    assert(isequalRel(satrec.ee2, 4.116645807083e-9, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, -4.897269431303e-7, TOL));
    assert(isequalRel(satrec.se3, -3.982514162897e-7, TOL));
    assert(isequalRel(satrec.sgh2, 1.21897980672e-2, TOL));
    assert(isequalRel(satrec.sgh3, -1.372729148759e-2, TOL));
    assert(isequalRel(satrec.sgh4, -2.058135042329e-4, TOL));
    assert(isequalRel(satrec.sh2, -1.607052704128e-3, TOL));
    assert(isequalRel(satrec.sh3, 1.922166128879e-4, TOL));
    assert(isequalRel(satrec.si2, 1.068903225853e-4, TOL));
    assert(isequalRel(satrec.si3, 1.50306966373e-3, TOL));
    assert(isequalRel(satrec.sl2, -1.268456207451e-2, TOL));
    assert(isequalRel(satrec.sl3, 1.252883219957e-2, TOL));
    assert(isequalRel(satrec.sl4, 4.802315103772e-4, TOL));
    assert(isequalRel(satrec.gsto, 1.422713433736, TOL));
    assert(isequalRel(satrec.xfact, -4.37501440557e-3, TOL));
    assert(isequalRel(satrec.xgh2, -2.791926643954e-3, TOL));
    assert(isequalRel(satrec.xgh3, -6.071229788246e-5, TOL));
    assert(isequalRel(satrec.xgh4, -1.083487818097e-4, TOL));
    assert(isequalRel(satrec.xh2, 2.358741028641e-4, TOL));
    assert(isequalRel(satrec.xh3, 2.037703492136e-4, TOL));
    assert(isequalRel(satrec.xi2, 1.978957741048e-4, TOL));
    assert(isequalRel(satrec.xi3, -1.979448507755e-4, TOL));
    assert(isequalRel(satrec.xl2, 2.660801647839e-3, TOL));
    assert(isequalRel(satrec.xl3, 3.319557433091e-4, TOL));
    assert(isequalRel(satrec.xl4, 2.528138244862e-4, TOL));
    assert(isequalRel(satrec.xlamo, 4.79738694763, TOL));
    assert(isequalRel(satrec.zmol, 1.734002358913, TOL));
    assert(isequalRel(satrec.zmos, 2.9744747945, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 4.79738694763, TOL));
    assert(isequalRel(satrec.xni, 4.374949216286e-3, TOL));
    equal(satrec.method, "d");
    equal(satrec.init, "n");
});
// 28626

test("72, satin,  2.447600000000e-04,  3.039550000000e-02,  2.042202012661e+04,  4.259462076858e+00,  1.683781961252e+00,  1.931246959905e+00,  7.182099414601e-02,  2.757595783542e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.8872e4,
        epochyr: 5.0,
        epochdays: 3.3302012661e2,
        ndot: 7.876004598447e-7,
        nddot: 0.0,
        bstar: 2.4476e-4,
        inclo: 1.683781961252,
        nodeo: 2.757595783542,
        ecco: 3.03955e-2,
        argpo: 4.259462076858,
        mo: 1.931246959905,
        no: 7.182099414601e-2,
        a: 1.023494641816,
        alta: 5.460427320098e-2,
        altp: -7.614989569634e-3,
        jdsatepoch: 2.453703520127e6
    };
    satrec = sgp4init(
        72,
        satin,
        2.4476e-4,
        3.03955e-2,
        2.042202012661e4,
        4.259462076858,
        1.683781961252,
        1.931246959905,
        7.182099414601e-2,
        2.757595783542
    );
    assert(isequalRel(satrec.error, 5.0, TOL));
    assert(isequalRel(satrec.satnum, 2.8872e4, TOL));
    assert(isequalRel(satrec.epochyr, 5.0, TOL));
    assert(isequalRel(satrec.epochdays, 3.3302012661e2, TOL));
    assert(isequalRel(satrec.ndot, 7.876004598447e-7, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 2.4476e-4, TOL));
    assert(isequalRel(satrec.inclo, 1.683781961252, TOL));
    assert(isequalRel(satrec.nodeo, 2.757595783542, TOL));
    assert(isequalRel(satrec.ecco, 3.03955e-2, TOL));
    assert(isequalRel(satrec.argpo, 4.259462076858, TOL));
    assert(isequalRel(satrec.mo, 1.931246959905, TOL));
    assert(isequalRel(satrec.no, 7.187462824278e-2, TOL));
    assert(isequalRel(satrec.a, 1.023494641816, TOL));
    assert(isequalRel(satrec.alta, 5.460427320098e-2, TOL));
    assert(isequalRel(satrec.altp, -7.614989569634e-3, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453703520127e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.165058672797e-3, TOL));
    assert(isequalRel(satrec.con41, -9.618654265547e-1, TOL));
    assert(isequalRel(satrec.cc1, 7.30534012057e-6, TOL));
    assert(isequalRel(satrec.cc4, 7.438327469896e-2, TOL));
    assert(isequalRel(satrec.cc5, 1.716904676665, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 8.962003458657e-2, TOL));
    assert(isequalRel(satrec.eta, 1.566479807341, TOL));
    assert(isequalRel(satrec.argpdot, -5.216790415232e-5, TOL));
    assert(isequalRel(satrec.omgcof, -2.314443451479e-5, TOL));
    assert(isequalRel(satrec.sinmao, 9.357379822238e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 1.095801018086e-5, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 9.872884755182e-1, TOL));
    assert(isequalRel(satrec.x7thm1, -9.110193286276e-1, TOL));
    assert(isequalRel(satrec.mdot, 7.182095759003e-2, TOL));
    assert(isequalRel(satrec.nodedot, 1.255223994192e-5, TOL));
    assert(isequalRel(satrec.xlcof, 1.599541437465e-3, TOL));
    assert(isequalRel(satrec.xmcof, -1.333903884591e-3, TOL));
    assert(isequalRel(satrec.nodecf, 3.218186128767e-10, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 0.0, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 0.0, TOL));
    assert(isequalRel(satrec.dmdt, 0.0, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 0.0, TOL));
    assert(isequalRel(satrec.e3, 0.0, TOL));
    assert(isequalRel(satrec.ee2, 0.0, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 0.0, TOL));
    assert(isequalRel(satrec.se3, 0.0, TOL));
    assert(isequalRel(satrec.sgh2, 0.0, TOL));
    assert(isequalRel(satrec.sgh3, 0.0, TOL));
    assert(isequalRel(satrec.sgh4, 0.0, TOL));
    assert(isequalRel(satrec.sh2, 0.0, TOL));
    assert(isequalRel(satrec.sh3, 0.0, TOL));
    assert(isequalRel(satrec.si2, 0.0, TOL));
    assert(isequalRel(satrec.si3, 0.0, TOL));
    assert(isequalRel(satrec.sl2, 0.0, TOL));
    assert(isequalRel(satrec.sl3, 0.0, TOL));
    assert(isequalRel(satrec.sl4, 0.0, TOL));
    assert(isequalRel(satrec.gsto, 1.313288306073, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 0.0, TOL));
    assert(isequalRel(satrec.xgh3, 0.0, TOL));
    assert(isequalRel(satrec.xgh4, 0.0, TOL));
    assert(isequalRel(satrec.xh2, 0.0, TOL));
    assert(isequalRel(satrec.xh3, 0.0, TOL));
    assert(isequalRel(satrec.xi2, 0.0, TOL));
    assert(isequalRel(satrec.xi3, 0.0, TOL));
    assert(isequalRel(satrec.xl2, 0.0, TOL));
    assert(isequalRel(satrec.xl3, 0.0, TOL));
    assert(isequalRel(satrec.xl4, 0.0, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 0.0, TOL));
    assert(isequalRel(satrec.zmos, 0.0, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "n");
    equal(satrec.init, "n");
});
// 28872

test("72, satin,  1.351900000000e-01,  1.584800000000e-03,  2.062426783845e+04,  4.838269107356e+00,  1.438653958468e+00,  1.464563371214e+00,  6.952270688787e-02,  4.773269555353e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.9141e4,
        epochyr: 6.0,
        epochdays: 1.7026783845e2,
        ndot: 3.030085476634e-6,
        nddot: 0.0,
        bstar: 1.3519e-1,
        inclo: 1.438653958468,
        nodeo: 4.773269555353,
        ecco: 1.5848e-3,
        argpo: 4.838269107356,
        mo: 1.464563371214,
        no: 6.952270688787e-2,
        a: 1.045928666506,
        alta: 4.758625425707e-2,
        altp: 4.427107875571e-2,
        jdsatepoch: 2.453905767838e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.3519e-1,
        1.5848e-3,
        2.062426783845e4,
        4.838269107356,
        1.438653958468,
        1.464563371214,
        6.952270688787e-2,
        4.773269555353
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.9141e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.7026783845e2, TOL));
    assert(isequalRel(satrec.ndot, 3.030085476634e-6, TOL));
    assert(isequalRel(satrec.nddot, 0.0, TOL));
    assert(isequalRel(satrec.bstar, 1.3519e-1, TOL));
    assert(isequalRel(satrec.inclo, 1.438653958468, TOL));
    assert(isequalRel(satrec.nodeo, 4.773269555353, TOL));
    assert(isequalRel(satrec.ecco, 1.5848e-3, TOL));
    assert(isequalRel(satrec.argpo, 4.838269107356, TOL));
    assert(isequalRel(satrec.mo, 1.464563371214, TOL));
    assert(isequalRel(satrec.no, 6.957163219428e-2, TOL));
    assert(isequalRel(satrec.a, 1.045928666506, TOL));
    assert(isequalRel(satrec.alta, 4.758625425707e-2, TOL));
    assert(isequalRel(satrec.altp, 4.427107875571e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.453905767838e6, TOL));
    assert(isequalRel(satrec.isimp, 0.0, TOL));
    assert(isequalRel(satrec.aycof, 1.162312577206e-3, TOL));
    assert(isequalRel(satrec.con41, -9.479193821401e-1, TOL));
    assert(isequalRel(satrec.cc1, 1.402302071488e-5, TOL));
    assert(isequalRel(satrec.cc4, 2.616998163647e-6, TOL));
    assert(isequalRel(satrec.cc5, 3.283768193269e-3, TOL));
    assert(isequalRel(satrec.d2, 2.476202150265e-8, TOL));
    assert(isequalRel(satrec.d3, 6.547187456016e-11, TOL));
    assert(isequalRel(satrec.d4, 2.018849945761e-13, TOL));
    assert(isequalRel(satrec.delmo, 1.015954241921, TOL));
    assert(isequalRel(satrec.eta, 4.989044945409e-2, TOL));
    assert(isequalRel(satrec.argpdot, -4.707515274342e-5, TOL));
    assert(isequalRel(satrec.omgcof, 1.612649561091e-4, TOL));
    assert(isequalRel(satrec.sinmao, 9.94362584294e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 2.103453107232e-5, TOL));
    assert(isequalRel(satrec.t3cof, 2.515531172259e-8, TOL));
    assert(isequalRel(satrec.t4cof, 5.015251483767e-11, TOL));
    assert(isequalRel(satrec.t5cof, 1.240995902746e-13, TOL));
    assert(isequalRel(satrec.x1mth2, 9.826397940467e-1, TOL));
    assert(isequalRel(satrec.x7thm1, -8.784785583269e-1, TOL));
    assert(isequalRel(satrec.mdot, 6.952267544908e-2, TOL));
    assert(isequalRel(satrec.nodedot, -1.3573441708e-5, TOL));
    assert(isequalRel(satrec.xlcof, 1.878784117365e-3, TOL));
    assert(isequalRel(satrec.xmcof, -1.762227730388, TOL));
    assert(isequalRel(satrec.nodecf, -6.684813053795e-10, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 0.0, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 0.0, TOL));
    assert(isequalRel(satrec.dmdt, 0.0, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 0.0, TOL));
    assert(isequalRel(satrec.e3, 0.0, TOL));
    assert(isequalRel(satrec.ee2, 0.0, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 0.0, TOL));
    assert(isequalRel(satrec.se3, 0.0, TOL));
    assert(isequalRel(satrec.sgh2, 0.0, TOL));
    assert(isequalRel(satrec.sgh3, 0.0, TOL));
    assert(isequalRel(satrec.sgh4, 0.0, TOL));
    assert(isequalRel(satrec.sh2, 0.0, TOL));
    assert(isequalRel(satrec.sh3, 0.0, TOL));
    assert(isequalRel(satrec.si2, 0.0, TOL));
    assert(isequalRel(satrec.si3, 0.0, TOL));
    assert(isequalRel(satrec.sl2, 0.0, TOL));
    assert(isequalRel(satrec.sl3, 0.0, TOL));
    assert(isequalRel(satrec.sl4, 0.0, TOL));
    assert(isequalRel(satrec.gsto, 6.574767745587e-2, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 0.0, TOL));
    assert(isequalRel(satrec.xgh3, 0.0, TOL));
    assert(isequalRel(satrec.xgh4, 0.0, TOL));
    assert(isequalRel(satrec.xh2, 0.0, TOL));
    assert(isequalRel(satrec.xh3, 0.0, TOL));
    assert(isequalRel(satrec.xi2, 0.0, TOL));
    assert(isequalRel(satrec.xi3, 0.0, TOL));
    assert(isequalRel(satrec.xl2, 0.0, TOL));
    assert(isequalRel(satrec.xl3, 0.0, TOL));
    assert(isequalRel(satrec.xl4, 0.0, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 0.0, TOL));
    assert(isequalRel(satrec.zmos, 0.0, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "n");
    equal(satrec.init, "n");
});
// 29141
//# *** error: t:= 440.000000 *** code =   6

test("72, satin,  1.333400000000e-03,  2.025790000000e-02,  2.063128732010e+04,  1.662431348512e+00,  8.998830356820e-01,  4.675754519385e+00,  6.867101959232e-02,  3.731344643826e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 2.9238e4,
        epochyr: 6.0,
        epochdays: 1.772873201e2,
        ndot: 2.321912102767e-8,
        nddot: 2.277403850108e-14,
        bstar: 1.3334e-3,
        inclo: 8.99883035682e-1,
        nodeo: 3.731344643826,
        ecco: 2.02579e-2,
        argpo: 1.662431348512,
        mo: 4.675754519385,
        no: 6.867101959232e-2,
        a: 1.054558924065,
        alta: 7.592207329265e-2,
        altp: 3.319577483702e-2,
        jdsatepoch: 2.45391278732e6
    };
    satrec = sgp4init(
        72,
        satin,
        1.3334e-3,
        2.02579e-2,
        2.06312873201e4,
        1.662431348512,
        8.99883035682e-1,
        4.675754519385,
        6.867101959232e-2,
        3.731344643826
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 2.9238e4, TOL));
    assert(isequalRel(satrec.epochyr, 6.0, TOL));
    assert(isequalRel(satrec.epochdays, 1.772873201e2, TOL));
    assert(isequalRel(satrec.ndot, 2.321912102767e-8, TOL));
    assert(isequalRel(satrec.nddot, 2.277403850108e-14, TOL));
    assert(isequalRel(satrec.bstar, 1.3334e-3, TOL));
    assert(isequalRel(satrec.inclo, 8.99883035682e-1, TOL));
    assert(isequalRel(satrec.nodeo, 3.731344643826, TOL));
    assert(isequalRel(satrec.ecco, 2.02579e-2, TOL));
    assert(isequalRel(satrec.argpo, 1.662431348512, TOL));
    assert(isequalRel(satrec.mo, 4.675754519385, TOL));
    assert(isequalRel(satrec.no, 6.866301602203e-2, TOL));
    assert(isequalRel(satrec.a, 1.054558924065, TOL));
    assert(isequalRel(satrec.alta, 7.592207329265e-2, TOL));
    assert(isequalRel(satrec.altp, 3.319577483702e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.45391278732e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 9.183928514987e-4, TOL));
    assert(isequalRel(satrec.con41, 1.59538583554e-1, TOL));
    assert(isequalRel(satrec.cc1, 2.269353322605e-7, TOL));
    assert(isequalRel(satrec.cc4, 2.625327421249e-4, TOL));
    assert(isequalRel(satrec.cc5, 5.899869491082e-3, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 9.456636074024e-1, TOL));
    assert(isequalRel(satrec.eta, 5.037493042251e-1, TOL));
    assert(isequalRel(satrec.argpdot, 4.669456818517e-5, TOL));
    assert(isequalRel(satrec.omgcof, -2.081758941314e-8, TOL));
    assert(isequalRel(satrec.sinmao, -9.993290331798e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 3.404029983907e-7, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 6.134871388153e-1, TOL));
    assert(isequalRel(satrec.x7thm1, 1.705590028293, TOL));
    assert(isequalRel(satrec.mdot, 6.86710278608e-2, TOL));
    assert(isequalRel(satrec.nodedot, -6.241104888509e-5, TOL));
    assert(isequalRel(satrec.xlcof, 1.729667795817e-3, TOL));
    assert(isequalRel(satrec.xmcof, -5.062259410359e-5, TOL));
    assert(isequalRel(satrec.nodecf, -4.952332336293e-11, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 0.0, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 0.0, TOL));
    assert(isequalRel(satrec.dmdt, 0.0, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 0.0, TOL));
    assert(isequalRel(satrec.e3, 0.0, TOL));
    assert(isequalRel(satrec.ee2, 0.0, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 0.0, TOL));
    assert(isequalRel(satrec.se3, 0.0, TOL));
    assert(isequalRel(satrec.sgh2, 0.0, TOL));
    assert(isequalRel(satrec.sgh3, 0.0, TOL));
    assert(isequalRel(satrec.sgh4, 0.0, TOL));
    assert(isequalRel(satrec.sh2, 0.0, TOL));
    assert(isequalRel(satrec.sh3, 0.0, TOL));
    assert(isequalRel(satrec.si2, 0.0, TOL));
    assert(isequalRel(satrec.si3, 0.0, TOL));
    assert(isequalRel(satrec.sl2, 0.0, TOL));
    assert(isequalRel(satrec.sl3, 0.0, TOL));
    assert(isequalRel(satrec.sl4, 0.0, TOL));
    assert(isequalRel(satrec.gsto, 3.089091736929e-1, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 0.0, TOL));
    assert(isequalRel(satrec.xgh3, 0.0, TOL));
    assert(isequalRel(satrec.xgh4, 0.0, TOL));
    assert(isequalRel(satrec.xh2, 0.0, TOL));
    assert(isequalRel(satrec.xh3, 0.0, TOL));
    assert(isequalRel(satrec.xi2, 0.0, TOL));
    assert(isequalRel(satrec.xi3, 0.0, TOL));
    assert(isequalRel(satrec.xl2, 0.0, TOL));
    assert(isequalRel(satrec.xl3, 0.0, TOL));
    assert(isequalRel(satrec.xl4, 0.0, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 0.0, TOL));
    assert(isequalRel(satrec.zmos, 0.0, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "n");
    equal(satrec.init, "n");
});
// 29238

test("72, satin,  6.681600000000e-05,  8.673100000000e-03,  1.123298708465e+04,  9.197675718500e-01,  1.271358913676e+00,  1.929834988540e+00,  7.006731262088e-02,  2.024039134916e+00", function() {
    var satin,
        rets,
        satrec,
        TOL = 0.000001;
    satin = {
        error: 0.0,
        satnum: 8.8888e4,
        epochyr: 8.0e1,
        epochdays: 2.7598708465e2,
        ndot: 2.214810700439e-9,
        nddot: 2.91309053875e-13,
        bstar: 6.6816e-5,
        inclo: 1.271358913676,
        nodeo: 2.024039134916,
        ecco: 8.6731e-3,
        argpo: 9.1976757185e-1,
        mo: 1.92983498854,
        no: 7.006731262088e-2,
        a: 1.040501892439,
        alta: 4.952626940243e-2,
        altp: 3.14775154758e-2,
        jdsatepoch: 2.444514487085e6
    };
    satrec = sgp4init(
        72,
        satin,
        6.6816e-5,
        8.6731e-3,
        1.123298708465e4,
        9.1976757185e-1,
        1.271358913676,
        1.92983498854,
        7.006731262088e-2,
        2.024039134916
    );
    assert(isequalRel(satrec.error, 0.0, TOL));
    assert(isequalRel(satrec.satnum, 8.8888e4, TOL));
    assert(isequalRel(satrec.epochyr, 8.0e1, TOL));
    assert(isequalRel(satrec.epochdays, 2.7598708465e2, TOL));
    assert(isequalRel(satrec.ndot, 2.214810700439e-9, TOL));
    assert(isequalRel(satrec.nddot, 2.91309053875e-13, TOL));
    assert(isequalRel(satrec.bstar, 6.6816e-5, TOL));
    assert(isequalRel(satrec.inclo, 1.271358913676, TOL));
    assert(isequalRel(satrec.nodeo, 2.024039134916, TOL));
    assert(isequalRel(satrec.ecco, 8.6731e-3, TOL));
    assert(isequalRel(satrec.argpo, 9.1976757185e-1, TOL));
    assert(isequalRel(satrec.mo, 1.92983498854, TOL));
    assert(isequalRel(satrec.no, 7.010615566653e-2, TOL));
    assert(isequalRel(satrec.a, 1.040501892439, TOL));
    assert(isequalRel(satrec.alta, 4.952626940243e-2, TOL));
    assert(isequalRel(satrec.altp, 3.14775154758e-2, TOL));
    assert(isequalRel(satrec.jdsatepoch, 2.444514487085e6, TOL));
    assert(isequalRel(satrec.isimp, 1.0, TOL));
    assert(isequalRel(satrec.aycof, 1.120360099968e-3, TOL));
    assert(isequalRel(satrec.con41, -7.389556198424e-1, TOL));
    assert(isequalRel(satrec.cc1, 2.333804402169e-8, TOL));
    assert(isequalRel(satrec.cc4, 3.772011178428e-4, TOL));
    assert(isequalRel(satrec.cc5, 1.233491918541e-2, TOL));
    assert(isequalRel(satrec.d2, 0.0, TOL));
    assert(isequalRel(satrec.d3, 0.0, TOL));
    assert(isequalRel(satrec.d4, 0.0, TOL));
    assert(isequalRel(satrec.delmo, 6.963086753786e-1, TOL));
    assert(isequalRel(satrec.eta, 3.234711971626e-1, TOL));
    assert(isequalRel(satrec.argpdot, -2.971792488745e-5, TOL));
    assert(isequalRel(satrec.omgcof, 1.63483047508e-7, TOL));
    assert(isequalRel(satrec.sinmao, 9.362350458581e-1, TOL));
    assert(isequalRel(satrec.t, 0.0, TOL));
    assert(isequalRel(satrec.t2cof, 3.500706603253e-8, TOL));
    assert(isequalRel(satrec.t3cof, 0.0, TOL));
    assert(isequalRel(satrec.t4cof, 0.0, TOL));
    assert(isequalRel(satrec.t5cof, 0.0, TOL));
    assert(isequalRel(satrec.x1mth2, 9.129852066141e-1, TOL));
    assert(isequalRel(satrec.x7thm1, -3.90896446299e-1, TOL));
    assert(isequalRel(satrec.mdot, 7.006729343208e-2, TOL));
    assert(isequalRel(satrec.nodedot, -3.096311241687e-5, TOL));
    assert(isequalRel(satrec.xlcof, 1.935745758017e-3, TOL));
    assert(isequalRel(satrec.xmcof, -4.935338810866e-5, TOL));
    assert(isequalRel(satrec.nodecf, -2.535821868201e-12, TOL));
    assert(isequalRel(satrec.irez, 0.0, TOL));
    assert(isequalRel(satrec.d2201, 0.0, TOL));
    assert(isequalRel(satrec.d2211, 0.0, TOL));
    assert(isequalRel(satrec.d3210, 0.0, TOL));
    assert(isequalRel(satrec.d3222, 0.0, TOL));
    assert(isequalRel(satrec.d4410, 0.0, TOL));
    assert(isequalRel(satrec.d4422, 0.0, TOL));
    assert(isequalRel(satrec.d5220, 0.0, TOL));
    assert(isequalRel(satrec.d5232, 0.0, TOL));
    assert(isequalRel(satrec.d5421, 0.0, TOL));
    assert(isequalRel(satrec.d5433, 0.0, TOL));
    assert(isequalRel(satrec.dedt, 0.0, TOL));
    assert(isequalRel(satrec.del1, 0.0, TOL));
    assert(isequalRel(satrec.del2, 0.0, TOL));
    assert(isequalRel(satrec.del3, 0.0, TOL));
    assert(isequalRel(satrec.didt, 0.0, TOL));
    assert(isequalRel(satrec.dmdt, 0.0, TOL));
    assert(isequalRel(satrec.dnodt, 0.0, TOL));
    assert(isequalRel(satrec.domdt, 0.0, TOL));
    assert(isequalRel(satrec.e3, 0.0, TOL));
    assert(isequalRel(satrec.ee2, 0.0, TOL));
    assert(isequalRel(satrec.peo, 0.0, TOL));
    assert(isequalRel(satrec.pgho, 0.0, TOL));
    assert(isequalRel(satrec.pho, 0.0, TOL));
    assert(isequalRel(satrec.pinco, 0.0, TOL));
    assert(isequalRel(satrec.plo, 0.0, TOL));
    assert(isequalRel(satrec.se2, 0.0, TOL));
    assert(isequalRel(satrec.se3, 0.0, TOL));
    assert(isequalRel(satrec.sgh2, 0.0, TOL));
    assert(isequalRel(satrec.sgh3, 0.0, TOL));
    assert(isequalRel(satrec.sgh4, 0.0, TOL));
    assert(isequalRel(satrec.sh2, 0.0, TOL));
    assert(isequalRel(satrec.sh3, 0.0, TOL));
    assert(isequalRel(satrec.si2, 0.0, TOL));
    assert(isequalRel(satrec.si3, 0.0, TOL));
    assert(isequalRel(satrec.sl2, 0.0, TOL));
    assert(isequalRel(satrec.sl3, 0.0, TOL));
    assert(isequalRel(satrec.sl4, 0.0, TOL));
    assert(isequalRel(satrec.gsto, 1.082901416696e-1, TOL));
    assert(isequalRel(satrec.xfact, 0.0, TOL));
    assert(isequalRel(satrec.xgh2, 0.0, TOL));
    assert(isequalRel(satrec.xgh3, 0.0, TOL));
    assert(isequalRel(satrec.xgh4, 0.0, TOL));
    assert(isequalRel(satrec.xh2, 0.0, TOL));
    assert(isequalRel(satrec.xh3, 0.0, TOL));
    assert(isequalRel(satrec.xi2, 0.0, TOL));
    assert(isequalRel(satrec.xi3, 0.0, TOL));
    assert(isequalRel(satrec.xl2, 0.0, TOL));
    assert(isequalRel(satrec.xl3, 0.0, TOL));
    assert(isequalRel(satrec.xl4, 0.0, TOL));
    assert(isequalRel(satrec.xlamo, 0.0, TOL));
    assert(isequalRel(satrec.zmol, 0.0, TOL));
    assert(isequalRel(satrec.zmos, 0.0, TOL));
    assert(isequalRel(satrec.atime, 0.0, TOL));
    assert(isequalRel(satrec.xli, 0.0, TOL));
    assert(isequalRel(satrec.xni, 0.0, TOL));
    equal(satrec.method, "n");
    equal(satrec.init, "n");
});
// 88888
