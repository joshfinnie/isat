/*global initl: true, getgravc: true,
 module: true, test: true, expect: true, ok: true, isequalRel: true, equal: true
*/
// input opsmode afspc a, improved i i
// input type of run c, v, m: v
// input constants 721, 72, 84 72
// input elset filename: SGP4-VER.TLE

// Must set globals same as testmat.m's run

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

module("initl");

test(" 1.859667000000e-01,  1.844178495062e+04,  5.980929187319e-01,  4.722944544078e-02, 5", function() {
    var rets = initl(1.859667e-1, 1.844178495062e4, 5.980929187319e-1, 4.722944544078e-2, 5),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 7.386070850905e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 1.353899820603, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.048865087996, TOL), "con41=" + con41);
    ok(isequalRel(con42, -2.414775146659, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 8.264109324857e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 6.829550293319e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 5.3773067974, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 3.458361350889e-2, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.654163864911e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 1.708450473396, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.102119538835, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.825560475063e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 5.630674654676e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 3.469172342379, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 4.720630155918e-2, TOL), "no=" + no);
});

// 5

test(" 1.450506000000e-01,  1.975491070959e+04,  2.000636014976e-01,  5.246109836613e-03, 4632", function() {
    var rets = initl(1.450506e-1, 1.975491070959e4, 2.000636014976e-1, 5.246109836613e-3, 4632),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 1.70722892538e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 5.857445273648, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.881517177058, TOL), "con41=" + con41);
    ok(isequalRel(con42, -3.80252862843, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 9.80053940192e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 9.605057256859e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 6.894145904946, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 2.103967656036e-2, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.789603234396e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 3.288112440965e1, TOL), "posq=" + posq);
    ok(isequalRel(rp, 5.007819322238, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.894242383526e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 1.987316640953e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 1.71602708407, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 5.245868658927e-3, TOL), "no=" + no);
});

// 4632

test(" 3.003500000000e-03,  2.063082412014e+04,  1.013301511794e+00,  6.791020666036e-02, 6251", function() {
    var rets = initl(3.0035e-3, 2.063082412014e4, 1.013301511794, 6.791020666036e-2, 6251),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 9.413191670523e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 1.06233893349, TOL), "ao=" + ao);
    ok(isequalRel(con41, -1.602801925378e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, -3.99533012437e-1, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 5.290620024982e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 2.799066024874e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 3.329448976194e2, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 9.02101225e-6, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.999909789878e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 1.128543648121, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.059148198503, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.999954894837e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 8.485831706513e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 3.673754967933, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 6.791803699335e-2, TOL), "no=" + no);
});

// 6251

test(" 6.877146000000e-01,  2.063033215444e+04,  1.119778813470e+00,  8.748086888067e-03, 8195", function() {
    var rets = initl(6.877146e-1, 2.063033215444e4, 1.11977881347, 8.748086888067e-3, 8195),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 2.400881758466e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 4.165136398215, TOL), "ao=" + ao);
    ok(isequalRel(con41, -4.300218866316e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, 5.003647771941e-2, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 4.35881525711e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 1.899927044561e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.454091566472, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 4.729513710532e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 5.270486289468e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 4.819032241803, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.300711286171, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 7.259811491677e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 9.000040530708e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 5.741801269032e-1, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 8.74854701963e-3, TOL), "no=" + no);
});

// 8195

test(" 7.069051000000e-01,  2.063056157475e+04,  1.127426846252e+00,  8.762146867822e-03, 9880", function() {
    var rets = initl(7.069051e-1, 2.063056157475e4, 1.127426846252, 8.762146867822e-3, 9880),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 2.403464391941e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 4.16066076682, TOL), "ao=" + ao);
    ok(isequalRel(con41, -4.479141048878e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, 7.985684147962e-2, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 4.289855844945e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 1.840286317041e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.414617039826, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 4.99714820406e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 5.00285179594e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 4.33271268391, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.219468451385, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 7.073084048659e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 9.033113351973e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 2.019617116981, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 8.762667060363e-3, TOL), "no=" + no);
});

// 9880

test(" 2.709710000000e-02,  2.023779417928e+04,  1.657329751109e-01,  5.069604863892e-03, 9998", function() {
    var rets = initl(2.70971e-2, 2.023779417928e4, 1.657329751109e-1, 5.069604863892e-3, 9998),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 1.668720698242e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 5.99261458825, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.918349444333, TOL), "con41=" + con41);
    ok(isequalRel(con42, -3.863915740555, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 9.862976975087e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 9.727831481111e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 3.690431817427e1, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 7.3425282841e-4, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.992657471716e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 3.585871282662e1, TOL), "posq=" + posq);
    ok(isequalRel(rp, 5.830232111491, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.996328061701e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 1.649753069066e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 3.007604046768, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 5.06938472225e-3, TOL), "no=" + no);
});

// 9998

test(" 7.318036000000e-01,  1.118729629788e+04,  8.166674822762e-01,  9.971844782556e-03, 11801", function() {
    var rets = initl(7.318036e-1, 1.118729629788e4, 8.166674822762e-1, 9.971844782556e-3, 11801),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 2.619649072783e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 3.817305189423, TOL), "ao=" + ao);
    ok(isequalRel(con41, 4.062531798299e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, -1.343755299716, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 6.846539709542e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 4.687510599433e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.366486855216, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 5.35536508973e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 4.64463491027e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 3.143525080235, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.023787509504, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 6.815155838475e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 7.288682597402e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 1.265125075736, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 9.971131604593e-3, TOL), "no=" + no);
});

// 11801

test(" 1.156200000000e-03,  2.063002844893e+04,  1.996377411601e-01,  4.314022552805e-03, 14128", function() {
    var rets = initl(1.1562e-3, 2.063002844893e4, 1.996377411601e-1, 4.314022552805e-3, 14128),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 1.498506014108e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 6.673313223874, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.882014339061, TOL), "con41=" + con41);
    ok(isequalRel(con42, -3.803357231769, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 9.801384832532e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 9.606714463538e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 8.649022660439e2, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 1.33679844e-6, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.999986632016e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 4.453299032044e1, TOL), "posq=" + posq);
    ok(isequalRel(rp, 6.665597539125, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.999993316006e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 1.983142799855e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 4.943902851905, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 4.313874514604e-3, TOL), "no=" + no);
});

// 14128

test(" 5.596327000000e-01,  2.060567415771e+04,  1.083685404539e+00,  2.131535163460e-02, 16925", function() {
    var rets = initl(5.596327e-1, 2.060567415771e4, 1.083685404539, 2.13153516346e-2, 16925),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 4.347456405863e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 2.300195577928, TOL), "ao=" + ao);
    ok(isequalRel(con41, -3.427179465249e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, -9.547008912508e-2, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 4.680747993911e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 2.19094017825e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.78688629167, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 3.131887589093e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 6.868112410907e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 2.495768607552, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.012930916124, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 8.287407562626e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 8.836888491856e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 2.298863660699, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 2.131732105901e-2, TOL), "no=" + no);
});

// 16925

test(" 7.864447000000e-01,  2.045279166667e+04,  2.155725972308e-01,  1.077308058718e-03, 20413", function() {
    var rets = initl(7.864447e-1, 2.045279166667e4, 2.155725972308e-1, 1.077308058718e-3, 20413),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 5.942468133044e-2, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 1.682802461219e1, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.862731633406, TOL), "con41=" + con41);
    ok(isequalRel(con42, -3.771219389011, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 9.768540719074e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 9.542438778022e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.271545221171, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 6.184952661581e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 3.815047338419e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 4.121602829256e1, TOL), "posq=" + posq);
    ok(isequalRel(rp, 3.593713844463, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 6.176606947523e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 2.139068072733e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 4.071885638059e-1, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 1.077283640185e-3, TOL), "no=" + no);
});

// 20413

test(" 7.421690000000e-01,  2.063002341244e+04,  1.085156717098e+00,  8.782060201923e-03, 21897", function() {
    var rets = initl(7.42169e-1, 2.063002341244e4, 1.085156717098, 8.782060201923e-3, 21897),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 2.407096096629e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 4.154383372564, TOL), "ao=" + ao);
    ok(isequalRel(con41, -3.463657886765e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, -8.939035220576e-2, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 4.667741107229e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 2.178780704412e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.347402006821, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 5.50814824561e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 4.49185175439e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 3.482282274182, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.071128819331, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 6.702127837031e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 8.84376576781e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 4.912171010008, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 8.782535528761e-3, TOL), "no=" + no);
});

// 21897

test(" 3.087230000000e-02,  2.054846235912e+04,  1.084697695505e+00,  6.962749021661e-02, 22312", function() {
    var rets = initl(3.08723e-2, 2.054846235912e4, 1.084697695505, 6.962749021661e-2, 22312),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 9.572126270093e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 1.044699967158, TOL), "ao=" + ao);
    ok(isequalRel(con41, -3.452285162292e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, -9.128580628459e-2, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 4.671800094791e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 2.182571612569e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 3.239149658432e1, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 9.5309890729e-4, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.990469010927e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 1.08931859228, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.012447676362, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.995233369425e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 8.841622242231e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 6.267076519855, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 6.964539419426e-2, TOL), "no=" + no);
});

// 22312
// *** error: t:= 494.202867 *** code =   1

test(" 7.541712000000e-01,  2.063055909107e+04,  1.108345161540e+00,  8.581775554476e-03, 22674", function() {
    var rets = initl(7.541712e-1, 2.063055909107e4, 1.10834516154, 8.581775554476e-3, 22674),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 2.370374917914e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 4.218741906365, TOL), "ao=" + ao);
    ok(isequalRel(con41, -4.028688855919e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, 4.781475986499e-3, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 4.461431438481e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 1.990437048027e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.325958880424, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 5.687741989094e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 4.312258010906e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 3.309599096075, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.037088260351, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 6.566778518349e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 8.949616166056e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 2.003968969617, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 8.58233251624e-3, TOL), "no=" + no);
});

// 22674

test(" 7.258491000000e-01,  2.062945752052e+04,  1.230387309486e-01,  9.857037897024e-03, 23177", function() {
    var rets = initl(7.258491e-1, 2.062945752052e4, 1.230387309486e-1, 9.857037897024e-3, 23177),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 2.599056204118e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 3.847550500891, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.954813125046, TOL), "con41=" + con41);
    ok(isequalRel(con42, -3.924688541744, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 9.924402794872e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 9.849377083487e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.377696824312, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 5.268569159708e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 4.731430840292e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 3.314008747501, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.054809432615, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 6.878539699887e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 1.227285282698e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 1.346832291139, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 9.853789469239e-3, TOL), "no=" + no);
});

// 23177

test(" 9.728298000000e-01,  1.637649999999e+04,  5.017647066558e-01,  3.189367114872e-04, 23333", function() {
    var rets = initl(9.728298e-1, 1.637649999999e4, 5.017647066558e-1, 3.189367114872e-4, 23333),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 2.639566378141e-2, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 3.788501051845e1, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.305993571902, TOL), "con41=" + con41);
    ok(isequalRel(con42, -2.843322619837, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 8.767351504117e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 7.686645239674e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.027929037536, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 9.46397819768e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 5.360218023196e-2, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 4.123820314506, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.029343312788, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 2.315214465918e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 4.809734670776e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 3.849219568564, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 3.189177226396e-4, TOL), "no=" + no);
});

// 23333

test(" 5.782022000000e-01,  2.062576535463e+04,  1.209984410530e-01,  1.953881109593e-02, 23599", function() {
    var rets = initl(5.782022e-1, 2.062576535463e4, 1.20998441053e-1, 1.953881109593e-2, 23599),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 4.100810857141e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 2.438542119685, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.956292061635, TOL), "con41=" + con41);
    ok(isequalRel(con42, -3.927153436058, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 9.926886154337e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 9.854306872116e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.729498780876, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 3.343177840848e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 6.656822159152e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 2.635083805981, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.02857170129, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 8.15893507705e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 1.207034083544e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 3.217495488339, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 1.952919673236e-2, TOL), "no=" + no);
});

// 23599

test(" 2.664000000000e-03,  2.063104061740e+04,  6.725800805485e-02,  4.397272140132e-03, 24208", function() {
    var rets = initl(2.664e-3, 2.06310406174e4, 6.725800805485e-2, 4.397272140132e-3, 24208),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 1.517719882533e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 6.588831124297, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.986449532035, TOL), "con41=" + con41);
    ok(isequalRel(con42, -3.977415886724, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 9.977390326858e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 9.954831773449e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 3.753753753754e2, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 7.096896e-6, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.99992903104e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 4.341207939592e1, TOL), "posq=" + posq);
    ok(isequalRel(rp, 6.571278478182, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.999964515457e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 6.720731102433e-2, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 5.037771726289, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 4.397108759492e-3, TOL), "no=" + no);
});

// 24208

test(" 1.765000000000e-04,  1.976268057285e+04,  6.981317007977e-06,  4.375160345672e-03, 25954", function() {
    var rets = initl(1.765e-4, 1.976268057285e4, 6.981317007977e-6, 4.375160345672e-3, 25954),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 1.51262767776e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 6.611012179023, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.999999999854, TOL), "con41=" + con41);
    ok(isequalRel(con42, -3.999999999756, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 9.999999999756e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 9.999999999513e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 5.665722379603e3, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 3.115225e-8, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.999999688477e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 4.370547930815e1, TOL), "posq=" + posq);
    ok(isequalRel(rp, 6.609845335374, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.999999844239e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 6.981317007921e-6, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 4.036986406591e-1, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 4.374997775854e-3, TOL), "no=" + no);
});

// 25954

test(" 3.319000000000e-04,  2.056074503247e+04,  2.862339973271e-04,  4.375271959478e-03, 26900", function() {
    var rets = initl(3.319e-4, 2.056074503247e4, 2.862339973271e-4, 4.375271959478e-3, 26900),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 1.51265340193e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 6.610899752212, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.99999975421, TOL), "con41=" + con41);
    ok(isequalRel(con42, -3.999999590351, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 9.99999959035e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 9.999999180701e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 3.012955709551e3, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 1.1015761e-7, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.999998898424e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 4.370398590514e1, TOL), "posq=" + posq);
    ok(isequalRel(rp, 6.608705594584, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.999999449212e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 2.862339934185e-4, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 1.971276525301, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 4.375109379983e-3, TOL), "no=" + no);
});

// 26900

test(" 5.602877000000e-01,  2.062885818871e+04,  1.195051373450e+00,  8.973503578612e-03, 26975", function() {
    var rets = initl(5.602877e-1, 2.062885818871e4, 1.19505137345, 8.973503578612e-3, 26975),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 2.441946885467e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 4.095093165013, TOL), "ao=" + ao);
    ok(isequalRel(con41, -5.960087184875e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, 3.266811974792e-1, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 3.669656121548e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 1.346637605042e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.784797346078, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 3.139223067713e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 6.860776932287e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 7.893582846451, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.800662834302, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 8.282980702795e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 9.302345077967e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 3.853994597295, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 8.973959238486e-3, TOL), "no=" + no);
});

// 26975

test(" 8.840000000000e-05,  2.063178615833e+04,  1.717897912141e+00,  6.263454709052e-02, 28057", function() {
    var rets = initl(8.84e-5, 2.063178615833e4, 1.717897912141, 6.263454709052e-2, 28057),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 8.9220440418e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 1.120819394429, TOL), "ao=" + ao);
    ok(isequalRel(con41, -9.355502628635e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, 8.925837714392e-1, TOL), "con42=" + con42);
    ok(isequalRel(cosio, -1.465716402042e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 2.148324571216e-2, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.131221719457e4, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 7.81456e-9, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.999999921854e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 1.256236095295, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.120720313995, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.999999960927e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 9.892000577678e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 3.451783621544, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 6.267239862091e-2, TOL), "no=" + no);
});

// 28057

test(" 4.850600000000e-03,  2.062957071136e+04,  9.552152089580e-01,  8.751201646284e-03, 28129", function() {
    var rets = initl(4.8506e-3, 2.062957071136e4, 9.55215208958e-1, 8.751201646284e-3, 28129),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 2.401367388842e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 4.164294079475, TOL), "ao=" + ao);
    ok(isequalRel(con41, 2.868387191267e-4, TOL), "con41=" + con41);
    ok(isequalRel(con42, -6.671447311985e-1, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 5.774330664585e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 3.334289462397e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 2.061600626727e2, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 2.352832036e-5, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.999764716796e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 1.73405291645e1, TOL), "posq=" + posq);
    ok(isequalRel(rp, 4.144094754613, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.999882357706e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 8.164380281199e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 2.059978512381, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 8.751201528747e-3, TOL), "no=" + no);
});

// 28129

test(" 2.487000000000e-03,  2.062121788666e+04,  1.134423871224e+00,  7.190131350005e-02, 28350", function() {
    var rets = initl(2.487e-3, 2.062121788666e4, 1.134423871224, 7.190131350005e-2, 28350),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 9.780078361195e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 1.022486694961, TOL), "ao=" + ao);
    ok(isequalRel(con41, -4.64089158438e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, 1.068152640634e-1, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 4.226546429265e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 1.786369471873e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 4.020908725372e2, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 6.185169e-6, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.99993814831e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 1.045466108483, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.019943770551, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.999969074107e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 9.062908213221e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 5.982608943601, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 7.192721985507e-2, TOL), "no=" + no);
});

// 28350
// *** error: t:= 1560.000000 *** code =   1

test(" 6.249053000000e-01,  2.063181079184e+04,  4.977679026688e-01,  1.655781478256e-02, 28623", function() {
    var rets = initl(6.249053e-1, 2.063181079184e4, 4.977679026688e-1, 1.655781478256e-2, 28623),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 3.672775780112e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 2.722736316807, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.316080099741, TOL), "con41=" + con41);
    ok(isequalRel(con42, -2.860133499568, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 8.786504992963e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 7.720266999137e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.600242468739, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 3.905066339681e-1, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 6.094933660319e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 2.753906139243, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.021283961932, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 7.807005610552e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 4.77465496226e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 3.606984295022, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 1.655279727416e-2, TOL), "no=" + no);
});

// 28623

test(" 3.350000000000e-05,  2.063046683397e+04,  3.316125578789e-05,  4.375111781885e-03, 28626", function() {
    var rets = initl(3.35e-5, 2.063046683397e4, 3.316125578789e-5, 4.375111781885e-3, 28626),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 1.512616484965e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 6.611061098038, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.999999996701, TOL), "con41=" + con41);
    ok(isequalRel(con42, -3.999999994502, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 9.999999994502e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 9.999999989003e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 2.985074626866e4, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 1.12225e-9, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.999999988778e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 4.370612874389e1, TOL), "posq=" + posq);
    ok(isequalRel(rp, 6.610839627491, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.999999994389e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 3.316125578181e-5, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 1.422713433736, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 4.374949216286e-3, TOL), "no=" + no);
});

// 28626

test(" 3.039550000000e-02,  2.042202012661e+04,  1.683781961252e+00,  7.182099414601e-02, 28872", function() {
    var rets = initl(3.03955e-2, 2.042202012661e4, 1.683781961252, 7.182099414601e-2, 28872),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 9.775310460243e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 1.022985412143, TOL), "ao=" + ao);
    ok(isequalRel(con41, -9.618654265547e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, 9.364423775911e-1, TOL), "con42=" + con42);
    ok(isequalRel(cosio, -1.12745396721e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 1.271152448177e-2, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 3.28996068497e1, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 9.2388642025e-4, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.990761135798e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 1.044566354001, TOL), "posq=" + posq);
    ok(isequalRel(rp, 9.918912590484e-1, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.995379500448e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 9.936239105005e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 1.313288306073, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 7.187462824278e-2, TOL), "no=" + no);
});

// 28872

test(" 1.584800000000e-03,  2.062426783845e+04,  1.438653958468e+00,  6.952270688787e-02, 29141", function() {
    var rets = initl(1.5848e-3, 2.062426783845e4, 1.438653958468, 6.952270688787e-2, 29141),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 9.565366465641e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 1.045438252253, TOL), "ao=" + ao);
    ok(isequalRel(con41, -9.479193821401e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, 9.131989702335e-1, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 1.317581342965e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 1.73602059533e-2, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 6.309944472489e2, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 2.51159104e-6, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.99997488409e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 1.092935649238, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.043781441711, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.999987442037e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 9.912818943402e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 6.574767745587e-2, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 6.957163219428e-2, TOL), "no=" + no);
});

// 29141
// *** error: t:= 440.000000 *** code =   6

test(" 2.025790000000e-02,  2.063128732010e+04,  8.998830356820e-01,  6.867101959232e-02, 29238", function() {
    var rets = initl(2.02579e-2, 2.06312873201e4, 8.99883035682e-1, 6.867101959232e-2, 29238),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 9.48190068883e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 1.054640870873, TOL), "ao=" + ao);
    ok(isequalRel(con41, 1.59538583554e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, -9.325643059233e-1, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 6.217015853162e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 3.865128611847e-1, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 4.936345820643e1, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 4.1038251241e-4, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.995896174876e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 1.111354643684, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.033276061575, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.997947876877e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 7.832541980834e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 3.089091736929e-1, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 6.866301602203e-2, TOL), "no=" + no);
});

// 29238

test(" 8.673100000000e-03,  1.123298708465e+04,  1.271358913676e+00,  7.006731262088e-02, 88888", function() {
    var rets = initl(8.6731e-3, 1.123298708465e4, 1.271358913676, 7.006731262088e-2, 88888),
        ainv = rets.shift(),
        ao = rets.shift(),
        con41 = rets.shift(),
        con42 = rets.shift(),
        cosio = rets.shift(),
        cosio2 = rets.shift(),
        einv = rets.shift(),
        eccsq = rets.shift(),
        method = rets.shift(),
        omeosq = rets.shift(),
        posq = rets.shift(),
        rp = rets.shift(),
        rteosq = rets.shift(),
        sinio = rets.shift(),
        gsto = rets.shift(),
        no = rets.shift(),
        TOL = 0.000001;
    expect(16);
    ok(isequalRel(ainv, 9.614298171958e-1, TOL), "ainv=" + ainv);
    ok(isequalRel(ao, 1.040117523, TOL), "ao=" + ao);
    ok(isequalRel(con41, -7.389556198424e-1, TOL), "con41=" + con41);
    ok(isequalRel(con42, 5.649260330707e-1, TOL), "con42=" + con42);
    ok(isequalRel(cosio, 2.949827001467e-1, TOL), "cosio=" + cosio);
    ok(isequalRel(cosio2, 8.701479338586e-2, TOL), "cosio2=" + cosio2);
    ok(isequalRel(einv, 1.152990280292e2, TOL), "einv=" + einv);
    ok(isequalRel(eccsq, 7.522266361e-5, TOL), "eccsq=" + eccsq);
    equal(method, "n", "method=" + method);
    ok(isequalRel(omeosq, 9.999247773364e-1, TOL), "omeosq=" + omeosq);
    ok(isequalRel(posq, 1.081681709329, TOL), "posq=" + posq);
    ok(isequalRel(rp, 1.031096479711, TOL), "rp=" + rp);
    ok(isequalRel(rteosq, 9.999623879609e-1, TOL), "rteosq=" + rteosq);
    ok(isequalRel(sinio, 9.555025937244e-1, TOL), "sinio=" + sinio);
    ok(isequalRel(gsto, 1.082901416696e-1, TOL), "gsto=" + gsto);
    ok(isequalRel(no, 7.010615566653e-2, TOL), "no=" + no);
});

// 88888
