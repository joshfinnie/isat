/*global
  module: true, test: true, equal: true, notEqual: true, ok: true,
  rv2coe: true
 */

module("rv2coe");

test("isEqualRel", function() {
    expect(4);
    ok(isequalRel(1, 1, 0.1));
    ok(isequalRel(10, 10, 0.1));
    ok(isequalRel(10, 11, 0.1));
    ok(!isequalRel(10, 12, 0.1));
});

test("[-7.154031202016e+03, -3.783176825037e+03, -3.536194122942e+03], [4.741887408996e+00, -4.151817765374e+00, -2.093935424907e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-7.154031202016e3, -3.783176825037e3, -3.536194122942e3],
            [4.741887408996, -4.151817765374, -2.093935424907],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.337614659522e3, TOL));
    ok(isequalRel(a, 8.635348839123e3, TOL));
    ok(isequalRel(ecc, 1.856839661347e-1, TOL));
    ok(isequalRel(incl, 5.980902747186e-1, TOL));
    ok(isequalRel(omega, 6.073396448233, TOL));
    ok(isequalRel(argp, 5.809453981565, TOL));
    ok(isequalRel(nu, 4.406401781136, TOL));
    ok(isequalRel(m, 4.773972245877, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-7.134593401193e+03, 6.531686413336e+03, 3.260271864826e+03], [-4.113793027161e+00, -2.911922038623e+00, -2.557327850931e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-7.134593401193e3, 6.531686413336e3, 3.260271864826e3],
            [-4.113793027161, -2.911922038623, -2.557327850931],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.339853334747e3, TOL));
    ok(isequalRel(a, 8.635866960793e3, TOL));
    ok(isequalRel(ecc, 1.851411170975e-1, TOL));
    ok(isequalRel(incl, 5.981716557276e-1, TOL));
    ok(isequalRel(omega, 6.059255141749, TOL));
    ok(isequalRel(argp, 5.833241026263, TOL));
    ok(isequalRel(nu, 2.988460057544, TOL));
    ok(isequalRel(m, 2.923112339227, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.568539011812e+03, 4.492069925906e+03, 3.863876419829e+03], [-4.209106475593e+00, 5.159719888480e+00, 2.744852979555e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.568539011812e3, 4.492069925906e3, 3.863876419829e3],
            [-4.209106475593, 5.15971988848, 2.744852979555],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.335900847914e3, TOL));
    ok(isequalRel(a, 8.633623710033e3, TOL));
    ok(isequalRel(ecc, 1.856989869471e-1, TOL));
    ok(isequalRel(incl, 5.979988736559e-1, TOL));
    ok(isequalRel(omega, 6.046595816048, TOL));
    ok(isequalRel(argp, 5.853141953317, TOL));
    ok(isequalRel(nu, 1.434828952104, TOL));
    ok(isequalRel(m, 1.075720867283, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.385592394293e+02, -6.268187488314e+03, -4.294029247512e+03], [7.536105209256e+00, -4.271277071235e-01, 9.898780795592e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.385592394293e2, -6.268187488314e3, -4.294029247512e3],
            [7.536105209256, -4.271277071235e-1, 9.898780795592e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.334109642124e3, TOL));
    ok(isequalRel(a, 8.632108227126e3, TOL));
    ok(isequalRel(ecc, 1.858012633167e-1, TOL));
    ok(isequalRel(incl, 5.978749261546e-1, TOL));
    ok(isequalRel(omega, 6.032792937708, TOL));
    ok(isequalRel(argp, 5.870225097414, TOL));
    ok(isequalRel(nu, 5.209551568087, TOL));
    ok(isequalRel(m, 5.514322334927, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.680561217281e+03, 2.802477713539e+03, 1.241068803824e+02], [-9.058741021590e-01, -4.659467969920e+00, -3.227347516713e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.680561217281e3, 2.802477713539e3, 1.241068803824e2],
            [-9.05874102159e-1, -4.65946796992, -3.227347516713],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.341319539571e3, TOL));
    ok(isequalRel(a, 8.637127872899e3, TOL));
    ok(isequalRel(ecc, 1.850633960634e-1, TOL));
    ok(isequalRel(incl, 5.983138255788e-1, TOL));
    ok(isequalRel(omega, 6.019459854049, TOL));
    ok(isequalRel(argp, 5.889106665837, TOL));
    ok(isequalRel(nu, 3.513807794463, TOL));
    ok(isequalRel(m, 3.668047110329, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.901979698785e+02, 7.746966536135e+03, 5.110006754119e+03], [-6.112325142014e+00, 1.527008183520e+00, -1.391523578826e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.901979698785e2, 7.746966536135e3, 5.110006754119e3],
            [-6.112325142014, 1.52700818352, -1.391523578826e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.335624767687e3, TOL));
    ok(isequalRel(a, 8.633138109535e3, TOL));
    ok(isequalRel(ecc, 1.856388540272e-1, TOL));
    ok(isequalRel(incl, 5.978910438079e-1, TOL));
    ok(isequalRel(omega, 6.005935102877, TOL));
    ok(isequalRel(argp, 5.911739205734, TOL));
    ok(isequalRel(nu, 2.152516069731, TOL));
    ok(isequalRel(m, 1.818217088405, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.579556401157e+03, -3.995613967894e+03, -1.518821089660e+03], [4.767927482844e+00, 5.123185300954e+00, 4.276837354502e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.579556401157e3, -3.995613967894e3, -1.51882108966e3],
            [4.767927482844, 5.123185300954, 4.276837354502],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.337409961697e3, TOL));
    ok(isequalRel(a, 8.637313842212e3, TOL));
    ok(isequalRel(ecc, 1.863381127011e-1, TOL));
    ok(isequalRel(incl, 5.982488709865e-1, TOL));
    ok(isequalRel(omega, 5.992435248773, TOL));
    ok(isequalRel(argp, 5.929513417044, TOL));
    ok(isequalRel(nu, 6.24307909942, TOL));
    ok(isequalRel(m, 6.256157557215, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.650730822189e+03, -1.914938115252e+03, -3.007036034428e+03], [3.067165126543e+00, -4.828384068444e+00, -2.515322835722e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.650730822189e3, -1.914938115252e3, -3.007036034428e3],
            [3.067165126543, -4.828384068444, -2.515322835722],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.338816749353e3, TOL));
    ok(isequalRel(a, 8.636107820942e3, TOL));
    ok(isequalRel(ecc, 1.855375875133e-1, TOL));
    ok(isequalRel(incl, 5.981698818663e-1, TOL));
    ok(isequalRel(omega, 5.979700119383, TOL));
    ok(isequalRel(argp, 5.946164964733, TOL));
    ok(isequalRel(nu, 4.085982404991, TOL));
    ok(isequalRel(m, 4.411796032899, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-5.429792041645e+03, 7.574364937924e+03, 3.747393052359e+03], [-4.999442109604e+00, -1.800561422305e+00, -2.229392830241e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-5.429792041645e3, 7.574364937924e3, 3.747393052359e3],
            [-4.999442109604, -1.800561422305, -2.229392830241],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.338874275371e3, TOL));
    ok(isequalRel(a, 8.635480920301e3, TOL));
    ok(isequalRel(ecc, 1.853306179043e-1, TOL));
    ok(isequalRel(incl, 5.981197823301e-1, TOL));
    ok(isequalRel(omega, 5.965560466646, TOL));
    ok(isequalRel(argp, 5.970931228559, TOL));
    ok(isequalRel(nu, 2.729639278624, TOL));
    ok(isequalRel(m, 2.559979838351, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[6.759045837218e+03, 2.001581982197e+03, 2.783551925329e+03], [-2.180993947177e+00, 6.402085603047e+00, 3.644723951605e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [6.759045837218e3, 2.001581982197e3, 2.783551925329e3],
            [-2.180993947177, 6.402085603047, 3.644723951605],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.336546422834e3, TOL));
    ok(isequalRel(a, 8.635205457172e3, TOL));
    ok(isequalRel(ecc, 1.859736824913e-1, TOL));
    ok(isequalRel(incl, 5.981257682503e-1, TOL));
    ok(isequalRel(omega, 5.952956941884, TOL));
    ok(isequalRel(argp, 5.990484218242, TOL));
    ok(isequalRel(nu, 1.003249486494, TOL));
    ok(isequalRel(m, 7.128530079849e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.791445315589e+03, -5.712956178939e+03, -4.533486307144e+03], [6.668817492548e+00, -2.516382326527e+00, -8.238435374721e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.791445315589e3, -5.712956178939e3, -4.533486307144e3],
            [6.668817492548, -2.516382326527, -8.238435374721e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.334548537428e3, TOL));
    ok(isequalRel(a, 8.632738289754e3, TOL));
    ok(isequalRel(ecc, 1.858540672265e-1, TOL));
    ok(isequalRel(incl, 5.978894533793e-1, TOL));
    ok(isequalRel(omega, 5.939340690599, TOL));
    ok(isequalRel(argp, 6.006698438145, TOL));
    ok(isequalRel(nu, 4.787559941164, TOL));
    ok(isequalRel(m, 5.15227388912, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.060473735694e+03, 4.658709525023e+03, 8.136867315342e+02], [-2.232832782743e+00, -4.110453489937e+00, -3.157345433457e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.060473735694e3, 4.658709525023e3, 8.136867315342e2],
            [-2.232832782743, -4.110453489937, -3.157345433457],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 8.341157864704e3, TOL));
    ok(isequalRel(a, 8.637011478534e3, TOL));
    ok(isequalRel(ecc, 1.850788067685e-1, TOL));
    ok(isequalRel(incl, 5.98305201905e-1, TOL));
    ok(isequalRel(omega, 5.925695230329, TOL));
    ok(isequalRel(argp, 6.027322560784, TOL));
    ok(isequalRel(nu, 3.255632011792, TOL));
    ok(isequalRel(m, 3.304406322893, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 4632
});

test("[-2.902002587128e+04, 1.381984419063e+04, -5.713336791827e+03], [-1.768068389990e+00, -3.235371192013e+00, -3.952061354973e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.902002587128e4, 1.381984419063e4, -5.713336791827e3],
            [-1.76806838999, -3.235371192013, -3.952061354973e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.656820913603e4, TOL));
    ok(isequalRel(a, 3.735948645844e4, TOL));
    ok(isequalRel(ecc, 1.455338138953e-1, TOL));
    ok(isequalRel(incl, 1.999983374611e-1, TOL));
    ok(isequalRel(omega, 4.769426198266, TOL));
    ok(isequalRel(argp, 3.619511818339, TOL));
    ok(isequalRel(nu, 5.998398344535e-1, TOL));
    ok(isequalRel(m, 4.494239015219e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.298256870101e+04, -1.112554996609e+04, -6.803284727715e+03], [6.174469956131e-01, -3.379240040601e+00, 8.595470665877e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.298256870101e4, -1.112554996609e4, -6.803284727715e3],
            [6.174469956131e-1, -3.379240040601, 8.595470665877e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.65684488259e4, TOL));
    ok(isequalRel(a, 3.735947496585e4, TOL));
    ok(isequalRel(ecc, 1.455107353728e-1, TOL));
    ok(isequalRel(incl, 1.99994958382e-1, TOL));
    ok(isequalRel(omega, 4.769357582559, TOL));
    ok(isequalRel(argp, 3.619918488383, TOL));
    ok(isequalRel(nu, 1.35572953574, TOL));
    ok(isequalRel(m, 1.078829295587, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.209768730513e+04, -3.158313829284e+04, -4.836343293282e+03], [2.230597499085e+00, -2.166594666868e+00, 4.264430696850e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.209768730513e4, -3.158313829284e4, -4.836343293282e3],
            [2.230597499085, -2.166594666868, 4.26443069685e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.656883532036e4, TOL));
    ok(isequalRel(a, 3.735955835966e4, TOL));
    ok(isequalRel(ecc, 1.454826923634e-1, TOL));
    ok(isequalRel(incl, 1.999982410405e-1, TOL));
    ok(isequalRel(omega, 4.769309125784, TOL));
    ok(isequalRel(argp, 3.620008440095, TOL));
    ok(isequalRel(nu, 1.98594340475, TOL));
    ok(isequalRel(m, 1.708338309375, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.512994694545e+04, -3.690774526221e+04, -3.487562567009e+03], [2.581167186918e+00, -1.524204736894e+00, 5.048057626261e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.512994694545e4, -3.690774526221e4, -3.487562567009e3],
            [2.581167186918, -1.524204736894, 5.048057626261e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.656897426183e4, TOL));
    ok(isequalRel(a, 3.735958202308e4, TOL));
    ok(isequalRel(ecc, 1.454720410785e-1, TOL));
    ok(isequalRel(incl, 1.999993969e-1, TOL));
    ok(isequalRel(omega, 4.769299004837, TOL));
    ok(isequalRel(argp, 3.620001929448, TOL));
    ok(isequalRel(nu, 2.209343273602, TOL));
    ok(isequalRel(m, 1.960174868014, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 6251
});

test("[-3.935698000834e+03, 4.091098083655e+02, 5.471335773274e+03], [-3.374784182643e+00, -6.635211043490e+00, -1.942056221260e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
        [-3.935698000834e3, 4.091098083655e2, 5.471335773274e3],
        [-3.374784182643, -6.63521104349, -1.94205622126],
        3.986004418e5
    );
    (TOL = 0.000001), (p = rets.shift()), (a = rets.shift()), (ecc = rets.shift()), (incl = rets.shift()), (omega = rets.shift()), (argp = rets.shift()), (nu = rets.shift()), (m = rets.shift()), (arglat = rets.shift()), (truelon = rets.shift()), (lonper = rets.shift());

    ok(isequalRel(p, 6.769876906222e3, TOL));
    ok(isequalRel(a, 6.76993164478e3, TOL));
    ok(isequalRel(ecc, 2.843508525266e-3, TOL));
    ok(isequalRel(incl, 1.013035251741, TOL));
    ok(isequalRel(omega, 9.368028593385e-1, TOL));
    ok(isequalRel(argp, 2.276713783656, TOL));
    ok(isequalRel(nu, 5.878252404382, TOL));
    ok(isequalRel(m, 5.880488460609, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.675127669149e+03, -5.683304323518e+03, -3.286215109367e+03], [5.282496924661e+00, 1.508674258574e+00, -5.354872977678e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.675127669149e3, -5.683304323518e3, -3.286215109367e3],
            [5.282496924661, 1.508674258574, -5.354872977678],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.77807943375e3, TOL));
    ok(isequalRel(a, 6.778156694783e3, TOL));
    ok(isequalRel(ecc, 3.376171121503e-3, TOL));
    ok(isequalRel(incl, 1.013413436913, TOL));
    ok(isequalRel(omega, 9.311742339588e-1, TOL));
    ok(isequalRel(argp, 2.29928414615, TOL));
    ok(isequalRel(nu, 1.450679689026, TOL));
    ok(isequalRel(m, 1.443978045695, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.993626428356e+03, 2.890549699000e+03, -3.600401456269e+03], [3.473334286680e-01, 5.707031557193e+00, 5.070699637640e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.993626428356e3, 2.890549699e3, -3.600401456269e3],
            [3.47333428668e-1, 5.707031557193, 5.07069963764],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.777193050658e3, TOL));
    ok(isequalRel(a, 6.777278180813e3, TOL));
    ok(isequalRel(ecc, 3.544166013612e-3, TOL));
    ok(isequalRel(incl, 1.013373051728, TOL));
    ok(isequalRel(omega, 9.242447416178e-1, TOL));
    ok(isequalRel(argp, 2.328804938236, TOL));
    ok(isequalRel(nu, 3.280757728716, TOL));
    ok(isequalRel(m, 3.281743590394, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.115079595139e+03, 4.015116914910e+03, 5.326997277178e+03], [-5.524279443196e+00, -4.765738774072e+00, 2.402255961201e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.115079595139e3, 4.01511691491e3, 5.326997277178e3],
            [-5.524279443196, -4.765738774072, 2.402255961201],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.770563679355e3, TOL));
    ok(isequalRel(a, 6.770651429439e3, TOL));
    ok(isequalRel(ecc, 3.600050068409e-3, TOL));
    ok(isequalRel(incl, 1.013067759456, TOL));
    ok(isequalRel(omega, 9.186774191992e-1, TOL));
    ok(isequalRel(argp, 2.455296543895, TOL));
    ok(isequalRel(nu, 5.017749103053, TOL));
    ok(isequalRel(m, 5.024610533924, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.329100081975e+03, -5.176702879352e+03, 4.096531385745e+02], [2.858408303241e+00, -2.933091792054e+00, -6.509690396536e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.329100081975e3, -5.176702879352e3, 4.096531385745e2],
            [2.858408303241, -2.933091792054, -6.509690396536],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.782582953194e3, TOL));
    ok(isequalRel(a, 6.782705375244e3, TOL));
    ok(isequalRel(ecc, 4.24842883009e-3, TOL));
    ok(isequalRel(incl, 1.013621234494, TOL));
    ok(isequalRel(omega, 9.121592321497e-1, TOL));
    ok(isequalRel(argp, 2.365109240047, TOL));
    ok(isequalRel(nu, 7.050316851707e-1, TOL));
    ok(isequalRel(m, 6.99538569484e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.692600300280e+03, -9.762426525530e+02, -5.623364474929e+03], [3.897257243214e+00, 6.415554948136e+00, 1.429112189770e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.69260030028e3, -9.76242652553e2, -5.623364474929e3],
            [3.897257243214, 6.415554948136, 1.42911218977],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.769289850576e3, TOL));
    ok(isequalRel(a, 6.769430032318e3, TOL));
    ok(isequalRel(ecc, 4.550610606204e-3, TOL));
    ok(isequalRel(incl, 1.013010363345, TOL));
    ok(isequalRel(omega, 9.058473258015e-1, TOL));
    ok(isequalRel(argp, 2.1903273939, TOL));
    ok(isequalRel(nu, 2.746082539211, TOL));
    ok(isequalRel(m, 2.742564957154, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.301835100373e+03, 5.723923945532e+03, 2.814615145803e+03], [-5.110924966238e+00, -7.645105585249e-01, 5.662120144737e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.301835100373e3, 5.723923945532e3, 2.814615145803e3],
            [-5.110924966238, -7.645105585249e-1, 5.662120144737],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.779285427736e3, TOL));
    ok(isequalRel(a, 6.779390096225e3, TOL));
    ok(isequalRel(ecc, 3.929277166681e-3, TOL));
    ok(isequalRel(incl, 1.013469946587, TOL));
    ok(isequalRel(omega, 9.00135721078e-1, TOL));
    ok(isequalRel(argp, 2.151344297421, TOL));
    ok(isequalRel(nu, 4.642871348913, TOL));
    ok(isequalRel(m, 4.650712506846, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.990916379503e+03, -2.303425478800e+03, 3.920863355985e+03], [-9.934393720412e-01, -5.967458359673e+00, -4.759110855938e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.990916379503e3, -2.3034254788e3, 3.920863355985e3],
            [-9.934393720412e-1, -5.967458359673, -4.759110855938],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.776068246094e3, TOL));
    ok(isequalRel(a, 6.776159929611e3, TOL));
    ok(isequalRel(ecc, 3.678356420796e-3, TOL));
    ok(isequalRel(incl, 1.013321926123, TOL));
    ok(isequalRel(omega, 8.932297244256e-1, TOL));
    ok(isequalRel(argp, 2.155131113255, TOL));
    ok(isequalRel(nu, 2.327986184503e-1, TOL));
    ok(isequalRel(m, 2.311059586657e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[6.422776997684e+02, -4.332898219009e+03, -5.183315239096e+03], [5.720542578711e+00, 4.216573837773e+00, -2.846576139177e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [6.422776997684e2, -4.332898219009e3, -5.183315239096e3],
            [5.720542578711, 4.216573837773, -2.846576139177],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.771252183858e3, TOL));
    ok(isequalRel(a, 6.771348347948e3, TOL));
    ok(isequalRel(ecc, 3.768503158891e-3, TOL));
    ok(isequalRel(incl, 1.01310096635, TOL));
    ok(isequalRel(omega, 8.877067194273e-1, TOL));
    ok(isequalRel(argp, 2.064011444385, TOL));
    ok(isequalRel(nu, 2.197801244803, TOL));
    ok(isequalRel(m, 2.191687737705, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.719783357520e+03, 4.798069389959e+03, -9.435885106242e+02], [-2.294860662107e+00, 3.492499388528e+00, 6.408334723214e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.71978335752e3, 4.798069389959e3, -9.435885106242e2],
            [-2.294860662107, 3.492499388528, 6.408334723214],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.782259792414e3, TOL));
    ok(isequalRel(a, 6.782324755962e3, TOL));
    ok(isequalRel(ecc, 3.094892579346e-3, TOL));
    ok(isequalRel(incl, 1.013607235269, TOL));
    ok(isequalRel(omega, 8.810841009451e-1, TOL));
    ok(isequalRel(argp, 2.130274502983, TOL));
    ok(isequalRel(nu, 3.988588600513, TOL));
    ok(isequalRel(m, 3.993233706748, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.299169936023e+03, 1.576831683195e+03, 5.678678406385e+03], [-4.460347074024e+00, -6.202025195790e+00, -8.858745862876e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.299169936023e3, 1.576831683195e3, 5.678678406385e3],
            [-4.460347074024, -6.20202519579, -8.858745862876e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.768851098485e3, TOL));
    ok(isequalRel(a, 6.768905841491e3, TOL));
    ok(isequalRel(ecc, 2.843839523788e-3, TOL));
    ok(isequalRel(incl, 1.012990081165, TOL));
    ok(isequalRel(omega, 8.749046046695e-1, TOL));
    ok(isequalRel(argp, 2.402935600108, TOL));
    ok(isequalRel(nu, 5.585413699649, TOL));
    ok(isequalRel(m, 5.589062134074, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.777146823355e+03, -5.663160317077e+03, -2.462548891232e+03], [4.915493146039e+00, 1.233289920905e-01, -5.896495090701e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.777146823355e3, -5.663160317077e3, -2.462548891232e3],
            [4.915493146039, 1.233289920905e-1, -5.896495090701],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.78004419664e3, TOL));
    ok(isequalRel(a, 6.780129465075e3, TOL));
    ok(isequalRel(ecc, 3.546297390768e-3, TOL));
    ok(isequalRel(incl, 1.013505853264, TOL));
    ok(isequalRel(omega, 8.690991120111e-1, TOL));
    ok(isequalRel(argp, 2.394405349129, TOL));
    ok(isequalRel(nu, 1.190045223729, TOL));
    ok(isequalRel(m, 1.183467074085, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.992315738931e+03, 1.716623567695e+03, -4.287860655812e+03], [1.640717188721e+00, 6.071570433629e+00, 4.338797930854e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.992315738931e3, 1.716623567695e3, -4.287860655812e3],
            [1.640717188721, 6.071570433629, 4.338797930854],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.774858556821e3, TOL));
    ok(isequalRel(a, 6.774960090039e3, TOL));
    ok(isequalRel(ecc, 3.871245429332e-3, TOL));
    ok(isequalRel(incl, 1.013267839399, TOL));
    ok(isequalRel(omega, 8.622243492097e-1, TOL));
    ok(isequalRel(argp, 2.350745170702, TOL));
    ok(isequalRel(nu, 3.09494034149, TOL));
    ok(isequalRel(m, 3.094578217478, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.223847547370e+00, 4.662215216680e+03, 4.905664118573e+03], [-5.891011273529e+00, -3.593173871921e+00, 3.365100460432e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.22384754737, 4.66221521668e3, 4.905664118573e3],
            [-5.891011273529, -3.593173871921, 3.365100460432],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.77236813476e3, TOL));
    ok(isequalRel(a, 6.772467514796e3, TOL));
    ok(isequalRel(ecc, 3.830682076651e-3, TOL));
    ok(isequalRel(incl, 1.013152992595, TOL));
    ok(isequalRel(omega, 8.567395900218e-1, TOL));
    ok(isequalRel(argp, 2.41419306376, TOL));
    ok(isequalRel(nu, 4.893163296023, TOL));
    ok(isequalRel(m, 4.900695907535, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.966201379626e+03, -4.379591550374e+03, 1.349333475022e+03], [1.763172580572e+00, -3.981456386823e+00, -6.343279442947e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.966201379626e3, -4.379591550374e3, 1.349333475022e3],
            [1.763172580572, -3.981456386823, -6.343279442947],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.781832278443e3, TOL));
    ok(isequalRel(a, 6.78195715795e3, TOL));
    ok(isequalRel(ecc, 4.291094373757e-3, TOL));
    ok(isequalRel(incl, 1.013588759203, TOL));
    ok(isequalRel(omega, 8.500260380786e-1, TOL));
    ok(isequalRel(argp, 2.324888457348, TOL));
    ok(isequalRel(nu, 5.792132070155e-1, TOL));
    ok(isequalRel(m, 5.745282383129e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.954493903314e+03, -2.080659846504e+03, -5.754750380565e+03], [4.895893305769e+00, 5.858184321869e+00, 3.754748252299e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.954493903314e3, -2.080659846504e3, -5.754750380565e3],
            [4.895893305769, 5.858184321869, 3.754748252299e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.768604353143e3, TOL));
    ok(isequalRel(a, 6.76874143062e3, TOL));
    ok(isequalRel(ecc, 4.500171741789e-3, TOL));
    ok(isequalRel(incl, 1.012980823664, TOL));
    ok(isequalRel(omega, 8.439530767354e-1, TOL));
    ok(isequalRel(argp, 2.144241888415, TOL));
    ok(isequalRel(nu, 2.628295360431, TOL));
    ok(isequalRel(m, 2.623862696238, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.363287943208e+03, 5.559558411795e+03, 1.956055422663e+03], [-4.587378862766e+00, 5.919434032977e-01, 6.107838604574e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.363287943208e3, 5.559558411795e3, 1.956055422663e3],
            [-4.587378862766, 5.919434032977e-1, 6.107838604574],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.78098167993e3, TOL));
    ok(isequalRel(a, 6.781075923625e3, TOL));
    ok(isequalRel(ecc, 3.728008119345e-3, TOL));
    ok(isequalRel(incl, 1.013549978053, TOL));
    ok(isequalRel(omega, 8.38040571886e-1, TOL));
    ok(isequalRel(argp, 2.107388198411, TOL));
    ok(isequalRel(nu, 4.522332982372, TOL));
    ok(isequalRel(m, 4.529658595867, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.856667800700e+03, -1.107034501919e+03, 4.557212582406e+03], [-2.304158557386e+00, -6.186437069611e+00, -3.956549542014e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.8566678007e3, -1.107034501919e3, 4.557212582406e3],
            [-2.304158557386, -6.186437069611, -3.956549542014],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.773716441276e3, TOL));
    ok(isequalRel(a, 6.773790856432e3, TOL));
    ok(isequalRel(ecc, 3.314475452111e-3, TOL));
    ok(isequalRel(incl, 1.013215641806, TOL));
    ok(isequalRel(omega, 8.312289206369e-1, TOL));
    ok(isequalRel(argp, 2.173431904186, TOL));
    ok(isequalRel(nu, 4.833955774302e-2, TOL));
    ok(isequalRel(m, 4.802003554972e-2, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.978448007121e+02, -4.863460053117e+03, -4.700812112174e+03], [5.960065406702e+00, 2.996683369168e+00, -3.767123328697e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.978448007121e2, -4.863460053117e3, -4.700812112174e3],
            [5.960065406702, 2.996683369168, -3.767123328697],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.773218819561e3, TOL));
    ok(isequalRel(a, 6.773300659965e3, TOL));
    ok(isequalRel(ecc, 3.476031515181e-3, TOL));
    ok(isequalRel(incl, 1.013193413429, TOL));
    ok(isequalRel(omega, 8.257531454501e-1, TOL));
    ok(isequalRel(argp, 2.134208509929, TOL));
    ok(isequalRel(nu, 1.963288807041, TOL));
    ok(isequalRel(m, 1.956858988939, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.241619360959e+03, 3.910759606834e+03, -1.857934739522e+03], [-1.124834805582e+00, 4.406213160311e+00, 6.148161298549e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.241619360959e3, 3.910759606834e3, -1.857934739522e3],
            [-1.124834805582, 4.406213160311, 6.148161298549],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.781133047469e3, TOL));
    ok(isequalRel(a, 6.781196626445e3, TOL));
    ok(isequalRel(ecc, 3.061988804711e-3, TOL));
    ok(isequalRel(incl, 1.013557524732, TOL));
    ok(isequalRel(omega, 8.189608349284e-1, TOL));
    ok(isequalRel(argp, 2.235762076747, TOL));
    ok(isequalRel(nu, 3.719587170064, TOL));
    ok(isequalRel(m, 3.722939421547, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.451380459530e+03, 2.610604632610e+03, 5.729790220688e+03], [-5.366560525018e+00, -5.500855666468e+00, 1.879587163462e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.45138045953e3, 2.61060463261e3, 5.729790220688e3],
            [-5.366560525018, -5.500855666468, 1.879587163462e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.768567087565e3, TOL));
    ok(isequalRel(a, 6.768628762646e3, TOL));
    ok(isequalRel(ecc, 3.0185926972e-3, TOL));
    ok(isequalRel(incl, 1.012979120168, TOL));
    ok(isequalRel(omega, 8.130152819479e-1, TOL));
    ok(isequalRel(argp, 2.498326441594, TOL));
    ok(isequalRel(nu, 5.324365580014, TOL));
    ok(isequalRel(m, 5.329300676741, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.791875206380e+03, -5.378828513819e+03, -1.575827379301e+03], [4.266273591571e+00, -1.199162550968e+00, -6.276154079876e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.79187520638e3, -5.378828513819e3, -1.575827379301e3],
            [4.266273591571, -1.199162550968, -6.276154079876],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.781521772382e3, TOL));
    ok(isequalRel(a, 6.781619648396e3, TOL));
    ok(isequalRel(ecc, 3.799018634628e-3, TOL));
    ok(isequalRel(incl, 1.01357588088, TOL));
    ok(isequalRel(omega, 8.069908934815e-1, TOL));
    ok(isequalRel(argp, 2.445329779743, TOL));
    ok(isequalRel(nu, 9.741987854508e-1, TOL));
    ok(isequalRel(m, 9.679233517514e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.730539583565e+03, 5.240500643313e+02, -4.857293697253e+03], [2.918056288012e+00, 6.135412849160e+00, 3.495115635633e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.730539583565e3, 5.240500643313e2, -4.857293697253e3],
            [2.918056288012, 6.13541284916, 3.495115635633],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.772613149823e3, TOL));
    ok(isequalRel(a, 6.77273100401e3, TOL));
    ok(isequalRel(ecc, 4.17148412849e-3, TOL));
    ok(isequalRel(incl, 1.01316668649, TOL));
    ok(isequalRel(omega, 8.002425528718e-1, TOL));
    ok(isequalRel(argp, 2.337289703773, TOL));
    ok(isequalRel(nu, 2.945319559456, TOL));
    ok(isequalRel(m, 2.943687546606, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.159278028972e+03, 5.056601754954e+03, 4.353494185789e+03], [-5.968060340911e+00, -2.314790405868e+00, 4.230722669090e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.159278028972e3, 5.056601754954e3, 4.353494185789e3],
            [-5.968060340911, -2.314790405868, 4.23072266909],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.774510039194e3, TOL));
    ok(isequalRel(a, 6.774616357684e3, TOL));
    ok(isequalRel(ecc, 3.96152176657e-3, TOL));
    ok(isequalRel(incl, 1.01325370852, TOL));
    ok(isequalRel(omega, 7.947634196466e-1, TOL));
    ok(isequalRel(argp, 2.353430901559, TOL));
    ok(isequalRel(nu, 4.789304733122, TOL));
    ok(isequalRel(m, 4.797202528045, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 8195
});

test("[1.522391713658e+04, -1.785295881713e+04, 2.528039558224e+04], [1.079041732290e+00, 8.751873723850e-01, 2.485682812742e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.522391713658e4, -1.785295881713e4, 2.528039558224e4],
            [1.07904173229, 8.75187372385e-1, 2.485682812742],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.403924781984e4, TOL));
    ok(isequalRel(a, 2.656497279496e4, TOL));
    ok(isequalRel(ecc, 6.866679038576e-1, TOL));
    ok(isequalRel(incl, 1.120061213114, TOL));
    ok(isequalRel(omega, 4.869914010457, TOL));
    ok(isequalRel(argp, 4.621685740971, TOL));
    ok(isequalRel(nu, 2.613009397654, TOL));
    ok(isequalRel(m, 1.401790903669, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.975278050009e+04, -8.600071309618e+03, 3.752272921090e+04], [2.381052785247e-01, 1.546110924145e+00, 9.864104468114e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.975278050009e4, -8.600071309618e3, 3.75227292109e4],
            [2.381052785247e-1, 1.546110924145, 9.864104468114e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.403706167481e4, TOL));
    ok(isequalRel(a, 2.656501003451e4, TOL));
    ok(isequalRel(ecc, 6.867283634668e-1, TOL));
    ok(isequalRel(incl, 1.120025838281, TOL));
    ok(isequalRel(omega, 4.86973001778, TOL));
    ok(isequalRel(argp, 4.621701110723, TOL));
    ok(isequalRel(nu, 2.961126539238, TOL));
    ok(isequalRel(m, 2.451531625324, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.908929762968e+04, 3.107894950177e+03, 3.995814661370e+04], [-4.103080340832e-01, 1.640332277113e+00, -3.068738176578e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.908929762968e4, 3.107894950177e3, 3.99581466137e4],
            [-4.103080340832e-1, 1.640332277113, -3.068738176578e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.403671619383e4, TOL));
    ok(isequalRel(a, 2.656503154264e4, TOL));
    ok(isequalRel(ecc, 6.867381437714e-1, TOL));
    ok(isequalRel(incl, 1.120015823809, TOL));
    ok(isequalRel(omega, 4.869539555485, TOL));
    ok(isequalRel(argp, 4.621794135502, TOL));
    ok(isequalRel(nu, 3.234035448475, TOL));
    ok(isequalRel(m, 3.50117157931, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.382966070574e+04, 1.397739999817e+04, 3.273632082508e+04], [-1.065096849045e+00, 1.279983299493e+00, -1.760166074619e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.382966070574e4, 1.397739999817e4, 3.273632082508e4],
            [-1.065096849045, 1.279983299493, -1.760166074619],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.403827796061e4, TOL));
    ok(isequalRel(a, 2.656463491455e4, TOL));
    ok(isequalRel(ecc, 6.866895933949e-1, TOL));
    ok(isequalRel(incl, 1.120027389597, TOL));
    ok(isequalRel(omega, 4.869345046058, TOL));
    ok(isequalRel(argp, 4.621874085476, TOL));
    ok(isequalRel(nu, 3.541952899055, TOL));
    ok(isequalRel(m, 4.550821733826, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.333058385247e+03, 1.839531728674e+04, 1.273825031238e+04], [-1.882432221379e+00, -6.116233333449e-01, -4.039586549263e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.333058385247e3, 1.839531728674e4, 1.273825031238e4],
            [-1.882432221379, -6.116233333449e-1, -4.039586549263],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.40424629498e4, TOL));
    ok(isequalRel(a, 2.656627636522e4, TOL));
    ok(isequalRel(ecc, 6.865986595814e-1, TOL));
    ok(isequalRel(incl, 1.120094433729, TOL));
    ok(isequalRel(omega, 4.869163924052, TOL));
    ok(isequalRel(argp, 4.621755553333, TOL));
    ok(isequalRel(nu, 4.127179172619, TOL));
    ok(isequalRel(m, 5.600698163503, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.622132222073e+03, -1.512515464924e+04, 4.745104839822e+02], [2.688287198777e+00, -3.078426664127e+00, 4.494979530449e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.622132222073e3, -1.512515464924e4, 4.745104839822e2],
            [2.688287198777, -3.078426664127, 4.494979530449],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404483851604e4, TOL));
    ok(isequalRel(a, 2.657495424205e4, TOL));
    ok(isequalRel(ecc, 6.866592555576e-1, TOL));
    ok(isequalRel(incl, 1.120144919875, TOL));
    ok(isequalRel(omega, 4.869087998176, TOL));
    ok(isequalRel(argp, 4.621865740164, TOL));
    ok(isequalRel(nu, 1.695649454174, TOL));
    ok(isequalRel(m, 3.671866268738e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.532056770017e+04, -1.777732564586e+04, 2.553953198382e+04], [1.064346229230e+00, 8.921847706661e-01, 2.459822414230e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.532056770017e4, -1.777732564586e4, 2.553953198382e4],
            [1.06434622923, 8.921847706661e-1, 2.45982241423],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404080789378e4, TOL));
    ok(isequalRel(a, 2.656496290248e4, TOL));
    ok(isequalRel(ecc, 6.866249970949e-1, TOL));
    ok(isequalRel(incl, 1.120056335086, TOL));
    ok(isequalRel(omega, 4.868999594604, TOL));
    ok(isequalRel(argp, 4.621575085858, TOL));
    ok(isequalRel(nu, 2.619601954539, TOL));
    ok(isequalRel(m, 1.417296941539, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.976970267785e+04, -8.458651044544e+03, 3.762420130236e+04], [2.293043961527e-01, 1.550363884063e+00, 9.669930561197e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.976970267785e4, -8.458651044544e3, 3.762420130236e4],
            [2.293043961527e-1, 1.550363884063, 9.669930561197e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.403862150982e4, TOL));
    ok(isequalRel(a, 2.656501164749e4, TOL));
    ok(isequalRel(ecc, 6.866856337694e-1, TOL));
    ok(isequalRel(incl, 1.120021141512, TOL));
    ok(isequalRel(omega, 4.868816100244, TOL));
    ok(isequalRel(argp, 4.621591662497, TOL));
    ok(isequalRel(nu, 2.965349613386, TOL));
    ok(isequalRel(m, 2.467036669796, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.904856201523e+04, 3.260432231191e+03, 3.992339143967e+04], [-4.180155357909e-01, 1.639346952779e+00, -3.260948400927e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.904856201523e4, 3.260432231191e3, 3.992339143967e4],
            [-4.180155357909e-1, 1.639346952779, -3.260948400927e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.403827307016e4, TOL));
    ok(isequalRel(a, 2.656502743417e4, TOL));
    ok(isequalRel(ecc, 6.8669541294e-1, TOL));
    ok(isequalRel(incl, 1.120011057659, TOL));
    ok(isequalRel(omega, 4.868626220537, TOL));
    ok(isequalRel(argp, 4.621684207571, TOL));
    ok(isequalRel(nu, 3.238085269989, TOL));
    ok(isequalRel(m, 3.516677703844, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.372919205837e+04, 1.409770014810e+04, 3.254752799890e+04], [-1.074511042879e+00, 1.270505211312e+00, -1.785099926781e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.372919205837e4, 1.40977001481e4, 3.25475279989e4],
            [-1.074511042879, 1.270505211312, -1.785099926781],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.403983571137e4, TOL));
    ok(isequalRel(a, 2.656462585705e4, TOL));
    ok(isequalRel(ecc, 6.866467632282e-1, TOL));
    ok(isequalRel(incl, 1.12002268116, TOL));
    ok(isequalRel(omega, 4.868432229772, TOL));
    ok(isequalRel(argp, 4.621762400774, TOL));
    ok(isequalRel(nu, 3.547474198617, TOL));
    ok(isequalRel(m, 4.56633053749, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.148861656431e+03, 1.832319841703e+04, 1.230575195578e+04], [-1.895271701496e+00, -6.783438468467e-01, -4.086577951103e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.148861656431e3, 1.832319841703e4, 1.230575195578e4],
            [-1.895271701496, -6.783438468467e-1, -4.086577951103],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404404253872e4, TOL));
    ok(isequalRel(a, 2.656643392055e4, TOL));
    ok(isequalRel(ecc, 6.86557642217e-1, TOL));
    ok(isequalRel(incl, 1.120090960335, TOL));
    ok(isequalRel(omega, 4.868252805496, TOL));
    ok(isequalRel(argp, 4.621636126504, TOL));
    ok(isequalRel(nu, 4.143072416289, TOL));
    ok(isequalRel(m, 5.616216430647, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.890806382677e+03, -1.544643952300e+04, 9.487701017643e+02], [2.654407489593e+00, -2.909344894829e+00, 4.486437361921e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.890806382677e3, -1.5446439523e4, 9.487701017643e2],
            [2.654407489593, -2.909344894829, 4.486437361921],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404626166603e4, TOL));
    ok(isequalRel(a, 2.657443456118e4, TOL));
    ok(isequalRel(ecc, 6.866127327248e-1, TOL));
    ok(isequalRel(incl, 1.120138639092, TOL));
    ok(isequalRel(omega, 4.868181528137, TOL));
    ok(isequalRel(argp, 4.621747514129, TOL));
    ok(isequalRel(nu, 1.728437343991, TOL));
    ok(isequalRel(m, 3.827059612942e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.541598410712e+04, -1.769990714437e+04, 2.579619644689e+04], [1.049818334076e+00, 9.088223320280e-01, 2.434107329013e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.541598410712e4, -1.769990714437e4, 2.579619644689e4],
            [1.049818334076, 9.08822332028e-1, 2.434107329013],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404218814791e4, TOL));
    ok(isequalRel(a, 2.656495329111e4, TOL));
    ok(isequalRel(ecc, 6.865870212103e-1, TOL));
    ok(isequalRel(incl, 1.120049368413, TOL));
    ok(isequalRel(omega, 4.868088446936, TOL));
    ok(isequalRel(argp, 4.621459685825, TOL));
    ok(isequalRel(nu, 2.62613258554, TOL));
    ok(isequalRel(m, 1.432812715882, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.978600618538e+04, -8.316745705810e+03, 3.772374539119e+04], [2.205398128165e-01, 1.554518899694e+00, 9.476010474766e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.978600618538e4, -8.31674570581e3, 3.772374539119e4],
            [2.205398128165e-1, 1.554518899694, 9.476010474766e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.403999854558e4, TOL));
    ok(isequalRel(a, 2.656501279744e4, TOL));
    ok(isequalRel(ecc, 6.866479054501e-1, TOL));
    ok(isequalRel(incl, 1.120014356274, TOL));
    ok(isequalRel(omega, 4.867905104982, TOL));
    ok(isequalRel(argp, 4.621477745764, TOL));
    ok(isequalRel(nu, 2.96956503759, TOL));
    ok(isequalRel(m, 2.482551388602, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.900728688729e+04, 3.412859487148e+03, 3.988666579255e+04], [-4.257335675621e-01, 1.638276809037e+00, -3.453538069438e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.900728688729e4, 3.412859487148e3, 3.988666579255e4],
            [-4.257335675621e-1, 1.638276809037, -3.453538069438e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.403964451879e4, TOL));
    ok(isequalRel(a, 2.656502280938e4, TOL));
    ok(isequalRel(ecc, 6.866577546707e-1, TOL));
    ok(isequalRel(incl, 1.120004213475, TOL));
    ok(isequalRel(omega, 4.867715454922, TOL));
    ok(isequalRel(argp, 4.62157011638, TOL));
    ok(isequalRel(nu, 3.242144019262, TOL));
    ok(isequalRel(m, 3.532193398632, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.362793015254e+04, 1.421695401307e+04, 3.235613706868e+04], [-1.083991975816e+00, 1.260802347232e+00, -1.810193902806e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.362793015254e4, 1.421695401307e4, 3.235613706868e4],
            [-1.083991975816, 1.260802347232, -1.810193902806],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404120578725e4, TOL));
    ok(isequalRel(a, 2.656461642092e4, TOL));
    ok(isequalRel(ecc, 6.866090696296e-1, TOL));
    ok(isequalRel(incl, 1.120015914101, TOL));
    ok(isequalRel(omega, 4.867521630942, TOL));
    ok(isequalRel(argp, 4.621646847188, TOL));
    ok(isequalRel(nu, 3.553039212915, TOL));
    ok(isequalRel(m, 4.581848810139, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.963264865596e+03, 1.824385063641e+04, 1.186825797486e+04], [-1.908015446842e+00, -7.478703418835e-01, -4.134004491720e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.963264865596e3, 1.824385063641e4, 1.186825797486e4],
            [-1.908015446842, -7.478703418835e-1, -4.13400449172],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404543293096e4, TOL));
    ok(isequalRel(a, 2.656660365238e4, TOL));
    ok(isequalRel(ecc, 6.865219861167e-1, TOL));
    ok(isequalRel(incl, 1.120085479645, TOL));
    ok(isequalRel(omega, 4.867343641451, TOL));
    ok(isequalRel(argp, 4.621512946396, TOL));
    ok(isequalRel(nu, 4.159436417334, TOL));
    ok(isequalRel(m, 5.631744250455, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.155851260364e+03, -1.575070393364e+04, 1.422324969530e+03], [2.620085624431e+00, -2.748990395562e+00, 4.473527039077e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.155851260364e3, -1.575070393364e4, 1.42232496953e3],
            [2.620085624431, -2.748990395562, 4.473527039077],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404748607384e4, TOL));
    ok(isequalRel(a, 2.657392543341e4, TOL));
    ok(isequalRel(ecc, 6.865718043358e-1, TOL));
    ok(isequalRel(incl, 1.120130091483, TOL));
    ok(isequalRel(omega, 4.867276314489, TOL));
    ok(isequalRel(argp, 4.621625359798, TOL));
    ok(isequalRel(nu, 1.759697486449, TOL));
    ok(isequalRel(m, 3.982350854065e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.551015191770e+04, -1.762071002219e+04, 2.605043525345e+04], [1.035454678000e+00, 9.251110062354e-01, 2.408534464786e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.55101519177e4, -1.762071002219e4, 2.605043525345e4],
            [1.035454678, 9.251110062354e-1, 2.408534464786],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404337512033e4, TOL));
    ok(isequalRel(a, 2.656494391998e4, TOL));
    ok(isequalRel(ecc, 6.865543454928e-1, TOL));
    ok(isequalRel(incl, 1.120040403343, TOL));
    ok(isequalRel(omega, 4.867178464958, TOL));
    ok(isequalRel(argp, 4.621341486917, TOL));
    ok(isequalRel(nu, 2.632603055222, TOL));
    ok(isequalRel(m, 1.448337376153, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.980167198812e+04, -8.174333371671e+03, 3.782138577439e+04], [2.118126998987e-01, 1.558576937066e+00, 9.282318796566e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.980167198812e4, -8.174333371671e3, 3.782138577439e4],
            [2.118126998987e-1, 1.558576937066, 9.282318796566e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404118093781e4, TOL));
    ok(isequalRel(a, 2.656501348208e4, TOL));
    ok(isequalRel(ecc, 6.866155039773e-1, TOL));
    ok(isequalRel(incl, 1.120005588024, TOL));
    ok(isequalRel(omega, 4.866994936388, TOL));
    ok(isequalRel(argp, 4.6213613173, TOL));
    ok(isequalRel(nu, 2.973772889409, TOL));
    ok(isequalRel(m, 2.498074862607, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.896546529379e+04, 3.565196662420e+03, 3.984797510998e+04], [-4.334599445964e-01, 1.637120585289e+00, -3.646532131940e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.896546529379e4, 3.56519666242e3, 3.984797510998e4],
            [-4.334599445964e-1, 1.637120585289, -3.64653213194e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404082030356e4, TOL));
    ok(isequalRel(a, 2.656501766861e4, TOL));
    ok(isequalRel(ecc, 6.866254503966e-1, TOL));
    ok(isequalRel(incl, 1.119995411416, TOL));
    ok(isequalRel(omega, 4.866805173054, TOL));
    ok(isequalRel(argp, 4.621453825445, TOL));
    ok(isequalRel(nu, 3.24621153262, TOL));
    ok(isequalRel(m, 3.547717680073, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.352588227400e+04, 1.433515978787e+04, 3.216213236536e+04], [-1.093537944678e+00, 1.250868255565e+00, -1.835451681217e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.3525882274e4, 1.433515978787e4, 3.216213236536e4],
            [-1.093537944678, 1.250868255565, -1.835451681217],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404237954766e4, TOL));
    ok(isequalRel(a, 2.656460661764e4, TOL));
    ok(isequalRel(ecc, 6.865767504906e-1, TOL));
    ok(isequalRel(incl, 1.12000722299, TOL));
    ok(isequalRel(omega, 4.866611176822, TOL));
    ok(isequalRel(argp, 4.621529391337, TOL));
    ok(isequalRel(nu, 3.558648318838, TOL));
    ok(isequalRel(m, 4.597375507549, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.776305742600e+03, 1.815698538451e+04, 1.142573046481e+04], [-1.920632199311e+00, -8.203707332442e-01, -4.181839231838e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.7763057426e3, 1.815698538451e4, 1.142573046481e4],
            [-1.920632199311, -8.203707332442e-1, -4.181839231838],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404662704961e4, TOL));
    ok(isequalRel(a, 2.656678655164e4, TOL));
    ok(isequalRel(ecc, 6.864919004431e-1, TOL));
    ok(isequalRel(incl, 1.120078139473, TOL));
    ok(isequalRel(omega, 4.866434381578, TOL));
    ok(isequalRel(argp, 4.621387977725, TOL));
    ok(isequalRel(nu, 4.176296398714, TOL));
    ok(isequalRel(m, 5.647280523859, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.417209315865e+03, -1.603879510665e+04, 1.894749340578e+03], [2.585515864060e+00, -2.596818145615e+00, 4.456882556195e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.417209315865e3, -1.603879510665e4, 1.894749340578e3],
            [2.58551586406, -2.596818145615, 4.456882556195],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.404850730735e4, TOL));
    ok(isequalRel(a, 2.657343067951e4, TOL));
    ok(isequalRel(ecc, 6.865366485917e-1, TOL));
    ok(isequalRel(incl, 1.120119474201, TOL));
    ok(isequalRel(omega, 4.866370323789, TOL));
    ok(isequalRel(argp, 4.621501389097, TOL));
    ok(isequalRel(nu, 1.78954197885, TOL));
    ok(isequalRel(m, 4.137727036757e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 9880
});

test("[1.919032482476e+04, 9.249012669022e+03, 2.659671345328e+04], [-6.249601929992e-01, 1.324550561620e+00, 2.495697636508e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.919032482476e4, 9.249012669022e3, 2.659671345328e4],
            [-6.249601929992e-1, 1.32455056162, 2.495697636508],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325410788567e4, TOL));
    ok(isequalRel(a, 2.653615778488e4, TOL));
    ok(isequalRel(ecc, 7.074789674872e-1, TOL));
    ok(isequalRel(incl, 1.127151912442, TOL));
    ok(isequalRel(omega, 6.097098280631, TOL));
    ok(isequalRel(argp, 4.713310021374, TOL));
    ok(isequalRel(nu, 2.613353781448, TOL));
    ok(isequalRel(m, 1.33618813526, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.133267806218e+04, 1.651799124008e+04, 3.856978482991e+04], [-1.400974746985e+00, 7.109470057890e-01, 9.239356355514e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.133267806218e4, 1.651799124008e4, 3.856978482991e4],
            [-1.400974746985, 7.10947005789e-1, 9.239356355514e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325187099764e4, TOL));
    ok(isequalRel(a, 2.65364616325e4, TOL));
    ok(isequalRel(ecc, 7.075425806213e-1, TOL));
    ok(isequalRel(incl, 1.12712091603, TOL));
    ok(isequalRel(omega, 6.096869415144, TOL));
    ok(isequalRel(argp, 4.713361286651, TOL));
    ok(isequalRel(nu, 2.953696643023, TOL));
    ok(isequalRel(m, 2.387560937341, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.287421739786e+02, 1.955492047380e+04, 4.055826246145e+04], [-1.593281066367e+00, 1.267729129517e-01, -3.596273072116e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.287421739786e2, 1.95549204738e4, 4.055826246145e4],
            [-1.593281066367, 1.267729129517e-1, -3.596273072116e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325163233012e4, TOL));
    ok(isequalRel(a, 2.653655058028e4, TOL));
    ok(isequalRel(ecc, 7.075501192075e-1, TOL));
    ok(isequalRel(incl, 1.127117580376, TOL));
    ok(isequalRel(omega, 6.096640143058, TOL));
    ok(isequalRel(argp, 4.713476849653, TOL));
    ok(isequalRel(nu, 3.213941865671, TOL));
    ok(isequalRel(m, 3.43885642454, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.068490590680e+04, 1.805715728839e+04, 3.315875253886e+04], [-1.383205997294e+00, -5.823289989404e-01, -1.744412556059e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.06849059068e4, 1.805715728839e4, 3.315875253886e4],
            [-1.383205997294, -5.823289989404e-1, -1.744412556059],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325328180408e4, TOL));
    ok(isequalRel(a, 2.653622467379e4, TOL));
    ok(isequalRel(ecc, 7.07501857791e-1, TOL));
    ok(isequalRel(incl, 1.127135905122, TOL));
    ok(isequalRel(omega, 6.096410821054, TOL));
    ok(isequalRel(argp, 4.713570002589, TOL));
    ok(isequalRel(nu, 3.501203792419, TOL));
    ok(isequalRel(m, 4.490179928072, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.706978000550e+04, 9.944867978974e+03, 1.388591649059e+04], [4.413335410518e-02, -1.853448464029e+00, -3.815303116950e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.70697800055e4, 9.944867978974e3, 1.388591649059e4],
            [4.413335410518e-2, -1.853448464029, -3.81530311695],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325729228596e4, TOL));
    ok(isequalRel(a, 2.653762708099e4, TOL));
    ok(isequalRel(ecc, 7.07413703486e-1, TOL));
    ok(isequalRel(incl, 1.127205383575, TOL));
    ok(isequalRel(omega, 6.096197230944, TOL));
    ok(isequalRel(argp, 4.713484351831, TOL));
    ok(isequalRel(nu, 4.021124830156, TOL));
    ok(isequalRel(m, 5.541714395334, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.372509398980e+04, -2.180708770897e+03, 8.632968452340e+02], [3.878478111152e+00, 1.656846496247e+00, 4.944867241096e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.37250939898e4, -2.180708770897e3, 8.63296845234e2],
            [3.878478111152, 1.656846496247, 4.944867241096],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325988301638e4, TOL));
    ok(isequalRel(a, 2.654840015277e4, TOL));
    ok(isequalRel(ecc, 7.074880079976e-1, TOL));
    ok(isequalRel(incl, 1.127264780599, TOL));
    ok(isequalRel(omega, 6.096100000263, TOL));
    ok(isequalRel(argp, 4.713614012745, TOL));
    ok(isequalRel(nu, 1.638267445445, TOL));
    ok(isequalRel(m, 3.098685960655e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.908963879226e+04, 9.456296702471e+03, 2.702679562883e+04], [-6.566142985021e-01, 1.309112636489e+00, 2.449371940510e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.908963879226e4, 9.456296702471e3, 2.702679562883e4],
            [-6.566142985021e-1, 1.309112636489, 2.44937194051],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325504026395e4, TOL));
    ok(isequalRel(a, 2.653609665494e4, TOL));
    ok(isequalRel(ecc, 7.07453321851e-1, TOL));
    ok(isequalRel(incl, 1.127156339112, TOL));
    ok(isequalRel(omega, 6.095970925646, TOL));
    ok(isequalRel(argp, 4.713313396847, TOL));
    ok(isequalRel(nu, 2.624123778438, TOL));
    ok(isequalRel(m, 1.361650714943, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.110641248373e+04, 1.662760874079e+04, 3.872735140296e+04], [-1.409722679524e+00, 6.985825258442e-01, 8.913835346016e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.110641248373e4, 1.662760874079e4, 3.872735140296e4],
            [-1.409722679524, 6.985825258442e-1, 8.913835346016e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325290004901e4, TOL));
    ok(isequalRel(a, 2.653641130203e4, TOL));
    ok(isequalRel(ecc, 7.075145068396e-1, TOL));
    ok(isequalRel(incl, 1.127126561561, TOL));
    ok(isequalRel(omega, 6.095742976755, TOL));
    ok(isequalRel(argp, 4.71336658988, TOL));
    ok(isequalRel(nu, 2.960372493246, TOL));
    ok(isequalRel(m, 2.413024413463, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[7.240958620636e+01, 1.957508054144e+04, 4.049212544001e+04], [-1.593394604022e+00, 1.136551418846e-01, -3.905560628598e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [7.240958620636e1, 1.957508054144e4, 4.049212544001e4],
            [-1.593394604022, 1.136551418846e-1, -3.905560628598e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.32527477654e4, TOL));
    ok(isequalRel(a, 2.653648950166e4, TOL));
    ok(isequalRel(ecc, 7.075196023956e-1, TOL));
    ok(isequalRel(incl, 1.127123913288, TOL));
    ok(isequalRel(omega, 6.095514796906, TOL));
    ok(isequalRel(argp, 4.713481102025, TOL));
    ok(isequalRel(nu, 3.220205927721, TOL));
    ok(isequalRel(m, 3.464324359213, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.090589252576e+04, 1.796541205111e+04, 3.285007298244e+04], [-1.371396120481e+00, -6.017066038238e-01, -1.782817057614e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.090589252576e4, 1.796541205111e4, 3.285007298244e4],
            [-1.371396120481, -6.017066038238e-1, -1.782817057614],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325448571047e4, TOL));
    ok(isequalRel(a, 2.65361574911e4, TOL));
    ok(isequalRel(ecc, 7.07468900938e-1, TOL));
    ok(isequalRel(incl, 1.127143092872, TOL));
    ok(isequalRel(omega, 6.095286595173, TOL));
    ok(isequalRel(argp, 4.713571139877, TOL));
    ok(isequalRel(nu, 3.509519813311, TOL));
    ok(isequalRel(m, 4.515654848025, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.704461207568e+04, 9.635484918489e+03, 1.321259462953e+04], [1.292440295752e-01, -1.903551430351e+00, -3.884569098006e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.704461207568e4, 9.635484918489e3, 1.321259462953e4],
            [1.292440295752e-1, -1.903551430351, -3.884569098006],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.32586080581e4, TOL));
    ok(isequalRel(a, 2.65377834799e4, TOL));
    ok(isequalRel(ecc, 7.073807397407e-1, TOL));
    ok(isequalRel(incl, 1.127215108486, TOL));
    ok(isequalRel(omega, 6.095075915992, TOL));
    ok(isequalRel(argp, 4.713474145027, TOL));
    ok(isequalRel(nu, 4.043449649444, TOL));
    ok(isequalRel(m, 5.5672055931, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.436990303735e+04, -1.903856010622e+03, 1.722153198525e+03], [3.543393116437e+00, 1.701687175957e+00, 4.913881357635e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.436990303735e4, -1.903856010622e3, 1.722153198525e3],
            [3.543393116437, 1.701687175957, 4.913881357635],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.326099420296e4, TOL));
    ok(isequalRel(a, 2.654706894705e4, TOL));
    ok(isequalRel(ecc, 7.074407245305e-1, TOL));
    ok(isequalRel(incl, 1.127269688664, TOL));
    ok(isequalRel(omega, 6.0949889267, TOL));
    ok(isequalRel(argp, 4.713600562651, TOL));
    ok(isequalRel(nu, 1.700573304283, TOL));
    ok(isequalRel(m, 3.353684409392e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.898396210441e+04, 9.661122338040e+03, 2.744899557732e+04], [-6.871893040886e-01, 1.293808870096e+00, 2.403630758712e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.898396210441e4, 9.66112233804e3, 2.744899557732e4],
            [-6.871893040886e-1, 1.293808870096, 2.403630758712],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325621092433e4, TOL));
    ok(isequalRel(a, 2.653603790011e4, TOL));
    ok(isequalRel(ecc, 7.074213601086e-1, TOL));
    ok(isequalRel(incl, 1.127161917058, TOL));
    ok(isequalRel(omega, 6.09485031582, TOL));
    ok(isequalRel(argp, 4.713307985457, TOL));
    ok(isequalRel(nu, 2.634691028511, TOL));
    ok(isequalRel(m, 1.387143205884, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.087879336704e+04, 1.673531433954e+04, 3.887923434264e+04], [-1.418239665776e+00, 6.862357498785e-01, 8.589518483930e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.087879336704e4, 1.673531433954e4, 3.887923434264e4],
            [-1.418239665776, 6.862357498785e-1, 8.58951848393e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325415878493e4, TOL));
    ok(isequalRel(a, 2.653636144051e4, TOL));
    ok(isequalRel(ecc, 7.07480320995e-1, TOL));
    ok(isequalRel(incl, 1.127133277292, TOL));
    ok(isequalRel(omega, 6.094623491183, TOL));
    ok(isequalRel(argp, 4.713362632377, TOL));
    ok(isequalRel(nu, 2.967017186326, TOL));
    ok(isequalRel(m, 2.438518432461, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.840374310020e+02, 1.959309371709e+04, 4.042040606889e+04], [-1.593348924572e+00, 1.004486972889e-01, -4.215719933717e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.84037431002e2, 1.959309371709e4, 4.042040606889e4],
            [-1.593348924572, 1.004486972889e-1, -4.215719933717e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325408448094e4, TOL));
    ok(isequalRel(a, 2.653642883773e4, TOL));
    ok(isequalRel(ecc, 7.074831964281e-1, TOL));
    ok(isequalRel(incl, 1.127131260488, TOL));
    ok(isequalRel(omega, 6.0943965834, TOL));
    ok(isequalRel(argp, 4.713475723452, TOL));
    ok(isequalRel(nu, 3.226494742039, TOL));
    ok(isequalRel(m, 3.489823348923, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.112512138631e+04, 1.787019488928e+04, 3.253421521208e+04], [-1.359116235779e+00, -6.214137764913e-01, -1.821629856174e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.112512138631e4, 1.787019488928e4, 3.253421521208e4],
            [-1.359116235779, -6.214137764913e-1, -1.821629856174],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325590261428e4, TOL));
    ok(isequalRel(a, 2.653609119479e4, TOL));
    ok(isequalRel(ecc, 7.074302810557e-1, TOL));
    ok(isequalRel(incl, 1.127151254354, TOL));
    ok(isequalRel(omega, 6.094169674224, TOL));
    ok(isequalRel(argp, 4.713562261685, TOL));
    ok(isequalRel(nu, 3.517957445017, TOL));
    ok(isequalRel(m, 4.541161349068, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.700443272827e+04, 9.316539263508e+03, 1.252611883812e+04], [2.203307359504e-01, -1.955594322101e+00, -3.955058574817e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.700443272827e4, 9.316539263508e3, 1.252611883812e4],
            [2.203307359504e-1, -1.955594322101, -3.955058574817],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.326012935088e4, TOL));
    ok(isequalRel(a, 2.653796825348e4, TOL));
    ok(isequalRel(ecc, 7.073426782139e-1, TOL));
    ok(isequalRel(incl, 1.127225837824, TOL));
    ok(isequalRel(omega, 6.093962264973, TOL));
    ok(isequalRel(argp, 4.713453122517, TOL));
    ok(isequalRel(nu, 4.066845514948, TOL));
    ok(isequalRel(m, 5.592729339613, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.496006492693e+04, -1.620684308049e+03, 2.574963593810e+03], [3.238634028091e+00, 1.734723384922e+00, 4.868880331132e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.496006492693e4, -1.620684308049e3, 2.57496359381e3],
            [3.238634028091, 1.734723384922, 4.868880331132],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.326228019181e4, TOL));
    ok(isequalRel(a, 2.654581709114e4, TOL));
    ok(isequalRel(ecc, 7.073898343357e-1, TOL));
    ok(isequalRel(incl, 1.12727463628, TOL));
    ok(isequalRel(omega, 6.093884314332, TOL));
    ok(isequalRel(argp, 4.713574301178, TOL));
    ok(isequalRel(nu, 1.757450772531, TOL));
    ok(isequalRel(m, 3.609025622811e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.887346347257e+04, 9.863570045860e+03, 2.786346574735e+04], [-7.167369810792e-01, 1.278632817399e+00, 2.358448535211e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.887346347257e4, 9.86357004586e3, 2.786346574735e4],
            [-7.167369810792e-1, 1.278632817399, 2.358448535211],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325756804836e4, TOL));
    ok(isequalRel(a, 2.653598135696e4, TOL));
    ok(isequalRel(ecc, 7.073844594661e-1, TOL));
    ok(isequalRel(incl, 1.127168319523, TOL));
    ok(isequalRel(omega, 6.093737430865, TOL));
    ok(isequalRel(argp, 4.713291961164, TOL));
    ok(isequalRel(nu, 2.64506787827, TOL));
    ok(isequalRel(m, 1.412668190983, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.064986857581e+04, 1.684114172669e+04, 3.902548035006e+04], [-1.426527152369e+00, 6.739010570046e-01, 8.266323323297e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.064986857581e4, 1.684114172669e4, 3.902548035006e4],
            [-1.426527152369, 6.739010570046e-1, 8.266323323297e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325559440083e4, TOL));
    ok(isequalRel(a, 2.653631205207e4, TOL));
    ok(isequalRel(ecc, 7.074414286305e-1, TOL));
    ok(isequalRel(incl, 1.127140734269, TOL));
    ok(isequalRel(omega, 6.093511869368, TOL));
    ok(isequalRel(argp, 4.713347693356, TOL));
    ok(isequalRel(nu, 2.973633805192, TOL));
    ok(isequalRel(m, 2.464045443944, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.405345932276e+02, 1.960895524423e+04, 4.034310675451e+04], [-1.593138597312e+00, 8.714788447849e-02, -4.526805591052e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.405345932276e2, 1.960895524423e4, 4.034310675451e4],
            [-1.593138597312, 8.714788447849e-2, -4.526805591052e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.32555887595e4, TOL));
    ok(isequalRel(a, 2.653636859804e4, TOL));
    ok(isequalRel(ecc, 7.074423311942e-1, TOL));
    ok(isequalRel(incl, 1.127139290382, TOL));
    ok(isequalRel(omega, 6.093286345978, TOL));
    ok(isequalRel(argp, 4.713459093252, TOL));
    ok(isequalRel(nu, 3.232810138934, TOL));
    ok(isequalRel(m, 3.515355714905, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.134245028909e+04, 1.777144223942e+04, 3.221112535721e+04], [-1.346344015261e+00, -6.414642913523e-01, -1.860864233947e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.134245028909e4, 1.777144223942e4, 3.221112535721e4],
            [-1.346344015261, -6.414642913523e-1, -1.860864233947],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.325747797551e4, TOL));
    ok(isequalRel(a, 2.653602583348e4, TOL));
    ok(isequalRel(ecc, 7.073874505795e-1, TOL));
    ok(isequalRel(incl, 1.127160056291, TOL));
    ok(isequalRel(omega, 6.09306083453, TOL));
    ok(isequalRel(argp, 4.713541845159, TOL));
    ok(isequalRel(nu, 3.526521093421, TOL));
    ok(isequalRel(m, 4.566701625887, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.694806005711e+04, 8.987642548800e+03, 1.182628284367e+04], [3.180072971009e-01, -2.009693491722e+00, -4.026726647563e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.694806005711e4, 8.9876425488e3, 1.182628284367e4],
            [3.180072971009e-1, -2.009693491722, -4.026726647563],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.326180088195e4, TOL));
    ok(isequalRel(a, 2.653818506686e4, TOL));
    ok(isequalRel(ecc, 7.073010396884e-1, TOL));
    ok(isequalRel(incl, 1.127237236537, TOL));
    ok(isequalRel(omega, 6.092857012153, TOL));
    ok(isequalRel(argp, 4.713419839866, TOL));
    ok(isequalRel(nu, 4.091409233514, TOL));
    ok(isequalRel(m, 5.618287722502, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.550053445068e+04, -1.332909810419e+03, 3.419723153077e+03], [2.960917974359e+00, 1.758331634449e+00, 4.813698637895e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.550053445068e4, -1.332909810419e3, 3.419723153077e3],
            [2.960917974359, 1.758331634449, 4.813698637895],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.326369161712e4, TOL));
    ok(isequalRel(a, 2.654466327018e4, TOL));
    ok(isequalRel(ecc, 7.073368998088e-1, TOL));
    ok(isequalRel(incl, 1.127279528726, TOL));
    ok(isequalRel(omega, 6.092786889201, TOL));
    ok(isequalRel(argp, 4.713534822523, TOL));
    ok(isequalRel(nu, 1.809626469631, TOL));
    ok(isequalRel(m, 3.86472057025e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 9998
});

test("[-1.136218265118e+04, -3.511755867813e+04, -5.413625379945e+03], [3.137861261368e+00, -1.011678260484e+00, 2.675100585537e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.136218265118e4, -3.511755867813e4, -5.413625379945e3],
            [3.137861261368, -1.011678260484, 2.675100585537e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819332941306e4, TOL));
    ok(isequalRel(a, 3.822152719601e4, TOL));
    ok(isequalRel(ecc, 2.716148207783e-2, TOL));
    ok(isequalRel(incl, 1.660039456503e-1, TOL));
    ok(isequalRel(omega, 5.465755189972, TOL));
    ok(isequalRel(argp, 5.712511259082, TOL));
    ok(isequalRel(nu, 5.781740115703, TOL));
    ok(isequalRel(m, 5.807392877827, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.092534992889e+02, -3.696043090143e+04, -4.198480076703e+03], [3.292429375074e+00, -2.166045605727e-03, 4.021116276931e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.092534992889e2, -3.696043090143e4, -4.198480076703e3],
            [3.292429375074, -2.166045605727e-3, 4.021116276931e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819335448608e4, TOL));
    ok(isequalRel(a, 3.822156291155e4, TOL));
    ok(isequalRel(ecc, 2.716659459679e-2, TOL));
    ok(isequalRel(incl, 1.660040209206e-1, TOL));
    ok(isequalRel(omega, 5.465744128483, TOL));
    ok(isequalRel(argp, 5.713014473641, TOL));
    ok(isequalRel(nu, 6.101465692941, TOL));
    ok(isequalRel(m, 6.111091464856, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.194904009077e+04, -3.512737816804e+04, -2.565898064678e+03], [3.119942783565e+00, 1.012096443731e+00, 4.972840999856e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.194904009077e4, -3.512737816804e4, -2.565898064678e3],
            [3.119942783565, 1.012096443731, 4.972840999856e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819338713068e4, TOL));
    ok(isequalRel(a, 3.822159757428e4, TOL));
    ok(isequalRel(ecc, 2.716755405657e-2, TOL));
    ok(isequalRel(incl, 1.6600399935e-1, TOL));
    ok(isequalRel(omega, 5.465741779626, TOL));
    ok(isequalRel(argp, 5.713558783583, TOL));
    ok(isequalRel(nu, 1.389307149831e-1, TOL));
    ok(isequalRel(m, 1.315553572091e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.240045329336e+04, -2.979863236321e+04, -6.779151512206e+02], [2.638533343919e+00, 1.922477736227e+00, 5.427929125821e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.240045329336e4, -2.979863236321e4, -6.779151512206e2],
            [2.638533343919, 1.922477736227, 5.427929125821e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819341647455e4, TOL));
    ok(isequalRel(a, 3.822161910435e4, TOL));
    ok(isequalRel(ecc, 2.716378367535e-2, TOL));
    ok(isequalRel(incl, 1.66003014382e-1, TOL));
    ok(isequalRel(omega, 5.465746006334, TOL));
    ok(isequalRel(argp, 5.714088661415, TOL));
    ok(isequalRel(nu, 4.588417955321e-1, TOL));
    ok(isequalRel(m, 4.352126617664e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.064084752458e+04, -2.152502340201e+04, 1.277348087222e+03], [1.903464941061e+00, 2.634294311900e+00, 5.345409335058e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.064084752458e4, -2.152502340201e4, 1.277348087222e3],
            [1.903464941061, 2.6342943119, 5.345409335058e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819343579109e4, TOL));
    ok(isequalRel(a, 3.822162135699e4, TOL));
    ok(isequalRel(ecc, 2.715556395731e-2, TOL));
    ok(isequalRel(incl, 1.660006040125e-1, TOL));
    ok(isequalRel(omega, 5.465751927151, TOL));
    ok(isequalRel(argp, 5.714541220345, TOL));
    ok(isequalRel(nu, 7.764561441336e-1, TOL));
    ok(isequalRel(m, 7.389455208803e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.589956788035e+04, -1.115271158138e+04, 3.108725352380e+03], [9.973930448389e-01, 3.079858547670e+00, 4.748732906668e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.589956788035e4, -1.115271158138e4, 3.10872535238e3],
            [9.973930448389e-1, 3.07985854767, 4.748732906668e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819344493284e4, TOL));
    ok(isequalRel(a, 3.822160664034e4, TOL));
    ok(isequalRel(ecc, 2.714407348493e-2, TOL));
    ok(isequalRel(incl, 1.659968936727e-1, TOL));
    ok(isequalRel(omega, 5.465754089545, TOL));
    ok(isequalRel(argp, 5.714867507976, TOL));
    ok(isequalRel(nu, 1.090500167808, TOL));
    ok(isequalRel(m, 1.042807997579, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.773245438600e+04, 2.881882105381e+02, 4.643875874950e+03], [1.665222633917e-02, 3.225184410378e+00, 3.716697456563e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.7732454386e4, 2.881882105381e2, 4.64387587495e3],
            [1.665222633917e-2, 3.225184410378, 3.716697456563e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819344948911e4, TOL));
    ok(isequalRel(a, 3.822158392484e4, TOL));
    ok(isequalRel(ecc, 2.713093521576e-2, TOL));
    ok(isequalRel(incl, 1.65992505617e-1, TOL));
    ok(isequalRel(omega, 5.465748738322, TOL));
    ok(isequalRel(argp, 5.715046709631, TOL));
    ok(isequalRel(nu, 1.400107160725, TOL));
    ok(isequalRel(m, 1.34682442433, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.604592961699e+04, 1.170661816230e+04, 5.746326465740e+03], [-9.424090646217e-01, 3.069888941134e+00, 2.366629804474e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.604592961699e4, 1.17066181623e4, 5.74632646574e3],
            [-9.424090646217e-1, 3.069888941134, 2.366629804474e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819345750953e4, TOL));
    ok(isequalRel(a, 3.822156435229e4, TOL));
    ok(isequalRel(ecc, 2.711763450764e-2, TOL));
    ok(isequalRel(incl, 1.659882713397e-1, TOL));
    ok(isequalRel(omega, 5.465735117529, TOL));
    ok(isequalRel(argp, 5.715083579847, TOL));
    ok(isequalRel(nu, 1.704879207196, TOL));
    ok(isequalRel(m, 1.650990743932, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.107677273609e+04, 2.206344379776e+04, 6.325934037052e+03], [-1.794027975990e+00, 2.642072476104e+00, 8.355612737497e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.107677273609e4, 2.206344379776e4, 6.325934037052e3],
            [-1.79402797599, 2.642072476104, 8.355612737497e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819347564734e4, TOL));
    ok(isequalRel(a, 3.822155674506e4, TOL));
    ok(isequalRel(ecc, 2.710521487919e-2, TOL));
    ok(isequalRel(incl, 1.659849043412e-1, TOL));
    ok(isequalRel(omega, 5.465715420626, TOL));
    ok(isequalRel(argp, 5.71499434056, TOL));
    ok(isequalRel(nu, 2.00488988398, TOL));
    ok(isequalRel(m, 1.95528866047, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.334126015320e+04, 3.046088002531e+04, 6.342917078955e+03], [-2.469409743480e+00, 1.990861657683e+00, -7.361209612670e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.33412601532e4, 3.046088002531e4, 6.342917078955e3],
            [-2.46940974348, 1.990861657683, -7.36120961267e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819350637614e4, TOL));
    ok(isequalRel(a, 3.822156498717e4, TOL));
    ok(isequalRel(ecc, 2.709435717698e-2, TOL));
    ok(isequalRel(incl, 1.659827683007e-1, TOL));
    ok(isequalRel(omega, 5.465693694718, TOL));
    ok(isequalRel(argp, 5.714793912496, TOL));
    ok(isequalRel(nu, 2.300636343814, TOL));
    ok(isequalRel(m, 2.259699443657, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.356839733054e+04, 3.620445930900e+04, 5.806795487331e+03], [-2.919354203070e+00, 1.178920217102e+00, -2.216468135390e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.356839733054e4, 3.6204459309e4, 5.806795487331e3],
            [-2.91935420307, 1.178920217102, -2.21646813539e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819354705379e4, TOL));
    ok(isequalRel(a, 3.82215876462e4, TOL));
    ok(isequalRel(ecc, 2.708564805003e-2, TOL));
    ok(isequalRel(incl, 1.659817986307e-1, TOL));
    ok(isequalRel(omega, 5.465674321756, TOL));
    ok(isequalRel(argp, 5.714493185593, TOL));
    ok(isequalRel(nu, 2.592956156753, TOL));
    ok(isequalRel(m, 2.564208091348, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.628587624197e+03, 3.884010855897e+04, 4.771919798544e+03], [-3.114400514097e+00, 2.762391085556e-01, -3.489264012615e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.628587624197e3, 3.884010855897e4, 4.771919798544e3],
            [-3.114400514097, 2.762391085556e-1, -3.489264012615e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.81935907558e4, TOL));
    ok(isequalRel(a, 3.82216191987e4, TOL));
    ok(isequalRel(ecc, 2.707976836312e-2, TOL));
    ok(isequalRel(incl, 1.65981564877e-1, TOL));
    ok(isequalRel(omega, 5.465660640542, TOL));
    ok(isequalRel(argp, 5.714105842603, TOL));
    ok(isequalRel(nu, 2.882928008781, TOL));
    ok(isequalRel(m, 2.868797803699, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.535815981575e+03, 3.817179073851e+04, 3.331003112854e+03], [-3.043839957770e+00, -6.444625274928e-01, -4.458088940627e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.535815981575e3, 3.817179073851e4, 3.331003112854e3],
            [-3.04383995777, -6.444625274928e-1, -4.458088940627e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 3.819362832618e4, TOL));
    ok(isequalRel(a, 3.822165200101e4, TOL));
    ok(isequalRel(ecc, 2.707745330068e-2, TOL));
    ok(isequalRel(incl, 1.659814258863e-1, TOL));
    ok(isequalRel(omega, 5.465654044585, TOL));
    ok(isequalRel(argp, 5.71365791415, TOL));
    ok(isequalRel(nu, 3.17177330821, TOL));
    ok(isequalRel(m, 3.173441275497, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 11801
});

test("[-3.305221486939e+03, 3.241084323331e+04, -2.469716974954e+04], [-1.301137319152e+00, -1.151315600194e+00, -2.833358225210e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.305221486939e3, 3.241084323331e4, -2.469716974954e4],
            [-1.301137319152, -1.151315600194, -2.83335822521e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.129501876844e4, TOL));
    ok(isequalRel(a, 2.430300259005e4, TOL));
    ok(isequalRel(ecc, 7.316022415966e-1, TOL));
    ok(isequalRel(incl, 8.159085435313e-1, TOL));
    ok(isequalRel(omega, 4.020007088147, TOL));
    ok(isequalRel(argp, 8.311170660592e-1, TOL));
    ok(isequalRel(nu, 3.288549055618, TOL));
    ok(isequalRel(m, 3.775604547447, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.427129083858e+04, 2.411044309009e+04, -4.725763201432e+03], [-3.205045281019e-01, 2.679841539187e+00, -2.084054354533e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.427129083858e4, 2.411044309009e4, -4.725763201432e3],
            [-3.205045281019e-1, 2.679841539187, -2.084054354533],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.129686132652e4, TOL));
    ok(isequalRel(a, 2.426089469893e4, TOL));
    ok(isequalRel(ecc, 7.309987995342e-1, TOL));
    ok(isequalRel(incl, 8.160672314021e-1, TOL));
    ok(isequalRel(omega, 4.018633568569, TOL));
    ok(isequalRel(argp, 8.325537420029e-1, TOL));
    ok(isequalRel(nu, 2.539391847291, TOL));
    ok(isequalRel(m, 1.096451998254, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.990058000092e+03, 2.271734212448e+04, -2.361688515553e+04], [-1.016674392241e+00, -2.290267980770e+00, 7.289233366775e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.990058000092e3, 2.271734212448e4, -2.361688515553e4],
            [-1.016674392241, -2.29026798077, 7.289233366775e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.129329858635e4, TOL));
    ok(isequalRel(a, 2.421635939714e4, TOL));
    ok(isequalRel(ecc, 7.305135354946e-1, TOL));
    ok(isequalRel(incl, 8.158422322268e-1, TOL));
    ok(isequalRel(omega, 4.017370238917, TOL));
    ok(isequalRel(argp, 8.336752447877e-1, TOL));
    ok(isequalRel(nu, 3.550285442989, TOL));
    ok(isequalRel(m, 4.710143401486, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.787878362555e+03, 3.375332249667e+04, -1.503079874625e+04], [-1.094251552849e+00, 9.235899056171e-01, -1.522311007671e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.787878362555e3, 3.375332249667e4, -1.503079874625e4],
            [-1.094251552849, 9.235899056171e-1, -1.522311007671],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.129614480496e4, TOL));
    ok(isequalRel(a, 2.417427262894e4, TOL));
    ok(isequalRel(ecc, 7.298769657158e-1, TOL));
    ok(isequalRel(incl, 8.159902049965e-1, TOL));
    ok(isequalRel(omega, 4.016125550354, TOL));
    ok(isequalRel(argp, 8.349048292128e-1, TOL));
    ok(isequalRel(nu, 2.876960270493, TOL));
    ok(isequalRel(m, 2.050272913542, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 14128
});

test("[1.826333439094e+04, 3.815996004751e+04, 4.186183040854e+03], [-2.744396611244e+00, 1.255583260398e+00, 5.285589317648e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.826333439094e4, 3.815996004751e4, 4.186183040854e3],
            [-2.744396611244, 1.255583260398, 5.285589317648e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256331147172e4, TOL));
    ok(isequalRel(a, 4.256337391697e4, TOL));
    ok(isequalRel(ecc, 1.211244188429e-3, TOL));
    ok(isequalRel(incl, 1.999642202937e-1, TOL));
    ok(isequalRel(omega, 6.143492809144e-1, TOL));
    ok(isequalRel(argp, 4.944521850335e-1, TOL));
    ok(isequalRel(nu, 2.423482789142e-2, TOL));
    ok(isequalRel(m, 2.417617831819e-2, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.023388407034e+03, 4.178313186459e+04, 7.273034129058e+03], [-3.035574792735e+00, -2.716565438489e-01, 3.096452507184e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.023388407034e3, 4.178313186459e4, 7.273034129058e3],
            [-3.035574792735, -2.716565438489e-1, 3.096452507184e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256326302729e4, TOL));
    ok(isequalRel(a, 4.256332482688e4, TOL));
    ok(isequalRel(ecc, 1.204966652741e-3, TOL));
    ok(isequalRel(incl, 1.999636110323e-1, TOL));
    ok(isequalRel(omega, 6.14353188296e-1, TOL));
    ok(isequalRel(argp, 5.08565203889e-1, TOL));
    ok(isequalRel(nu, 5.289647058498e-1, TOL));
    ok(isequalRel(m, 5.277495058332e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.351634391907e+04, 3.442442065671e+04, 8.448498676927e+03], [-2.529120477190e+00, -1.726186020213e+00, 9.582303196373e-03], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.351634391907e4, 3.442442065671e4, 8.448498676927e3],
            [-2.52912047719, -1.726186020213, 9.582303196373e-3],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256324439401e4, TOL));
    ok(isequalRel(a, 4.256330490154e4, TOL));
    ok(isequalRel(ecc, 1.192304030227e-3, TOL));
    ok(isequalRel(incl, 1.999646095541e-1, TOL));
    ok(isequalRel(omega, 6.143418210298e-1, TOL));
    ok(isequalRel(argp, 5.183729941027e-1, TOL));
    ok(isequalRel(nu, 1.037694577457, TOL));
    ok(isequalRel(m, 1.035641803106, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.783746699511e+04, 1.802839727170e+04, 7.406255402708e+03], [-1.360069524610e+00, -2.725794685791e+00, -2.925553488898e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.783746699511e4, 1.80283972717e4, 7.406255402708e3],
            [-1.36006952461, -2.725794685791, -2.925553488898e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256328622815e4, TOL));
    ok(isequalRel(a, 4.256334508659e4, TOL));
    ok(isequalRel(ecc, 1.1759436082e-3, TOL));
    ok(isequalRel(incl, 1.999690113383e-1, TOL));
    ok(isequalRel(omega, 6.143300338519e-1, TOL));
    ok(isequalRel(argp, 5.229160477085e-1, TOL));
    ok(isequalRel(nu, 1.551150302261, TOL));
    ok(isequalRel(m, 1.548798910187, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.224358460661e+04, -3.093728877741e+03, 4.422917118012e+03], [1.631109188974e-01, -3.009980598000e+00, -5.175843617427e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.224358460661e4, -3.093728877741e3, 4.422917118012e3],
            [1.631109188974e-1, -3.009980598, -5.175843617427e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256336008212e4, TOL));
    ok(isequalRel(a, 4.256341717014e4, TOL));
    ok(isequalRel(ecc, 1.158121853711e-3, TOL));
    ok(isequalRel(incl, 1.999751914592e-1, TOL));
    ok(isequalRel(omega, 6.14333114909e-1, TOL));
    ok(isequalRel(argp, 5.20439804468e-1, TOL));
    ok(isequalRel(nu, 2.070994646747, TOL));
    ok(isequalRel(m, 2.068961325284, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.559757919549e+04, -2.340791145393e+04, 2.820955438334e+02], [1.641405246118e+00, -2.506773678091e+00, -6.069634776032e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.559757919549e4, -2.340791145393e4, 2.820955438334e2],
            [1.641405246118, -2.506773678091, -6.069634776032e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256340628619e4, TOL));
    ok(isequalRel(a, 4.256346198594e4, TOL));
    ok(isequalRel(ecc, 1.143952893278e-3, TOL));
    ok(isequalRel(incl, 1.999797176361e-1, TOL));
    ok(isequalRel(omega, 6.143518194149e-1, TOL));
    ok(isequalRel(argp, 5.096236078464e-1, TOL));
    ok(isequalRel(nu, 2.598631981531, TOL));
    ok(isequalRel(m, 2.597449013251, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.964919834455e+04, -3.760611623860e+04, -3.932715259483e+03], [2.689647055579e+00, -1.349150015803e+00, -5.377106977158e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.964919834455e4, -3.76061162386e4, -3.932715259483e3],
            [2.689647055579, -1.349150015803, -5.377106977158e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256339193849e4, TOL));
    ok(isequalRel(a, 4.256344718713e4, TOL));
    ok(isequalRel(ecc, 1.139311322585e-3, TOL));
    ok(isequalRel(incl, 1.999807072602e-1, TOL));
    ok(isequalRel(omega, 6.143717223771e-1, TOL));
    ok(isequalRel(argp, 4.935861669351e-1, TOL));
    ok(isequalRel(nu, 3.131180299349, TOL));
    ok(isequalRel(m, 3.131156553664, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.431309121596e+03, -4.198204949668e+04, -7.120454670573e+03], [3.035263352650e+00, 1.608829452348e-01, -3.279939936737e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.431309121596e3, -4.198204949668e4, -7.120454670573e3],
            [3.03526335265, 1.608829452348e-1, -3.279939936737e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256334266145e4, TOL));
    ok(isequalRel(a, 4.25633984777e4, TOL));
    ok(isequalRel(ecc, 1.145149449569e-3, TOL));
    ok(isequalRel(incl, 1.999796498645e-1, TOL));
    ok(isequalRel(omega, 6.143773078602e-1, TOL));
    ok(isequalRel(argp, 4.785992222853e-1, TOL));
    ok(isequalRel(nu, 3.662685446796, TOL));
    ok(isequalRel(m, 3.66382647193, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.213697605384e+04, -3.538819823762e+04, -8.447623934009e+03], [2.587624888870e+00, 1.630097135750e+00, -3.234900433312e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.213697605384e4, -3.538819823762e4, -8.447623934009e3],
            [2.58762488887, 1.63009713575, -3.234900433312e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256331738705e4, TOL));
    ok(isequalRel(a, 4.256337444632e4, TOL));
    ok(isequalRel(ecc, 1.157830776929e-3, TOL));
    ok(isequalRel(incl, 1.999799528721e-1, TOL));
    ok(isequalRel(omega, 6.143670393452e-1, TOL));
    ok(isequalRel(argp, 4.685716993212e-1, TOL));
    ok(isequalRel(nu, 4.189544099786, TOL));
    ok(isequalRel(m, 4.191551263798, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.705015790219e+04, -1.953723321425e+04, -7.564834635430e+03], [1.461844493729e+00, 2.674654255715e+00, 2.722021906567e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.705015790219e4, -1.953723321425e4, -7.56483463543e3],
            [1.461844493729, 2.674654255715, 2.722021906567e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256335111708e4, TOL));
    ok(isequalRel(a, 4.25634097984e4, TOL));
    ok(isequalRel(ecc, 1.174172010601e-3, TOL));
    ok(isequalRel(incl, 1.999836270292e-1, TOL));
    ok(isequalRel(omega, 6.143548671543e-1, TOL));
    ok(isequalRel(argp, 4.643882163404e-1, TOL));
    ok(isequalRel(nu, 4.711085143769, TOL));
    ok(isequalRel(m, 4.713433487951, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.225381760945e+04, 1.431818675929e+03, -4.699876211736e+03], [-4.924733417179e-02, 3.019518960346e+00, 5.058900579504e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.225381760945e4, 1.431818675929e3, -4.699876211736e3],
            [-4.924733417179e-2, 3.019518960346, 5.058900579504e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256342082877e4, TOL));
    ok(isequalRel(a, 4.256348128345e4, TOL));
    ok(isequalRel(ecc, 1.19178077171e-3, TOL));
    ok(isequalRel(incl, 1.999893147855e-1, TOL));
    ok(isequalRel(omega, 6.143566616914e-1, TOL));
    ok(isequalRel(argp, 4.671700755073e-1, TOL));
    ok(isequalRel(nu, 5.226262443973, TOL));
    ok(isequalRel(m, 5.228337249439, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.636659147396e+04, 2.202354245720e+04, -6.014712182108e+02], [-1.549681545806e+00, 2.571788981157e+00, 6.070574177354e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.636659147396e4, 2.20235424572e4, -6.014712182108e2],
            [-1.549681545806, 2.571788981157, 6.070574177354e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256346799917e4, TOL));
    ok(isequalRel(a, 4.25635298892e4, TOL));
    ok(isequalRel(ecc, 1.205845104887e-3, TOL));
    ok(isequalRel(incl, 1.999935988194e-1, TOL));
    ok(isequalRel(omega, 6.143746421852e-1, TOL));
    ok(isequalRel(argp, 4.775995189039e-1, TOL));
    ok(isequalRel(nu, 5.734321009877, TOL));
    ok(isequalRel(m, 5.735578263509, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.092212287985e+04, 3.682633975981e+04, 3.654911258864e+03], [-2.644070067530e+00, 1.447521215940e+00, 5.487229830555e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.092212287985e4, 3.682633975981e4, 3.654911258864e3],
            [-2.64407006753, 1.44752121594, 5.487229830555e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256345623778e4, TOL));
    ok(isequalRel(a, 4.256351864422e4, TOL));
    ok(isequalRel(ecc, 1.210865633436e-3, TOL));
    ok(isequalRel(incl, 1.999943527873e-1, TOL));
    ok(isequalRel(omega, 6.143950793217e-1, TOL));
    ok(isequalRel(argp, 4.927453176181e-1, TOL));
    ok(isequalRel(nu, 6.237991092039, TOL));
    ok(isequalRel(m, 6.238100403848, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.377224182361e+01, 4.194551688402e+04, 6.950298917514e+03], [-3.043358385199e+00, -5.741743997494e-02, 3.461120940566e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.377224182361e1, 4.194551688402e4, 6.950298917514e3],
            [-3.043358385199, -5.741743997494e-2, 3.461120940566e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256340763459e4, TOL));
    ok(isequalRel(a, 4.256346951646e4, TOL));
    ok(isequalRel(ecc, 1.205766439863e-3, TOL));
    ok(isequalRel(incl, 1.999928475332e-1, TOL));
    ok(isequalRel(omega, 6.144017443164e-1, TOL));
    ok(isequalRel(argp, 5.072832170683e-1, TOL));
    ok(isequalRel(nu, 4.591253600639e-1, TOL));
    ok(isequalRel(m, 4.580575207886e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.096417821076e+04, 3.603906206172e+04, 8.418919849633e+03], [-2.642795221088e+00, -1.546099885695e+00, 5.272585177377e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.096417821076e4, 3.603906206172e4, 8.418919849633e3],
            [-2.642795221088, -1.546099885695, 5.272585177377e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256338108624e4, TOL));
    ok(isequalRel(a, 4.256344174337e4, TOL));
    ok(isequalRel(ecc, 1.193775211743e-3, TOL));
    ok(isequalRel(incl, 1.999925049466e-1, TOL));
    ok(isequalRel(omega, 6.143919102857e-1, TOL));
    ok(isequalRel(argp, 5.177472101982e-1, TOL));
    ok(isequalRel(nu, 9.672534794013e-1, TOL));
    ok(isequalRel(m, 9.652887362883e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.640163863057e+04, 2.066975286162e+04, 7.677197693592e+03], [-1.549488154416e+00, -2.627052310288e+00, -2.540796524511e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.640163863057e4, 2.066975286162e4, 7.677197693592e3],
            [-1.549488154416, -2.627052310288, -2.540796524511e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256341420049e4, TOL));
    ok(isequalRel(a, 4.25634732471e4, TOL));
    ok(isequalRel(ecc, 1.177820064704e-3, TOL));
    ok(isequalRel(incl, 1.999955233781e-1, TOL));
    ok(isequalRel(omega, 6.143790051276e-1, TOL));
    ok(isequalRel(argp, 5.230792039779e-1, TOL));
    ok(isequalRel(nu, 1.480000229664, TOL));
    ok(isequalRel(m, 1.477654481158, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.229830327543e+04, -1.190335111769e+02, 4.922963888414e+03], [-5.223276790967e-02, -3.018152669338e+00, -4.938273311773e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.229830327543e4, -1.190335111769e2, 4.922963888414e3],
            [-5.223276790967e-2, -3.018152669338, -4.938273311773e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256348623508e4, TOL));
    ok(isequalRel(a, 4.256354350565e4, TOL));
    ok(isequalRel(ecc, 1.159970274751e-3, TOL));
    ok(isequalRel(incl, 2.000007253048e-1, TOL));
    ok(isequalRel(omega, 6.143793298847e-1, TOL));
    ok(isequalRel(argp, 5.216947719625e-1, TOL));
    ok(isequalRel(nu, 1.998835589395, TOL));
    ok(isequalRel(m, 1.996724188649, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.712562383511e+04, -2.087963058368e+04, 8.798697134838e+02], [1.456499841448e+00, -2.619358420834e+00, -6.040816936099e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.712562383511e4, -2.087963058368e4, 8.798697134838e2],
            [1.456499841448, -2.619358420834, -6.040816936099e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256353844903e4, TOL));
    ok(isequalRel(a, 4.256359424101e4, TOL));
    ok(isequalRel(ecc, 1.144897789529e-3, TOL));
    ok(isequalRel(incl, 2.000047339312e-1, TOL));
    ok(isequalRel(omega, 6.143960715315e-1, TOL));
    ok(isequalRel(argp, 5.119885456407e-1, TOL));
    ok(isequalRel(nu, 2.525463771786, TOL));
    ok(isequalRel(m, 2.524139616495, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.225012320553e+04, -3.618274736487e+04, -3.393153651825e+03], [2.583161225931e+00, -1.536647628308e+00, -5.564045550439e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.225012320553e4, -3.618274736487e4, -3.393153651825e3],
            [2.583161225931, -1.536647628308, -5.564045550439e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256353124784e4, TOL));
    ok(isequalRel(a, 4.256358644091e4, TOL));
    ok(isequalRel(ecc, 1.138736282854e-3, TOL));
    ok(isequalRel(incl, 2.000052812309e-1, TOL));
    ok(isequalRel(omega, 6.144163207035e-1, TOL));
    ok(isequalRel(argp, 4.962904139586e-1, TOL));
    ok(isequalRel(nu, 3.057695076183, TOL));
    ok(isequalRel(m, 3.057504063283, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.563062586537e+03, -4.203543179159e+04, -6.780021617604e+03], [3.034917505677e+00, -5.270204580917e-02, -3.633956537186e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.563062586537e3, -4.203543179159e4, -6.780021617604e3],
            [3.034917505677, -5.270204580917e-2, -3.633956537186e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256348248009e4, TOL));
    ok(isequalRel(a, 4.256353811591e4, TOL));
    ok(isequalRel(ecc, 1.143295172548e-3, TOL));
    ok(isequalRel(incl, 2.00003409466e-1, TOL));
    ok(isequalRel(omega, 6.14423630354e-1, TOL));
    ok(isequalRel(argp, 4.808128347184e-1, TOL));
    ok(isequalRel(nu, 3.589668189295, TOL));
    ok(isequalRel(m, 3.590659579127, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.953164069587e+04, -3.690565470956e+04, -8.395468920325e+03], [2.693682199348e+00, 1.446079999021e+00, -7.525605408714e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.953164069587e4, -3.690565470956e4, -8.395468920325e3],
            [2.693682199348, 1.446079999021, -7.525605408714e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256344973105e4, TOL));
    ok(isequalRel(a, 4.256350653823e4, TOL));
    ok(isequalRel(ecc, 1.155268452626e-3, TOL));
    ok(isequalRel(incl, 2.000024504808e-1, TOL));
    ok(isequalRel(omega, 6.144140650036e-1, TOL));
    ok(isequalRel(argp, 4.700009390617e-1, TOL));
    ok(isequalRel(nu, 4.117250443365, TOL));
    ok(isequalRel(m, 4.119164661096, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.551653506142e+04, -2.212371916638e+04, -7.815045169350e+03], [1.646882125394e+00, 2.568416058022e+00, 2.329859120639e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.551653506142e4, -2.212371916638e4, -7.81504516935e3],
            [1.646882125394, 2.568416058022, 2.329859120639e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256347438515e4, TOL));
    ok(isequalRel(a, 4.256353277254e4, TOL));
    ok(isequalRel(ecc, 1.171225937288e-3, TOL));
    ok(isequalRel(incl, 2.000047867258e-1, TOL));
    ok(isequalRel(omega, 6.144000067801e-1, TOL));
    ok(isequalRel(argp, 4.649570525361e-1, TOL));
    ok(isequalRel(nu, 4.63956921156, TOL));
    ok(isequalRel(m, 4.641905604283, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.219603535976e+04, -1.547326467506e+03, -5.187394019815e+03], [1.664918412208e-01, 3.019211548679e+00, 4.806657802209e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.219603535976e4, -1.547326467506e3, -5.187394019815e3],
            [1.664918412208e-1, 3.019211548679, 4.806657802209e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256354133849e4, TOL));
    ok(isequalRel(a, 4.256360149904e4, TOL));
    ok(isequalRel(ecc, 1.188876403708e-3, TOL));
    ok(isequalRel(incl, 2.000095213478e-1, TOL));
    ok(isequalRel(omega, 6.14398128215e-1, TOL));
    ok(isequalRel(argp, 4.666786109422e-1, TOL));
    ok(isequalRel(nu, 5.155722578143, TOL));
    ok(isequalRel(m, 5.157869644151, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.780225393045e+04, 1.943357330019e+04, -1.198666342264e+03], [-1.359930579954e+00, 2.677830902827e+00, 6.025074661403e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.780225393045e4, 1.943357330019e4, -1.198666342264e3],
            [-1.359930579954, 2.677830902827, 6.025074661403e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.256359375888e4, TOL));
    ok(isequalRel(a, 4.256365543928e4, TOL));
    ok(isequalRel(ecc, 1.20379937403e-3, TOL));
    ok(isequalRel(incl, 2.000133363877e-1, TOL));
    ok(isequalRel(omega, 6.14413062294e-1, TOL));
    ok(isequalRel(argp, 4.761262427349e-1, TOL));
    ok(isequalRel(nu, 5.664696981605, TOL));
    ok(isequalRel(m, 5.666091891122, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 16925
});

test("[1.233983273749e+04, -2.771144478711e+03, 1.890457603433e+04], [-8.712476135168e-01, 2.600917692680e+00, 5.815600021766e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.233983273749e4, -2.771144478711e3, 1.890457603433e4],
            [-8.712476135168e-1, 2.60091769268, 5.815600021766e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.008228702396e4, TOL));
    ok(isequalRel(a, 1.466117237731e4, TOL));
    ok(isequalRel(ecc, 5.588503598295e-1, TOL));
    ok(isequalRel(incl, 1.083553580075, TOL));
    ok(isequalRel(omega, 5.14819431206, TOL));
    ok(isequalRel(argp, 4.278783814126, TOL));
    ok(isequalRel(nu, 3.228842773114, TOL));
    ok(isequalRel(m, 3.396444611351, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.385002156585e+03, 7.538139557293e+03, 2.005900861598e+02], [-2.023512864987e+00, -4.261808344403e+00, -6.856385786922e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.385002156585e3, 7.538139557293e3, 2.005900861598e2],
            [-2.023512864987, -4.261808344403, -6.856385786922],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.009076947975e4, TOL));
    ok(isequalRel(a, 1.466571439547e4, TOL));
    ok(isequalRel(ecc, 5.585233356674e-1, TOL));
    ok(isequalRel(incl, 1.083790293233, TOL));
    ok(isequalRel(omega, 5.147307748424, TOL));
    ok(isequalRel(argp, 4.278503399232, TOL));
    ok(isequalRel(nu, 5.118810788625, TOL));
    ok(isequalRel(m, 5.957769084386, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.280522442200e+04, -1.025894667177e+04, 1.378016486738e+04], [6.192792241561e-01, 1.821510541914e+00, 2.507365975050e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.2805224422e4, -1.025894667177e4, 1.378016486738e4],
            [6.192792241561e-1, 1.821510541914, 2.50736597505],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.008413968982e4, TOL));
    ok(isequalRel(a, 1.464511776515e4, TOL));
    ok(isequalRel(ecc, 5.58062137419e-1, TOL));
    ok(isequalRel(incl, 1.08364745733, TOL));
    ok(isequalRel(omega, 5.146685540082, TOL));
    ok(isequalRel(argp, 4.278736934995, TOL));
    ok(isequalRel(nu, 2.819537459986, TOL));
    ok(isequalRel(m, 2.238092684462, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.682465563184e+03, 7.199302704725e+03, 1.543767134070e+04], [-2.474365405658e+00, 2.087897335908e+00, -2.583767459781e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.682465563184e3, 7.199302704725e3, 1.54376713407e4],
            [-2.474365405658, 2.087897335908, -2.583767459781],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.007991801528e4, TOL));
    ok(isequalRel(a, 1.463390300072e4, TOL));
    ok(isequalRel(ecc, 5.5784778267e-1, TOL));
    ok(isequalRel(incl, 1.08353463386, TOL));
    ok(isequalRel(omega, 5.145682030509, TOL));
    ok(isequalRel(argp, 4.279555676399, TOL));
    ok(isequalRel(nu, 3.807540447635, TOL));
    ok(isequalRel(m, 4.802737937689, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[7.628942439817e+03, -1.285272097492e+04, 2.902872089813e+03], [2.748131081188e+00, -7.400845792519e-01, 4.125307943253e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [7.628942439817e3, -1.285272097492e4, 2.902872089813e3],
            [2.748131081188, -7.400845792519e-1, 4.125307943253],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.008691412122e4, TOL));
    ok(isequalRel(a, 1.463236232597e4, TOL));
    ok(isequalRel(ecc, 5.573540142195e-1, TOL));
    ok(isequalRel(incl, 1.083775715098, TOL));
    ok(isequalRel(omega, 5.145029910444, TOL));
    ok(isequalRel(argp, 4.279385661733, TOL));
    ok(isequalRel(nu, 2.221250150424, TOL));
    ok(isequalRel(m, 1.08772887396, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.153164866625e+04, -8.582754273594e+02, 1.908685993771e+04], [-1.170071901192e+00, 2.660311985956e+00, 9.600570477341e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.153164866625e4, -8.582754273594e2, 1.908685993771e4],
            [-1.170071901192, 2.660311985956, 9.600570477341e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.007684800826e4, TOL));
    ok(isequalRel(a, 1.461840455217e4, TOL));
    ok(isequalRel(ecc, 5.573812749174e-1, TOL));
    ok(isequalRel(incl, 1.083535548823, TOL));
    ok(isequalRel(omega, 5.14425414005, TOL));
    ok(isequalRel(argp, 4.279260999392, TOL));
    ok(isequalRel(nu, 3.320785430055, TOL));
    ok(isequalRel(m, 3.658151267708, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.866980695155e+03, 2.603734427863e+03, -4.577364845770e+03], [1.157257297884e+00, -8.453281163796e+00, -4.683959406933e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.866980695155e3, 2.603734427863e3, -4.57736484577e3],
            [1.157257297884, -8.453281163796, -4.683959406933],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.008128878519e4, TOL));
    ok(isequalRel(a, 1.460999567395e4, TOL));
    ok(isequalRel(ecc, 5.567523549887e-1, TOL));
    ok(isequalRel(incl, 1.0836175366, TOL));
    ok(isequalRel(omega, 5.143540400919, TOL));
    ok(isequalRel(argp, 4.279470057337, TOL));
    ok(isequalRel(nu, 6.060784968882, TOL));
    ok(isequalRel(m, 6.230272275488, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.305477732721e+04, -8.707927577304e+03, 1.553763259903e+04], [2.298467482862e-01, 2.119467054482e+00, 2.063396852035e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.305477732721e4, -8.707927577304e3, 1.553763259903e4],
            [2.298467482862e-1, 2.119467054482, 2.063396852035],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.007792130833e4, TOL));
    ok(isequalRel(a, 1.460230011641e4, TOL));
    ok(isequalRel(ecc, 5.566328651392e-1, TOL));
    ok(isequalRel(incl, 1.083615187153, TOL));
    ok(isequalRel(omega, 5.142752074982, TOL));
    ok(isequalRel(argp, 4.279103838804, TOL));
    ok(isequalRel(nu, 2.925115255302, TOL));
    ok(isequalRel(m, 2.52222128265, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.496910646522e+03, 8.712839197782e+03, 1.284581838327e+04], [-2.782184997107e+00, 1.552950643964e+00, -3.554436131460e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.496910646522e3, 8.712839197782e3, 1.284581838327e4],
            [-2.782184997107, 1.552950643964, -3.55443613146],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.007623882633e4, TOL));
    ok(isequalRel(a, 1.459122383131e4, TOL));
    ok(isequalRel(ecc, 5.562657187843e-1, TOL));
    ok(isequalRel(incl, 1.083560229571, TOL));
    ok(isequalRel(omega, 5.141703401609, TOL));
    ok(isequalRel(argp, 4.279928201046, TOL));
    ok(isequalRel(nu, 3.992590610128, TOL));
    ok(isequalRel(m, 5.097936928032, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.593074247290e+03, -1.302375963608e+04, 6.250464849314e+03], [2.072666375563e+00, 2.787353335092e-01, 3.778111073109e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.59307424729e3, -1.302375963608e4, 6.250464849314e3],
            [2.072666375563, 2.787353335092e-1, 3.778111073109],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.008071982267e4, TOL));
    ok(isequalRel(a, 1.45879236904e4, TOL));
    ok(isequalRel(ecc, 5.558490397474e-1, TOL));
    ok(isequalRel(incl, 1.083739100982, TOL));
    ok(isequalRel(omega, 5.141139656031, TOL));
    ok(isequalRel(argp, 4.279556991035, TOL));
    ok(isequalRel(nu, 2.423750578165, TOL));
    ok(isequalRel(m, 1.394389780453, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.028479205084e+04, 1.487899141688e+03, 1.882437381327e+04], [-1.530335053060e+00, 2.663107729732e+00, -5.422059660099e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.028479205084e4, 1.487899141688e3, 1.882437381327e4],
            [-1.53033505306, 2.663107729732, -5.422059660099e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.007142448849e4, TOL));
    ok(isequalRel(a, 1.457558486378e4, TOL));
    ok(isequalRel(ecc, 5.558964845678e-1, TOL));
    ok(isequalRel(incl, 1.083518746725, TOL));
    ok(isequalRel(omega, 5.140275858581, TOL));
    ok(isequalRel(argp, 4.279777808907, TOL));
    ok(isequalRel(nu, 3.438269293796, TOL));
    ok(isequalRel(m, 3.975478979288, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.846203514641e+02, -5.187034808132e+03, -5.745595941443e+03], [4.340271916475e+00, -7.266811354072e+00, 1.777668888176e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.846203514641e2, -5.187034808132e3, -5.745595941443e3],
            [4.340271916475, -7.266811354072, 1.777668888176],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.007547821096e4, TOL));
    ok(isequalRel(a, 1.456796242087e4, TOL));
    ok(isequalRel(ecc, 5.553207140524e-1, TOL));
    ok(isequalRel(incl, 1.083595022968, TOL));
    ok(isequalRel(omega, 5.139302233252, TOL));
    ok(isequalRel(argp, 4.279417376202, TOL));
    ok(isequalRel(nu, 1.018738373234, TOL));
    ok(isequalRel(m, 2.759029633628e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 20413
});

test("[-1.516690528051e+05, -5.645204545496e+03, -2.198515921184e+03], [-8.691828888193e-01, -8.707598718530e-01, 1.565082188288e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.516690528051e5, -5.645204545496e3, -2.198515921184e3],
            [-8.691828888193e-1, -8.70759871853e-1, 1.565082188288e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.223650008228e4, TOL));
    ok(isequalRel(a, 1.073294720201e5, TOL));
    ok(isequalRel(ecc, 7.787670244171e-1, TOL));
    ok(isequalRel(incl, 2.001796939418e-1, TOL));
    ok(isequalRel(omega, 3.250249893736, TOL));
    ok(isequalRel(argp, 3.453743345086, TOL));
    ok(isequalRel(nu, 2.756537247626, TOL));
    ok(isequalRel(m, 1.472210466701, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.574977165749e+05, -1.188499595074e+04, -1.061444394024e+03], [-7.496579608381e-01, -8.640167152926e-01, 1.577661011570e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.574977165749e5, -1.188499595074e4, -1.061444394024e3],
            [-7.496579608381e-1, -8.640167152926e-1, 1.57766101157e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.224241158149e4, TOL));
    ok(isequalRel(a, 1.07329542752e5, TOL));
    ok(isequalRel(ecc, 7.787318278023e-1, TOL));
    ok(isequalRel(incl, 2.0012272923e-1, TOL));
    ok(isequalRel(omega, 3.250048851194, TOL));
    ok(isequalRel(argp, 3.453875090509, TOL));
    ok(isequalRel(nu, 2.795498343882, TOL));
    ok(isequalRel(m, 1.601689785835, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.624983225558e+05, -1.806299733167e+04, 8.100915252769e+01], [-6.389803775814e-01, -8.536871051597e-01, 1.580989915460e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.624983225558e5, -1.806299733167e4, 8.100915252769e1],
            [-6.389803775814e-1, -8.536871051597e-1, 1.58098991546e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.224804085139e4, TOL));
    ok(isequalRel(a, 1.073296019418e5, TOL));
    ok(isequalRel(ecc, 7.786982908955e-1, TOL));
    ok(isequalRel(incl, 2.000695909108e-1, TOL));
    ok(isequalRel(omega, 3.249852878979, TOL));
    ok(isequalRel(argp, 3.453999927519, TOL));
    ok(isequalRel(nu, 2.831678475947, TOL));
    ok(isequalRel(m, 1.731174049415, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.667287601092e+05, -2.415599648299e+04, 1.222841286769e+03], [-5.356006870121e-01, -8.404554444322e-01, 1.576808569901e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.667287601092e5, -2.415599648299e4, 1.222841286769e3],
            [-5.356006870121e-1, -8.404554444322e-1, 1.576808569901e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.225337844802e4, TOL));
    ok(isequalRel(a, 1.073296517182e5, TOL));
    ok(isequalRel(ecc, 7.786664754119e-1, TOL));
    ok(isequalRel(incl, 2.00020328045e-1, TOL));
    ok(isequalRel(omega, 3.249662137538, TOL));
    ok(isequalRel(argp, 3.454117819154, TOL));
    ok(isequalRel(nu, 2.865606725861, TOL));
    ok(isequalRel(m, 1.860662946097, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.699358192459e+05, -3.176729787964e+04, 2.749015403445e+03], [-4.300504306249e-01, -8.289041834268e-01, 1.578123404668e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.699358192459e5, -3.176729787964e4, 2.749015403445e3],
            [-4.300504306249e-1, -8.289041834268e-1, 1.578123404668e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.225847861613e4, TOL));
    ok(isequalRel(a, 1.073296933043e5, TOL));
    ok(isequalRel(ecc, 7.786360598891e-1, TOL));
    ok(isequalRel(incl, 1.999749699292e-1, TOL));
    ok(isequalRel(omega, 3.247862176503, TOL));
    ok(isequalRel(argp, 3.465612685631, TOL));
    ok(isequalRel(nu, 2.89769728265, TOL));
    ok(isequalRel(m, 1.99015620525, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.727030783182e+05, -3.766295639336e+04, 3.883600525786e+03], [-3.380048910818e-01, -8.102774874652e-01, 1.560200348876e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.727030783182e5, -3.766295639336e4, 3.883600525786e3],
            [-3.380048910818e-1, -8.102774874652e-1, 1.560200348876e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.226320579553e4, TOL));
    ok(isequalRel(a, 1.073297285991e5, TOL));
    ok(isequalRel(ecc, 7.786078600369e-1, TOL));
    ok(isequalRel(incl, 1.999335699988e-1, TOL));
    ok(isequalRel(omega, 3.247674369277, TOL));
    ok(isequalRel(argp, 3.465728297535, TOL));
    ok(isequalRel(nu, 2.928282952468, TOL));
    ok(isequalRel(m, 2.119653396692, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.748231933740e+05, -4.341755605219e+04, 5.003263128095e+03], [-2.502586222837e-01, -7.898286720211e-01, 1.537649030472e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.74823193374e5, -4.341755605219e4, 5.003263128095e3],
            [-2.502586222837e-1, -7.898286720211e-1, 1.537649030472e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.226761498804e4, TOL));
    ok(isequalRel(a, 1.073297581475e5, TOL));
    ok(isequalRel(ecc, 7.785815482761e-1, TOL));
    ok(isequalRel(incl, 1.998961480294e-1, TOL));
    ok(isequalRel(omega, 3.247493155968, TOL));
    ok(isequalRel(argp, 3.465833593204, TOL));
    ok(isequalRel(nu, 2.957635499184, TOL));
    ok(isequalRel(m, 2.249154231614, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.763246392577e+05, -4.901851958648e+04, 6.104850250015e+03], [-1.661366126847e-01, -7.677062623608e-01, 1.510922423753e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.763246392577e5, -4.901851958648e4, 6.104850250015e3],
            [-1.661366126847e-1, -7.677062623608e-1, 1.510922423753e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.227169822849e4, TOL));
    ok(isequalRel(a, 1.073297826406e5, TOL));
    ok(isequalRel(ecc, 7.785571740818e-1, TOL));
    ok(isequalRel(incl, 1.998627234199e-1, TOL));
    ok(isequalRel(omega, 3.247318672342, TOL));
    ok(isequalRel(argp, 3.465928555162, TOL));
    ok(isequalRel(nu, 2.985982433197, TOL));
    ok(isequalRel(m, 2.378658363389, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.772314214246e+05, -5.445412699497e+04, 7.185486616066e+03], [-8.506785380971e-02, -7.440015671476e-01, 1.480334033218e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.772314214246e5, -5.445412699497e4, 7.185486616066e3],
            [-8.506785380971e-2, -7.440015671476e-1, 1.480334033218e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.227544800367e4, TOL));
    ok(isequalRel(a, 1.073298026091e5, TOL));
    ok(isequalRel(ecc, 7.785347838381e-1, TOL));
    ok(isequalRel(incl, 1.998333082686e-1, TOL));
    ok(isequalRel(omega, 3.247151040315, TOL));
    ok(isequalRel(argp, 3.466013185231, TOL));
    ok(isequalRel(nu, 3.013517951608, TOL));
    ok(isequalRel(m, 2.508165437906, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.775637358323e+05, -5.971314859144e+04, 8.242484725914e+03], [-6.561729659597e-03, -7.187603090748e-01, 1.446086760399e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.775637358323e5, -5.971314859144e4, 8.242484725914e3],
            [-6.561729659597e-3, -7.187603090748e-1, 1.446086760399e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.227885727864e4, TOL));
    ok(isequalRel(a, 1.073298184567e5, TOL));
    ok(isequalRel(ecc, 7.785144207609e-1, TOL));
    ok(isequalRel(incl, 1.998079073545e-1, TOL));
    ok(isequalRel(omega, 3.246990367681, TOL));
    ok(isequalRel(argp, 3.466087504898, TOL));
    ok(isequalRel(nu, 3.04041130426, TOL));
    ok(isequalRel(m, 2.637675094174, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.773384802648e+05, -6.478454644698e+04, 9.273272200031e+03], [6.980994561026e-02, -6.919902383374e-01, 1.408292362313e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.773384802648e5, -6.478454644698e4, 9.273272200031e3],
            [6.980994561026e-2, -6.919902383374e-1, 1.408292362313e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.228191952057e4, TOL));
    ok(isequalRel(a, 1.073298304854e5, TOL));
    ok(isequalRel(ecc, 7.784961248099e-1, TOL));
    ok(isequalRel(incl, 1.997865181124e-1, TOL));
    ok(isequalRel(omega, 3.246836747851, TOL));
    ok(isequalRel(argp, 3.466151555602, TOL));
    ok(isequalRel(nu, 3.066813191577, TOL));
    ok(isequalRel(m, 2.76718696496, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.765696515146e+05, -6.965721976255e+04, 1.027533063459e+04], [1.444268782413e-01, -6.636658757354e-01, 1.366984192526e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.765696515146e5, -6.965721976255e4, 1.027533063459e4],
            [1.444268782413e-1, -6.636658757354e-1, 1.366984192526e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.228462872044e4, TOL));
    ok(isequalRel(a, 1.073298389116e5, TOL));
    ok(isequalRel(ecc, 7.784799325977e-1, TOL));
    ok(isequalRel(incl, 1.997691306091e-1, TOL));
    ok(isequalRel(omega, 3.24669025961, TOL));
    ok(isequalRel(argp, 3.466205398951, TOL));
    ok(isequalRel(nu, 3.092860814165, TOL));
    ok(isequalRel(m, 2.896700677442, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.752686529907e+05, -7.431977625463e+04, 1.124614177160e+04], [2.176313698749e-01, -6.337310905951e-01, 1.322124908760e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.752686529907e5, -7.431977625463e4, 1.12461417716e4],
            [2.176313698749e-1, -6.337310905951e-1, 1.32212490876e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.228697941266e4, TOL));
    ok(isequalRel(a, 1.073298438784e5, TOL));
    ok(isequalRel(ecc, 7.78465877298e-1, TOL));
    ok(isequalRel(incl, 1.997557275233e-1, TOL));
    ok(isequalRel(omega, 3.246550966884, TOL));
    ok(isequalRel(argp, 3.466249116887, TOL));
    ok(isequalRel(nu, 3.118682005899, TOL));
    ok(isequalRel(m, 3.026215853894, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.734445303961e+05, -7.876031560396e+04, 1.218313775212e+04], [2.897373248714e-01, -6.020999289137e-01, 1.273610170173e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.734445303961e5, -7.876031560396e4, 1.218313775212e4],
            [2.897373248714e-1, -6.020999289137e-1, 1.273610170173e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.22889666928e4, TOL));
    ok(isequalRel(a, 1.073298454624e5, TOL));
    ok(isequalRel(ecc, 7.784539885554e-1, TOL));
    ok(isequalRel(incl, 1.997462841346e-1, TOL));
    ok(isequalRel(omega, 3.246418918541, TOL));
    ok(isequalRel(argp, 3.466282811786, TOL));
    ok(isequalRel(nu, 3.144398764351, TOL));
    ok(isequalRel(m, 3.155732112386, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.711041481365e+05, -8.296621323591e+04, 1.308365278381e+04], [3.610377794607e-01, -5.686559032440e-01, 1.221268885320e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.711041481365e5, -8.296621323591e4, 1.308365278381e4],
            [3.610377794607e-1, -5.68655903244e-1, 1.22126888532e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.229058623331e4, TOL));
    ok(isequalRel(a, 1.073298436775e5, TOL));
    ok(isequalRel(ecc, 7.784442923988e-1, TOL));
    ok(isequalRel(incl, 1.997407683213e-1, TOL));
    ok(isequalRel(omega, 3.246294148215, TOL));
    ok(isequalRel(argp, 3.466306606515, TOL));
    ok(isequalRel(nu, 3.170130419862, TOL));
    ok(isequalRel(m, 3.2852490675, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.682523154380e+05, -8.692389363433e+04, 1.394487382716e+04], [4.318113960749e-01, -5.332497972119e-01, 1.164860217688e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.68252315438e5, -8.692389363433e4, 1.394487382716e4],
            [4.318113960749e-1, -5.332497972119e-1, 1.164860217688e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.229183429747e4, TOL));
    ok(isequalRel(a, 1.073298384763e5, TOL));
    ok(isequalRel(ecc, 7.784368111594e-1, TOL));
    ok(isequalRel(incl, 1.997391405691e-1, TOL));
    ok(isequalRel(omega, 3.246176674149, TOL));
    ok(isequalRel(argp, 3.466320644446, TOL));
    ok(isequalRel(nu, 3.195996643139, TOL));
    ok(isequalRel(m, 3.414766331066, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.648918683289e+05, -9.061858225954e+04, 1.476378794247e+04], [5.023282686524e-01, -4.956958964576e-01, 1.104067247985e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.648918683289e5, -9.061858225954e4, 1.476378794247e4],
            [5.023282686524e-1, -4.956958964576e-1, 1.104067247985e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.229270775134e4, TOL));
    ok(isequalRel(a, 1.073298297469e5, TOL));
    ok(isequalRel(ecc, 7.784315633925e-1, TOL));
    ok(isequalRel(incl, 1.99741353991e-1, TOL));
    ok(isequalRel(omega, 3.246066499077, TOL));
    ok(isequalRel(argp, 3.466325089422, TOL));
    ok(isequalRel(nu, 3.222120473262, TOL));
    ok(isequalRel(m, 3.54428351291, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.610237113982e+05, -9.403402398835e+04, 1.553712375729e+04], [5.728553207495e-01, -4.557664118588e-01, 1.038486882530e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.610237113982e5, -9.403402398835e4, 1.553712375729e4],
            [5.728553207495e-1, -4.557664118588e-1, 1.03848688253e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.229320407367e4, TOL));
    ok(isequalRel(a, 1.073298173083e5, TOL));
    ok(isequalRel(ecc, 7.784285638045e-1, TOL));
    ok(isequalRel(incl, 1.997473543599e-1, TOL));
    ok(isequalRel(omega, 3.245963610118, TOL));
    ok(isequalRel(argp, 3.466320125702, TOL));
    ok(isequalRel(nu, 3.24863155025, TOL));
    ok(isequalRel(m, 3.67380022161, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.566468213673e+05, -9.715215370791e+04, 1.626128409305e+04], [6.436615381409e-01, -4.131836878365e-01, 9.676152377564e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.566468213673e5, -9.715215370791e4, 1.626128409305e4],
            [6.436615381409e-1, -4.131836878365e-1, 9.676152377564e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.229332136381e4, TOL));
    ok(isequalRel(a, 1.073298009004e5, TOL));
    ok(isequalRel(ecc, 7.784278231833e-1, TOL));
    ok(isequalRel(incl, 1.997570801514e-1, TOL));
    ok(isequalRel(omega, 3.245867978701, TOL));
    ok(isequalRel(argp, 3.466305957883, TOL));
    ok(isequalRel(nu, 3.275669759147, TOL));
    ok(isequalRel(m, 3.803316065264, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.517582128574e+05, -9.995270098346e+04, 1.693226607548e+04], [7.150232542983e-01, -3.676095609687e-01, 8.908272650298e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.517582128574e5, -9.995270098346e4, 1.693226607548e4],
            [7.150232542983e-1, -3.676095609687e-1, 8.908272650298e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.229305834729e4, TOL));
    ok(isequalRel(a, 1.073297801707e5, TOL));
    ok(isequalRel(ecc, 7.784293483318e-1, TOL));
    ok(isequalRel(incl, 1.99770462598e-1, TOL));
    ok(isequalRel(omega, 3.245779560489, TOL));
    ok(isequalRel(argp, 3.466282810823, TOL));
    ok(isequalRel(nu, 3.303389540241, TOL));
    ok(isequalRel(m, 3.932830652264, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.463528652128e+05, -1.024127050628e+05, 1.754556394158e+04], [7.872296948625e-01, -3.186309130390e-01, 8.073487275970e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.463528652128e5, -1.024127050628e5, 1.754556394158e4],
            [7.872296948625e-1, -3.18630913039e-1, 8.07348727597e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.22924143791e4, TOL));
    ok(isequalRel(a, 1.073297546537e5, TOL));
    ok(isequalRel(ecc, 7.784331420011e-1, TOL));
    ok(isequalRel(incl, 1.997874257522e-1, TOL));
    ok(isequalRel(omega, 3.245698295311, TOL));
    ok(isequalRel(argp, 3.466250929572, TOL));
    ok(isequalRel(nu, 3.331965201172, TOL));
    ok(isequalRel(m, 4.06234359207, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.404236077744e+05, -1.045059079973e+05, 1.809604807097e+04], [8.605889788509e-01, -2.657399872729e-01, 7.162176779901e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.404236077744e5, -1.045059079973e5, 1.809604807097e4],
            [8.605889788509e-1, -2.657399872729e-1, 7.162176779901e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.22913894442e4, TOL));
    ok(isequalRel(a, 1.073297237431e5, TOL));
    ok(isequalRel(ecc, 7.784392028199e-1, TOL));
    ok(isequalRel(incl, 1.998078865583e-1, TOL));
    ok(isequalRel(omega, 3.245624107064, TOL));
    ok(isequalRel(argp, 3.466210579367, TOL));
    ok(isequalRel(nu, 3.361597697789, TOL));
    ok(isequalRel(m, 4.191854495991, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.339609596185e+05, -1.062019809132e+05, 1.857781121953e+04], [9.354347581087e-01, -2.083073067579e-01, 6.162311047804e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.339609596185e5, -1.062019809132e5, 1.857781121953e4],
            [9.354347581087e-1, -2.083073067579e-1, 6.162311047804e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.22899841551e4, TOL));
    ok(isequalRel(a, 1.073296866505e5, TOL));
    ok(isequalRel(ecc, 7.78447525214e-1, TOL));
    ok(isequalRel(incl, 1.998317549275e-1, TOL));
    ok(isequalRel(omega, 3.245556903569, TOL));
    ok(isequalRel(argp, 3.466162045722, TOL));
    ok(isequalRel(nu, 3.392523559727, TOL));
    ok(isequalRel(m, 4.321362977954, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.269529186001e+05, -1.074655190619e+05, 1.898396903112e+04], [1.012133628387e+00, -1.455438783178e-01, 5.058700700673e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.269529186001e5, -1.074655190619e5, 1.898396903112e4],
            [1.012133628387, -1.455438783178e-1, 5.058700700673e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.228819974604e4, TOL));
    ok(isequalRel(a, 1.073296423483e5, TOL));
    ok(isequalRel(ecc, 7.784580993053e-1, TOL));
    ok(isequalRel(incl, 1.998589338157e-1, TOL));
    ok(isequalRel(omega, 3.245496576316, TOL));
    ok(isequalRel(argp, 3.466105634685, TOL));
    ok(isequalRel(nu, 3.425026973822, TOL));
    ok(isequalRel(m, 4.450868655273, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.193846939645e+05, -1.082547111537e+05, 1.930639581892e+04], [1.091093313277e+00, -7.644747853773e-02, 3.831928160303e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.193846939645e5, -1.082547111537e5, 1.930639581892e4],
            [1.091093313277, -7.644747853773e-2, 3.831928160303e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.228603806304e4, TOL));
    ok(isequalRel(a, 1.073295894846e5, TOL));
    ok(isequalRel(ecc, 7.784709107731e-1, TOL));
    ok(isequalRel(incl, 1.998893192965e-1, TOL));
    ok(isequalRel(omega, 3.245443000038, TOL));
    ok(isequalRel(argp, 3.466041673385, TOL));
    ok(isequalRel(nu, 3.459456592715, TOL));
    ok(isequalRel(m, 4.580371149403, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 21897
});

test("[-1.941046286123e+04, -1.914303318969e+04, 2.311405522619e+04], [5.086022367297e-01, -1.156882269205e+00, 2.379923454711e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.941046286123e4, -1.914303318969e4, 2.311405522619e4],
            [5.086022367297e-1, -1.156882269205, 2.379923454711],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191370222755e4, TOL));
    ok(isequalRel(a, 2.649685987122e4, TOL));
    ok(isequalRel(ecc, 7.418713178843e-1, TOL));
    ok(isequalRel(incl, 1.084735551503, TOL));
    ok(isequalRel(omega, 3.455583373947, TOL));
    ok(isequalRel(argp, 4.416114688053, TOL));
    ok(isequalRel(nu, 2.68745132226, TOL));
    ok(isequalRel(m, 1.405736344711, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.268606129708e+04, -2.385375335645e+04, 3.552981733588e+04], [1.231633828844e+00, -2.217182021642e-01, 1.118440290893e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.268606129708e4, -2.385375335645e4, 3.552981733588e4],
            [1.231633828844, -2.217182021642e-1, 1.118440290893],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191121165465e4, TOL));
    ok(isequalRel(a, 2.649678123724e4, TOL));
    ok(isequalRel(ecc, 7.419337660802e-1, TOL));
    ok(isequalRel(incl, 1.084680145387, TOL));
    ok(isequalRel(omega, 3.455327904606, TOL));
    ok(isequalRel(argp, 4.416136972885, TOL));
    ok(isequalRel(nu, 2.987505710749, TOL));
    ok(isequalRel(m, 2.459624965475, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.775466493588e+03, -2.283964574119e+04, 3.949464689967e+04], [1.468963404931e+00, 4.894817687596e-01, -2.397278779863e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.775466493588e3, -2.283964574119e4, 3.949464689967e4],
            [1.468963404931, 4.894817687596e-1, -2.397278779863e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191003302082e4, TOL));
    ok(isequalRel(a, 2.649683968712e4, TOL));
    ok(isequalRel(ecc, 7.419644108308e-1, TOL));
    ok(isequalRel(incl, 1.084650006788, TOL));
    ok(isequalRel(omega, 3.4550555471, TOL));
    ok(isequalRel(argp, 4.416242645786, TOL));
    ok(isequalRel(nu, 3.224276172793, TOL));
    ok(isequalRel(m, 3.513392292221, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[7.679878835699e+03, -1.678050760106e+04, 3.468621815555e+04], [1.364171080400e+00, 1.211183896523e+00, -1.385151370861e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [7.679878835699e3, -1.678050760106e4, 3.468621815555e4],
            [1.3641710804, 1.211183896523, -1.385151370861],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191043009397e4, TOL));
    ok(isequalRel(a, 2.649629732483e4, TOL));
    ok(isequalRel(ecc, 7.419481115307e-1, TOL));
    ok(isequalRel(incl, 1.084639688119, TOL));
    ok(isequalRel(omega, 3.454766613369, TOL));
    ok(isequalRel(argp, 4.416372810976, TOL));
    ok(isequalRel(nu, 3.492015957339, TOL));
    ok(isequalRel(m, 4.567109724343, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.455240023028e+04, -4.819501214612e+03, 1.715470672449e+04], [1.092015914958e-01, 2.176124494271e+00, -3.854856804902e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.455240023028e4, -4.819501214612e3, 1.715470672449e4],
            [1.092015914958e-1, 2.176124494271, -3.854856804902],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.1913477145e4, TOL));
    ok(isequalRel(a, 2.64952073768e4, TOL));
    ok(isequalRel(ecc, 7.418581430988e-1, TOL));
    ok(isequalRel(incl, 1.08469245095, TOL));
    ok(isequalRel(omega, 3.454447829237, TOL));
    ok(isequalRel(argp, 4.416403154412, TOL));
    ok(isequalRel(nu, 4.004886348835, TOL));
    ok(isequalRel(m, 5.620919368097, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.530238845375e+04, -5.556434402997e+03, 1.095950887533e+03], [-2.838224312259e+00, -3.134231137481e+00, 3.992596325784e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.530238845375e4, -5.556434402997e3, 1.095950887533e3],
            [-2.838224312259, -3.134231137481, 3.992596325784],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191704518456e4, TOL));
    ok(isequalRel(a, 2.650637712585e4, TOL));
    ok(isequalRel(ecc, 7.418951234893e-1, TOL));
    ok(isequalRel(incl, 1.08482598137, TOL));
    ok(isequalRel(omega, 3.454330810336, TOL));
    ok(isequalRel(argp, 4.416449362609, TOL));
    ok(isequalRel(nu, 1.942770864677, TOL));
    ok(isequalRel(m, 3.915680573883e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.928920066748e+04, -1.942704851118e+04, 2.375945685636e+04], [5.524950869889e-01, -1.112499437338e+00, 2.325112653904e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.928920066748e4, -1.942704851118e4, 2.375945685636e4],
            [5.524950869889e-1, -1.112499437338, 2.325112653904],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191354190354e4, TOL));
    ok(isequalRel(a, 2.649695182559e4, TOL));
    ok(isequalRel(ecc, 7.418764474845e-1, TOL));
    ok(isequalRel(incl, 1.084719458624, TOL));
    ok(isequalRel(omega, 3.454190558087, TOL));
    ok(isequalRel(argp, 4.416213959156, TOL));
    ok(isequalRel(nu, 2.701998565017, TOL));
    ok(isequalRel(m, 1.445756171797, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.237621976437e+04, -2.389338020018e+04, 3.583133691892e+04], [1.246701528718e+00, -1.942940481169e-01, 1.074867282458e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.237621976437e4, -2.389338020018e4, 3.583133691892e4],
            [1.246701528718, -1.942940481169e-1, 1.074867282458],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191110469849e4, TOL));
    ok(isequalRel(a, 2.649691190231e4, TOL));
    ok(isequalRel(ecc, 7.419379802954e-1, TOL));
    ok(isequalRel(incl, 1.084665967967, TOL));
    ok(isequalRel(omega, 3.453934388126, TOL));
    ok(isequalRel(argp, 4.416241318931, TOL));
    ok(isequalRel(nu, 2.996922400116, TOL));
    ok(isequalRel(m, 2.499630537234, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.400556776651e+03, -2.269862264640e+04, 3.948275964390e+04], [1.472582921869e+00, 5.135556538063e-01, -6.930656058462e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.400556776651e3, -2.26986226464e4, 3.94827596439e4],
            [1.472582921869, 5.135556538063e-1, -6.930656058462e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.190998392371e4, TOL));
    ok(isequalRel(a, 2.649695760842e4, TOL));
    ok(isequalRel(ecc, 7.419670075317e-1, TOL));
    ok(isequalRel(incl, 1.08463708149, TOL));
    ok(isequalRel(omega, 3.453661852166, TOL));
    ok(isequalRel(argp, 4.416348907065, TOL));
    ok(isequalRel(nu, 3.233306439119, TOL));
    ok(isequalRel(m, 3.55338732656, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.031668192521e+03, -1.645577592085e+04, 3.429894391742e+04], [1.351357425528e+00, 1.239633233998e+00, -1.448195324033e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.031668192521e3, -1.645577592085e4, 3.429894391742e4],
            [1.351357425528, 1.239633233998, -1.448195324033],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191045674859e4, TOL));
    ok(isequalRel(a, 2.649638058671e4, TOL));
    ok(isequalRel(ecc, 7.419483855201e-1, TOL));
    ok(isequalRel(incl, 1.084628311975, TOL));
    ok(isequalRel(omega, 3.453372392737, TOL));
    ok(isequalRel(argp, 4.416478893462, TOL));
    ok(isequalRel(nu, 3.504335932164, TOL));
    ok(isequalRel(m, 4.607096710975, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.455948780372e+04, -4.238437738131e+03, 1.607923154704e+04], [-2.640965547724e-02, 2.218938770316e+00, -4.012628895727e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.455948780372e4, -4.238437738131e3, 1.607923154704e4],
            [-2.640965547724e-2, 2.218938770316, -4.012628895727],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191367546893e4, TOL));
    ok(isequalRel(a, 2.649546337476e4, TOL));
    ok(isequalRel(ecc, 7.4185602629e-1, TOL));
    ok(isequalRel(incl, 1.084687912504, TOL));
    ok(isequalRel(omega, 3.453053499305, TOL));
    ok(isequalRel(argp, 4.416495389179, TOL));
    ok(isequalRel(nu, 4.041909597073, TOL));
    ok(isequalRel(m, 5.660913156366, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.603604980660e+04, -6.372514064680e+03, 2.183448342318e+03], [-2.485113443020e+00, -2.994994354835e+00, 3.955891271958e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.60360498066e4, -6.37251406468e3, 2.183448342318e3],
            [-2.48511344302, -2.994994354835, 3.955891271958],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191692050416e4, TOL));
    ok(isequalRel(a, 2.65051508683e4, TOL));
    ok(isequalRel(ecc, 7.41884275317e-1, TOL));
    ok(isequalRel(incl, 1.084812664994, TOL));
    ok(isequalRel(omega, 3.452954054796, TOL));
    ok(isequalRel(argp, 4.41653466171, TOL));
    ok(isequalRel(nu, 2.00910288213, TOL));
    ok(isequalRel(m, 4.315652579809e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.915671583814e+04, -1.969889059957e+04, 2.438929473934e+04], [5.942781327432e-01, -1.069418599251e+00, 2.271152044320e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.915671583814e4, -1.969889059957e4, 2.438929473934e4],
            [5.942781327432e-1, -1.069418599251, 2.27115204432],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191340866219e4, TOL));
    ok(isequalRel(a, 2.64970502425e4, TOL));
    ok(isequalRel(ecc, 7.418809620621e-1, TOL));
    ok(isequalRel(incl, 1.08470674844, TOL));
    ok(isequalRel(omega, 3.452799720238, TOL));
    ok(isequalRel(argp, 4.41631382791, TOL));
    ok(isequalRel(nu, 2.716133347635, TOL));
    ok(isequalRel(m, 1.485729925734, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.206272925552e+04, -2.392582362911e+04, 3.612066680667e+04], [1.261238797599e+00, -1.672018558678e-01, 1.031478938786e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.206272925552e4, -2.392582362911e4, 3.612066680667e4],
            [1.261238797599, -1.672018558678e-1, 1.031478938786],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191102274735e4, TOL));
    ok(isequalRel(a, 2.64970440174e4, TOL));
    ok(isequalRel(ecc, 7.419415750629e-1, TOL));
    ok(isequalRel(incl, 1.084655150183, TOL));
    ok(isequalRel(omega, 3.452542936051, TOL));
    ok(isequalRel(argp, 4.416345942461, TOL));
    ok(isequalRel(nu, 3.006257125092, TOL));
    ok(isequalRel(m, 2.539590123051, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.024961369658e+03, -2.255156626703e+04, 3.945850085787e+04], [1.475816889364e+00, 5.376157637619e-01, -1.148874718034e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.024961369658e3, -2.255156626703e4, 3.945850085787e4],
            [1.475816889364, 5.376157637619e-1, -1.148874718034e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.190995804259e4, TOL));
    ok(isequalRel(a, 2.649707621951e4, TOL));
    ok(isequalRel(ecc, 7.419690216489e-1, TOL));
    ok(isequalRel(incl, 1.084627533314, TOL));
    ok(isequalRel(omega, 3.452270240577, TOL));
    ok(isequalRel(argp, 4.416455267793, TOL));
    ok(isequalRel(nu, 3.242368909528, TOL));
    ok(isequalRel(m, 3.593336307449, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.379809162036e+03, -1.612395878459e+04, 3.389475123231e+04], [1.337468253958e+00, 1.268432782853e+00, -1.512473301062e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.379809162036e3, -1.612395878459e4, 3.389475123231e4],
            [1.337468253958, 1.268432782853, -1.512473301062],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191050570391e4, TOL));
    ok(isequalRel(a, 2.649646352778e4, TOL));
    ok(isequalRel(ecc, 7.419480886518e-1, TOL));
    ok(isequalRel(incl, 1.084620371934, TOL));
    ok(isequalRel(omega, 3.451980249192, TOL));
    ok(isequalRel(argp, 4.416584851835, TOL));
    ok(isequalRel(nu, 3.51690840558, TOL));
    ok(isequalRel(m, 4.647037629019, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.452786748873e+04, -3.646338171202e+03, 1.496074306518e+04], [-1.800358394778e-01, 2.261273514931e+00, -4.179355590360e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.452786748873e4, -3.646338171202e3, 1.496074306518e4],
            [-1.800358394778e-1, 2.261273514931, -4.17935559036],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191390549693e4, TOL));
    ok(isequalRel(a, 2.649579318949e4, TOL));
    ok(isequalRel(ecc, 7.41853947363e-1, TOL));
    ok(isequalRel(incl, 1.084687529443, TOL));
    ok(isequalRel(omega, 3.451661673727, TOL));
    ok(isequalRel(argp, 4.416585380864, TOL));
    ok(isequalRel(nu, 4.082099274567, TOL));
    ok(isequalRel(m, 5.700862798318, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.668012147335e+04, -7.149808004251e+03, 3.257642272081e+03], [-2.178897351030e+00, -2.863927094807e+00, 3.904876942823e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.668012147335e4, -7.149808004251e3, 3.257642272081e3],
            [-2.17889735103, -2.863927094807, 3.904876942823],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191679316486e4, TOL));
    ok(isequalRel(a, 2.65041079557e4, TOL));
    ok(isequalRel(ecc, 7.418755898522e-1, TOL));
    ok(isequalRel(incl, 1.084801706304, TOL));
    ok(isequalRel(omega, 3.451577374571, TOL));
    ok(isequalRel(argp, 4.416618965915, TOL));
    ok(isequalRel(nu, 2.067738535875, TOL));
    ok(isequalRel(m, 4.7151686647e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.901358793448e+04, -1.995893766022e+04, 2.500381778666e+04], [6.341004308335e-01, -1.027559822779e+00, 2.218002684850e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.901358793448e4, -1.995893766022e4, 2.500381778666e4],
            [6.341004308335e-1, -1.027559822779, 2.21800268485],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191328997614e4, TOL));
    ok(isequalRel(a, 2.649715449517e4, TOL));
    ok(isequalRel(ecc, 7.418851730991e-1, TOL));
    ok(isequalRel(incl, 1.084697520547, TOL));
    ok(isequalRel(omega, 3.451410963853, TOL));
    ok(isequalRel(argp, 4.416413665989, TOL));
    ok(isequalRel(nu, 2.729884161534, TOL));
    ok(isequalRel(m, 1.525656676188, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.174576155818e+04, -2.395119438627e+04, 3.639787676581e+04], [1.275261812541e+00, -1.404251324752e-01, 9.882594409508e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.174576155818e4, -2.395119438627e4, 3.639787676581e4],
            [1.275261812541, -1.404251324752e-1, 9.882594409508e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191095328873e4, TOL));
    ok(isequalRel(a, 2.649717748621e4, TOL));
    ok(isequalRel(ecc, 7.419448675302e-1, TOL));
    ok(isequalRel(incl, 1.084647766612, TOL));
    ok(isequalRel(omega, 3.451153627365, TOL));
    ok(isequalRel(argp, 4.416450237856, TOL));
    ok(isequalRel(nu, 3.015515314817, TOL));
    ok(isequalRel(m, 2.579502785323, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.648819450702e+03, -2.239850594576e+04, 3.942183273890e+04], [1.478660173878e+00, 5.616715190740e-01, -1.607330927066e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.648819450702e3, -2.239850594576e4, 3.94218327389e4],
            [1.478660173878, 5.61671519074e-1, -1.607330927066e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.190994290884e4, TOL));
    ok(isequalRel(a, 2.649719544199e4, TOL));
    ok(isequalRel(ecc, 7.419707694028e-1, TOL));
    ok(isequalRel(incl, 1.084621410244, TOL));
    ok(isequalRel(omega, 3.450880772609, TOL));
    ok(isequalRel(argp, 4.416561133974, TOL));
    ok(isequalRel(nu, 3.251467701041, TOL));
    ok(isequalRel(m, 3.63323830275, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.723976527952e+03, -1.578499406275e+04, 3.347335215527e+04], [1.322433592992e+00, 1.297602496744e+00, -1.578055492520e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.723976527952e3, -1.578499406275e4, 3.347335215527e4],
            [1.322433592992, 1.297602496744, -1.57805549252],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191056459832e4, TOL));
    ok(isequalRel(a, 2.649654607185e4, TOL));
    ok(isequalRel(ecc, 7.419475344599e-1, TOL));
    ok(isequalRel(incl, 1.084615892444, TOL));
    ok(isequalRel(omega, 3.45059022451, TOL));
    ok(isequalRel(argp, 4.416690095914, TOL));
    ok(isequalRel(nu, 3.529749790986, TOL));
    ok(isequalRel(m, 4.686931561882, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.445225571587e+04, -3.043423326450e+03, 1.379684870805e+04], [-3.551901693436e-01, 2.302485443236e+00, -4.355767076879e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.445225571587e4, -3.04342332645e3, 1.379684870805e4],
            [-3.551901693436e-1, 2.302485443236, -4.355767076879],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191415678362e4, TOL));
    ok(isequalRel(a, 2.649622209854e4, TOL));
    ok(isequalRel(ecc, 7.41852461159e-1, TOL));
    ok(isequalRel(incl, 1.084691396031, TOL));
    ok(isequalRel(omega, 3.450272530511, TOL));
    ok(isequalRel(argp, 4.416672198999, TOL));
    ok(isequalRel(nu, 4.125998165449, TOL));
    ok(isequalRel(m, 5.740767723337, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.724631075678e+04, -7.890726015081e+03, 4.315394103066e+03], [-1.910968457683e+00, -2.740945671846e+00, 3.844722725601e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.724631075678e4, -7.890726015081e3, 4.315394103066e3],
            [-1.910968457683, -2.740945671846, 3.844722725601],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.191665765654e4, TOL));
    ok(isequalRel(a, 2.65032339907e4, TOL));
    ok(isequalRel(ecc, 7.418690431082e-1, TOL));
    ok(isequalRel(incl, 1.08479348145, TOL));
    ok(isequalRel(omega, 3.450201078657, TOL));
    ok(isequalRel(argp, 4.416702553563, TOL));
    ok(isequalRel(nu, 2.120113766971, TOL));
    ok(isequalRel(m, 5.114211265811e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 22312
});

test("[3.061047845321e+02, -5.816456555246e+03, -2.979558460681e+03], [3.950663854595e+00, 3.415332542537e+00, -5.879974328913e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.061047845321e2, -5.816456555246e3, -2.979558460681e3],
            [3.950663854595, 3.415332542537, -5.879974328913],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.637964620826e3, TOL));
    ok(isequalRel(a, 6.642718545896e3, TOL));
    ok(isequalRel(ecc, 2.675181425237e-2, TOL));
    ok(isequalRel(incl, 1.084843187654, TOL));
    ok(isequalRel(omega, 1.349770040946, TOL));
    ok(isequalRel(argp, 4.675662571998, TOL));
    ok(isequalRel(nu, 5.290184034854, TOL));
    ok(isequalRel(m, 5.33451225834, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.282820854640e+03, 2.077469729049e+03, -5.189179887704e+03], [9.734270093810e-02, 7.375135691837e+00, 2.900196701780e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.28282085464e3, 2.077469729049e3, -5.189179887704e3],
            [9.73427009381e-2, 7.375135691837, 2.90019670178],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.620882010942e3, TOL));
    ok(isequalRel(a, 6.624825592803e3, TOL));
    ok(isequalRel(ecc, 2.439822350749e-2, TOL));
    ok(isequalRel(incl, 1.084498821997, TOL));
    ok(isequalRel(omega, 1.34820674149, TOL));
    ok(isequalRel(argp, 4.647676853039, TOL));
    ok(isequalRel(nu, 5.029815553106e-1, TOL));
    ok(isequalRel(m, 4.798320824675e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.308272917598e+02, 6.426207900027e+03, 1.712370767934e+03], [-3.837120394519e+00, -1.252430636871e+00, 6.561602576910e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.308272917598e2, 6.426207900027e3, 1.712370767934e3],
            [-3.837120394519, -1.252430636871, 6.56160257691],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.623690629104e3, TOL));
    ok(isequalRel(a, 6.627308250741e3, TOL));
    ok(isequalRel(ecc, 2.336377341457e-2, TOL));
    ok(isequalRel(incl, 1.084956775709, TOL));
    ok(isequalRel(omega, 1.347684495547, TOL));
    ok(isequalRel(argp, 4.694516590948, TOL));
    ok(isequalRel(nu, 1.883160080065, TOL));
    ok(isequalRel(m, 1.838456779477, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.191691702120e+03, 1.702721991216e+02, 5.956298077747e+03], [-1.394956871507e+00, -7.438073470735e+00, -5.575531150954e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.19169170212e3, 1.702721991216e2, 5.956298077747e3],
            [-1.394956871507, -7.438073470735, -5.575531150954e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.600806236802e3, TOL));
    ok(isequalRel(a, 6.604498623235e3, TOL));
    ok(isequalRel(ecc, 2.364469118874e-2, TOL));
    ok(isequalRel(incl, 1.084389339721, TOL));
    ok(isequalRel(omega, 1.346439270272, TOL));
    ok(isequalRel(argp, 4.683913055327, TOL));
    ok(isequalRel(nu, 3.250644890537, TOL));
    ok(isequalRel(m, 3.255883862338, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.818992224649e+03, -6.322451466164e+03, 6.819524715393e+02], [3.349795172805e+00, -1.530140265238e+00, -6.831522764535e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.818992224649e3, -6.322451466164e3, 6.819524715393e2],
            [3.349795172805, -1.530140265238, -6.831522764535],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.607684084093e3, TOL));
    ok(isequalRel(a, 6.610600269038e3, TOL));
    ok(isequalRel(ecc, 2.100327812399e-2, TOL));
    ok(isequalRel(incl, 1.085002392522, TOL));
    ok(isequalRel(omega, 1.345416579958, TOL));
    ok(isequalRel(argp, 4.642201430874, TOL));
    ok(isequalRel(nu, 4.665716463652, TOL));
    ok(isequalRel(m, 4.707705053138, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.515664486339e+03, -2.158830912240e+03, -5.552133205438e+03], [2.571979660072e+00, 7.311930508595e+00, -1.639865619678e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.515664486339e3, -2.15883091224e3, -5.552133205438e3],
            [2.571979660072, 7.311930508595, -1.639865619678],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.584644865859e3, TOL));
    ok(isequalRel(a, 6.586959567387e3, TOL));
    ok(isequalRel(ecc, 1.874584407606e-2, TOL));
    ok(isequalRel(incl, 1.084419267218, TOL));
    ok(isequalRel(omega, 1.344660998734, TOL));
    ok(isequalRel(argp, 4.696749827132, TOL));
    ok(isequalRel(nu, 6.058390627524, TOL));
    ok(isequalRel(m, 6.06663456746, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.414528332105e+03, 5.749101509221e+03, -1.998596931649e+03], [-2.681032960105e+00, 3.527589300630e+00, 6.452951428507e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.414528332105e3, 5.749101509221e3, -1.998596931649e3],
            [-2.681032960105, 3.52758930063, 6.452951428507],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.588849139687e3, TOL));
    ok(isequalRel(a, 6.591210604966e3, TOL));
    ok(isequalRel(ecc, 1.892815082464e-2, TOL));
    ok(isequalRel(incl, 1.08493750903, TOL));
    ok(isequalRel(omega, 1.343259504785, TOL));
    ok(isequalRel(argp, 4.69570380968, TOL));
    ok(isequalRel(nu, 1.23506538467, TOL));
    ok(isequalRel(m, 1.1994909787, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.877989443311e+03, 3.862278483018e+03, 5.112484358627e+03], [-3.261489804108e+00, -6.026859137476e+00, 3.433254767552e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.877989443311e3, 3.862278483018e3, 5.112484358627e3],
            [-3.261489804108, -6.026859137476, 3.433254767552],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.570232276816e3, TOL));
    ok(isequalRel(a, 6.572299908505e3, TOL));
    ok(isequalRel(ecc, 1.773690758731e-2, TOL));
    ok(isequalRel(incl, 1.084539761355, TOL));
    ok(isequalRel(omega, 1.342788335795, TOL));
    ok(isequalRel(argp, 4.637543173778, TOL));
    ok(isequalRel(nu, 2.692951932245, TOL));
    ok(isequalRel(m, 2.677379214425, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.117365843953e+03, -4.419747738641e+03, 3.840859609123e+03], [1.545479181810e+00, -5.475416581198e+00, -5.207913748470e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.117365843953e3, -4.419747738641e3, 3.840859609123e3],
            [1.54547918181, -5.475416581198, -5.20791374847],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.56667509183e3, TOL));
    ok(isequalRel(a, 6.568290656528e3, TOL));
    ok(isequalRel(ecc, 1.568324749544e-2, TOL));
    ok(isequalRel(incl, 1.084742711549, TOL));
    ok(isequalRel(omega, 1.341109207553, TOL));
    ok(isequalRel(argp, 4.696904023607, TOL));
    ok(isequalRel(nu, 4.01389669636, TOL));
    ok(isequalRel(m, 4.038099895934, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.153203467830e+02, -5.231676922491e+03, -3.760046903535e+03], [3.870864200432e+00, 4.455588551932e+00, -5.211082190603e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.15320346783e2, -5.231676922491e3, -3.760046903535e3],
            [3.870864200432, 4.455588551932, -5.211082190603],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.55807447701e3, TOL));
    ok(isequalRel(a, 6.559514691766e3, TOL));
    ok(isequalRel(ecc, 1.481759681755e-2, TOL));
    ok(isequalRel(incl, 1.084742837272, TOL));
    ok(isequalRel(omega, 1.340798609458, TOL));
    ok(isequalRel(argp, 4.698883389245, TOL));
    ok(isequalRel(nu, 5.439861002541, TOL));
    ok(isequalRel(m, 5.461831330983, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.269543418101e+03, 3.029000810825e+03, -4.704679697131e+03], [-5.267113448095e-01, 6.812157949700e+00, 3.929825087305e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.269543418101e3, 3.029000810825e3, -4.704679697131e3],
            [-5.267113448095e-1, 6.8121579497, 3.929825087305],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.545540045688e3, TOL));
    ok(isequalRel(a, 6.546655266097e3, TOL));
    ok(isequalRel(ecc, 1.305180624613e-2, TOL));
    ok(isequalRel(incl, 1.084586777664, TOL));
    ok(isequalRel(omega, 1.339081224197, TOL));
    ok(isequalRel(argp, 4.623509496744, TOL));
    ok(isequalRel(nu, 6.96309747098e-1, TOL));
    ok(isequalRel(m, 6.796922298301e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.018099755532e+01, 6.026233414534e+03, 2.643505184071e+03], [-3.953623254352e+00, -2.616070011952e+00, 6.145637499655e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.018099755532e1, 6.026233414534e3, 2.643505184071e3],
            [-3.953623254352, -2.616070011952, 6.145637499655],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.544170760288e3, TOL));
    ok(isequalRel(a, 6.545045006933e3, TOL));
    ok(isequalRel(ecc, 1.155741395162e-2, TOL));
    ok(isequalRel(incl, 1.084885014732, TOL));
    ok(isequalRel(omega, 1.338681248973, TOL));
    ok(isequalRel(argp, 4.6851352724, TOL));
    ok(isequalRel(nu, 2.069636245312, TOL));
    ok(isequalRel(m, 2.04925409905, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.320588195837e+03, -1.248426799446e+03, 5.563060179268e+03], [-6.370469743005e-01, -7.417786043641e+00, -2.076120187110e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.320588195837e3, -1.248426799446e3, 5.563060179268e3],
            [-6.370469743005e-1, -7.417786043641, -2.07612018711],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.524295718729e3, TOL));
    ok(isequalRel(a, 6.525182136918e3, TOL));
    ok(isequalRel(ecc, 1.165528802335e-2, TOL));
    ok(isequalRel(incl, 1.084435599262, TOL));
    ok(isequalRel(omega, 1.337147765601, TOL));
    ok(isequalRel(argp, 4.724636846516, TOL));
    ok(isequalRel(nu, 3.434663530073, TOL));
    ok(isequalRel(m, 3.441454572335, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.025489746164e+03, -6.366989457818e+03, -9.112355915263e+02], [3.811771908909e+00, 4.380714897433e-01, -6.829260617052e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.025489746164e3, -6.366989457818e3, -9.112355915263e2],
            [3.811771908909, 4.380714897433e-1, -6.829260617052],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.529625338931e3, TOL));
    ok(isequalRel(a, 6.530236478901e3, TOL));
    ok(isequalRel(ecc, 9.67399570175e-3, TOL));
    ok(isequalRel(incl, 1.085002382761, TOL));
    ok(isequalRel(omega, 1.336430018245, TOL));
    ok(isequalRel(argp, 4.605969499667, TOL));
    ok(isequalRel(nu, 4.977688537268, TOL));
    ok(isequalRel(m, 4.996323889873, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.003759961276e+03, -4.138570800321e+02, -5.706155914353e+03], [1.674350083380e+00, 7.694169068130e+00, 3.169152040347e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.003759961276e3, -4.138570800321e2, -5.706155914353e3],
            [1.67435008338, 7.69416906813, 3.169152040347e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.505507794891e3, TOL));
    ok(isequalRel(a, 6.505809714075e3, TOL));
    ok(isequalRel(ecc, 6.812314294138e-3, TOL));
    ok(isequalRel(incl, 1.084377457549, TOL));
    ok(isequalRel(omega, 1.335239965523, TOL));
    ok(isequalRel(argp, 4.65192672108, TOL));
    ok(isequalRel(nu, 1.066893958335e-1, TOL));
    ok(isequalRel(m, 1.052458861213e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.731428169801e+03, 6.258276769247e+03, -4.093252798221e+02], [-3.400497805702e+00, 1.447945424057e+00, 6.904010051792e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.731428169801e3, 6.258276769247e3, -4.093252798221e2],
            [-3.400497805702, 1.447945424057, 6.904010051792],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.512449647075e3, TOL));
    ok(isequalRel(a, 6.512759851817e3, TOL));
    ok(isequalRel(ecc, 6.901471261849e-3, TOL));
    ok(isequalRel(incl, 1.085016908669, TOL));
    ok(isequalRel(omega, 1.334174076176, TOL));
    ok(isequalRel(argp, 4.779472392617, TOL));
    ok(isequalRel(nu, 1.43250979715, TOL));
    ok(isequalRel(m, 1.418848477048, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.582521114602e+03, 2.024190206799e+03, 5.647556502679e+03], [-2.530348120669e+00, -7.221719392625e+00, 1.438141552585e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.582521114602e3, 2.024190206799e3, 5.647556502679e3],
            [-2.530348120669, -7.221719392625, 1.438141552585],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.488514798285e3, TOL));
    ok(isequalRel(a, 6.488800677429e3, TOL));
    ok(isequalRel(ecc, 6.637568551695e-3, TOL));
    ok(isequalRel(incl, 1.084402368904, TOL));
    ok(isequalRel(omega, 1.333322496979, TOL));
    ok(isequalRel(argp, 4.616291918958, TOL));
    ok(isequalRel(nu, 3.027959831728, TOL));
    ok(isequalRel(m, 3.026447106884, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.440568485779e+03, -5.702773118774e+03, 1.934810946889e+03], [2.731792946601e+00, -3.350576075382e+00, -6.527773338653e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.440568485779e3, -5.702773118774e3, 1.934810946889e3],
            [2.731792946601, -3.350576075382, -6.527773338653],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.49316491313e3, TOL));
    ok(isequalRel(a, 6.493258246795e3, TOL));
    ok(isequalRel(ecc, 3.791297143854e-3, TOL));
    ok(isequalRel(incl, 1.084948379071, TOL));
    ok(isequalRel(omega, 1.331884152721, TOL));
    ok(isequalRel(argp, 4.55849263567, TOL));
    ok(isequalRel(nu, 4.522842999589, TOL));
    ok(isequalRel(m, 4.530293762977, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.951229343914e+03, -3.423594430447e+03, -5.121678082006e+03], [3.249039132643e+00, 6.465974362321e+00, -3.069806658892e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.951229343914e3, -3.423594430447e3, -5.121678082006e3],
            [3.249039132643, 6.465974362321, -3.069806658892],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.473367283841e3, TOL));
    ok(isequalRel(a, 6.473400699733e3, TOL));
    ok(isequalRel(ecc, 2.272010245208e-3, TOL));
    ok(isequalRel(incl, 1.084500196896, TOL));
    ok(isequalRel(omega, 1.331347365224, TOL));
    ok(isequalRel(argp, 4.958734434718, TOL));
    ok(isequalRel(nu, 5.577829006748, TOL));
    ok(isequalRel(m, 5.580771099954, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.886509393556e+03, 4.888686262157e+03, -3.096298859890e+03], [-1.973162138508e+00, 4.877039020188e+00, 5.832414910422e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.886509393556e3, 4.888686262157e3, -3.09629885989e3],
            [-1.973162138508, 4.877039020188, 5.832414910422],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.47266972302e3, TOL));
    ok(isequalRel(a, 6.472694635611e3, TOL));
    ok(isequalRel(ecc, 1.961854943427e-3, TOL));
    ok(isequalRel(incl, 1.084832477978, TOL));
    ok(isequalRel(omega, 1.32965354999, TOL));
    ok(isequalRel(argp, 4.629754337897, TOL));
    ok(isequalRel(nu, 1.081212776615, TOL));
    ok(isequalRel(m, 1.077752386014, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.276555321818e+03, 4.553268984633e+03, 4.406197873753e+03], [-3.715146421403e+00, -5.320176914386e+00, 4.418210777087e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.276555321818e3, 4.553268984633e3, 4.406197873753e3],
            [-3.715146421403, -5.320176914386, 4.418210777087],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.459008267508e3, TOL));
    ok(isequalRel(a, 6.459011841728e3, TOL));
    ok(isequalRel(ecc, 7.438880868106e-4, TOL));
    ok(isequalRel(incl, 1.084635860662, TOL));
    ok(isequalRel(omega, 1.329281723648, TOL));
    ok(isequalRel(argp, 3.639633780772, TOL));
    ok(isequalRel(nu, 3.524034448127, TOL));
    ok(isequalRel(m, 3.52458995432, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.181546980418e+03, -3.831299765064e+03, 4.096802427872e+03], [1.114159969833e+00, -6.104773577810e+00, -4.829967400236e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.181546980418e3, -3.831299765064e3, 4.096802427872e3],
            [1.114159969833, -6.10477357781, -4.829967400236],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.451401171948e3, TOL));
    ok(isequalRel(a, 6.45141052967e3, TOL));
    ok(isequalRel(ecc, 1.204363911379e-3, TOL));
    ok(isequalRel(incl, 1.084686968965, TOL));
    ok(isequalRel(omega, 1.327472968941, TOL));
    ok(isequalRel(argp, 1.133310168534, TOL));
    ok(isequalRel(nu, 1.20658930956, TOL));
    ok(isequalRel(m, 1.204339303021, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // *** error: t:= 494.202867 *** code =   1
    // 22674
});

test("[2.541888807860e+04, 9.342603079886e+03, 2.361146690798e+04], [5.128408585237e-02, 1.213127306022e+00, 2.429004158884e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.54188880786e4, 9.342603079886e3, 2.361146690798e4],
            [5.128408585237e-2, 1.213127306022, 2.429004158884],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159320085067e4, TOL));
    ok(isequalRel(a, 2.690745808507e4, TOL));
    ok(isequalRel(ecc, 7.54417289084e-1, TOL));
    ok(isequalRel(incl, 1.107865977065, TOL));
    ok(isequalRel(omega, 6.185196371801, TOL));
    ok(isequalRel(argp, 4.42248058598, TOL));
    ok(isequalRel(nu, 2.685592796046, TOL));
    ok(isequalRel(m, 1.355519116917, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.161959550749e+04, 1.612524978864e+04, 3.639679365831e+04], [-9.636043798930e-01, 6.854549653297e-01, 1.177181936797e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.161959550749e4, 1.612524978864e4, 3.639679365831e4],
            [-9.63604379893e-1, 6.854549653297e-1, 1.177181936797],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159087538788e4, TOL));
    ok(isequalRel(a, 2.690732533602e4, TOL));
    ok(isequalRel(ecc, 7.544731574519e-1, TOL));
    ok(isequalRel(incl, 1.107809333542, TOL));
    ok(isequalRel(omega, 6.184927355524, TOL));
    ok(isequalRel(argp, 4.422497485664, TOL));
    ok(isequalRel(nu, 2.975858362533, TOL));
    ok(isequalRel(m, 2.38534591459, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.272150543331e+04, 1.925896193362e+04, 4.089847648359e+04], [-1.457448564647e+00, 1.799554689286e-01, 7.150260130699e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.272150543331e4, 1.925896193362e4, 4.089847648359e4],
            [-1.457448564647, 1.799554689286e-1, 7.150260130699e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.15898784801e4, TOL));
    ok(isequalRel(a, 2.690738772024e4, TOL));
    ok(isequalRel(ecc, 7.544983721924e-1, TOL));
    ok(isequalRel(incl, 1.107777497726, TOL));
    ok(isequalRel(omega, 6.184643474929, TOL));
    ok(isequalRel(argp, 4.422595024892, TOL));
    ok(isequalRel(nu, 3.200101244478, TOL));
    ok(isequalRel(m, 3.415058858959, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.272807600538e+03, 1.845841971897e+04, 3.704474742696e+04], [-1.674863385527e+00, -4.364549830031e-01, -1.201040990250e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.272807600538e3, 1.845841971897e4, 3.704474742696e4],
            [-1.674863385527, -4.364549830031e-1, -1.20104099025],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159040235013e4, TOL));
    ok(isequalRel(a, 2.69069290576e4, TOL));
    ok(isequalRel(ecc, 7.544806038316e-1, TOL));
    ok(isequalRel(incl, 1.107763173189, TOL));
    ok(isequalRel(omega, 6.184345657828, TOL));
    ok(isequalRel(argp, 4.422717736465, TOL));
    ok(isequalRel(nu, 3.444664010443, TOL));
    ok(isequalRel(m, 4.444723368166, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.005843188619e+04, 1.190660764454e+04, 2.173962097733e+04], [-1.245829682640e+00, -1.543789125451e+00, -3.324449220718e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.005843188619e4, 1.190660764454e4, 2.173962097733e4],
            [-1.24582968264, -1.543789125451, -3.324449220718],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.1593259093e4, TOL));
    ok(isequalRel(a, 2.690553227972e4, TOL));
    ok(isequalRel(ecc, 7.54395415075e-1, TOL));
    ok(isequalRel(incl, 1.107793530627, TOL));
    ok(isequalRel(omega, 6.184019545195, TOL));
    ok(isequalRel(argp, 4.422779532513, TOL));
    ok(isequalRel(nu, 3.86270826535, TOL));
    ok(isequalRel(m, 5.474435995996, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.092440116466e+04, -2.571924141697e+03, -2.956348562941e+03], [6.071727751453e+00, 1.349579101948e+00, 3.898430260132e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.092440116466e4, -2.571924141697e3, -2.956348562941e3],
            [6.071727751453, 1.349579101948, 3.898430260132],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159808286769e4, TOL));
    ok(isequalRel(a, 2.692487427916e4, TOL));
    ok(isequalRel(ecc, 7.544818233776e-1, TOL));
    ok(isequalRel(incl, 1.107935750947, TOL));
    ok(isequalRel(omega, 6.183797563975, TOL));
    ok(isequalRel(argp, 4.422819239296, TOL));
    ok(isequalRel(nu, 1.571691104696, TOL));
    ok(isequalRel(m, 2.210030004631e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.533214851525e+04, 8.398910999243e+03, 2.178390654357e+04], [2.223207536625e-01, 1.272214305745e+00, 2.580527192026e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.533214851525e4, 8.398910999243e3, 2.178390654357e4],
            [2.223207536625e-1, 1.272214305745, 2.580527192026],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159508517672e4, TOL));
    ok(isequalRel(a, 2.690741558523e4, TOL));
    ok(isequalRel(ecc, 7.543704233005e-1, TOL));
    ok(isequalRel(incl, 1.10784983049, TOL));
    ok(isequalRel(omega, 6.183721934672, TOL));
    ok(isequalRel(argp, 4.422566259801, TOL));
    ok(isequalRel(nu, 2.645476966811, TOL));
    ok(isequalRel(m, 1.25115723835, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.231771926039e+04, 1.557482086129e+04, 3.549577144092e+04], [-8.927500564006e-01, 7.373833814583e-01, 1.291738834447e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.231771926039e4, 1.557482086129e4, 3.549577144092e4],
            [-8.927500564006e-1, 7.373833814583e-1, 1.291738834447],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159265209963e4, TOL));
    ok(isequalRel(a, 2.690713671758e4, TOL));
    ok(isequalRel(ecc, 7.544273950354e-1, TOL));
    ok(isequalRel(incl, 1.107789759652, TOL));
    ok(isequalRel(omega, 6.183457113091, TOL));
    ok(isequalRel(argp, 4.422566989753, TOL));
    ok(isequalRel(nu, 2.951373432026, TOL));
    ok(isequalRel(m, 2.281015266753, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.379568675885e+04, 1.908883051008e+04, 4.080369584385e+04], [-1.420277668718e+00, 2.355994561611e-01, 1.855170558402e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.379568675885e4, 1.908883051008e4, 4.080369584385e4],
            [-1.420277668718, 2.355994561611e-1, 1.855170558402e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159154186654e4, TOL));
    ok(isequalRel(a, 2.690722182615e4, TOL));
    ok(isequalRel(ecc, 7.544556439375e-1, TOL));
    ok(isequalRel(incl, 1.107756670162, TOL));
    ok(isequalRel(omega, 6.183175785984, TOL));
    ok(isequalRel(argp, 4.42265732365, TOL));
    ok(isequalRel(nu, 3.177710326905, TOL));
    ok(isequalRel(m, 3.310749209521, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.515171450487e+03, 1.874663776282e+04, 3.786458088636e+04], [-1.668016052819e+00, -3.604314584858e-01, -1.052854595701e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.515171450487e3, 1.874663776282e4, 3.786458088636e4],
            [-1.668016052819, -3.604314584858e-1, -1.052854595701],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159191509913e4, TOL));
    ok(isequalRel(a, 2.690683684953e4, TOL));
    ok(isequalRel(ecc, 7.544423660167e-1, TOL));
    ok(isequalRel(incl, 1.107740868247, TOL));
    ok(isequalRel(omega, 6.1828812496, TOL));
    ok(isequalRel(argp, 4.422777445189, TOL));
    ok(isequalRel(nu, 3.416429814041, TOL));
    ok(isequalRel(m, 4.340429491937, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.084486021062e+03, 1.298262608646e+04, 2.404563900249e+04], [-1.378032362870e+00, -1.373184736469e+00, -3.013963835302e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.084486021062e3, 1.298262608646e4, 2.404563900249e4],
            [-1.37803236287, -1.373184736469, -3.013963835302],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159446666677e4, TOL));
    ok(isequalRel(a, 2.69054680518e4, TOL));
    ok(isequalRel(ecc, 7.543649856597e-1, TOL));
    ok(isequalRel(incl, 1.107762749508, TOL));
    ok(isequalRel(omega, 6.182560237012, TOL));
    ok(isequalRel(argp, 4.422854220659, TOL));
    ok(isequalRel(nu, 3.798493751187, TOL));
    ok(isequalRel(m, 5.370138822445, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.647009094950e+03, -3.293905186928e+03, -5.425852350631e+03], [8.507977175552e+00, 4.145607966602e-01, 2.543322805760e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.64700909495e3, -3.293905186928e3, -5.425852350631e3],
            [8.507977175552, 4.145607966602e-1, 2.54332280576],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159787118062e4, TOL));
    ok(isequalRel(a, 2.691641974626e4, TOL));
    ok(isequalRel(ecc, 7.543973649324e-1, TOL));
    ok(isequalRel(incl, 1.107830400932, TOL));
    ok(isequalRel(omega, 6.182280124794, TOL));
    ok(isequalRel(argp, 4.422717417256, TOL));
    ok(isequalRel(nu, 1.06557063684, TOL));
    ok(isequalRel(m, 1.168666772008e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.511163372210e+04, 7.412551094883e+03, 1.984425781729e+04], [4.164962896993e-01, 1.332106005655e+00, 2.739301737209e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.51116337221e4, 7.412551094883e3, 1.984425781729e4],
            [4.164962896993e-1, 1.332106005655, 2.739301737209],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159711144998e4, TOL));
    ok(isequalRel(a, 2.690741521945e4, TOL));
    ok(isequalRel(ecc, 7.543205050293e-1, TOL));
    ok(isequalRel(incl, 1.10783773407, TOL));
    ok(isequalRel(omega, 6.182255329349, TOL));
    ok(isequalRel(argp, 4.422641678516, TOL));
    ok(isequalRel(nu, 2.601631683239, TOL));
    ok(isequalRel(m, 1.146871579335, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.296147461641e+04, 1.498574459578e+04, 3.451109257381e+04], [-8.167110480218e-01, 7.893911075507e-01, 1.407901804256e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.296147461641e4, 1.498574459578e4, 3.451109257381e4],
            [-8.167110480218e-1, 7.893911075507e-1, 1.407901804256],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.15945581805e4, TOL));
    ok(isequalRel(a, 2.690693209782e4, TOL));
    ok(isequalRel(ecc, 7.54378272617e-1, TOL));
    ok(isequalRel(incl, 1.107773752166, TOL));
    ok(isequalRel(omega, 6.181995515785, TOL));
    ok(isequalRel(argp, 4.422624170334, TOL));
    ok(isequalRel(nu, 2.926221972581, TOL));
    ok(isequalRel(m, 2.176764093643, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.484115301459e+04, 1.887691439870e+04, 4.062625901619e+04], [-1.380403340809e+00, 2.902288098752e-01, 2.982581201764e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.484115301459e4, 1.88769143987e4, 4.062625901619e4],
            [-1.380403340809, 2.902288098752e-1, 2.982581201764e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159332438363e4, TOL));
    ok(isequalRel(a, 2.690703434251e4, TOL));
    ok(isequalRel(ecc, 7.544097492072e-1, TOL));
    ok(isequalRel(incl, 1.107739315699, TOL));
    ok(isequalRel(omega, 6.181716914276, TOL));
    ok(isequalRel(argp, 4.422706632256, TOL));
    ok(isequalRel(nu, 3.155441928149, TOL));
    ok(isequalRel(m, 3.206520759535, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.750701740805e+03, 1.897857939698e+04, 3.857811783220e+04], [-1.656939412449e+00, -2.879308805679e-01, -9.108255985567e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.750701740805e3, 1.897857939698e4, 3.85781178322e4],
            [-1.656939412449, -2.879308805679e-1, -9.108255985567e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159354120371e4, TOL));
    ok(isequalRel(a, 2.690671693868e4, TOL));
    ok(isequalRel(ecc, 7.544010397628e-1, TOL));
    ok(isequalRel(incl, 1.10772215828, TOL));
    ok(isequalRel(omega, 6.181425673942, TOL));
    ok(isequalRel(argp, 4.422823480026, TOL));
    ok(isequalRel(nu, 3.389359534002, TOL));
    ok(isequalRel(m, 4.236218513604, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.027302194887e+03, 1.393954436955e+04, 2.613649045637e+04], [-1.474476060920e+00, -1.222693623774e+00, -2.737178731434e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.027302194887e3, 1.393954436955e4, 2.613649045637e4],
            [-1.47447606092, -1.222693623774, -2.737178731434],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159580832583e4, TOL));
    ok(isequalRel(a, 2.690543255995e4, TOL));
    ok(isequalRel(ecc, 7.543315566779e-1, TOL));
    ok(isequalRel(incl, 1.107737391772, TOL));
    ok(isequalRel(omega, 6.18110988569, TOL));
    ok(isequalRel(argp, 4.422910653316, TOL));
    ok(isequalRel(nu, 3.742567954597, TOL));
    ok(isequalRel(m, 5.265930365825, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.296956570925e+03, -2.813693697683e+03, -5.871095872577e+03], [9.881929371107e+00, -1.978467206547e+00, -1.922261005276e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.296956570925e3, -2.813693697683e3, -5.871095872577e3],
            [9.881929371107, -1.978467206547, -1.922261005276],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159675194246e4, TOL));
    ok(isequalRel(a, 2.688370020316e4, TOL));
    ok(isequalRel(ecc, 7.540773149328e-1, TOL));
    ok(isequalRel(incl, 1.107720670171, TOL));
    ok(isequalRel(omega, 6.180964253463, TOL));
    ok(isequalRel(argp, 4.422744450037, TOL));
    ok(isequalRel(nu, 1.379633086621e-1, TOL));
    ok(isequalRel(m, 1.273864704904e-2, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.473860364819e+04, 6.383416440188e+03, 1.778727631900e+04], [6.395569516125e-01, 1.392554379179e+00, 2.906206323925e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.473860364819e4, 6.383416440188e3, 1.7787276319e4],
            [6.395569516125e-1, 1.392554379179, 2.906206323925],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.15992091078e4, TOL));
    ok(isequalRel(a, 2.690748325404e4, TOL));
    ok(isequalRel(ecc, 7.542695512343e-1, TOL));
    ok(isequalRel(incl, 1.107829705307, TOL));
    ok(isequalRel(omega, 6.180797170612, TOL));
    ok(isequalRel(argp, 4.422706612708, TOL));
    ok(isequalRel(nu, 2.55314856253, TOL));
    ok(isequalRel(m, 1.042667920789, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.354685388669e+04, 1.435815602832e+04, 3.344167679479e+04], [-7.348950062910e-01, 8.415648514604e-01, 1.526009908521e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.354685388669e4, 1.435815602832e4, 3.344167679479e4],
            [-7.34895006291e-1, 8.415648514604e-1, 1.526009908521],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159652301462e4, TOL));
    ok(isequalRel(a, 2.690671416052e4, TOL));
    ok(isequalRel(ecc, 7.543275574825e-1, TOL));
    ok(isequalRel(incl, 1.10776122537, TOL));
    ok(isequalRel(omega, 6.180543332273, TOL));
    ok(isequalRel(argp, 4.422668510757, TOL));
    ok(isequalRel(nu, 2.900284963886, TOL));
    ok(isequalRel(m, 2.072598332621, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.585587696303e+04, 1.862405633582e+04, 4.036713420574e+04], [-1.337753546067e+00, 3.439695218582e-01, 4.100184716680e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.585587696303e4, 1.862405633582e4, 4.036713420574e4],
            [-1.337753546067, 3.439695218582e-1, 4.10018471668e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159515533885e4, TOL));
    ok(isequalRel(a, 2.69068271956e4, TOL));
    ok(isequalRel(ecc, 7.543624491072e-1, TOL));
    ok(isequalRel(incl, 1.10772530435, TOL));
    ok(isequalRel(omega, 6.180267568118, TOL));
    ok(isequalRel(argp, 4.422742503334, TOL));
    ok(isequalRel(nu, 3.133228268447, TOL));
    ok(isequalRel(m, 3.102379251274, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.976449335906e+03, 1.915675504042e+04, 3.918968603184e+04], [-1.642084364575e+00, -2.185250959665e-01, -7.741482036572e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.976449335906e3, 1.915675504042e4, 3.918968603184e4],
            [-1.642084364575, -2.185250959665e-1, -7.741482036572e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159520953352e4, TOL));
    ok(isequalRel(a, 2.690657177045e4, TOL));
    ok(isequalRel(ecc, 7.54358402577e-1, TOL));
    ok(isequalRel(incl, 1.107706856641, TOL));
    ok(isequalRel(omega, 6.179979576656, TOL));
    ok(isequalRel(argp, 4.422855552694, TOL));
    ok(isequalRel(nu, 3.363281180717, TOL));
    ok(isequalRel(m, 4.132095878009, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-6.909207462100e+03, 1.479044707042e+04, 2.803446732222e+04], [-1.545152609613e+00, -1.088119523356e+00, -2.487447213815e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-6.9092074621e3, 1.479044707042e4, 2.803446732222e4],
            [-1.545152609613, -1.088119523356, -2.487447213815],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159720615505e4, TOL));
    ok(isequalRel(a, 2.690539536101e4, TOL));
    ok(isequalRel(ecc, 7.54296724133e-1, TOL));
    ok(isequalRel(incl, 1.10771675398, TOL));
    ok(isequalRel(omega, 6.179668905637, TOL));
    ok(isequalRel(argp, 4.422949895116, TOL));
    ok(isequalRel(nu, 3.692964050534, TOL));
    ok(isequalRel(m, 5.161814529443, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-7.331650067070e+03, -6.041732341856e+02, -2.723510145754e+03], [6.168997264937e+00, -3.634011554138e+00, -5.963531681634e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-7.33165006707e3, -6.041732341856e2, -2.723510145754e3],
            [6.168997264937, -3.634011554138, -5.963531681634],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.160339534575e4, TOL));
    ok(isequalRel(a, 2.693312477518e4, TOL));
    ok(isequalRel(ecc, 7.544385527024e-1, TOL));
    ok(isequalRel(incl, 1.107867960141, TOL));
    ok(isequalRel(omega, 6.179561438505, TOL));
    ok(isequalRel(argp, 4.422677213102, TOL));
    ok(isequalRel(nu, 5.400593266884, TOL));
    ok(isequalRel(m, 6.191930050445, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 23177
});

test("[-1.684343528577e+03, -3.155595196340e+04, 3.888999443194e+03], [2.023055718619e+00, -2.151306405417e+00, 2.650657784926e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.684343528577e3, -3.15559519634e4, 3.888999443194e3],
            [2.023055718619, -2.151306405417, 2.650657784926e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159150604739e4, TOL));
    ok(isequalRel(a, 2.453355662756e4, TOL));
    ok(isequalRel(ecc, 7.263087733555e-1, TOL));
    ok(isequalRel(incl, 1.226214931208e-1, TOL));
    ok(isequalRel(omega, 3.141348919022, TOL));
    ok(isequalRel(argp, 5.163878911514, TOL));
    ok(isequalRel(nu, 2.637418480129, TOL));
    ok(isequalRel(m, 1.330791003283, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.232551410155e+04, -3.898215046244e+04, 4.802888322754e+03], [1.763224157190e+00, -1.025144461842e-01, 1.239713851147e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.232551410155e4, -3.898215046244e4, 4.802888322754e3],
            [1.76322415719, -1.025144461842e-1, 1.239713851147e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159419427396e4, TOL));
    ok(isequalRel(a, 2.453506374349e4, TOL));
    ok(isequalRel(ecc, 7.262533237763e-1, TOL));
    ok(isequalRel(incl, 1.226316297312e-1, TOL));
    ok(isequalRel(omega, 3.14049854965, TOL));
    ok(isequalRel(argp, 5.16520364123, TOL));
    ok(isequalRel(nu, 2.993942370793, TOL));
    ok(isequalRel(m, 2.513553063295, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.277366831936e+04, -3.434802176606e+04, 4.228774073906e+03], [1.067616787250e+00, 1.352427865481e+00, -1.669563673618e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.277366831936e4, -3.434802176606e4, 4.228774073906e3],
            [1.06761678725, 1.352427865481, -1.669563673618e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159408771664e4, TOL));
    ok(isequalRel(a, 2.45350912565e4, TOL));
    ok(isequalRel(ecc, 7.262566786379e-1, TOL));
    ok(isequalRel(incl, 1.226494036439e-1, TOL));
    ok(isequalRel(omega, 3.139727897237, TOL));
    ok(isequalRel(argp, 5.166395681062, TOL));
    ok(isequalRel(nu, 3.271456185468, TOL));
    ok(isequalRel(m, 3.696323676145, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.619440441089e+04, -1.948294203672e+04, 2.393847740627e+03], [-3.137321856817e-01, 2.808771328014e+00, -3.462041182091e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.619440441089e4, -1.948294203672e4, 2.393847740627e3],
            [-3.137321856817e-1, 2.808771328014, -3.462041182091e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159120401248e4, TOL));
    ok(isequalRel(a, 2.453375145032e4, TOL));
    ok(isequalRel(ecc, 7.263198311914e-1, TOL));
    ok(isequalRel(incl, 1.226747759565e-1, TOL));
    ok(isequalRel(omega, 3.139031353953, TOL));
    ok(isequalRel(argp, 5.167558152768, TOL));
    ok(isequalRel(nu, 3.616660347911, TOL));
    ok(isequalRel(m, 4.879092111333, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.893505734480e+03, 5.763388905608e+03, -7.136988416357e+02], [-7.037399220059e+00, 3.022613130968e+00, -3.702724159315e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.89350573448e3, 5.763388905608e3, -7.136988416357e2],
            [-7.037399220059, 3.022613130968, -3.702724159315e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.158409209629e4, TOL));
    ok(isequalRel(a, 2.45206282471e4, TOL));
    ok(isequalRel(ecc, 7.263454271303e-1, TOL));
    ok(isequalRel(incl, 1.226833333057e-1, TOL));
    ok(isequalRel(omega, 3.138801335329, TOL));
    ok(isequalRel(argp, 5.168567953205, TOL));
    ok(isequalRel(nu, 4.837457714387, TOL));
    ok(isequalRel(m, 6.061850677234, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-6.028756865366e+03, -2.564899913786e+04, 3.164371072739e+03], [1.883159287927e+00, -3.177051976376e+00, 3.907931623816e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-6.028756865366e3, -2.564899913786e4, 3.164371072739e3],
            [1.883159287927, -3.177051976376, 3.907931623816e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.158878222061e4, TOL));
    ok(isequalRel(a, 2.453218991225e4, TOL));
    ok(isequalRel(ecc, 7.263670854616e-1, TOL));
    ok(isequalRel(incl, 1.22649924311e-1, TOL));
    ok(isequalRel(omega, 3.137994612184, TOL));
    ok(isequalRel(argp, 5.170057380766, TOL));
    ok(isequalRel(nu, 2.458314087655, TOL));
    ok(isequalRel(m, 9.618077026516e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.313572990560e+03, -3.814645710922e+04, 4.697807775347e+03], [1.905002133306e+00, -6.258830744031e-01, 7.609818669984e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.31357299056e3, -3.814645710922e4, 4.697807775347e3],
            [1.905002133306, -6.258830744031e-1, 7.609818669984e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159255390122e4, TOL));
    ok(isequalRel(a, 2.453478796489e4, TOL));
    ok(isequalRel(ecc, 7.262956957566e-1, TOL));
    ok(isequalRel(incl, 1.226551350798e-1, TOL));
    ok(isequalRel(omega, 3.137095440856, TOL));
    ok(isequalRel(argp, 5.171481490304, TOL));
    ok(isequalRel(nu, 2.899985976628, TOL));
    ok(isequalRel(m, 2.14456273068, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.018129108622e+04, -3.684260674073e+04, 4.529125682184e+03], [1.326244475907e+00, 9.219164865847e-01, -1.145274551925e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.018129108622e4, -3.684260674073e4, 4.529125682184e3],
            [1.326244475907, 9.219164865847e-1, -1.145274551925e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159329254213e4, TOL));
    ok(isequalRel(a, 2.453515604347e4, TOL));
    ok(isequalRel(ecc, 7.262798501064e-1, TOL));
    ok(isequalRel(incl, 1.22671753574e-1, TOL));
    ok(isequalRel(omega, 3.136301269251, TOL));
    ok(isequalRel(argp, 5.172703429001, TOL));
    ok(isequalRel(nu, 3.184506271738, TOL));
    ok(isequalRel(m, 3.327331274225, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.630261794569e+04, -2.517339539436e+04, 3.084653099862e+03], [2.453988353635e-01, 2.329974346816e+00, -2.874958796262e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.630261794569e4, -2.517339539436e4, 3.084653099862e3],
            [2.453988353635e-1, 2.329974346816, -2.874958796262e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159135771519e4, TOL));
    ok(isequalRel(a, 2.453437669424e4, TOL));
    ok(isequalRel(ecc, 7.263238070861e-1, TOL));
    ok(isequalRel(incl, 1.226947768986e-1, TOL));
    ok(isequalRel(omega, 3.135572089718, TOL));
    ok(isequalRel(argp, 5.173873772615, TOL));
    ok(isequalRel(nu, 3.489692093179, TOL));
    ok(isequalRel(m, 4.510101082385, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.936507045602e+04, -2.700004901218e+03, 3.174272741652e+02], [-3.009733018324e+00, 3.902496057932e+00, -4.789285820627e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.936507045602e4, -2.700004901218e3, 3.174272741652e2],
            [-3.009733018324, 3.902496057932, -4.789285820627e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.158591008376e4, TOL));
    ok(isequalRel(a, 2.452949947624e4, TOL));
    ok(isequalRel(ecc, 7.264120176083e-1, TOL));
    ok(isequalRel(incl, 1.227278654093e-1, TOL));
    ok(isequalRel(omega, 3.135059499098, TOL));
    ok(isequalRel(argp, 5.174999487937, TOL));
    ok(isequalRel(nu, 4.11678948967, TOL));
    ok(isequalRel(m, 5.692856020935, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.667818787801e+03, -1.693019112642e+04, 2.095874690342e+03], [1.279288285157e+00, -4.736005905398e+00, 5.828782553890e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.667818787801e3, -1.693019112642e4, 2.095874690342e3],
            [1.279288285157, -4.736005905398, 5.82878255389e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.158567037053e4, TOL));
    ok(isequalRel(a, 2.452935272995e4, TOL));
    ok(isequalRel(ecc, 7.264167991962e-1, TOL));
    ok(isequalRel(incl, 1.226890861071e-1, TOL));
    ok(isequalRel(omega, 3.134638468431, TOL));
    ok(isequalRel(argp, 5.176197539891, TOL));
    ok(isequalRel(nu, 2.169100857506, TOL));
    ok(isequalRel(m, 5.92825233055e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.021314385831e+03, -3.606609209609e+04, 4.442915874109e+03], [2.007322354141e+00, -1.227461375715e+00, 1.493838966847e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.021314385831e3, -3.606609209609e4, 4.442915874109e3],
            [2.007322354141, -1.227461375715, 1.493838966847e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.159074197689e4, TOL));
    ok(isequalRel(a, 2.453434510378e4, TOL));
    ok(isequalRel(ecc, 7.263406648409e-1, TOL));
    ok(isequalRel(incl, 1.226815949495e-1, TOL));
    ok(isequalRel(omega, 3.133680211534, TOL));
    ok(isequalRel(argp, 5.177768783129, TOL));
    ok(isequalRel(nu, 2.794279417344, TOL));
    ok(isequalRel(m, 1.775570986411, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 23333
});

test("[-4.467291239679e+04, -6.213119965811e+03, -1.738801317270e+03], [-3.719475069902e+00, -1.336673022266e+00, -6.218882613837e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.467291239679e4, -6.213119965811e3, -1.73880131727e3],
            [-3.719475069902, -1.336673022266, -6.218882613837e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.506972700758e3, TOL));
    ok(isequalRel(a, 2.409769999594e5, TOL));
    ok(isequalRel(ecc, 9.906044031463e-1, TOL));
    ok(isequalRel(incl, 5.284333027994e-1, TOL));
    ok(isequalRel(omega, 7.211121268969e-2, TOL));
    ok(isequalRel(argp, 5.071542112866e-1, TOL));
    ok(isequalRel(nu, 2.710920576748, TOL));
    ok(isequalRel(m, 4.226762810877e-2, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-6.705308885387e+04, -1.499469685946e+04, -5.897990727927e+03], [-2.860576612613e+00, -1.183771564513e+00, -5.684739091465e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-6.705308885387e4, -1.499469685946e4, -5.897990727927e3],
            [-2.860576612613, -1.183771564513, -5.684739091465e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.47747495372e3, TOL));
    ok(isequalRel(a, 2.411897549004e5, TOL));
    ok(isequalRel(ecc, 9.906744583785e-1, TOL));
    ok(isequalRel(incl, 5.28503306615e-1, TOL));
    ok(isequalRel(omega, 7.246069977222e-2, TOL));
    ok(isequalRel(argp, 5.070592051936e-1, TOL));
    ok(isequalRel(nu, 2.804969305754, TOL));
    ok(isequalRel(m, 7.916219999337e-2, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.522784253168e+04, -2.289708484471e+04, -9.722591845641e+03], [-2.426469823388e+00, -1.078592475459e+00, -5.253414306680e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.522784253168e4, -2.289708484471e4, -9.722591845641e3],
            [-2.426469823388, -1.078592475459, -5.25341430668e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.449622610295e3, TOL));
    ok(isequalRel(a, 2.412822722632e5, TOL));
    ok(isequalRel(ecc, 9.907363097222e-1, TOL));
    ok(isequalRel(incl, 5.285687732561e-1, TOL));
    ok(isequalRel(omega, 7.267241025939e-2, TOL));
    ok(isequalRel(argp, 5.07068652232e-1, TOL));
    ok(isequalRel(nu, 2.853418125097, TOL));
    ok(isequalRel(m, 1.160226162864e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.009860041914e+05, -3.017119698695e+04, -1.328377044765e+04], [-2.147108978436e+00, -1.000530826921e+00, -4.915875819679e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.009860041914e5, -3.017119698695e4, -1.328377044765e4],
            [-2.147108978436, -1.000530826921, -4.915875819679e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.423480498074e3, TOL));
    ok(isequalRel(a, 2.413357641222e5, TOL));
    ok(isequalRel(ecc, 9.907930387002e-1, TOL));
    ok(isequalRel(incl, 5.286289343507e-1, TOL));
    ok(isequalRel(omega, 7.28271910543e-2, TOL));
    ok(isequalRel(argp, 5.071228184989e-1, TOL));
    ok(isequalRel(nu, 2.885019187817, TOL));
    ok(isequalRel(m, 1.528555719233e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.150930068639e+05, -3.696256316477e+04, -1.663415682929e+04], [-1.945446187603e+00, -9.389477360594e-01, -4.641992018274e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.150930068639e5, -3.696256316477e4, -1.663415682929e4],
            [-1.945446187603, -9.389477360594e-1, -4.641992018274e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.399113023702e3, TOL));
    ok(isequalRel(a, 2.4137123412e5, TOL));
    ok(isequalRel(ecc, 9.908453428193e-1, TOL));
    ok(isequalRel(incl, 5.286817310523e-1, TOL));
    ok(isequalRel(omega, 7.294756727207e-2, TOL));
    ok(isequalRel(argp, 5.072052372828e-1, TOL));
    ok(isequalRel(nu, 2.908057142832, TOL));
    ok(isequalRel(m, 1.896643340401e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.279658006489e+05, -4.336332967165e+04, -1.980990480432e+04], [-1.789652015921e+00, -8.882784630768e-01, -4.412544683039e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.279658006489e5, -4.336332967165e4, -1.980990480432e4],
            [-1.789652015921, -8.882784630768e-1, -4.412544683039e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.376580733129e3, TOL));
    ok(isequalRel(a, 2.41396765047e5, TOL));
    ok(isequalRel(ecc, 9.9089341621e-1, TOL));
    ok(isequalRel(incl, 5.287257570138e-1, TOL));
    ok(isequalRel(omega, 7.30424851107e-2, TOL));
    ok(isequalRel(argp, 5.073093700015e-1, TOL));
    ok(isequalRel(nu, 2.925984490012, TOL));
    ok(isequalRel(m, 2.264511571453e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.398632833221e+05, -4.943645704153e+04, -2.283680438139e+04], [-1.663762568029e+00, -8.453159125263e-01, -4.215486272921e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.398632833221e5, -4.943645704153e4, -2.283680438139e4],
            [-1.663762568029, -8.453159125263e-1, -4.215486272921e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.355940279396e3, TOL));
    ok(isequalRel(a, 2.414161852759e5, TOL));
    ok(isequalRel(ecc, 9.909372927325e-1, TOL));
    ok(isequalRel(incl, 5.287600418418e-1, TOL));
    ok(isequalRel(omega, 7.311619088859e-2, TOL));
    ok(isequalRel(argp, 5.074320745831e-1, TOL));
    ok(isequalRel(nu, 2.940546063766, TOL));
    ok(isequalRel(m, 2.632178986692e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.509602297826e+05, -5.522745413896e+04, -2.573401408879e+04], [-1.558730986445e+00, -8.080610648023e-01, -4.042938457354e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.509602297826e5, -5.522745413896e4, -2.573401408879e4],
            [-1.558730986445, -8.080610648023e-1, -4.042938457354e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.337244521666e3, TOL));
    ok(isequalRel(a, 2.414315614854e5, TOL));
    ok(isequalRel(ecc, 9.909769444104e-1, TOL));
    ok(isequalRel(incl, 5.287838764256e-1, TOL));
    ok(isequalRel(omega, 7.317091761381e-2, TOL));
    ok(isequalRel(argp, 5.07571647915e-1, TOL));
    ok(isequalRel(nu, 2.952737452853, TOL));
    ok(isequalRel(m, 2.999662394134e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.613817141463e+05, -6.077064040903e+04, -2.851626290017e+04], [-1.468977173779e+00, -7.751904591525e-01, -3.889518104933e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.613817141463e5, -6.077064040903e4, -2.851626290017e4],
            [-1.468977173779, -7.751904591525e-1, -3.889518104933e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.320542549547e3, TOL));
    ok(isequalRel(a, 2.414441153151e5, TOL));
    ok(isequalRel(ecc, 9.910123176508e-1, TOL));
    ok(isequalRel(incl, 5.287967163251e-1, TOL));
    ok(isequalRel(omega, 7.320791238651e-2, TOL));
    ok(isequalRel(argp, 5.077270831945e-1, TOL));
    ok(isequalRel(nu, 2.963176615147, TOL));
    ok(isequalRel(m, 3.366977788907e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.712211873695e+05, -6.609276474442e+04, -3.119519847387e+04], [-1.390837596332e+00, -7.457856328566e-01, -3.751403978620e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.712211873695e5, -6.609276474442e4, -3.119519847387e4],
            [-1.390837596332, -7.457856328566e-1, -3.75140397862e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.305879649115e3, TOL));
    ok(isequalRel(a, 2.414546188375e5, TOL));
    ok(isequalRel(ecc, 9.910433489629e-1, TOL));
    ok(isequalRel(incl, 5.287981285599e-1, TOL));
    ok(isequalRel(omega, 7.322789461204e-2, TOL));
    ok(isequalRel(argp, 5.078977411021e-1, TOL));
    ok(isequalRel(nu, 2.972271689837, TOL));
    ok(isequalRel(m, 3.734140816695e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.805508288875e+05, -7.121523290630e+04, -3.378024938270e+04], [-1.321788671573e+00, -7.191847523360e-01, -3.625794946294e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.805508288875e5, -7.12152329063e4, -3.37802493827e4],
            [-1.321788671573, -7.19184752336e-1, -3.625794946294e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.293297235644e3, TOL));
    ok(isequalRel(a, 2.414635857172e5, TOL));
    ok(isequalRel(ecc, 9.910699726623e-1, TOL));
    ok(isequalRel(incl, 5.287877612087e-1, TOL));
    ok(isequalRel(omega, 7.323128422699e-2, TOL));
    ok(isequalRel(argp, 5.080831871628e-1, TOL));
    ok(isequalRel(nu, 2.980305455016, TOL));
    ok(isequalRel(m, 4.101167015781e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.894278753307e+05, -7.615554943344e+04, -3.627919882816e+04], [-1.260024473046e+00, -6.948960527126e-01, -3.510581325907e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.894278753307e5, -7.615554943344e4, -3.627919882816e4],
            [-1.260024473046, -6.948960527126e-1, -3.510581325907e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.282832769809e3, TOL));
    ok(isequalRel(a, 2.414713718655e5, TOL));
    ok(isequalRel(ecc, 9.91092125027e-1, TOL));
    ok(isequalRel(incl, 5.287653253333e-1, TOL));
    ok(isequalRel(omega, 7.321832534646e-2, TOL));
    ok(isequalRel(argp, 5.082831042665e-1, TOL));
    ok(isequalRel(nu, 2.987481446559, TOL));
    ok(isequalRel(m, 4.468071947966e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.978986940141e+05, -8.092829015181e+04, -3.869857972447e+04], [-1.204211888236e+00, -6.725447088389e-01, -3.404137305224e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.978986940141e5, -8.092829015181e4, -3.869857972447e4],
            [-1.204211888236, -6.725447088389e-1, -3.404137305224e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.274519667751e3, TOL));
    ok(isequalRel(a, 2.414782321148e5, TOL));
    ok(isequalRel(ecc, 9.911097467267e-1, TOL));
    ok(isequalRel(incl, 5.287305838373e-1, TOL));
    ok(isequalRel(omega, 7.318915787318e-2, TOL));
    ok(isequalRel(argp, 5.08497242403e-1, TOL));
    ok(isequalRel(nu, 2.993950801145, TOL));
    ok(isequalRel(m, 4.834871268905e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.006388298624e+05, -8.248414969882e+04, -3.948834331447e+04], [-1.186748462247e+00, -6.654724216179e-01, -3.370375820763e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.006388298624e5, -8.248414969882e4, -3.948834331447e4],
            [-1.186748462247, -6.654724216179e-1, -3.370375820763e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.272231896423e3, TOL));
    ok(isequalRel(a, 2.41480346998e5, TOL));
    ok(isequalRel(ecc, 9.911146043875e-1, TOL));
    ok(isequalRel(incl, 5.287162343211e-1, TOL));
    ok(isequalRel(omega, 7.317584835319e-2, TOL));
    ok(isequalRel(argp, 5.085717444892e-1, TOL));
    ok(isequalRel(nu, 2.995970942154, TOL));
    ok(isequalRel(m, 4.957116964193e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 23599
});

test("[1.193195642997e+04, 7.340749737496e+03, 8.864636598694e+02], [3.083291156075e-01, 5.532328972169e+00, 6.728872813175e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.193195642997e4, 7.340749737496e3, 8.864636598694e2],
            [3.083291156075e-1, 5.532328972169, 6.728872813175e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034613796097e4, TOL));
    ok(isequalRel(a, 1.554763988363e4, TOL));
    ok(isequalRel(ecc, 5.784051420876e-1, TOL));
    ok(isequalRel(incl, 1.210653565662e-1, TOL));
    ok(isequalRel(omega, 4.550077194867e-3, TOL));
    ok(isequalRel(argp, 4.790703991463, TOL));
    ok(isequalRel(nu, 2.04273402982, TOL));
    ok(isequalRel(m, 8.318515906631e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.132171039205e+04, 1.322284749156e+04, 1.602401190490e+03], [-1.151973982413e+00, 4.285810871397e+00, 5.219194250331e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.132171039205e4, 1.322284749156e4, 1.60240119049e3],
            [-1.151973982413, 4.285810871397, 5.219194250331e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034833591491e4, TOL));
    ok(isequalRel(a, 1.55486487204e4, TOL));
    ok(isequalRel(ecc, 5.783202612333e-1, TOL));
    ok(isequalRel(incl, 1.210430045541e-1, TOL));
    ok(isequalRel(omega, 4.342043133215e-3, TOL));
    ok(isequalRel(argp, 4.791186840966, TOL));
    ok(isequalRel(nu, 2.353987642725, TOL));
    ok(isequalRel(m, 1.222597034643, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.438293956752e+03, 1.768805450261e+04, 2.146592934019e+03], [-1.907904054339e+00, 3.179955045945e+00, 3.876924790871e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.438293956752e3, 1.768805450261e4, 2.146592934019e3],
            [-1.907904054339, 3.179955045945, 3.876924790871e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035004373812e4, TOL));
    ok(isequalRel(a, 1.554918686241e4, TOL));
    ok(isequalRel(ecc, 5.782452116786e-1, TOL));
    ok(isequalRel(incl, 1.210281785821e-1, TOL));
    ok(isequalRel(omega, 4.056469339629e-3, TOL));
    ok(isequalRel(argp, 4.791670218076, TOL));
    ok(isequalRel(nu, 2.571151958504, TOL));
    ok(isequalRel(m, 1.613374145509, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[6.872086346386e+03, 2.091011016811e+04, 2.539799450345e+03], [-2.323995366881e+00, 2.207398461776e+00, 2.695061210772e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [6.872086346386e3, 2.091011016811e4, 2.539799450345e3],
            [-2.323995366881, 2.207398461776, 2.695061210772e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035130989883e4, TOL));
    ok(isequalRel(a, 1.554948627316e4, TOL));
    ok(isequalRel(ecc, 5.78185881873e-1, TOL));
    ok(isequalRel(incl, 1.210190646011e-1, TOL));
    ok(isequalRel(omega, 3.74659280955e-3, TOL));
    ok(isequalRel(argp, 4.792132050196, TOL));
    ok(isequalRel(nu, 2.742767240296, TOL));
    ok(isequalRel(m, 2.004172092034, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.933375097983e+03, 2.302407662542e+04, 2.798259667462e+03], [-2.542860615829e+00, 1.327134965795e+00, 1.624500761758e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.933375097983e3, 2.302407662542e4, 2.798259667462e3],
            [-2.542860615829, 1.327134965795, 1.624500761758e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035217550045e4, TOL));
    ok(isequalRel(a, 1.554964232383e4, TOL));
    ok(isequalRel(ecc, 5.781435183037e-1, TOL));
    ok(isequalRel(incl, 1.210139969595e-1, TOL));
    ok(isequalRel(omega, 3.429549142039e-3, TOL));
    ok(isequalRel(argp, 4.792573290958, TOL));
    ok(isequalRel(nu, 2.890012644494, TOL));
    ok(isequalRel(m, 2.394983832435, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.166409154575e+02, 2.411898675475e+04, 2.932694594275e+03], [-2.626838010139e+00, 5.045027625462e-01, 6.234430647519e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.166409154575e2, 2.411898675475e4, 2.932694594275e3],
            [-2.626838010139, 5.045027625462e-1, 6.234430647519e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035266773229e4, TOL));
    ok(isequalRel(a, 1.554969873037e4, TOL));
    ok(isequalRel(ecc, 5.781182295785e-1, TOL));
    ok(isequalRel(incl, 1.21012001234e-1, TOL));
    ok(isequalRel(omega, 3.111548903829e-3, TOL));
    ok(isequalRel(argp, 4.792999547699, TOL));
    ok(isequalRel(nu, 3.024294654572, TOL));
    ok(isequalRel(m, 2.785804532415, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.334417058038e+03, 2.424686096326e+04, 2.949364488411e+03], [-2.602259645510e+00, -2.880582655860e-01, -3.414513473677e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.334417058038e3, 2.424686096326e4, 2.949364488411e3],
            [-2.60225964551, -2.88058265586e-1, -3.414513473677e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035280141297e4, TOL));
    ok(isequalRel(a, 1.554967510109e4, TOL));
    ok(isequalRel(ecc, 5.781099191721e-1, TOL));
    ok(isequalRel(incl, 1.21012586455e-1, TOL));
    ok(isequalRel(omega, 2.795255643399e-3, TOL));
    ok(isequalRel(argp, 4.793416992693, TOL));
    ok(isequalRel(nu, 3.15307305742, TOL));
    ok(isequalRel(m, 3.1766304866, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-5.394317980388e+03, 2.342942716149e+04, 2.850868325860e+03], [-2.474434068042e+00, -1.074055982182e+00, -1.298683659015e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-5.394317980388e3, 2.342942716149e4, 2.85086832586e3],
            [-2.474434068042, -1.074055982182, -1.298683659015e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035258051659e4, TOL));
    ok(isequalRel(a, 1.554957666106e4, TOL));
    ok(isequalRel(ecc, 5.781185602132e-1, TOL));
    ok(isequalRel(incl, 1.210155993466e-1, TOL));
    ok(isequalRel(omega, 2.482414635147e-3, TOL));
    ok(isequalRel(argp, 4.793831542373, TOL));
    ok(isequalRel(nu, 3.282377737929, TOL));
    ok(isequalRel(m, 3.567458447874, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.233351302374e+03, 2.166124480883e+04, 2.636514561180e+03], [-2.230845532770e+00, -1.875742343807e+00, -2.275286034063e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.233351302374e3, 2.166124480883e4, 2.63651456118e3],
            [-2.23084553277, -1.875742343807, -2.275286034063e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035199861225e4, TOL));
    ok(isequalRel(a, 1.554939651511e4, TOL));
    ok(isequalRel(ecc, 5.781442547519e-1, TOL));
    ok(isequalRel(incl, 1.210211678657e-1, TOL));
    ok(isequalRel(omega, 2.175272820517e-3, TOL));
    ok(isequalRel(argp, 4.794248732256, TOL));
    ok(isequalRel(nu, 3.418369059747, TOL));
    ok(isequalRel(m, 3.958285119243, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.069396497348e+04, 1.890988168891e+04, 2.302337075483e+03], [-1.835912432878e+00, -2.716169864668e+00, -3.299318802762e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.069396497348e4, 1.890988168891e4, 2.302337075483e3],
            [-1.835912432878, -2.716169864668, -3.299318802762e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035103810506e4, TOL));
    ok(isequalRel(a, 1.554911246888e4, TOL));
    ok(isequalRel(ecc, 5.781871583535e-1, TOL));
    ok(isequalRel(incl, 1.21029710221e-1, TOL));
    ok(isequalRel(omega, 1.878198108324e-3, TOL));
    ok(isequalRel(argp, 4.794673448091, TOL));
    ok(isequalRel(nu, 3.568979715947, TOL));
    ok(isequalRel(m, 4.349106621248, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.255389669904e+04, 1.511463990716e+04, 1.840935732308e+03], [-1.212478879277e+00, -3.619036996387e+00, -4.399706327432e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.255389669904e4, 1.511463990716e4, 1.840935732308e3],
            [-1.212478879277, -3.619036996387, -4.399706327432e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034966838459e4, TOL));
    ok(isequalRel(a, 1.554867535177e4, TOL));
    ok(isequalRel(ecc, 5.782471511503e-1, TOL));
    ok(isequalRel(incl, 1.21041970757e-1, TOL));
    ok(isequalRel(omega, 1.60104732119e-3, TOL));
    ok(isequalRel(argp, 4.795108579664, TOL));
    ok(isequalRel(nu, 3.74677762245, TOL));
    ok(isequalRel(m, 4.739917727954, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.345020591864e+04, 1.019057904289e+04, 1.241959587359e+03], [-1.890825111155e-01, -4.596701971373e+00, -5.591738989436e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.345020591864e4, 1.019057904289e4, 1.241959587359e3],
            [-1.890825111155e-1, -4.596701971373, -5.591738989436e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034784426025e4, TOL));
    ok(isequalRel(a, 1.554797526519e4, TOL));
    ok(isequalRel(ecc, 5.783226767564e-1, TOL));
    ok(isequalRel(incl, 1.210588506563e-1, TOL));
    ok(isequalRel(omega, 1.368293474843e-3, TOL));
    ok(isequalRel(argp, 4.795549749201, TOL));
    ok(isequalRel(nu, 3.975937404662, TOL));
    ok(isequalRel(m, 5.130710549596, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.268660437121e+04, 4.079311061609e+03, 4.982707861417e+02], [1.664498211229e+00, -5.559889864636e+00, -6.767477790003e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.268660437121e4, 4.079311061609e3, 4.982707861417e2],
            [1.664498211229, -5.559889864636, -6.767477790003e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034551566585e4, TOL));
    ok(isequalRel(a, 1.554673059356e4, TOL));
    ok(isequalRel(ecc, 5.784060990336e-1, TOL));
    ok(isequalRel(incl, 1.210791662855e-1, TOL));
    ok(isequalRel(omega, 1.246217544637e-3, TOL));
    ok(isequalRel(argp, 4.795966256755, TOL));
    ok(isequalRel(nu, 4.314306727539, TOL));
    ok(isequalRel(m, 5.521472489589, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.672558677528e+03, -2.827568233149e+03, -3.425964471559e+02], [5.515079851923e+00, -5.551222961583e+00, -6.763600441294e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.672558677528e3, -2.827568233149e3, -3.425964471559e2],
            [5.515079851923, -5.551222961583, -6.763600441294e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034274204628e4, TOL));
    ok(isequalRel(a, 1.554404459694e4, TOL));
    ok(isequalRel(ecc, 5.784609433935e-1, TOL));
    ok(isequalRel(incl, 1.210791581493e-1, TOL));
    ok(isequalRel(omega, 1.370032798238e-3, TOL));
    ok(isequalRel(argp, 4.796281202555, TOL));
    ok(isequalRel(nu, 4.944459382375, TOL));
    ok(isequalRel(m, 5.912192623481, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.153314980597e+03, -6.411986920596e+03, -7.798728894123e+02], [9.689818101748e+00, 1.388598425041e+00, 1.678687983020e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.153314980597e3, -6.411986920596e3, -7.798728894123e2],
            [9.689818101748, 1.388598425041, 1.67868798302e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034092689683e4, TOL));
    ok(isequalRel(a, 1.554015105591e4, TOL));
    ok(isequalRel(ecc, 5.784178049311e-1, TOL));
    ok(isequalRel(incl, 1.210146563121e-1, TOL));
    ok(isequalRel(omega, 8.461109371354e-4, TOL));
    ok(isequalRel(argp, 4.797258397489, TOL));
    ok(isequalRel(nu, 9.098140980551e-2, TOL));
    ok(isequalRel(m, 1.984286548586e-2, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.542792010555e+03, -5.337125308064e+02, -6.573165427708e+01], [3.926947086559e+00, 6.459583538639e+00, 7.856867546234e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.542792010555e3, -5.337125308064e2, -6.573165427708e1],
            [3.926947086559, 6.459583538639, 7.856867546234e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034300364321e4, TOL));
    ok(isequalRel(a, 1.55443254773e4, TOL));
    ok(isequalRel(ecc, 5.784567893684e-1, TOL));
    ok(isequalRel(incl, 1.210861792933e-1, TOL));
    ok(isequalRel(omega, 6.792678077191e-4, TOL));
    ok(isequalRel(argp, 4.797900524634, TOL));
    ok(isequalRel(nu, 1.428319169135, TOL));
    ok(isequalRel(m, 4.106535910989e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.186880960100e+04, 6.861595908475e+03, 8.337278060176e+02], [4.529578524427e-01, 5.632811327979e+00, 6.852623226654e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.1868809601e4, 6.861595908475e3, 8.337278060176e2],
            [4.529578524427e-1, 5.632811327979, 6.852623226654e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034569287579e4, TOL));
    ok(isequalRel(a, 1.554663812387e4, TOL));
    ok(isequalRel(ecc, 5.783928239487e-1, TOL));
    ok(isequalRel(incl, 1.210677722426e-1, TOL));
    ok(isequalRel(omega, 7.42910266092e-4, TOL));
    ok(isequalRel(argp, 4.798255346748, TOL));
    ok(isequalRel(nu, 2.011549338173, TOL));
    ok(isequalRel(m, 8.013862671461e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.137623941678e+04, 1.285897121366e+04, 1.563406601721e+03], [-1.087665694862e+00, 4.374693346994e+00, 5.322070510628e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.137623941678e4, 1.285897121366e4, 1.563406601721e3],
            [-1.087665694862, 4.374693346994, 5.322070510628e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034792975112e4, TOL));
    ok(isequalRel(a, 1.554770283835e4, TOL));
    ok(isequalRel(ecc, 5.783078403339e-1, TOL));
    ok(isequalRel(incl, 1.210447884594e-1, TOL));
    ok(isequalRel(omega, 5.429660028207e-4, TOL));
    ok(isequalRel(argp, 4.798738104751, TOL));
    ok(isequalRel(nu, 2.33405051583, TOL));
    ok(isequalRel(m, 1.192161926553, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.547703007819e+03, 1.742148570758e+04, 2.118569075147e+03], [-1.876540262417e+00, 3.253891727584e+00, 3.958102433992e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.547703007819e3, 1.742148570758e4, 2.118569075147e3],
            [-1.876540262417, 3.253891727584, 3.958102433992e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034967368073e4, TOL));
    ok(isequalRel(a, 1.554826694832e4, TOL));
    ok(isequalRel(ecc, 5.782317383207e-1, TOL));
    ok(isequalRel(incl, 1.210295111991e-1, TOL));
    ok(isequalRel(omega, 2.589553399292e-4, TOL));
    ok(isequalRel(argp, 4.799224631751, TOL));
    ok(isequalRel(nu, 2.556248718242, TOL));
    ok(isequalRel(m, 1.582970266417, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[7.008514702633e+03, 2.072547471227e+04, 2.520560642888e+03], [-2.308703598891e+00, 2.270724438391e+00, 2.761386128135e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [7.008514702633e3, 2.072547471227e4, 2.520560642888e3],
            [-2.308703598891, 2.270724438391, 2.761386128135e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.03509722868e4, TOL));
    ok(isequalRel(a, 1.554858081519e4, TOL));
    ok(isequalRel(ecc, 5.781711345647e-1, TOL));
    ok(isequalRel(incl, 1.210201547307e-1, TOL));
    ok(isequalRel(omega, 6.283134393412, TOL));
    ok(isequalRel(argp, 4.7996893271, TOL));
    ok(isequalRel(nu, 2.730476349827, TOL));
    ok(isequalRel(m, 1.97380014494, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.082281351036e+03, 2.291104184601e+04, 2.786375683090e+03], [-2.536665546306e+00, 1.383670231785e+00, 1.681534071318e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.082281351036e3, 2.291104184601e4, 2.78637568309e3],
            [-2.536665546306, 1.383670231785, 1.681534071318e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035186765295e4, TOL));
    ok(isequalRel(a, 1.554874619546e4, TOL));
    ok(isequalRel(ecc, 5.781274575091e-1, TOL));
    ok(isequalRel(incl, 1.210149622132e-1, TOL));
    ok(isequalRel(omega, 6.282817092546, TOL));
    ok(isequalRel(argp, 4.800132557485, TOL));
    ok(isequalRel(nu, 2.879148887278, TOL));
    ok(isequalRel(m, 2.364644291315, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.691797814899e+02, 2.407123673676e+04, 2.927313265790e+03], [-2.626695114733e+00, 5.571724275943e-01, 6.753685382056e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.691797814899e2, 2.407123673676e4, 2.92731326579e3],
            [-2.626695114733, 5.571724275943e-1, 6.753685382056e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035238797542e4, TOL));
    ok(isequalRel(a, 1.554880952767e4, TOL));
    ok(isequalRel(ecc, 5.781008606368e-1, TOL));
    ok(isequalRel(incl, 1.210129002445e-1, TOL));
    ok(isequalRel(omega, 6.282498923503, TOL));
    ok(isequalRel(argp, 4.800559919123, TOL));
    ok(isequalRel(nu, 3.01415582337, TOL));
    ok(isequalRel(m, 2.755497745077, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.184715154439e+03, 2.426121671601e+04, 2.950081428247e+03], [-2.607072865954e+00, -2.368876072256e-01, -2.912521458880e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.184715154439e3, 2.426121671601e4, 2.950081428247e3],
            [-2.607072865954, -2.368876072256e-1, -2.91252145888e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035254893951e4, TOL));
    ok(isequalRel(a, 1.554879185017e4, TOL));
    ok(isequalRel(ecc, 5.780912522479e-1, TOL));
    ok(isequalRel(incl, 1.210134415662e-1, TOL));
    ok(isequalRel(omega, 6.282182637545, TOL));
    ok(isequalRel(argp, 4.800977654804, TOL));
    ok(isequalRel(nu, 3.143153611159, TOL));
    ok(isequalRel(m, 3.146356738774, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-5.253422233696e+03, 2.350537595671e+04, 2.857661207376e+03], [-2.484424544113e+00, -1.022255435921e+00, -1.247144435756e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-5.253422233696e3, 2.350537595671e4, 2.857661207376e3],
            [-2.484424544113, -1.022255435921, -1.247144435756e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035235530419e4, TOL));
    ok(isequalRel(a, 1.554869938018e4, TOL));
    ok(isequalRel(ecc, 5.780985986352e-1, TOL));
    ok(isequalRel(incl, 1.210164064628e-1, TOL));
    ok(isequalRel(omega, 6.281869973921, TOL));
    ok(isequalRel(argp, 4.801391732478, TOL));
    ok(isequalRel(nu, 3.2722242567, TOL));
    ok(isequalRel(m, 3.537218006355, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.108279610168e+03, 2.180081688388e+04, 2.649729819609e+03], [-2.247597250991e+00, -1.821159176294e+00, -2.219256237509e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.108279610168e3, 2.180081688388e4, 2.649729819609e3],
            [-2.247597250991, -1.821159176294, -2.219256237509e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035180142813e4, TOL));
    ok(isequalRel(a, 1.554852622481e4, TOL));
    ok(isequalRel(ecc, 5.781229951224e-1, TOL));
    ok(isequalRel(incl, 1.21021897553e-1, TOL));
    ok(isequalRel(omega, 6.281563106967, TOL));
    ok(isequalRel(argp, 4.801807710953, TOL));
    ok(isequalRel(nu, 3.407467729449, TOL));
    ok(isequalRel(m, 3.928078269318, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.059477795556e+04, 1.911780779221e+04, 2.322721369788e+03], [-1.863118483942e+00, -2.656426668062e+00, -3.235215022694e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.059477795556e4, 1.911780779221e4, 2.322721369788e3],
            [-1.863118483942, -2.656426668062, -3.235215022694e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035087059861e4, TOL));
    ok(isequalRel(a, 1.554825166393e4, TOL));
    ok(isequalRel(ecc, 5.781646028457e-1, TOL));
    ok(isequalRel(incl, 1.210303017317e-1, TOL));
    ok(isequalRel(omega, 6.281266208018, TOL));
    ok(isequalRel(argp, 4.8022305065, TOL));
    ok(isequalRel(nu, 3.556605575105, TOL));
    ok(isequalRel(m, 4.318933711585, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.249732045995e+04, 1.539864085906e+04, 1.869699838970e+03], [-1.258130762801e+00, -3.551583367757e+00, -4.323388881599e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.249732045995e4, 1.539864085906e4, 1.86969983897e3],
            [-1.258130762801, -3.551583367757, -4.323388881599e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034953323986e4, TOL));
    ok(isequalRel(a, 1.554782939875e4, TOL));
    ok(isequalRel(ecc, 5.782233506636e-1, TOL));
    ok(isequalRel(incl, 1.210423214032e-1, TOL));
    ok(isequalRel(omega, 6.280988595202, TOL));
    ok(isequalRel(argp, 4.802663185551, TOL));
    ok(isequalRel(nu, 3.731687084934, TOL));
    ok(isequalRel(m, 4.70977924044, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.346792475245e+04, 1.056090147785e+04, 1.280783991807e+03], [-2.718705231553e-01, -4.520514224198e+00, -5.500160921192e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.346792475245e4, 1.056090147785e4, 1.280783991807e3],
            [-2.718705231553e-1, -4.520514224198, -5.500160921192e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034774516117e4, TOL));
    ok(isequalRel(a, 1.554715649864e4, TOL));
    ok(isequalRel(ecc, 5.782978841206e-1, TOL));
    ok(isequalRel(incl, 1.210588294826e-1, TOL));
    ok(isequalRel(omega, 6.280753125876, TOL));
    ok(isequalRel(argp, 4.80310222672, TOL));
    ok(isequalRel(nu, 3.955539621498, TOL));
    ok(isequalRel(m, 5.100607219443, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.284818843590e+04, 4.541219018423e+03, 5.485382642655e+02], [1.494157156479e+00, -5.489585383675e+00, -6.674720394473e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.28481884359e4, 4.541219018423e3, 5.485382642655e2],
            [1.494157156479, -5.489585383675, -6.674720394473e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034545520456e4, TOL));
    ok(isequalRel(a, 1.554597265632e4, TOL));
    ok(isequalRel(ecc, 5.783814148451e-1, TOL));
    ok(isequalRel(incl, 1.210789436601e-1, TOL));
    ok(isequalRel(omega, 6.280621032454, TOL));
    ok(isequalRel(argp, 4.803520403052, TOL));
    ok(isequalRel(nu, 4.28177432293, TOL));
    ok(isequalRel(m, 5.491405423111, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.152705527280e+03, -2.344249501437e+03, -2.879812196960e+02], [5.127921094864e+00, -5.650383024709e+00, -6.859890076156e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.15270552728e3, -2.344249501437e3, -2.87981219696e2],
            [5.127921094864, -5.650383024709, -6.859890076156e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034270078988e4, TOL));
    ok(isequalRel(a, 1.554345934249e4, TOL));
    ok(isequalRel(ecc, 5.784415819901e-1, TOL));
    ok(isequalRel(incl, 1.210825010379e-1, TOL));
    ok(isequalRel(omega, 6.280725760698, TOL));
    ok(isequalRel(argp, 4.80384194401, TOL));
    ok(isequalRel(nu, 4.875919714831, TOL));
    ok(isequalRel(m, 5.882161169868, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.803849090860e+02, -6.500102640176e+03, -7.903609298377e+02], [9.779619613582e+00, 5.818158109181e-01, 7.417134496049e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.80384909086e2, -6.500102640176e3, -7.903609298377e2],
            [9.779619613582, 5.818158109181e-1, 7.417134496049e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034065950353e4, TOL));
    ok(isequalRel(a, 1.553923620234e4, TOL));
    ok(isequalRel(ecc, 5.783988140863e-1, TOL));
    ok(isequalRel(incl, 1.210134509907e-1, TOL));
    ok(isequalRel(omega, 6.280310964008, TOL));
    ok(isequalRel(argp, 4.80472387371, TOL));
    ok(isequalRel(nu, 6.236497677359, TOL));
    ok(isequalRel(m, 6.273009664811, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.166257843150e+03, -1.093125526507e+03, -1.294942888733e+02], [4.316668714234e+00, 6.438636494018e+00, 7.851166087728e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.16625784315e3, -1.093125526507e3, -1.294942888733e2],
            [4.316668714234, 6.438636494018, 7.851166087728e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034253017839e4, TOL));
    ok(isequalRel(a, 1.55431601732e4, TOL));
    ok(isequalRel(ecc, 5.784399994085e-1, TOL));
    ok(isequalRel(incl, 1.210863286399e-1, TOL));
    ok(isequalRel(omega, 6.280030892202, TOL));
    ok(isequalRel(argp, 4.80546618059, TOL));
    ok(isequalRel(nu, 1.361334154581, TOL));
    ok(isequalRel(m, 3.806880266413e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.179448942915e+04, 6.382211383537e+03, 7.808843901486e+02], [6.044124532698e-01, 5.731729369262e+00, 6.975743326882e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.179448942915e4, 6.382211383537e3, 7.808843901486e2],
            [6.044124532698e-1, 5.731729369262, 6.975743326882e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034523880575e4, TOL));
    ok(isequalRel(a, 1.554563169891e4, TOL));
    ok(isequalRel(ecc, 5.783808309591e-1, TOL));
    ok(isequalRel(incl, 1.210702318898e-1, TOL));
    ok(isequalRel(omega, 6.280122848571, TOL));
    ok(isequalRel(argp, 4.805805141676, TOL));
    ok(isequalRel(nu, 1.97953466651, TOL));
    ok(isequalRel(m, 7.714515489745e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.142430138324e+04, 1.249426088864e+04, 1.524331654876e+03], [-1.021328075142e+00, 4.463448967588e+00, 5.425326979668e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.142430138324e4, 1.249426088864e4, 1.524331654876e3],
            [-1.021328075142, 4.463448967588, 5.425326979668e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034751395065e4, TOL));
    ok(isequalRel(a, 1.554675520265e4, TOL));
    ok(isequalRel(ecc, 5.782958886741e-1, TOL));
    ok(isequalRel(incl, 1.210466223817e-1, TOL));
    ok(isequalRel(omega, 6.279931700566, TOL));
    ok(isequalRel(argp, 4.806287301723, TOL));
    ok(isequalRel(nu, 2.313907266475, TOL));
    ok(isequalRel(m, 1.162257387001, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.652098673500e+03, 1.715384762075e+04, 2.090480383360e+03], [-1.844516637081e+00, 3.327522235010e+00, 4.039152320430e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.6520986735e3, 1.715384762075e4, 2.09048038336e3],
            [-1.844516637081, 3.32752223501, 4.03915232043e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.034929374632e4, TOL));
    ok(isequalRel(a, 1.554734621893e4, TOL));
    ok(isequalRel(ecc, 5.782187822181e-1, TOL));
    ok(isequalRel(incl, 1.210308797537e-1, TOL));
    ok(isequalRel(omega, 6.279649385493, TOL));
    ok(isequalRel(argp, 4.806776957363, TOL));
    ok(isequalRel(nu, 2.541333908517, TOL));
    ok(isequalRel(m, 1.553096911448, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[7.140419458837e+03, 2.053925485336e+04, 2.501214693678e+03], [-2.293173683869e+00, 2.333507911861e+00, 2.827163107973e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [7.140419458837e3, 2.053925485336e4, 2.501214693678e3],
            [-2.293173683869, 2.333507911861, 2.827163107973e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.035062457967e4, TOL));
    ok(isequalRel(a, 1.554767488099e4, TOL));
    ok(isequalRel(ecc, 5.781569290539e-1, TOL));
    ok(isequalRel(incl, 1.210212742714e-1, TOL));
    ok(isequalRel(omega, 6.279339536355, TOL));
    ok(isequalRel(argp, 4.807244569754, TOL));
    ok(isequalRel(nu, 2.718253536163, TOL));
    ok(isequalRel(m, 1.943958687704, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 24208
});

test("[-1.428919940414e+04, 3.946905530051e+04, 1.428628385914e+03], [-2.893205245166e+00, -1.045447840405e+00, 1.796342494877e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.428919940414e4, 3.946905530051e4, 1.428628385914e3],
            [-2.893205245166, -1.045447840405, 1.796342494877e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.202420440026e4, TOL));
    ok(isequalRel(a, 4.202450047533e4, TOL));
    ok(isequalRel(ecc, 2.654297752769e-3, TOL));
    ok(isequalRel(incl, 6.746713547547e-2, TOL));
    ok(isequalRel(omega, 1.390284310378, TOL));
    ok(isequalRel(argp, 5.456988606053, TOL));
    ok(isequalRel(nu, 1.355056725607, TOL));
    ok(isequalRel(m, 1.34987340699, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.222292014955e+04, 2.691625425799e+04, 2.468599965935e+03], [-1.973007929055e+00, -2.359335070868e+00, 1.025393763757e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.222292014955e4, 2.691625425799e4, 2.468599965935e3],
            [-1.973007929055, -2.359335070868, 1.025393763757e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.202420630509e4, TOL));
    ok(isequalRel(a, 4.202449796321e4, TOL));
    ok(isequalRel(ecc, 2.634424546089e-3, TOL));
    ok(isequalRel(incl, 6.747226240716e-2, TOL));
    ok(isequalRel(omega, 1.390302396353, TOL));
    ok(isequalRel(argp, 5.456563647548, TOL));
    ok(isequalRel(nu, 1.882982264873, TOL));
    ok(isequalRel(m, 1.87796504922, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.141395109398e+04, 7.055516566392e+03, 2.838909066712e+03], [-5.216650801119e-01, -3.029172206738e+00, -2.066843360971e-03], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.141395109398e4, 7.055516566392e3, 2.838909066712e3],
            [-5.216650801119e-1, -3.029172206738, -2.066843360971e-3],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.202421115887e4, TOL));
    ok(isequalRel(a, 4.202449916263e4, TOL));
    ok(isequalRel(ecc, 2.617868391905e-3, TOL));
    ok(isequalRel(incl, 6.747797881521e-2, TOL));
    ok(isequalRel(omega, 1.390305412787, TOL));
    ok(isequalRel(argp, 5.452449049868, TOL));
    ok(isequalRel(nu, 2.413251211721, TOL));
    ok(isequalRel(m, 2.409761022177, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.940272251896e+04, -1.471642475223e+04, 2.441326783576e+03], [1.066928187054e+00, -2.878714619433e+00, -1.058657290372e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.940272251896e4, -1.471642475223e4, 2.441326783576e3],
            [1.066928187054, -2.878714619433, -1.058657290372e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.20242214659e4, TOL));
    ok(isequalRel(a, 4.202450750642e4, TOL));
    ok(isequalRel(ecc, 2.608930185835e-3, TOL));
    ok(isequalRel(incl, 6.748489215469e-2, TOL));
    ok(isequalRel(omega, 1.390309924453, TOL));
    ok(isequalRel(argp, 5.445713492476, TOL));
    ok(isequalRel(nu, 2.945196393376, TOL));
    ok(isequalRel(m, 2.944176242933, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.675108889828e+04, -3.251513982431e+04, 1.384388655702e+03], [2.366228869377e+00, -1.951032799314e+00, -1.810184978888e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.675108889828e4, -3.251513982431e4, 1.384388655702e3],
            [2.366228869377, -1.951032799314, -1.810184978888e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.202423294443e4, TOL));
    ok(isequalRel(a, 4.202451924152e4, TOL));
    ok(isequalRel(ecc, 2.610099643301e-3, TOL));
    ok(isequalRel(incl, 6.749233650727e-2, TOL));
    ok(isequalRel(omega, 1.390331915677, TOL));
    ok(isequalRel(argp, 5.438115278041, TOL));
    ok(isequalRel(nu, 3.477711644804, TOL));
    ok(isequalRel(m, 3.479436587838, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-6.874779755423e+03, -4.153038329422e+04, -4.660245459036e+01], [3.027415086970e+00, -4.946711768357e-01, -2.073372596409e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-6.874779755423e3, -4.153038329422e4, -4.660245459036e1],
            [3.02741508697, -4.946711768357e-1, -2.073372596409e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.20242384692e4, TOL));
    ok(isequalRel(a, 4.20245272244e4, TOL));
    ok(isequalRel(ecc, 2.621280442174e-3, TOL));
    ok(isequalRel(incl, 6.749904350686e-2, TOL));
    ok(isequalRel(omega, 1.390370821119, TOL));
    ok(isequalRel(argp, 5.431788424788, TOL));
    ok(isequalRel(nu, 4.009403899752, TOL));
    ok(isequalRel(m, 4.013408618543, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.485952039042e+04, -3.930258907247e+04, -1.465024825241e+03], [2.869609883140e+00, 1.100123968605e+00, -1.775144249145e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.485952039042e4, -3.930258907247e4, -1.465024825241e3],
            [2.86960988314, 1.100123968605, -1.775144249145e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.202423525237e4, TOL));
    ok(isequalRel(a, 4.202452799757e4, TOL));
    ok(isequalRel(ecc, 2.639328633586e-3, TOL));
    ok(isequalRel(incl, 6.750440715797e-2, TOL));
    ok(isequalRel(omega, 1.390410024452, TOL));
    ok(isequalRel(argp, 5.4285759251, TOL));
    ok(isequalRel(nu, 4.539064512266, TOL));
    ok(isequalRel(m, 4.544265848486, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.255314863770e+04, -2.639888401807e+04, -2.485458660025e+03], [1.930064459104e+00, 2.401574539278e+00, -9.925051981728e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.25531486377e4, -2.639888401807e4, -2.485458660025e3],
            [1.930064459104, 2.401574539278, -9.925051981728e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.202422817146e4, TOL));
    ok(isequalRel(a, 4.202452530253e4, TOL));
    ok(isequalRel(ecc, 2.659026281401e-3, TOL));
    ok(isequalRel(incl, 6.750909820897e-2, TOL));
    ok(isequalRel(omega, 1.390433373509, TOL));
    ok(isequalRel(argp, 5.429302620204, TOL));
    ok(isequalRel(nu, 5.06621426086, TOL));
    ok(isequalRel(m, 5.071199432057, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.136567576837e+04, -6.298099658107e+03, -2.828052540329e+03], [4.597412761382e-01, 3.051680213909e+00, 6.431871844820e-03], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.136567576837e4, -6.298099658107e3, -2.828052540329e3],
            [4.597412761382e-1, 3.051680213909, 6.43187184482e-3],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.202422570363e4, TOL));
    ok(isequalRel(a, 4.2024526426e4, TOL));
    ok(isequalRel(ecc, 2.675047219934e-3, TOL));
    ok(isequalRel(incl, 6.751440133332e-2, TOL));
    ok(isequalRel(omega, 1.390441532965, TOL));
    ok(isequalRel(argp, 5.433608785465, TOL));
    ok(isequalRel(nu, 5.591159816614, TOL));
    ok(isequalRel(m, 5.594568433296, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.885883295070e+04, 1.552339314924e+04, -2.396868507516e+03], [-1.140211487947e+00, 2.867567143101e+00, 1.106372170646e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.88588329507e4, 1.552339314924e4, -2.396868507516e3],
            [-1.140211487947, 2.867567143101, 1.106372170646e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.202423218532e4, TOL));
    ok(isequalRel(a, 4.202453477188e4, TOL));
    ok(isequalRel(ecc, 2.683325530177e-3, TOL));
    ok(isequalRel(incl, 6.752090858804e-2, TOL));
    ok(isequalRel(omega, 1.390451535741, TOL));
    ok(isequalRel(argp, 5.440296821726, TOL));
    ok(isequalRel(nu, 6.11465517718, TOL));
    ok(isequalRel(m, 6.115553561464, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.570146068162e+04, 3.308942617648e+04, -1.308685566378e+03], [-2.428713821271e+00, 1.897381431097e+00, 1.846059074448e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.570146068162e4, 3.308942617648e4, -1.308685566378e3],
            [-2.428713821271, 1.897381431097, 1.846059074448e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.202424402721e4, TOL));
    ok(isequalRel(a, 4.202454622604e4, TOL));
    ok(isequalRel(ecc, 2.681605396723e-3, TOL));
    ok(isequalRel(incl, 6.752789848888e-2, TOL));
    ok(isequalRel(omega, 1.39047941194, TOL));
    ok(isequalRel(argp, 5.447658255289, TOL));
    ok(isequalRel(nu, 3.545203619987e-1, TOL));
    ok(isequalRel(m, 3.526620797908e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.501081370996e+03, 4.159027784405e+04, 1.383252292972e+02], [-3.050691874469e+00, 4.092030519613e-01, 2.079581327855e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.501081370996e3, 4.159027784405e4, 1.383252292972e2],
            [-3.050691874469, 4.092030519613e-1, 2.079581327855e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.202425373723e4, TOL));
    ok(isequalRel(a, 4.202455334581e4, TOL));
    ok(isequalRel(ecc, 2.670087967001e-3, TOL));
    ok(isequalRel(incl, 6.753406990777e-2, TOL));
    ok(isequalRel(omega, 1.390523588988, TOL));
    ok(isequalRel(argp, 5.453727122849, TOL));
    ok(isequalRel(nu, 8.783370687673e-1, TOL));
    ok(isequalRel(m, 8.742321032115e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 25954
});

test("[8.118185192210e+03, -4.136840537378e+04, 4.110466873304e+00], [3.017696740517e+00, 5.919942965821e-01, 9.330158220802e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.11818519221e3, -4.136840537378e4, 4.110466873304],
            [3.017696740517, 5.919942965821e-1, 9.330158220802e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216595065256e4, TOL));
    ok(isequalRel(a, 4.216595254584e4, TOL));
    ok(isequalRel(ecc, 2.118980881091e-4, TOL));
    ok(isequalRel(incl, 3.186747891837e-4, TOL));
    ok(isequalRel(omega, 4.595217728673, TOL));
    ok(isequalRel(argp, 1.478783746842e-3, TOL));
    ok(isequalRel(nu, 3.094712057265e-1, TOL));
    ok(isequalRel(m, 3.09342156015e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.776634015328e+04, -3.172497000557e+04, 9.932978462844e+00], [2.314236153117e+00, 2.024903192670e+00, 6.608611838850e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.776634015328e4, -3.172497000557e4, 9.932978462844],
            [2.314236153117, 2.02490319267, 6.60861183885e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.21659519455e4, TOL));
    ok(isequalRel(a, 4.21659536641e4, TOL));
    ok(isequalRel(ecc, 2.018857414327e-4, TOL));
    ok(isequalRel(incl, 3.188756402472e-4, TOL));
    ok(isequalRel(omega, 4.599971556554, TOL));
    ok(isequalRel(argp, 7.908485939916e-2, TOL));
    ok(isequalRel(nu, 7.522873900398e-1, TOL));
    ok(isequalRel(m, 7.520115191915e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.993257237973e+04, -1.353260040454e+04, 1.312958252292e+01], [9.873828187443e-01, 2.911942843401e+00, 2.132980788857e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.993257237973e4, -1.353260040454e4, 1.312958252292e1],
            [9.873828187443e-1, 2.911942843401, 2.132980788857e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216595333073e4, TOL));
    ok(isequalRel(a, 4.21659547801e4, TOL));
    ok(isequalRel(ecc, 1.853991043408e-4, TOL));
    ok(isequalRel(incl, 3.190199458752e-4, TOL));
    ok(isequalRel(omega, 4.604673191224, TOL));
    ok(isequalRel(argp, 1.306491048397e-1, TOL));
    ok(isequalRel(nu, 1.221123179806, TOL));
    ok(isequalRel(m, 1.220774837144, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.134101365441e+04, 8.305716819548e+03, 1.284988501152e+01], [-6.050982241921e-01, 3.014378268382e+00, -2.910335896563e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.134101365441e4, 8.305716819548e3, 1.284988501152e1],
            [-6.050982241921e-1, 3.014378268382, -2.910335896563e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216595473756e4, TOL));
    ok(isequalRel(a, 4.216595589569e4, TOL));
    ok(isequalRel(ecc, 1.657288742284e-4, TOL));
    ok(isequalRel(incl, 3.191155603197e-4, TOL));
    ok(isequalRel(omega, 4.609328696499, TOL));
    ok(isequalRel(argp, 1.363854505808e-1, TOL));
    ok(isequalRel(nu, 1.735739082203, TOL));
    ok(isequalRel(m, 1.735412116409, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.161499210558e+04, 2.790729155353e+04, 9.166187966821e+00], [-2.034243523452e+00, 2.305014101656e+00, -7.184181760693e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.161499210558e4, 2.790729155353e4, 9.166187966821],
            [-2.034243523452, 2.305014101656, -7.184181760693e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216595608938e4, TOL));
    ok(isequalRel(a, 4.216595701271e4, TOL));
    ok(isequalRel(ecc, 1.479780786326e-4, TOL));
    ok(isequalRel(incl, 3.191652005961e-4, TOL));
    ok(isequalRel(omega, 4.613951651914, TOL));
    ok(isequalRel(argp, 7.642855388953e-2, TOL));
    ok(isequalRel(nu, 2.315992652649, TOL));
    ok(isequalRel(m, 2.315775121884, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.337575227587e+04, 3.999427017651e+04, 3.054168543211e+00], [-2.915424365576e+00, 9.751198736627e-01, -9.555764871800e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.337575227587e4, 3.999427017651e4, 3.054168543211],
            [-2.915424365576, 9.751198736627e-1, -9.5557648718e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216595732435e4, TOL));
    ok(isequalRel(a, 4.21659581325e4, TOL));
    ok(isequalRel(ecc, 1.384411464309e-4, TOL));
    ok(isequalRel(incl, 3.191669120241e-4, TOL));
    ok(isequalRel(omega, 4.618545155951, TOL));
    ok(isequalRel(argp, 6.234112459455, TOL));
    ok(isequalRel(nu, 2.961761549236, TOL));
    ok(isequalRel(m, 2.961712020067, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.464899633091e+03, 4.131293549892e+04, -3.866229191080e+00], [-3.011600615036e+00, -6.172750497400e-01, -9.396644554174e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.464899633091e3, 4.131293549892e4, -3.86622919108],
            [-3.011600615036, -6.1727504974e-1, -9.396644554174e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216595841209e4, TOL));
    ok(isequalRel(a, 4.216595925566e4, TOL));
    ok(isequalRel(ecc, 1.414428690715e-4, TOL));
    ok(isequalRel(incl, 3.191192641083e-4, TOL));
    ok(isequalRel(omega, 4.623094016696, TOL));
    ok(isequalRel(argp, 6.089964924067, TOL));
    ok(isequalRel(nu, 3.626207835025, TOL));
    ok(isequalRel(m, 3.626339634777, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.802623406158e+04, 3.150789995661e+04, -9.760478685420e+00], [-2.296840159731e+00, -2.043607595250e+00, -6.748885938978e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.802623406158e4, 3.150789995661e4, -9.76047868542],
            [-2.296840159731, -2.04360759525, -6.748885938978e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216595936194e4, TOL));
    ok(isequalRel(a, 4.216596038199e4, TOL));
    ok(isequalRel(ecc, 1.555355900366e-4, TOL));
    ok(isequalRel(incl, 3.190261257866e-4, TOL));
    ok(isequalRel(omega, 4.627574826084, TOL));
    ok(isequalRel(argp, 5.992190534485, TOL));
    ok(isequalRel(nu, 4.244384461393, TOL));
    ok(isequalRel(m, 4.244662097773, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.004001314363e+04, 1.321800579413e+04, -1.306594831815e+01], [-9.633287718859e-01, -2.919827982597e+00, -2.314137180301e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.004001314363e4, 1.321800579413e4, -1.306594831815e1],
            [-9.633287718859e-1, -2.919827982597, -2.314137180301e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216596022044e4, TOL));
    ok(isequalRel(a, 4.216596151049e4, TOL));
    ok(isequalRel(ecc, 1.749131783852e-4, TOL));
    ok(isequalRel(incl, 3.18896304743e-4, TOL));
    ok(isequalRel(omega, 4.631973972808, TOL));
    ok(isequalRel(argp, 5.964750167514, TOL));
    ok(isequalRel(nu, 4.79238344272, TOL));
    ok(isequalRel(m, 4.792732146727, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.126843291976e+04, -8.632068596927e+03, -1.290661266416e+01], [6.300423153131e-01, -3.009677375944e+00, 2.731633096663e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.126843291976e4, -8.632068596927e3, -1.290661266416e1],
            [6.300423153131e-1, -3.009677375944, 2.731633096663e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216596105874e4, TOL));
    ok(isequalRel(a, 4.216596263959e4, TOL));
    ok(isequalRel(ecc, 1.936266716627e-4, TOL));
    ok(isequalRel(incl, 3.187383914215e-4, TOL));
    ok(isequalRel(omega, 4.636295811717, TOL));
    ok(isequalRel(argp, 5.994697629207, TOL));
    ok(isequalRel(nu, 5.283165782504, TOL));
    ok(isequalRel(m, 5.283491623474, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.137785317015e+04, -2.815613970334e+04, -9.326055295520e+00], [2.054021716822e+00, -2.288554158402e+00, 7.049590249212e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.137785317015e4, -2.815613970334e4, -9.32605529552],
            [2.054021716822, -2.288554158402, 7.049590249212e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216596195333e4, TOL));
    ok(isequalRel(a, 4.216596376743e4, TOL));
    ok(isequalRel(ecc, 2.074197220398e-4, TOL));
    ok(isequalRel(incl, 3.185559059128e-4, TOL));
    ok(isequalRel(omega, 4.640552886385, TOL));
    ok(isequalRel(argp, 6.060983526007, TOL));
    ok(isequalRel(nu, 5.737762198434, TOL));
    ok(isequalRel(m, 5.737977380162, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.303141552688e+04, -4.009233381029e+04, -3.276366600268e+00], [2.924657466185e+00, -9.505411665183e-01, 9.493811931623e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.303141552688e4, -4.009233381029e4, -3.276366600268],
            [2.924657466185, -9.505411665183e-1, 9.493811931623e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216596296547e4, TOL));
    ok(isequalRel(a, 4.216596489238e4, TOL));
    ok(isequalRel(ecc, 2.137717161693e-4, TOL));
    ok(isequalRel(incl, 3.18347543853e-4, TOL));
    ok(isequalRel(omega, 4.644747829877, TOL));
    ok(isequalRel(argp, 6.145630476664, TOL));
    ok(isequalRel(nu, 6.174117635266, TOL));
    ok(isequalRel(m, 6.17416416662, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.827156604721e+03, -4.122300971237e+04, 3.634829628582e+00], [3.007087318519e+00, 6.437013231315e-01, 9.416630000093e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.827156604721e3, -4.122300971237e4, 3.634829628582],
            [3.007087318519, 6.437013231315e-1, 9.416630000093e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216596412474e4, TOL));
    ok(isequalRel(a, 4.21659660136e4, TOL));
    ok(isequalRel(ecc, 2.116506173217e-4, TOL));
    ok(isequalRel(incl, 3.18112290449e-4, TOL));
    ok(isequalRel(omega, 4.648864867965, TOL));
    ok(isequalRel(argp, 6.23386959516, TOL));
    ok(isequalRel(nu, 3.237859936919e-1, TOL));
    ok(isequalRel(m, 3.236513372416e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.830685426674e+04, -3.124380147394e+04, 9.572168911755e+00], [2.279137743095e+00, 2.064316875309e+00, 6.841271481732e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.830685426674e4, -3.124380147394e4, 9.572168911755],
            [2.279137743095, 2.064316875309, 6.841271481732e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216596542112e4, TOL));
    ok(isequalRel(a, 4.216596713133e4, TOL));
    ok(isequalRel(ecc, 2.013927155994e-4, TOL));
    ok(isequalRel(incl, 3.178543256615e-4, TOL));
    ok(isequalRel(omega, 4.652879397164, TOL));
    ok(isequalRel(argp, 2.845542048775e-2, TOL));
    ok(isequalRel(nu, 7.671738094483e-1, TOL));
    ok(isequalRel(m, 7.668942650642e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.015905128805e+04, -1.284539151157e+04, 1.296086315922e+01], [9.372654224940e-01, 2.928448287383e+00, 2.455046084950e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.015905128805e4, -1.284539151157e4, 1.296086315922e1],
            [9.37265422494e-1, 2.928448287383, 2.45504608495e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216596680774e4, TOL));
    ok(isequalRel(a, 4.216596824685e4, TOL));
    ok(isequalRel(ecc, 1.847419205128e-4, TOL));
    ok(isequalRel(incl, 3.175828478037e-4, TOL));
    ok(isequalRel(omega, 4.656776172752, TOL));
    ok(isequalRel(argp, 7.96586246673e-2, TOL));
    ok(isequalRel(nu, 1.237171927001, TOL));
    ok(isequalRel(m, 1.236822831723, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.119255903455e+04, 9.013796067591e+03, 1.290495665506e+01], [-6.567274424695e-01, 3.003543457926e+00, -2.574794670483e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.119255903455e4, 9.013796067591e3, 1.290495665506e1],
            [-6.567274424695e-1, 3.003543457926, -2.574794670483e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.21659682134e4, TOL));
    ok(isequalRel(a, 4.216596936201e4, TOL));
    ok(isequalRel(ecc, 1.650458110166e-4, TOL));
    ok(isequalRel(incl, 3.173069792745e-4, TOL));
    ok(isequalRel(omega, 4.660558059844, TOL));
    ok(isequalRel(argp, 8.439006661432e-2, TOL));
    ok(isequalRel(nu, 1.753662603595, TOL));
    ok(isequalRel(m, 1.753338008449, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.113169755798e+04, 2.844555681731e+04, 9.424192384593e+00], [-2.073484841753e+00, 2.269770850704e+00, -6.912330785485e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.113169755798e4, 2.844555681731e4, 9.424192384593],
            [-2.073484841753, 2.269770850704, -6.912330785485e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216596956171e4, TOL));
    ok(isequalRel(a, 4.216597047865e4, TOL));
    ok(isequalRel(ecc, 1.474658285037e-4, TOL));
    ok(isequalRel(incl, 3.17030816765e-4, TOL));
    ok(isequalRel(omega, 4.664236665717, TOL));
    ok(isequalRel(argp, 2.299866983366e-2, TOL));
    ok(isequalRel(nu, 2.336291941255, TOL));
    ok(isequalRel(m, 2.33607926772, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.268781846530e+04, 4.021783324639e+04, 3.447262490826e+00], [-2.931721827058e+00, 9.249622300916e-01, -9.407662752301e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.26878184653e4, 4.021783324639e4, 3.447262490826],
            [-2.931721827058, 9.249622300916e-1, -9.407662752301e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216597079162e4, TOL));
    ok(isequalRel(a, 4.216597159812e4, TOL));
    ok(isequalRel(ecc, 1.382992296552e-4, TOL));
    ok(isequalRel(incl, 3.167535228624e-4, TOL));
    ok(isequalRel(omega, 4.667814160201, TOL));
    ok(isequalRel(argp, 6.180033398843, TOL));
    ok(isequalRel(nu, 2.98372427584, TOL));
    ok(isequalRel(m, 2.983680786387, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.172235002451e+03, 4.116163475527e+04, -3.435757567745e+00], [-3.000571486290e+00, -6.688475083905e-01, -9.401010291814e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.172235002451e3, 4.116163475527e4, -3.435757567745],
            [-3.00057148629, -6.688475083905e-1, -9.401010291814e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.2165971874e4, TOL));
    ok(isequalRel(a, 4.216597272097e4, TOL));
    ok(isequalRel(ecc, 1.417267990267e-4, TOL));
    ok(isequalRel(incl, 3.164743505259e-4, TOL));
    ok(isequalRel(omega, 4.671274318534, TOL));
    ok(isequalRel(argp, 6.037541048562, TOL));
    ok(isequalRel(nu, 3.647603983939, TOL));
    ok(isequalRel(m, 3.647741384485, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.856251093192e+04, 3.102245987587e+04, -9.395621609154e+00], [-2.261449201877e+00, -2.082713896673e+00, -6.896686839856e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.856251093192e4, 3.102245987587e4, -9.395621609154],
            [-2.261449201877, -2.082713896673, -6.896686839856e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216597281947e4, TOL));
    ok(isequalRel(a, 4.216597384694e4, TOL));
    ok(isequalRel(ecc, 1.560996564057e-4, TOL));
    ok(isequalRel(incl, 3.161976124932e-4, TOL));
    ok(isequalRel(omega, 4.674591679632, TOL));
    ok(isequalRel(argp, 5.943136035013, TOL));
    ok(isequalRel(nu, 4.263576124747, TOL));
    ok(isequalRel(m, 4.263857419013, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.026077504549e+04, 1.252911484344e+04, -1.284915105397e+01], [-9.130970307116e-01, -2.935933528373e+00, -2.561807220466e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.026077504549e4, 1.252911484344e4, -1.284915105397e1],
            [-9.130970307116e-1, -2.935933528373, -2.561807220466e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216597367563e4, TOL));
    ok(isequalRel(a, 4.216597497502e4, TOL));
    ok(isequalRel(ecc, 1.755451493936e-4, TOL));
    ok(isequalRel(incl, 3.159326663542e-4, TOL));
    ok(isequalRel(omega, 4.677749783766, TOL));
    ok(isequalRel(argp, 5.919139389542, TOL));
    ok(isequalRel(nu, 4.809374887, TOL));
    ok(isequalRel(m, 4.809724322911, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.111414376538e+04, -9.338871944829e+03, -1.287952403555e+01], [6.815888153116e-01, -2.998432564535e+00, 2.450055230930e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.111414376538e4, -9.338871944829e3, -1.287952403555e1],
            [6.815888153116e-1, -2.998432564535, 2.45005523093e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216597451411e4, TOL));
    ok(isequalRel(a, 4.216597610363e4, TOL));
    ok(isequalRel(ecc, 1.941563959538e-4, TOL));
    ok(isequalRel(incl, 3.156889206105e-4, TOL));
    ok(isequalRel(omega, 4.680750437803, TOL));
    ok(isequalRel(argp, 5.951940466509, TOL));
    ok(isequalRel(nu, 5.298627489863, TOL));
    ok(isequalRel(m, 5.298950939055, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.089001512240e+04, -2.869040750792e+04, -9.480372120172e+00], [2.092989804846e+00, -2.252978151538e+00, 6.804591920790e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.08900151224e4, -2.869040750792e4, -9.480372120172],
            [2.092989804846, -2.252978151538, 6.80459192079e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216597541125e4, TOL));
    ok(isequalRel(a, 4.216597723093e4, TOL));
    ok(isequalRel(ecc, 2.077379521664e-4, TOL));
    ok(isequalRel(incl, 3.154708023905e-4, TOL));
    ok(isequalRel(omega, 4.683604786317, TOL));
    ok(isequalRel(argp, 6.020505095896, TOL));
    ok(isequalRel(nu, 5.752349988353, TOL));
    ok(isequalRel(m, 5.752560296384, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.234146194020e+04, -4.031006316386e+04, -3.558332010069e+00], [2.940537098402e+00, -9.002195229492e-01, 9.341700563986e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.23414619402e4, -4.031006316386e4, -3.558332010069],
            [2.940537098402, -9.002195229492e-1, 9.341700563986e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216597642748e4, TOL));
    ok(isequalRel(a, 4.21659783553e4, TOL));
    ok(isequalRel(ecc, 2.138219808942e-4, TOL));
    ok(isequalRel(incl, 3.152776736311e-4, TOL));
    ok(isequalRel(omega, 4.686315011902, TOL));
    ok(isequalRel(argp, 6.106985180907, TOL));
    ok(isequalRel(nu, 6.188357826844, TOL));
    ok(isequalRel(m, 6.188398312032, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.533277508184e+03, -4.106552390214e+04, 3.307564821074e+00], [2.995596171266e+00, 6.952002362639e-01, 9.385247868216e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.533277508184e3, -4.106552390214e4, 3.307564821074],
            [2.995596171266, 6.952002362639e-1, 9.385247868216e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216597759114e4, TOL));
    ok(isequalRel(a, 4.216597947594e4, TOL));
    ok(isequalRel(ecc, 2.114225876523e-4, TOL));
    ok(isequalRel(incl, 3.151088026884e-4, TOL));
    ok(isequalRel(omega, 4.688864889893, TOL));
    ok(isequalRel(argp, 6.196678391158, TOL));
    ok(isequalRel(nu, 3.381384865579e-1, TOL));
    ok(isequalRel(m, 3.379982364464e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 26900
});

test("[4.096868133298e+04, -9.905991560862e+03, 1.184946837135e+01], [7.227568481246e-01, 2.989645389045e+00, -1.612610692444e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.096868133298e4, -9.905991560862e3, 1.184946837135e1],
            [7.227568481246e-1, 2.989645389045, -1.612610692444e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216479916545e4, TOL));
    ok(isequalRel(a, 4.21648049459e4, TOL));
    ok(isequalRel(ecc, 3.702590174409e-4, TOL));
    ok(isequalRel(incl, 2.859761363481e-4, TOL));
    ok(isequalRel(omega, 4.290808647498, TOL));
    ok(isequalRel(argp, 1.859715133037, TOL));
    ok(isequalRel(nu, 6.17860600833, TOL));
    ok(isequalRel(m, 6.178683288757, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.213566858481e+04, 1.072991956181e+03, 1.083481752324e+01], [-7.815060209714e-02, 3.074772455410e+00, -3.800629733523e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.213566858481e4, 1.072991956181e3, 1.083481752324e1],
            [-7.815060209714e-2, 3.07477245541, -3.800629733523e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216479631231e4, TOL));
    ok(isequalRel(a, 4.216480208865e4, TOL));
    ok(isequalRel(ecc, 3.701274097376e-4, TOL));
    ok(isequalRel(incl, 2.852203096038e-4, TOL));
    ok(isequalRel(omega, 4.289723014655, TOL));
    ok(isequalRel(argp, 1.887743170546, TOL));
    ok(isequalRel(nu, 1.311787735524e-1, TOL));
    ok(isequalRel(m, 1.310819727321e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.130475156132e+04, 8.398277429438e+03, 9.740062137489e+00], [-6.125151346766e-01, 3.014117469306e+00, -5.115749080507e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.130475156132e4, 8.398277429438e3, 9.740062137489],
            [-6.125151346766e-1, 3.014117469306, -5.115749080507e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216479444977e4, TOL));
    ok(isequalRel(a, 4.216480018294e4, TOL));
    ok(isequalRel(ecc, 3.687418981571e-4, TOL));
    ok(isequalRel(incl, 2.847302185133e-4, TOL));
    ok(isequalRel(omega, 4.289035493565, TOL));
    ok(isequalRel(argp, 1.906063990679, TOL));
    ok(isequalRel(nu, 2.886761651077e-1, TOL));
    ok(isequalRel(m, 2.884662713473e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 26975
});

test("[7.309621979505e+03, 6.076007136636e+03, 6.800087052633e+03], [1.300543382827e+00, 5.322579614806e+00, -4.788746312453e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [7.309621979505e3, 6.076007136636e3, 6.800087052633e3],
            [1.300543382827, 5.322579614806, -4.788746312453],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792951355547e4, TOL));
    ok(isequalRel(a, 2.61234307953e4, TOL));
    ok(isequalRel(ecc, 5.600550020529e-1, TOL));
    ok(isequalRel(incl, 1.195289008574, TOL));
    ok(isequalRel(omega, 4.120992912944, TOL));
    ok(isequalRel(argp, 2.160413069018, TOL));
    ok(isequalRel(nu, 3.055085867742e-1, TOL));
    ok(isequalRel(m, 7.218137586086e-2, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.882629337907e+03, 1.196000543452e+04, -2.508814383845e+04], [-2.146773699437e+00, -1.372461491451e+00, -2.579382089499e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.882629337907e3, 1.196000543452e4, -2.508814383845e4],
            [-2.146773699437, -1.372461491451, -2.579382089499],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792589029144e4, TOL));
    ok(isequalRel(a, 2.611709409444e4, TOL));
    ok(isequalRel(ecc, 5.600301892854e-1, TOL));
    ok(isequalRel(incl, 1.195245987323, TOL));
    ok(isequalRel(omega, 4.120974170498, TOL));
    ok(isequalRel(argp, 2.160235171072, TOL));
    ok(isequalRel(nu, 2.271836458316, TOL));
    ok(isequalRel(m, 1.149180531845, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.678545507465e+04, -7.347915970418e+02, -3.430057085853e+04], [-1.386528124537e+00, -1.907762640718e+00, -2.209496405435e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.678545507465e4, -7.347915970418e2, -3.430057085853e4],
            [-1.386528124537, -1.907762640718, -2.209496405435e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792492642513e4, TOL));
    ok(isequalRel(a, 2.611838817044e4, TOL));
    ok(isequalRel(ecc, 5.600934955264e-1, TOL));
    ok(isequalRel(incl, 1.195239577161, TOL));
    ok(isequalRel(omega, 4.120859694907, TOL));
    ok(isequalRel(argp, 2.160332162887, TOL));
    ok(isequalRel(nu, 2.816149153755, TOL));
    ok(isequalRel(m, 2.225783135424, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.352416689356e+04, -1.362945124622e+04, -3.024627899200e+04], [-4.628467838728e-01, -1.586139829514e+00, 1.269293624014e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.352416689356e4, -1.362945124622e4, -3.0246278992e4],
            [-4.628467838728e-1, -1.586139829514, 1.269293624014],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792673337459e4, TOL));
    ok(isequalRel(a, 2.611907401505e4, TOL));
    ok(isequalRel(ecc, 5.600478225224e-1, TOL));
    ok(isequalRel(incl, 1.195254164446, TOL));
    ok(isequalRel(omega, 4.120767169348, TOL));
    ok(isequalRel(argp, 2.160428590227, TOL));
    ok(isequalRel(nu, 3.196415647512, TOL));
    ok(isequalRel(m, 3.302439923089, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.289023597092e+04, -2.220935900155e+04, -1.676991946116e+04], [7.043513419348e-01, -6.711125944523e-01, 2.432433851330e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.289023597092e4, -2.220935900155e4, -1.676991946116e4],
            [7.043513419348e-1, -6.711125944523e-1, 2.43243385133],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792964169836e4, TOL));
    ok(isequalRel(a, 2.612002233322e4, TOL));
    ok(isequalRel(ecc, 5.599706577269e-1, TOL));
    ok(isequalRel(incl, 1.195275370447, TOL));
    ok(isequalRel(omega, 4.120695517686, TOL));
    ok(isequalRel(argp, 2.160370952139, TOL));
    ok(isequalRel(nu, 3.598925992357, TOL));
    ok(isequalRel(m, 4.379317682113, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.164639698980e+04, -1.985544222106e+04, 3.574001096073e+03], [2.626712727480e+00, 1.815887328921e+00, 2.960883901054e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.16463969898e4, -1.985544222106e4, 3.574001096073e3],
            [2.62671272748, 1.815887328921, 2.960883901054],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.793152168438e4, TOL));
    ok(isequalRel(a, 2.612355775718e4, TOL));
    ok(isequalRel(ecc, 5.599893485981e-1, TOL));
    ok(isequalRel(incl, 1.195284840674, TOL));
    ok(isequalRel(omega, 4.120665333603, TOL));
    ok(isequalRel(argp, 2.160179185121, TOL));
    ok(isequalRel(nu, 4.288678697633, TOL));
    ok(isequalRel(m, 5.456398759969, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[7.665761242415e+03, 1.115978946577e+04, 3.459381311655e+02], [-5.848180068327e-01, 3.193514161496e+00, -5.750338922301e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [7.665761242415e3, 1.115978946577e4, 3.459381311655e2],
            [-5.848180068327e-1, 3.193514161496, -5.750338922301],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.79324668787e4, TOL));
    ok(isequalRel(a, 2.612811182672e4, TOL));
    ok(isequalRel(ecc, 5.600638670535e-1, TOL));
    ok(isequalRel(incl, 1.195280420366, TOL));
    ok(isequalRel(omega, 4.120576008529, TOL));
    ok(isequalRel(argp, 2.160388322022, TOL));
    ok(isequalRel(nu, 9.537448265413e-1, TOL));
    ok(isequalRel(m, 2.497329415917e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-6.369353881120e+03, 1.020480073022e+04, -2.784452150384e+04], [-2.050573276137e+00, -1.582940542431e+00, -2.076075231976e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-6.36935388112e3, 1.020480073022e4, -2.784452150384e4],
            [-2.050573276137, -1.582940542431, -2.076075231976],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792665013164e4, TOL));
    ok(isequalRel(a, 2.611726475062e4, TOL));
    ok(isequalRel(ecc, 5.600082181346e-1, TOL));
    ok(isequalRel(incl, 1.195205820545, TOL));
    ok(isequalRel(omega, 4.120515227648, TOL));
    ok(isequalRel(argp, 2.160036374079, TOL));
    ok(isequalRel(nu, 2.389582311632, TOL));
    ok(isequalRel(m, 1.326850334671, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.834564763145e+04, -2.977766844301e+03, -3.439490760612e+04], [-1.243589864298e+00, -1.892050756677e+00, 6.037206113726e-02], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.834564763145e4, -2.977766844301e3, -3.439490760612e4],
            [-1.243589864298, -1.892050756677, 6.037206113726e-2],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792630962892e4, TOL));
    ok(isequalRel(a, 2.611851157885e4, TOL));
    ok(isequalRel(ecc, 5.600491118493e-1, TOL));
    ok(isequalRel(incl, 1.195204928464, TOL));
    ok(isequalRel(omega, 4.120405184646, TOL));
    ok(isequalRel(argp, 2.160156858553, TOL));
    ok(isequalRel(nu, 2.883301197419, TOL));
    ok(isequalRel(m, 2.403439199449, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.397974839255e+04, -1.543644139571e+04, -2.861650540218e+04], [-2.949734249687e-01, -1.482987916391e+00, 1.478255628364e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.397974839255e4, -1.543644139571e4, -2.861650540218e4],
            [-2.949734249687e-1, -1.482987916391, 1.478255628364],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792836993656e4, TOL));
    ok(isequalRel(a, 2.611914767216e4, TOL));
    ok(isequalRel(ecc, 5.599936084298e-1, TOL));
    ok(isequalRel(incl, 1.195220448537, TOL));
    ok(isequalRel(omega, 4.120316407952, TOL));
    ok(isequalRel(argp, 2.16023219823, TOL));
    ok(isequalRel(nu, 3.257500895422, TOL));
    ok(isequalRel(m, 3.480130621318, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.192197167880e+04, -2.285245147658e+04, -1.378485308485e+04], [9.454556285702e-01, -4.289409948304e-01, 2.596964377926e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.19219716788e4, -2.285245147658e4, -1.378485308485e4],
            [9.454556285702e-1, -4.289409948304e-1, 2.596964377926],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.793130212678e4, TOL));
    ok(isequalRel(a, 2.612031047667e4, TOL));
    ok(isequalRel(ecc, 5.599206562963e-1, TOL));
    ok(isequalRel(incl, 1.195241573917, TOL));
    ok(isequalRel(omega, 4.120249730486, TOL));
    ok(isequalRel(argp, 2.160141685126, TOL));
    ok(isequalRel(nu, 3.679624684616, TOL));
    ok(isequalRel(m, 4.557056318968, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.266438210307e+03, -1.721074590112e+04, 6.967955460702e+03], [3.082244068744e+00, 2.665881871564e+00, 2.712555075271e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.266438210307e3, -1.721074590112e4, 6.967955460702e3],
            [3.082244068744, 2.665881871564, 2.712555075271],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.793234389535e4, TOL));
    ok(isequalRel(a, 2.612400469837e4, TOL));
    ok(isequalRel(ecc, 5.599717319624e-1, TOL));
    ok(isequalRel(incl, 1.195238271799, TOL));
    ok(isequalRel(omega, 4.120230152243, TOL));
    ok(isequalRel(argp, 2.159993859342, TOL));
    ok(isequalRel(nu, 4.500602674831, TOL));
    ok(isequalRel(m, 5.634103189003, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[6.286854645346e+03, 1.380956328971e+04, -6.321606637811e+03], [-1.615964016220e+00, 1.383135376814e+00, -5.358719131848e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [6.286854645346e3, 1.380956328971e4, -6.321606637811e3],
            [-1.61596401622, 1.383135376814, -5.358719131848],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.793261272576e4, TOL));
    ok(isequalRel(a, 2.612291732668e4, TOL));
    ok(isequalRel(ecc, 5.599370292825e-1, TOL));
    ok(isequalRel(incl, 1.195229063274, TOL));
    ok(isequalRel(omega, 4.120158145334, TOL));
    ok(isequalRel(argp, 2.16014531465, TOL));
    ok(isequalRel(nu, 1.40763063129, TOL));
    ok(isequalRel(m, 4.275097677437e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.730875267877e+03, 8.244633443645e+03, -3.003992372791e+04], [-1.935622870559e+00, -1.724162071956e+00, -1.631224737529e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.730875267877e3, 8.244633443645e3, -3.003992372791e4],
            [-1.935622870559, -1.724162071956, -1.631224737529],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792744366756e4, TOL));
    ok(isequalRel(a, 2.611747838942e4, TOL));
    ok(isequalRel(ecc, 5.599861031042e-1, TOL));
    ok(isequalRel(incl, 1.195164383564, TOL));
    ok(isequalRel(omega, 4.120059832403, TOL));
    ok(isequalRel(argp, 2.159841087772, TOL));
    ok(isequalRel(nu, 2.491749272943, TOL));
    ok(isequalRel(m, 1.504537491082, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.973581883249e+04, -5.191765930066e+03, -3.416614974143e+04], [-1.097835529690e+00, -1.860148418240e+00, 3.244010498337e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.973581883249e4, -5.191765930066e3, -3.416614974143e4],
            [-1.09783552969, -1.86014841824, 3.244010498337e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792762985747e4, TOL));
    ok(isequalRel(a, 2.611860568248e4, TOL));
    ok(isequalRel(ecc, 5.600061902363e-1, TOL));
    ok(isequalRel(incl, 1.195167677079, TOL));
    ok(isequalRel(omega, 4.119953997208, TOL));
    ok(isequalRel(argp, 2.159970525926, TOL));
    ok(isequalRel(nu, 2.947772957086, TOL));
    ok(isequalRel(m, 2.581129241572, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.423273847703e+04, -1.711208243255e+04, -2.674288893252e+04], [-1.197861835825e-01, -1.364365316968e+00, 1.680220467576e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.423273847703e4, -1.711208243255e4, -2.674288893252e4],
            [-1.197861835825e-1, -1.364365316968, 1.680220467576],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792990514048e4, TOL));
    ok(isequalRel(a, 2.611922298493e4, TOL));
    ok(isequalRel(ecc, 5.599428934279e-1, TOL));
    ok(isequalRel(incl, 1.195184182731, TOL));
    ok(isequalRel(omega, 4.119868681266, TOL));
    ok(isequalRel(argp, 2.160022116815, TOL));
    ok(isequalRel(nu, 3.319721883918, TOL));
    ok(isequalRel(m, 3.657859039487, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.065445640708e+04, -2.318454386047e+04, -1.061155144716e+04], [1.209238112654e+00, -1.441696392120e-01, 2.748054938128e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.065445640708e4, -2.318454386047e4, -1.061155144716e4],
            [1.209238112654, -1.44169639212e-1, 2.748054938128],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.793280629729e4, TOL));
    ok(isequalRel(a, 2.612067806772e4, TOL));
    ok(isequalRel(ecc, 5.598778587657e-1, TOL));
    ok(isequalRel(incl, 1.195205112544, TOL));
    ok(isequalRel(omega, 4.119807355542, TOL));
    ok(isequalRel(argp, 2.159898390398, TOL));
    ok(isequalRel(nu, 3.768254456239, TOL));
    ok(isequalRel(m, 4.734833973902, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.337159889566e+03, -1.341046817244e+04, 9.870459492155e+03], [3.532753094539e+00, 3.772236461389e+00, 2.088424246740e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.337159889566e3, -1.341046817244e4, 9.870459492155e3],
            [3.532753094539, 3.772236461389, 2.08842424674],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.793248684818e4, TOL));
    ok(isequalRel(a, 2.612289835071e4, TOL));
    ok(isequalRel(ecc, 5.599408868531e-1, TOL));
    ok(isequalRel(incl, 1.195179977485, TOL));
    ok(isequalRel(omega, 4.119794106969, TOL));
    ok(isequalRel(argp, 2.159863545929, TOL));
    ok(isequalRel(nu, 4.78776839572, TOL));
    ok(isequalRel(m, 5.81176994113, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.074622635232e+03, 1.469807548285e+04, -1.224865327973e+04], [-2.053824693038e+00, 2.033258168449e-01, -4.607867718000e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.074622635232e3, 1.469807548285e4, -1.224865327973e4],
            [-2.053824693038, 2.033258168449e-1, -4.607867718],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.793215920247e4, TOL));
    ok(isequalRel(a, 2.611909737513e4, TOL));
    ok(isequalRel(ecc, 5.598628789548e-1, TOL));
    ok(isequalRel(incl, 1.195167906001, TOL));
    ok(isequalRel(omega, 4.119720639147, TOL));
    ok(isequalRel(argp, 2.159803737926, TOL));
    ok(isequalRel(nu, 1.720153608349, TOL));
    ok(isequalRel(m, 6.053832396828e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.095023438984e+04, 6.148668794467e+03, -3.173665532865e+04], [-1.809875605115e+00, -1.816179061757e+00, -1.233364913036e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.095023438984e4, 6.148668794467e3, -3.173665532865e4],
            [-1.809875605115, -1.816179061757, -1.233364913036],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792823466685e4, TOL));
    ok(isequalRel(a, 2.611768372773e4, TOL));
    ok(isequalRel(ecc, 5.599638794879e-1, TOL));
    ok(isequalRel(incl, 1.195122638123, TOL));
    ok(isequalRel(omega, 4.119606473106, TOL));
    ok(isequalRel(argp, 2.15964447459, TOL));
    ok(isequalRel(nu, 2.582573301986, TOL));
    ok(isequalRel(m, 1.68225207098, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.095240702045e+04, -7.358715078949e+03, -3.363306643074e+04], [-9.489730308932e-01, -1.813594137221e+00, 5.738930782394e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.095240702045e4, -7.358715078949e3, -3.363306643074e4],
            [-9.489730308932e-1, -1.813594137221, 5.738930782394e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.792887175955e4, TOL));
    ok(isequalRel(a, 2.611867574376e4, TOL));
    ok(isequalRel(ecc, 5.599653791676e-1, TOL));
    ok(isequalRel(incl, 1.195129285721, TOL));
    ok(isequalRel(omega, 4.119504434385, TOL));
    ok(isequalRel(argp, 2.159772903721, TOL));
    ok(isequalRel(nu, 3.010336368451, TOL));
    ok(isequalRel(m, 2.758858172723, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.427348944134e+04, -1.863715546906e+04, -2.463327702390e+04], [6.416143974375e-02, -1.228537559549e+00, 1.875728934609e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.427348944134e4, -1.863715546906e4, -2.46332770239e4],
            [6.416143974375e-2, -1.228537559549, 1.875728934609],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.793132637869e4, TOL));
    ok(isequalRel(a, 2.611930804509e4, TOL));
    ok(isequalRel(ecc, 5.598962994359e-1, TOL));
    ok(isequalRel(incl, 1.195146874142, TOL));
    ok(isequalRel(omega, 4.119422363288, TOL));
    ok(isequalRel(argp, 2.159798510035, TOL));
    ok(isequalRel(nu, 3.383730187939, TOL));
    ok(isequalRel(m, 3.835629480898, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.905755468077e+04, -2.314829322082e+04, -7.269386141784e+03], [1.500802808575e+00, 1.953830370764e-01, 2.879031236996e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.905755468077e4, -2.314829322082e4, -7.269386141784e3],
            [1.500802808575, 1.953830370764e-1, 2.879031236996],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.793412895363e4, TOL));
    ok(isequalRel(a, 2.612114924538e4, TOL));
    ok(isequalRel(ecc, 5.598436970652e-1, TOL));
    ok(isequalRel(incl, 1.195167259949, TOL));
    ok(isequalRel(omega, 4.119366981451, TOL));
    ok(isequalRel(argp, 2.159642763602, TOL));
    ok(isequalRel(nu, 3.867476885835, TOL));
    ok(isequalRel(m, 4.912653141722, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.369305307820e+01, -8.145902992073e+03, 1.163457079913e+04], [3.780661682427e+00, 5.105315423410e+00, 7.144013445774e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.36930530782e1, -8.145902992073e3, 1.163457079913e4],
            [3.780661682427, 5.10531542341, 7.144013445774e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.793181615959e4, TOL));
    ok(isequalRel(a, 2.611781005175e4, TOL));
    ok(isequalRel(ecc, 5.598443873674e-1, TOL));
    ok(isequalRel(incl, 1.195110429076, TOL));
    ok(isequalRel(omega, 4.119342430349, TOL));
    ok(isequalRel(argp, 2.159770939903, TOL));
    ok(isequalRel(nu, 5.200514292271, TOL));
    ok(isequalRel(m, 5.989404621744, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 28057
});

test("[-1.816879209419e+03, -1.835787621322e+03, 6.661079264647e+03], [2.325140070634e+00, 6.655669328664e+00, 2.463394511576e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.816879209419e3, -1.835787621322e3, 6.661079264647e3],
            [2.325140070634, 6.655669328664, 2.463394511576],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.141718578245e3, TOL));
    ok(isequalRel(a, 7.141722419562e3, TOL));
    ok(isequalRel(ecc, 7.33396156979e-4, TOL));
    ok(isequalRel(incl, 1.71797070208, TOL));
    ok(isequalRel(omega, 4.324473586508, TOL));
    ok(isequalRel(argp, 3.317997763547, TOL));
    ok(isequalRel(nu, 4.195374323083, TOL));
    ok(isequalRel(m, 4.196649750355, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.483173642905e+03, 5.395212487860e+03, 4.448659071715e+03], [2.560540387224e+00, 4.039025765878e+00, -5.736648561317e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.483173642905e3, 5.39521248786e3, 4.448659071715e3],
            [2.560540387224, 4.039025765878, -5.736648561317],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.150621710201e3, TOL));
    ok(isequalRel(a, 7.150634302307e3, TOL));
    ok(isequalRel(ecc, 1.327018230815e-3, TOL));
    ok(isequalRel(incl, 1.717878366281, TOL));
    ok(isequalRel(omega, 4.326046671561, TOL));
    ok(isequalRel(argp, 1.133855641863, TOL));
    ok(isequalRel(nu, 1.32730644031, TOL));
    ok(isequalRel(m, 1.324731309901, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.801256071573e+03, 5.455039313331e+03, -3.692128656945e+03], [-5.950958644238e-01, -3.951923117077e+00, -6.298799125078e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.801256071573e3, 5.455039313331e3, -3.692128656945e3],
            [-5.950958644238e-1, -3.951923117077, -6.298799125078],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.152853446878e3, TOL));
    ok(isequalRel(a, 7.152859496197e3, TOL));
    ok(isequalRel(ecc, 9.196305043762e-4, TOL));
    ok(isequalRel(incl, 1.717855145874, TOL));
    ok(isequalRel(omega, 4.327290487836, TOL));
    ok(isequalRel(argp, 1.232891867606, TOL));
    ok(isequalRel(nu, 2.457233819566, TOL));
    ok(isequalRel(m, 2.456070460641, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.110933281184e+02, -1.728997691520e+03, -6.935455488101e+03], [-2.935970964045e+00, -6.684085057511e+00, 1.492800885516e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.110933281184e2, -1.72899769152e3, -6.935455488101e3],
            [-2.935970964045, -6.684085057511, 1.492800885516],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.140417618296e3, TOL));
    ok(isequalRel(a, 7.140468571099e3, TOL));
    ok(isequalRel(ecc, 2.671287814371e-3, TOL));
    ok(isequalRel(incl, 1.717983939705, TOL));
    ok(isequalRel(omega, 4.328833121434, TOL));
    ok(isequalRel(argp, 1.750558980215, TOL));
    ok(isequalRel(nu, 3.165700582569, TOL));
    ok(isequalRel(m, 3.16582962693, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.506525584538e+03, -6.628986550942e+03, -9.880778449704e+02], [-1.390577188722e+00, -5.561641428183e-01, 7.312736467784e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.506525584538e3, -6.628986550942e3, -9.880778449704e2],
            [-1.390577188722, -5.561641428183e-1, 7.312736467784],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.157424311799e3, TOL));
    ok(isequalRel(a, 7.157431895845e3, TOL));
    ok(isequalRel(ecc, 1.029370833968e-3, TOL));
    ok(isequalRel(incl, 1.717807849964, TOL));
    ok(isequalRel(omega, 4.330242498707, TOL));
    ok(isequalRel(argp, 1.178702693285, TOL));
    ok(isequalRel(nu, 4.964434733801, TOL));
    ok(isequalRel(m, 4.966428043901, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.090798842662e+03, -2.723228321928e+03, 6.266133565761e+03], [1.992640665061e+00, 6.337529519479e+00, 3.411803080481e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.090798842662e3, -2.723228321928e3, 6.266133565761e3],
            [1.992640665061, 6.337529519479, 3.411803080481],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.143568533752e3, TOL));
    ok(isequalRel(a, 7.143574135655e3, TOL));
    ok(isequalRel(ecc, 8.855437590308e-4, TOL));
    ok(isequalRel(incl, 1.717951505755, TOL));
    ok(isequalRel(omega, 4.331559363916, TOL));
    ok(isequalRel(argp, 2.89817635743, TOL));
    ok(isequalRel(nu, 4.47488688995, TOL));
    ok(isequalRel(m, 4.476608529551, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.091805602223e+03, 4.809882295025e+03, 5.172428978938e+03], [2.717483545732e+00, 4.805518976627e+00, -5.030019896091e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.091805602223e3, 4.809882295025e3, 5.172428978938e3],
            [2.717483545732, 4.805518976627, -5.030019896091],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.148100359571e3, TOL));
    ok(isequalRel(a, 7.14811062623e3, TOL));
    ok(isequalRel(ecc, 1.198447314706e-3, TOL));
    ok(isequalRel(incl, 1.71790450307, TOL));
    ok(isequalRel(omega, 4.333152345283, TOL));
    ok(isequalRel(argp, 8.672496961041e-1, TOL));
    ok(isequalRel(nu, 1.453658925869, TOL));
    ok(isequalRel(m, 1.451278707145, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.811140622996e+03, 5.950657071710e+03, -2.813237053894e+03], [-1.596627418235e-01, -3.121215491213e+00, -6.775341949332e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.811140622996e3, 5.95065707171e3, -2.813237053894e3],
            [-1.596627418235e-1, -3.121215491213, -6.775341949332],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.154917463977e3, TOL));
    ok(isequalRel(a, 7.154921986789e3, TOL));
    ok(isequalRel(ecc, 7.950634398042e-4, TOL));
    ok(isequalRel(incl, 1.717833781474, TOL));
    ok(isequalRel(omega, 4.334409529965, TOL));
    ok(isequalRel(argp, 1.544842993995, TOL));
    ok(isequalRel(nu, 2.005371775591, TOL));
    ok(isequalRel(m, 2.00392909074, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.057269830432e+02, -8.121662790683e+02, -7.067584839683e+03], [-2.798936019759e+00, -6.889265977002e+00, 4.727708725617e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.057269830432e2, -8.121662790683e2, -7.067584839683e3],
            [-2.798936019759, -6.889265977002, 4.727708725617e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.139750086413e3, TOL));
    ok(isequalRel(a, 7.139804854091e3, TOL));
    ok(isequalRel(ecc, 2.769612384846e-3, TOL));
    ok(isequalRel(incl, 1.717990854273, TOL));
    ok(isequalRel(omega, 4.335911499899, TOL));
    ok(isequalRel(argp, 1.626204945547, TOL));
    ok(isequalRel(nu, 3.150346841263, TOL));
    ok(isequalRel(m, 3.150395432965, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.249598375316e+03, -6.505848907139e+03, -1.956723650620e+03], [-1.731234728779e+00, -1.528750230335e+00, 7.096660884765e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.249598375316e3, -6.505848907139e3, -1.95672365062e3],
            [-1.731234728779, -1.528750230335, 7.096660884765],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.156393071442e3, TOL));
    ok(isequalRel(a, 7.156398336245e3, TOL));
    ok(isequalRel(ecc, 8.577165476244e-4, TOL));
    ok(isequalRel(incl, 1.717818513198, TOL));
    ok(isequalRel(omega, 4.337370461388, TOL));
    ok(isequalRel(argp, 1.308603315714, TOL));
    ok(isequalRel(nu, 4.694534930147, TOL));
    ok(isequalRel(m, 4.696250109326, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.311573757974e+03, -3.560991128912e+03, 5.748167495996e+03], [1.626569751194e+00, 5.890482233105e+00, 4.293545047748e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.311573757974e3, -3.560991128912e3, 5.748167495996e3],
            [1.626569751194, 5.890482233105, 4.293545047748],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.145822839365e3, TOL));
    ok(isequalRel(a, 7.145830676271e3, TOL));
    ok(isequalRel(ecc, 1.047239373767e-3, TOL));
    ok(isequalRel(incl, 1.717928119633, TOL));
    ok(isequalRel(omega, 4.338651224867, TOL));
    ok(isequalRel(argp, 2.545409641133, TOL));
    ok(isequalRel(nu, 4.68736097192, TOL));
    ok(isequalRel(m, 4.689454835484, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[6.881605659366e+02, 4.124876189636e+03, 5.794559944490e+03], [2.810973664728e+00, 5.479585562882e+00, -4.224866315922e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [6.881605659366e2, 4.124876189636e3, 5.79455994449e3],
            [2.810973664728, 5.479585562882, -4.224866315922],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.145628919875e3, TOL));
    ok(isequalRel(a, 7.14563674042e3, TOL));
    ok(isequalRel(ecc, 1.04615986668e-3, TOL));
    ok(isequalRel(incl, 1.71793012946, TOL));
    ok(isequalRel(omega, 4.340250631274, TOL));
    ok(isequalRel(argp, 5.622660715883e-1, TOL));
    ok(isequalRel(nu, 1.618368989317, TOL));
    ok(isequalRel(m, 1.616278959159, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.759940882296e+03, 6.329872717980e+03, -1.879195183309e+03], [2.669306724043e-01, -2.222670877521e+00, -7.119390566961e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.759940882296e3, 6.32987271798e3, -1.879195183309e3],
            [2.669306724043e-1, -2.222670877521, -7.119390566961],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.15650030389e3, TOL));
    ok(isequalRel(a, 7.156505661966e3, TOL));
    ok(isequalRel(ecc, 8.652745849065e-4, TOL));
    ok(isequalRel(incl, 1.717817401239, TOL));
    ok(isequalRel(omega, 4.341533951701, TOL));
    ok(isequalRel(argp, 1.834498175459, TOL));
    ok(isequalRel(nu, 1.575763395697, TOL));
    ok(isequalRel(m, 1.574032862513, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.171506771373e+03, 1.258205374764e+02, -7.061966262020e+03], [-2.605687852250e+00, -6.958489748881e+00, -5.563332247578e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.171506771373e3, 1.258205374764e2, -7.06196626202e3],
            [-2.60568785225, -6.958489748881, -5.563332247578e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.139778452093e3, TOL));
    ok(isequalRel(a, 7.139833083855e3, TOL));
    ok(isequalRel(ecc, 2.766168153711e-3, TOL));
    ok(isequalRel(incl, 1.717990557279, TOL));
    ok(isequalRel(omega, 4.342988939431, TOL));
    ok(isequalRel(argp, 1.500018886999, TOL));
    ok(isequalRel(nu, 3.136831201507, TOL));
    ok(isequalRel(m, 3.136804804902, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.951437084725e+03, -6.251719458202e+03, -2.886954723550e+03], [-2.024131482542e+00, -2.475214272154e+00, 6.741537478137e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.951437084725e3, -6.251719458202e3, -2.88695472355e3],
            [-2.024131482542, -2.475214272154, 6.741537478137],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.154765333506e3, TOL));
    ok(isequalRel(a, 7.154769873344e3, TOL));
    ok(isequalRel(ecc, 7.9656708452e-4, TOL));
    ok(isequalRel(incl, 1.717835352548, TOL));
    ok(isequalRel(omega, 4.344494501342, TOL));
    ok(isequalRel(argp, 1.606955727435, TOL));
    ok(isequalRel(nu, 4.256230709275, TOL));
    ok(isequalRel(m, 4.257661324079, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.475707222879e+03, -4.331905699582e+03, 5.117312349244e+03], [1.235823538829e+00, 5.322743370812e+00, 5.091281211251e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.475707222879e3, -4.331905699582e3, 5.117312349244e3],
            [1.235823538829, 5.322743370812, 5.091281211251],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.148305117128e3, TOL));
    ok(isequalRel(a, 7.148315425562e3, TOL));
    ok(isequalRel(ecc, 1.200865835031e-3, TOL));
    ok(isequalRel(incl, 1.717902375593, TOL));
    ok(isequalRel(omega, 4.3457501023, TOL));
    ok(isequalRel(argp, 2.242364113581, TOL));
    ok(isequalRel(nu, 4.85013427642, TOL));
    ok(isequalRel(m, 4.852512964413, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.814609784741e+02, 3.353510571023e+03, 6.302879006502e+03], [2.840647273466e+00, 6.047222485034e+00, -3.337085992421e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.814609784741e2, 3.353510571023e3, 6.302879006502e3],
            [2.840647273466, 6.047222485034, -3.337085992421],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.143400674471e3, TOL));
    ok(isequalRel(a, 7.143406287288e3, TOL));
    ok(isequalRel(ecc, 8.864163207241e-4, TOL));
    ok(isequalRel(incl, 1.717953239952, TOL));
    ok(isequalRel(omega, 4.347341959125, TOL));
    ok(isequalRel(argp, 2.084127483635e-1, TOL));
    ok(isequalRel(nu, 1.831932871163, TOL));
    ok(isequalRel(m, 1.830219848756, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.650331188597e+03, 6.584334348513e+03, -9.082902713431e+02], [6.754572353940e-01, -1.274044971616e+00, -7.323921566628e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.650331188597e3, 6.584334348513e3, -9.082902713431e2],
            [6.75457235394e-1, -1.274044971616, -7.323921566628],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.157478226552e3, TOL));
    ok(isequalRel(a, 7.157485952956e3, TOL));
    ok(isequalRel(ecc, 1.038983051778e-3, TOL));
    ok(isequalRel(incl, 1.717807284127, TOL));
    ok(isequalRel(omega, 4.348662154336, TOL));
    ok(isequalRel(argp, 1.953957891234, TOL));
    ok(isequalRel(nu, 1.316307731762, TOL));
    ok(isequalRel(m, 1.314297087223, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.501172265975e+03, 1.066311327559e+03, -6.918714729524e+03], [-2.361891904359e+00, -6.889669973793e+00, -1.574718619163e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.501172265975e3, 1.066311327559e3, -6.918714729524e3],
            [-2.361891904359, -6.889669973793, -1.574718619163],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.140500466458e3, TOL));
    ok(isequalRel(a, 7.140551036469e3, TOL));
    ok(isequalRel(ecc, 2.661219266844e-3, TOL));
    ok(isequalRel(incl, 1.717983072089, TOL));
    ok(isequalRel(omega, 4.350067486282, TOL));
    ok(isequalRel(argp, 1.37585075351, TOL));
    ok(isequalRel(nu, 3.12129580875, TOL));
    ok(isequalRel(m, 3.121187571518, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.619734683344e+03, -5.871140519913e+03, -3.760565870714e+03], [-2.264093974624e+00, -3.376316601072e+00, 6.254622256152e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.619734683344e3, -5.871140519913e3, -3.760565870714e3],
            [-2.264093974624, -3.376316601072, 6.254622256152],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.152668331048e3, TOL));
    ok(isequalRel(a, 7.152674553286e3, TOL));
    ok(isequalRel(ecc, 9.326937609175e-4, TOL));
    ok(isequalRel(incl, 1.717857052923, TOL));
    ok(isequalRel(omega, 4.351613050167, TOL));
    ok(isequalRel(argp, 1.914001407506, TOL));
    ok(isequalRel(nu, 3.809280071246, TOL));
    ok(isequalRel(m, 3.810435701051, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.581042025049e+03, -5.020055725306e+03, 4.385923290467e+03], [8.296684584055e-01, 4.645048038434e+00, 5.789262667122e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.581042025049e3, -5.020055725306e3, 4.385923290467e3],
            [8.296684584055e-1, 4.645048038434, 5.789262667122],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.150821180639e3, TOL));
    ok(isequalRel(a, 7.150833824018e3, TOL));
    ok(isequalRel(ecc, 1.32969870234e-3, TOL));
    ok(isequalRel(incl, 1.717876288328, TOL));
    ok(isequalRel(omega, 4.35285637888, TOL));
    ok(isequalRel(argp, 1.978021685182, TOL));
    ok(isequalRel(nu, 4.974229143065, TOL));
    ok(isequalRel(m, 4.976797231949, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.192208062753e+02, 2.510906204877e+03, 6.687456154588e+03], [2.807575711633e+00, 6.496549689314e+00, -2.384136660660e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.192208062753e2, 2.510906204877e3, 6.687456154588e3],
            [2.807575711633, 6.496549689314, -2.38413666066],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.14158987929e3, TOL));
    ok(isequalRel(a, 7.141593748617e3, TOL));
    ok(isequalRel(ecc, 7.360717491391e-4, TOL));
    ok(isequalRel(incl, 1.717972024558, TOL));
    ok(isequalRel(omega, 4.354427304219, TOL));
    ok(isequalRel(argp, 6.072391012382, TOL));
    ok(isequalRel(nu, 2.110838769814, TOL));
    ok(isequalRel(m, 2.109575773273, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.486238067258e+03, 6.708182100279e+03, 8.043349580657e+01], [1.057274904698e+00, -2.942940273652e-01, -7.384689123310e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.486238067258e3, 6.708182100279e3, 8.043349580657e1],
            [1.057274904698, -2.942940273652e-1, -7.38468912331],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.15777449771e3, TOL));
    ok(isequalRel(a, 7.157785139308e3, TOL));
    ok(isequalRel(ecc, 1.219309889156e-3, TOL));
    ok(isequalRel(incl, 1.717804223356, TOL));
    ok(isequalRel(omega, 4.355792242583, TOL));
    ok(isequalRel(argp, 1.938293636228, TOL));
    ok(isequalRel(nu, 1.191933899729, TOL));
    ok(isequalRel(m, 1.18966897886, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.788423345804e+03, 1.990505309570e+03, -6.640593377252e+03], [-2.074169090639e+00, -6.683381288034e+00, -2.562777775602e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.788423345804e3, 1.99050530957e3, -6.640593377252e3],
            [-2.074169090639, -6.683381288034, -2.562777775602],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 7.141860294622e3, TOL));
    ok(isequalRel(a, 7.141903592606e3, TOL));
    ok(isequalRel(ecc, 2.462219959731e-3, TOL));
    ok(isequalRel(incl, 1.717968978639, TOL));
    ok(isequalRel(omega, 4.35714910111, TOL));
    ok(isequalRel(argp, 1.258123301354, TOL));
    ok(isequalRel(nu, 3.099310142526, TOL));
    ok(isequalRel(m, 3.099101602196, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 28129
});

test("[1.861675971861e+04, 3.166151770435e+03, 1.883341523210e+04], [-2.076122016210e+00, 2.838457575004e+00, 1.586210534951e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.861675971861e4, 3.166151770435e3, 1.88334152321e4],
            [-2.07612201621, 2.838457575004, 1.586210534951],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.655906129918e4, TOL));
    ok(isequalRel(a, 2.655963328169e4, TOL));
    ok(isequalRel(ecc, 4.640666248398e-3, TOL));
    ok(isequalRel(incl, 9.551696494031e-1, TOL));
    ok(isequalRel(omega, 5.668614168392, TOL));
    ok(isequalRel(argp, 4.640185603163, TOL));
    ok(isequalRel(nu, 2.688053122763, TOL));
    ok(isequalRel(m, 2.683973751649, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.006505963285e+03, 1.852220742011e+04, 1.894184078154e+04], [-3.375452789384e+00, 1.032680772586e+00, -1.559324534308e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.006505963285e3, 1.852220742011e4, 1.894184078154e4],
            [-3.375452789384, 1.032680772586, -1.559324534308],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.655903130211e4, TOL));
    ok(isequalRel(a, 2.655960264513e4, TOL));
    ok(isequalRel(ecc, 4.638074038857e-3, TOL));
    ok(isequalRel(incl, 9.551707290094e-1, TOL));
    ok(isequalRel(omega, 5.668507349554, TOL));
    ok(isequalRel(argp, 4.652399020257, TOL));
    ok(isequalRel(nu, 3.716820103224, TOL));
    ok(isequalRel(m, 3.721881328029, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.160702086957e+04, 1.543259962630e+04, 2.066247030937e+02], [-1.306049851047e+00, -1.817011568223e+00, -3.163725018401e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.160702086957e4, 1.54325996263e4, 2.066247030937e2],
            [-1.306049851047, -1.817011568223, -3.163725018401],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.65615427005e4, TOL));
    ok(isequalRel(a, 2.656211191488e4, TOL));
    ok(isequalRel(ecc, 4.629207297044e-3, TOL));
    ok(isequalRel(incl, 9.552056500981e-1, TOL));
    ok(isequalRel(omega, 5.668469932355, TOL));
    ok(isequalRel(argp, 4.634741971742, TOL));
    ok(isequalRel(nu, 4.780504691011, TOL));
    ok(isequalRel(m, 4.789739420407, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.845306134549e+04, -3.150832561335e+03, -1.868583030936e+04], [2.106017925296e+00, -2.860236336534e+00, -1.586151870247e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.845306134549e4, -3.150832561335e3, -1.868583030936e4],
            [2.106017925296, -2.860236336534, -1.586151870247],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.65590615237e4, TOL));
    ok(isequalRel(a, 2.655962638967e4, TOL));
    ok(isequalRel(ecc, 4.611707205141e-3, TOL));
    ok(isequalRel(incl, 9.551741000484e-1, TOL));
    ok(isequalRel(omega, 5.668433882848, TOL));
    ok(isequalRel(argp, 4.652103088794, TOL));
    ok(isequalRel(nu, 5.818459689103, TOL));
    ok(isequalRel(m, 5.822580667009, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.425117423839e+03, -1.851473232706e+04, -1.858867200557e+04], [3.394666339720e+00, -1.003072029950e+00, 1.610061294673e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.425117423839e3, -1.851473232706e4, -1.858867200557e4],
            [3.39466633972, -1.00307202995, 1.610061294673],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.655908879815e4, TOL));
    ok(isequalRel(a, 2.655965482359e4, TOL));
    ok(isequalRel(ecc, 4.616435403522e-3, TOL));
    ok(isequalRel(incl, 9.551759787097e-1, TOL));
    ok(isequalRel(omega, 5.668326774367, TOL));
    ok(isequalRel(argp, 4.640055446068, TOL));
    ok(isequalRel(nu, 6.068134805952e-1, TOL));
    ok(isequalRel(m, 6.015633540021e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.185823838149e+04, -1.510151661554e+04, 3.873451704808e+02], [1.247973967427e+00, 1.856017402747e+00, 3.161439947612e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.185823838149e4, -1.510151661554e4, 3.873451704808e2],
            [1.247973967427, 1.856017402747, 3.161439947612],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.65615423813e4, TOL));
    ok(isequalRel(a, 2.65621096174e4, TOL));
    ok(isequalRel(ecc, 4.621156197662e-3, TOL));
    ok(isequalRel(incl, 9.552101797902e-1, TOL));
    ok(isequalRel(omega, 5.668291566026, TOL));
    ok(isequalRel(argp, 4.657695666441, TOL));
    ok(isequalRel(nu, 1.643346322335, TOL));
    ok(isequalRel(m, 1.634126039048, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.836069935796e+04, 3.506552567622e+03, 1.902481678979e+04], [-2.122684183899e+00, 2.830618604699e+00, 1.537510676810e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.836069935796e4, 3.506552567622e3, 1.902481678979e4],
            [-2.122684183899, 2.830618604699, 1.53751067681],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.655901086938e4, TOL));
    ok(isequalRel(a, 2.655958322757e4, TOL));
    ok(isequalRel(ecc, 4.642194405799e-3, TOL));
    ok(isequalRel(incl, 9.551780154791e-1, TOL));
    ok(isequalRel(omega, 5.668253776532, TOL));
    ok(isequalRel(argp, 4.64045273398, TOL));
    ok(isequalRel(nu, 2.705502836523, TOL));
    ok(isequalRel(m, 2.701568716408, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.412847654090e+03, 1.864685269710e+04, 1.874800359987e+04], [-3.366815727595e+00, 9.860399215987e-01, -1.607874971672e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.41284765409e3, 1.86468526971e4, 1.874800359987e4],
            [-3.366815727595, 9.860399215987e-1, -1.607874971672],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.655908243467e4, TOL));
    ok(isequalRel(a, 2.65596531435e4, TOL));
    ok(isequalRel(ecc, 4.635494796957e-3, TOL));
    ok(isequalRel(incl, 9.551804919247e-1, TOL));
    ok(isequalRel(omega, 5.668147390923, TOL));
    ok(isequalRel(argp, 4.652598125276, TOL));
    ok(isequalRel(nu, 3.734349294046, TOL));
    ok(isequalRel(m, 3.73954349488, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.175808331586e+04, 1.521544829478e+04, -1.808218140631e+02], [-1.250144679705e+00, -1.856490448461e+00, -3.163774870236e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.175808331586e4, 1.521544829478e4, -1.808218140631e2],
            [-1.250144679705, -1.856490448461, -3.163774870236],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.656154288306e4, TOL));
    ok(isequalRel(a, 2.656211237253e4, TOL));
    ok(isequalRel(ecc, 4.630325740817e-3, TOL));
    ok(isequalRel(incl, 9.552147675692e-1, TOL));
    ok(isequalRel(omega, 5.668111841916, TOL));
    ok(isequalRel(argp, 4.63504584821, TOL));
    ok(isequalRel(nu, 4.798073754256, TOL));
    ok(isequalRel(m, 4.8072976571, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.819341290284e+04, -3.493858769121e+03, -1.887714757717e+04], [2.153326942358e+00, -2.852221264187e+00, -1.536617760164e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.819341290284e4, -3.493858769121e3, -1.887714757717e4],
            [2.153326942358, -2.852221264187, -1.536617760164],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.655901048415e4, TOL));
    ok(isequalRel(a, 2.655957469729e4, TOL));
    ok(isequalRel(ecc, 4.609045984338e-3, TOL));
    ok(isequalRel(incl, 9.551825519709e-1, TOL));
    ok(isequalRel(omega, 5.668074751304, TOL));
    ok(isequalRel(argp, 4.652399516734, TOL));
    ok(isequalRel(nu, 5.836171484637, TOL));
    ok(isequalRel(m, 5.840143843312, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.833573868477e+03, -1.863577026711e+04, -1.838868722885e+04], [3.384748179026e+00, -9.553638407244e-01, 1.658785020368e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.833573868477e3, -1.863577026711e4, -1.838868722885e4],
            [3.384748179026, -9.553638407244e-1, 1.658785020368],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.655914165639e4, TOL));
    ok(isequalRel(a, 2.655970804969e4, TOL));
    ok(isequalRel(ecc, 4.617930660554e-3, TOL));
    ok(isequalRel(incl, 9.551858194002e-1, TOL));
    ok(isequalRel(omega, 5.66796811705, TOL));
    ok(isequalRel(argp, 4.640440864979, TOL));
    ok(isequalRel(nu, 6.244211807145e-1, TOL));
    ok(isequalRel(m, 6.190367806071e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.200220074562e+04, -1.487972595593e+04, 7.743282709904e+02], [1.191573619290e+00, 1.894561164654e+00, 3.159953047019e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.200220074562e4, -1.487972595593e4, 7.743282709904e2],
            [1.19157361929, 1.894561164654, 3.159953047019],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 2.656153942031e4, TOL));
    ok(isequalRel(a, 2.656210610985e4, TOL));
    ok(isequalRel(ecc, 4.618929629951e-3, TOL));
    ok(isequalRel(incl, 9.552192639878e-1, TOL));
    ok(isequalRel(omega, 5.667934751691, TOL));
    ok(isequalRel(argp, 4.657911891002, TOL));
    ok(isequalRel(nu, 1.660972656137, TOL));
    ok(isequalRel(m, 1.651769492992, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 28350
});

test("[-3.990938458545e+03, 3.052983419071e+03, 4.155327006290e+03], [-5.909006188028e+00, -8.763079661834e-01, -5.039131403571e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.990938458545e3, 3.052983419071e3, 4.15532700629e3],
            [-5.909006188028, -8.763079661834e-1, -5.039131403571],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.514531072766e3, TOL));
    ok(isequalRel(a, 6.514538853937e3, TOL));
    ok(isequalRel(ecc, 1.092900560486e-3, TOL));
    ok(isequalRel(incl, 1.13442715515, TOL));
    ok(isequalRel(omega, 6.026088463768, TOL));
    ok(isequalRel(argp, 4.889383721756, TOL));
    ok(isequalRel(nu, 3.755536003947, TOL));
    ok(isequalRel(m, 3.756796077475, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-6.035523200973e+02, -2.685134745690e+03, -5.891702742823e+03], [7.572519906820e+00, -1.975656725839e+00, 1.217226051852e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-6.035523200973e2, -2.68513474569e3, -5.891702742823e3],
            [7.57251990682, -1.975656725839, 1.217226051852e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.49901412958e3, TOL));
    ok(isequalRel(a, 6.499017083751e3, TOL));
    ok(isequalRel(ecc, 6.742081783819e-4, TOL));
    ok(isequalRel(incl, 1.134125261468, TOL));
    ok(isequalRel(omega, 6.020716867456, TOL));
    ok(isequalRel(argp, 2.117678045134, TOL));
    ok(isequalRel(nu, 2.612214602642, TOL));
    ok(isequalRel(m, 2.611533359642, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.788223456270e+03, 7.825616921357e+02, 4.335142846214e+03], [-4.954509025954e+00, 3.683346463780e+00, 4.804645838579e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.78822345627e3, 7.825616921357e2, 4.335142846214e3],
            [-4.954509025954, 3.68334646378, 4.804645838579],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.499557668862e3, TOL));
    ok(isequalRel(a, 6.499565172062e3, TOL));
    ok(isequalRel(ecc, 1.074437396221e-3, TOL));
    ok(isequalRel(incl, 1.134399591273, TOL));
    ok(isequalRel(omega, 6.015347087255, TOL));
    ok(isequalRel(argp, 3.746095436251, TOL));
    ok(isequalRel(nu, 3.363041521853, TOL));
    ok(isequalRel(m, 3.363513879197, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-6.291846016441e+03, 1.547827907719e+03, -4.536711649769e+02], [-3.086255882484e-01, -3.341538573565e+00, -7.082659115218e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-6.291846016441e3, 1.547827907719e3, -4.536711649769e2],
            [-3.086255882484e-1, -3.341538573565, -7.082659115218],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.501402296482e3, TOL));
    ok(isequalRel(a, 6.501408771262e3, TOL));
    ok(isequalRel(ecc, 9.97949933366e-4, TOL));
    ok(isequalRel(incl, 1.134720407837, TOL));
    ok(isequalRel(omega, 6.009336379812, TOL));
    ok(isequalRel(argp, 3.562445827897, TOL));
    ok(isequalRel(nu, 5.939466001665, TOL));
    ok(isequalRel(m, 5.94013812861, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.480745734282e+03, -3.028552003741e+03, -3.586943436410e+03], [5.320920856923e+00, 1.199736274927e+00, 5.626350480560e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.480745734282e3, -3.028552003741e3, -3.58694343641e3],
            [5.320920856923, 1.199736274927, 5.62635048056],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.488187033203e3, TOL));
    ok(isequalRel(a, 6.488189161531e3, TOL));
    ok(isequalRel(ecc, 5.727401464106e-4, TOL));
    ok(isequalRel(incl, 1.134500898804, TOL));
    ok(isequalRel(omega, 6.003210805697, TOL));
    ok(isequalRel(argp, 3.656128168897, TOL));
    ok(isequalRel(nu, 1.971189384963, TOL));
    ok(isequalRel(m, 1.970134326561, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.464246091556e+02, 2.932288725878e+03, 5.759193897566e+03], [-7.561000244696e+00, 1.550975493333e+00, -1.374970884552e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.464246091556e2, 2.932288725878e3, 5.759193897566e3],
            [-7.561000244696, 1.550975493333, -1.374970884552],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.471209659104e3, TOL));
    ok(isequalRel(a, 6.471217057197e3, TOL));
    ok(isequalRel(ecc, 1.069219642677e-3, TOL));
    ok(isequalRel(incl, 1.134145052997, TOL));
    ok(isequalRel(omega, 5.997629708734, TOL));
    ok(isequalRel(argp, 4.991979129089, TOL));
    ok(isequalRel(nu, 3.056861482628, TOL));
    ok(isequalRel(m, 3.056680362185, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.713795818306e+03, -1.382661251301e+03, -5.122451311359e+03], [6.090931625542e+00, -3.512629732827e+00, -3.467571745776e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.713795818306e3, -1.382661251301e3, -5.122451311359e3],
            [6.090931625542, -3.512629732827, -3.467571745776],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.46747076811e3, TOL));
    ok(isequalRel(a, 6.467483019751e3, TOL));
    ok(isequalRel(ecc, 1.376351918738e-3, TOL));
    ok(isequalRel(incl, 1.134265711762, TOL));
    ok(isequalRel(omega, 5.992242866994, TOL));
    ok(isequalRel(argp, 1.043283990638, TOL));
    ok(isequalRel(nu, 3.159198185783, TOL));
    ok(isequalRel(m, 3.159246696158, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[6.058320175220e+03, -8.274740672249e+02, 2.104046786506e+03], [-1.798403024273e+00, 3.787067271798e+00, 6.641439743741e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [6.05832017522e3, -8.274740672249e2, 2.104046786506e3],
            [-1.798403024273, 3.787067271798, 6.641439743741],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.471009508115e3, TOL));
    ok(isequalRel(a, 6.471020353769e3, TOL));
    ok(isequalRel(ecc, 1.294617565144e-3, TOL));
    ok(isequalRel(incl, 1.134648573921, TOL));
    ok(isequalRel(omega, 5.98636395025, TOL));
    ok(isequalRel(argp, 1.361948625924, TOL));
    ok(isequalRel(nu, 5.288416964379, TOL));
    ok(isequalRel(m, 5.290587233593, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-5.631736590064e+03, 2.623709536436e+03, 1.766491250842e+03], [-3.216401578200e+00, -2.309140958515e+00, -6.788609120175e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-5.631736590064e3, 2.623709536436e3, 1.766491250842e3],
            [-3.2164015782, -2.309140958515, -6.788609120175],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.464569948728e3, TOL));
    ok(isequalRel(a, 6.46458457569e3, TOL));
    ok(isequalRel(ecc, 1.504204024512e-3, TOL));
    ok(isequalRel(incl, 1.134672024906, TOL));
    ok(isequalRel(omega, 5.980107043806, TOL));
    ok(isequalRel(argp, 1.854335137159, TOL));
    ok(isequalRel(nu, 9.807516430894e-1, TOL));
    ok(isequalRel(m, 9.782534781184e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.776849915601e+03, -3.255369419526e+03, -4.837196677900e+03], [6.748135564437e+00, -1.930448249990e-01, 4.005718697631e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.776849915601e3, -3.255369419526e3, -4.8371966779e3],
            [6.748135564437, -1.93044824999e-1, 4.005718697631],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.447530973307e3, TOL));
    ok(isequalRel(a, 6.447548400274e3, TOL));
    ok(isequalRel(ecc, 1.6440445841e-3, TOL));
    ok(isequalRel(incl, 1.134312497082, TOL));
    ok(isequalRel(omega, 5.974125404463, TOL));
    ok(isequalRel(argp, 2.055192780568, TOL));
    ok(isequalRel(nu, 3.255122645661, TOL));
    ok(isequalRel(m, 3.255495597846, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.148044308372e+03, 2.486073433861e+03, 5.826340759133e+03], [-7.420162295259e+00, 2.589456381879e+00, 3.563500059243e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.148044308372e3, 2.486073433861e3, 5.826340759133e3],
            [-7.420162295259, 2.589456381879, 3.563500059243e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.435176429406e3, TOL));
    ok(isequalRel(a, 6.435177529229e3, TOL));
    ok(isequalRel(ecc, 4.134101163345e-4, TOL));
    ok(isequalRel(incl, 1.134120661345, TOL));
    ok(isequalRel(omega, 5.968587540969, TOL));
    ok(isequalRel(argp, 4.427155450409, TOL));
    ok(isequalRel(nu, 3.376722047172, TOL));
    ok(isequalRel(m, 3.376914728603, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.527908718278e+03, -7.232919904114e+02, -4.527446083187e+03], [5.121674217224e+00, -3.909895426836e+00, -4.500218555578e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.527908718278e3, -7.232919904114e2, -4.527446083187e3],
            [5.121674217224, -3.909895426836, -4.500218555578],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.434767090192e3, TOL));
    ok(isequalRel(a, 6.434780165349e3, TOL));
    ok(isequalRel(ecc, 1.425465157565e-3, TOL));
    ok(isequalRel(incl, 1.134362130102, TOL));
    ok(isequalRel(omega, 5.962978607089, TOL));
    ok(isequalRel(argp, 1.054181868022, TOL));
    ok(isequalRel(nu, 2.974557517523, TOL));
    ok(isequalRel(m, 2.974083023159, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // *** error: t:= 1560.000000 *** code =   1
    // 28623
});

test("[[-1.164535454950e+04, 9.793766835596e+02, 5.517895000578e+03], [3.407743501660e+00, -5.183094988169e+00, -4.929832772235e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.16453545495e4, 9.793766835596e2, 5.517895000578e3],
            [3.40774350166, -5.183094988169, -4.929832772235e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.056859858222e4, TOL));
    ok(isequalRel(a, 1.735669640942e4, TOL));
    ok(isequalRel(ecc, 6.253749953957e-1, TOL));
    ok(isequalRel(incl, 4.980009029411e-1, TOL));
    ok(isequalRel(omega, 2.005709479843, TOL));
    ok(isequalRel(argp, 2.972314951678, TOL));
    ok(isequalRel(nu, 4.416709793252, TOL));
    ok(isequalRel(m, 5.703940901115, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.619192522737e+03, 1.965144862280e+04, -7.261384967647e+03], [-2.013634212849e+00, 3.106842860878e+00, 2.842355165096e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.619192522737e3, 1.96514486228e4, -7.261384967647e3],
            [-2.013634212849, 3.106842860878, 2.842355165096e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.057223529761e4, TOL));
    ok(isequalRel(a, 1.735664725559e4, TOL));
    ok(isequalRel(ecc, 6.252060714442e-1, TOL));
    ok(isequalRel(incl, 4.980830256012e-1, TOL));
    ok(isequalRel(omega, 2.004208645831, TOL));
    ok(isequalRel(argp, 2.974773074032, TOL));
    ok(isequalRel(nu, 2.531984598019, TOL));
    ok(isequalRel(m, 1.408469011228, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.708686297137e+03, 2.630614553149e+04, -1.204294788557e+03], [-1.824164289749e+00, -9.319095958561e-01, 1.113419051843e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.708686297137e3, 2.630614553149e4, -1.204294788557e3],
            [-1.824164289749, -9.319095958561e-1, 1.113419051843],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.057574530052e4, TOL));
    ok(isequalRel(a, 1.735431253119e4, TOL));
    ok(isequalRel(ecc, 6.249787437426e-1, TOL));
    ok(isequalRel(incl, 4.982085594326e-1, TOL));
    ok(isequalRel(omega, 2.003388389356, TOL));
    ok(isequalRel(argp, 2.975963132245, TOL));
    ok(isequalRel(nu, 3.217306037618, TOL));
    ok(isequalRel(m, 3.396884756261, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.439403162892e+04, 6.659307650738e+03, 5.593383458579e+03], [1.556522911394e+00, -4.681657613693e+00, 2.969122476380e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.439403162892e4, 6.659307650738e3, 5.593383458579e3],
            [1.556522911394, -4.681657613693, 2.96912247638e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.057007781155e4, TOL));
    ok(isequalRel(a, 1.7349406972e4, TOL));
    ok(isequalRel(ecc, 6.251022227779e-1, TOL));
    ok(isequalRel(incl, 4.980957749536e-1, TOL));
    ok(isequalRel(omega, 2.00266064507, TOL));
    ok(isequalRel(argp, 2.977192753144, TOL));
    ok(isequalRel(nu, 4.076040856151, TOL));
    ok(isequalRel(m, 5.385825063318, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[7.712094762697e+03, 1.556572627434e+04, -7.342404655712e+03], [-1.646800363992e+00, 4.070313571346e+00, -1.094830809489e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [7.712094762697e3, 1.556572627434e4, -7.342404655712e3],
            [-1.646800363992, 4.070313571346, -1.094830809489e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.057026755952e4, TOL));
    ok(isequalRel(a, 1.73461222254e4, TOL));
    ok(isequalRel(ecc, 6.250011839676e-1, TOL));
    ok(isequalRel(incl, 4.980566577602e-1, TOL));
    ok(isequalRel(omega, 2.001121581976, TOL));
    ok(isequalRel(argp, 2.979787251732, TOL));
    ok(isequalRel(nu, 2.350737456572, TOL));
    ok(isequalRel(m, 1.091960814968, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-7.558367396029e+03, 2.703511367962e+04, -2.385120541840e+03], [-1.999583791247e+00, -3.934092829965e-01, 1.078093514514e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-7.558367396029e3, 2.703511367962e4, -2.38512054184e3],
            [-1.999583791247, -3.934092829965e-1, 1.078093514514],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.057518286707e4, TOL));
    ok(isequalRel(a, 1.734456629621e4, TOL));
    ok(isequalRel(ecc, 6.247306804556e-1, TOL));
    ok(isequalRel(incl, 4.982190539537e-1, TOL));
    ok(isequalRel(omega, 2.000241708, TOL));
    ok(isequalRel(argp, 2.98113149043, TOL));
    ok(isequalRel(nu, 3.123949627337, TOL));
    ok(isequalRel(m, 3.08195801137, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.549561862220e+04, 1.155015897828e+04, 5.053831781214e+03], [4.692773362912e-01, -4.029761073285e+00, 6.790547422118e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.54956186222e4, 1.155015897828e4, 5.053831781214e3],
            [4.692773362912e-1, -4.029761073285, 6.790547422118e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.057115953427e4, TOL));
    ok(isequalRel(a, 1.734057761519e4, TOL));
    ok(isequalRel(ecc, 6.24804125772e-1, TOL));
    ok(isequalRel(incl, 4.981624431725e-1, TOL));
    ok(isequalRel(omega, 1.999530767317, TOL));
    ok(isequalRel(argp, 2.982220394988, TOL));
    ok(isequalRel(nu, 3.858943902046, TOL));
    ok(isequalRel(m, 5.072660218557, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.167025682224e+03, 1.036365204210e+04, -6.871525760423e+03], [-8.816210273002e-01, 5.223361510353e+00, -7.406962968990e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.167025682224e3, 1.03636520421e4, -6.871525760423e3],
            [-8.816210273002e-1, 5.223361510353, -7.40696296899e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.056809473987e4, TOL));
    ok(isequalRel(a, 1.733479983096e4, TOL));
    ok(isequalRel(ecc, 6.247830071695e-1, TOL));
    ok(isequalRel(incl, 4.980219452395e-1, TOL));
    ok(isequalRel(omega, 1.998085766074, TOL));
    ok(isequalRel(argp, 2.984703134726, TOL));
    ok(isequalRel(nu, 2.100922125379, TOL));
    ok(isequalRel(m, 7.805074740614e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-5.275802720938e+03, 2.715178486008e+04, -3.494506872161e+03], [-2.129609387811e+00, 1.501964804488e-01, 1.021038088603e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-5.275802720938e3, 2.715178486008e4, -3.494506872161e3],
            [-2.129609387811, 1.501964804488e-1, 1.021038088603],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.05744295364e4, TOL));
    ok(isequalRel(a, 1.733480199944e4, TOL));
    ok(isequalRel(ecc, 6.244905477618e-1, TOL));
    ok(isequalRel(incl, 4.982250705518e-1, TOL));
    ok(isequalRel(omega, 1.99709486899, TOL));
    ok(isequalRel(argp, 2.986292965306, TOL));
    ok(isequalRel(nu, 3.031490045493, TOL));
    ok(isequalRel(m, 2.772051574029, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.560137656145e+04, 1.564129379850e+04, 4.217032668496e+03], [-2.491831233173e-01, -3.405238557031e+00, 8.882145034423e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.560137656145e4, 1.56412937985e4, 4.217032668496e3],
            [-2.491831233173e-1, -3.405238557031, 8.882145034423e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.05718938304e4, TOL));
    ok(isequalRel(a, 1.733123294659e4, TOL));
    ok(isequalRel(ecc, 6.245071111651e-1, TOL));
    ok(isequalRel(incl, 4.982087990959e-1, TOL));
    ok(isequalRel(omega, 1.996377914462, TOL));
    ok(isequalRel(argp, 2.987315694036, TOL));
    ok(isequalRel(nu, 3.699088170812, TOL));
    ok(isequalRel(m, 4.764472125349, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.301058722997e+03, 3.883152655738e+03, -5.477864770168e+03], [8.714478212337e-01, 6.493677330817e+00, -1.885545281704e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.301058722997e3, 3.883152655738e3, -5.477864770168e3],
            [8.714478212337e-1, 6.493677330817, -1.885545281704],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.056588648787e4, TOL));
    ok(isequalRel(a, 1.732184986455e4, TOL));
    ok(isequalRel(ecc, 6.245202261218e-1, TOL));
    ok(isequalRel(incl, 4.980037469967e-1, TOL));
    ok(isequalRel(omega, 1.995167086024, TOL));
    ok(isequalRel(argp, 2.989475653765, TOL));
    ok(isequalRel(nu, 1.697545348109, TOL));
    ok(isequalRel(m, 4.740890128887e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.914310658284e+03, 2.666520392758e+04, -4.511098143349e+03], [-2.216261908828e+00, 7.100677692327e-01, 9.406918236661e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.914310658284e3, 2.666520392758e4, -4.511098143349e3],
            [-2.216261908828, 7.100677692327e-1, 9.406918236661e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 1.057349307506e4, TOL));
    ok(isequalRel(a, 1.732501351127e4, TOL));
    ok(isequalRel(ecc, 6.242578356432e-1, TOL));
    ok(isequalRel(incl, 4.982265506086e-1, TOL));
    ok(isequalRel(omega, 1.993947936512, TOL));
    ok(isequalRel(argp, 2.991444172479, TOL));
    ok(isequalRel(nu, 2.937315397418, TOL));
    ok(isequalRel(m, 2.467168050717, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 28626
});

test("[3.774000085593e+04, 1.880276872802e+04, 3.455125837297e+00], [-1.371035205968e+00, 2.752105932104e+00, 3.368828238918e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.774000085593e4, 1.880276872802e4, 3.455125837297],
            [-1.371035205968, 2.752105932104, 3.368828238918e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216628329558e4, TOL));
    ok(isequalRel(a, 4.216628341172e4, TOL));
    ok(isequalRel(ecc, 5.248254601406e-5, TOL));
    ok(isequalRel(incl, 1.368168623728e-4, TOL));
    ok(isequalRel(omega, 6.103241782478, TOL));
    ok(isequalRel(argp, 6.233094044897, TOL));
    ok(isequalRel(nu, 6.922562299435e-1, TOL));
    ok(isequalRel(m, 6.921892353092e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.323282515008e+04, 3.518733981802e+04, 4.989274276434e+00], [-2.565776620125e+00, 1.694193131851e+00, 1.633653544487e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.323282515008e4, 3.518733981802e4, 4.989274276434],
            [-2.565776620125, 1.694193131851, 1.633653544487e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216628874697e4, TOL));
    ok(isequalRel(a, 4.216628880822e4, TOL));
    ok(isequalRel(ecc, 3.81131444285e-5, TOL));
    ok(isequalRel(incl, 1.297069563414e-4, TOL));
    ok(isequalRel(omega, 6.121657764712, TOL));
    ok(isequalRel(argp, 2.355562904361e-1, TOL));
    ok(isequalRel(nu, 9.132128511527e-1, TOL));
    ok(isequalRel(m, 9.131525212689e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.467442901779e+03, 4.209360909959e+04, 5.150629869589e+00], [-3.069341800053e+00, 1.799762762513e-01, -3.173887732038e-05], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.467442901779e3, 4.209360909959e4, 5.150629869589],
            [-3.069341800053, 1.799762762513e-1, -3.173887732038e-5],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216629418582e4, TOL));
    ok(isequalRel(a, 4.216629420493e4, TOL));
    ok(isequalRel(ecc, 2.128915564641e-5, TOL));
    ok(isequalRel(incl, 1.225872489323e-4, TOL));
    ok(isequalRel(omega, 6.140307315629, TOL));
    ok(isequalRel(argp, 5.819715913114e-1, TOL));
    ok(isequalRel(nu, 1.073151733387, TOL));
    ok(isequalRel(m, 1.073114319711, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.896259052991e+04, 3.766166243819e+04, 4.044332575234e+00], [-2.746151981754e+00, -1.382675777466e+00, -1.976331326273e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.896259052991e4, 3.766166243819e4, 4.044332575234],
            [-2.746151981754, -1.382675777466, -1.976331326273e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216629960106e4, TOL));
    ok(isequalRel(a, 4.216629960214e4, TOL));
    ok(isequalRel(ecc, 5.049959995073e-6, TOL));
    ok(isequalRel(incl, 1.154617569511e-4, TOL));
    ok(isequalRel(omega, 6.159198673789, TOL));
    ok(isequalRel(argp, 1.708505464751, TOL));
    ok(isequalRel(nu, 4.527199825854e-1, TOL));
    ok(isequalRel(m, 4.52715564763e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.528500095313e+04, 2.308544402778e+04, 2.087118800595e+00], [-1.683277907554e+00, -2.572893625018e+00, -2.962820474671e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.528500095313e4, 2.308544402778e4, 2.087118800595],
            [-1.683277907554, -2.572893625018, -2.962820474671e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216630498792e4, TOL));
    ok(isequalRel(a, 4.216630499992e4, TOL));
    ok(isequalRel(ecc, 1.687344340959e-5, TOL));
    ok(isequalRel(incl, 1.08332553877e-4, TOL));
    ok(isequalRel(omega, 6.17833645117, TOL));
    ok(isequalRel(argp, 3.747580330599, TOL));
    ok(isequalRel(nu, 5.20268475793, TOL));
    ok(isequalRel(m, 5.20271452904, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.210320138132e+04, 2.291062288930e+03, -1.327496350641e-01], [-1.669748164887e-01, -3.070104560267e+00, -3.110070365039e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.210320138132e4, 2.29106228893e3, -1.327496350641e-1],
            [-1.669748164887e-1, -3.070104560267, -3.110070365039e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216631034925e4, TOL));
    ok(isequalRel(a, 4.216631039821e4, TOL));
    ok(isequalRel(ecc, 3.407549879677e-5, TOL));
    ok(isequalRel(incl, 1.012013501095e-4, TOL));
    ok(isequalRel(omega, 6.197709232686, TOL));
    ok(isequalRel(argp, 4.135698315694, TOL));
    ok(isequalRel(nu, 5.320193939209, TOL));
    ok(isequalRel(m, 5.320249883786, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.758031858370e+04, -1.912040485693e+04, -2.027557016159e+00], [1.394367847791e+00, -2.740341611982e+00, -2.485907402960e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.75803185837e4, -1.912040485693e4, -2.027557016159],
            [1.394367847791, -2.740341611982, -2.48590740296e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216631569473e4, TOL));
    ok(isequalRel(a, 4.216631579673e4, TOL));
    ok(isequalRel(ecc, 4.918143532648e-5, TOL));
    ok(isequalRel(incl, 9.407120177979e-5, TOL));
    ok(isequalRel(omega, 6.217291459128, TOL));
    ok(isequalRel(argp, 4.42821521745, TOL));
    ok(isequalRel(nu, 5.533109643824, TOL));
    ok(isequalRel(m, 5.533176695405, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.293420761876e+04, -3.538123870806e+04, -3.164959320817e+00], [2.580167539475e+00, -1.672360950534e+00, -1.349072104218e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.293420761876e4, -3.538123870806e4, -3.164959320817],
            [2.580167539475, -1.672360950534, -1.349072104218e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216632103835e4, TOL));
    ok(isequalRel(a, 4.216632119517e4, TOL));
    ok(isequalRel(ecc, 6.098391755986e-5, TOL));
    ok(isequalRel(incl, 8.694673694241e-5, TOL));
    ok(isequalRel(omega, 6.237057763127, TOL));
    ok(isequalRel(argp, 4.698660596091, TOL));
    ok(isequalRel(nu, 5.767930670346, TOL));
    ok(isequalRel(m, 5.767990768391, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.109903323895e+03, -4.211071508198e+04, -3.365078891801e+00], [3.070935368803e+00, -1.538083903627e-01, -5.854950569728e-06], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.109903323895e3, -4.211071508198e4, -3.365078891801],
            [3.070935368803, -1.538083903627e-1, -5.854950569728e-6],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216632639454e4, TOL));
    ok(isequalRel(a, 4.216632659321e4, TOL));
    ok(isequalRel(ecc, 6.864105801929e-5, TOL));
    ok(isequalRel(incl, 7.983291097021e-5, TOL));
    ok(isequalRel(omega, 6.256996290106, TOL));
    ok(isequalRel(argp, 4.961077986625, TOL));
    ok(isequalRel(nu, 6.010623465194, TOL));
    ok(isequalRel(m, 6.010660419651, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.928277774728e+04, -3.749559250598e+04, -2.718614618432e+00], [2.734400524359e+00, 1.406220933068e+00, 1.034861081231e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.928277774728e4, -3.749559250598e4, -2.718614618432],
            [2.734400524359, 1.406220933068, 1.034861081231e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.21663317743e4, TOL));
    ok(isequalRel(a, 4.216633199058e4, TOL));
    ok(isequalRel(ecc, 7.161768038708e-5, TOL));
    ok(isequalRel(incl, 7.273355082748e-5, TOL));
    ok(isequalRel(omega, 6.277108550069, TOL));
    ok(isequalRel(argp, 5.22036936357, TOL));
    ok(isequalRel(nu, 6.25627830862, TOL));
    ok(isequalRel(m, 6.256282161981, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.548060990600e+04, -2.277903375285e+04, -1.528418589129e+00], [1.661210675962e+00, 2.587414593138e+00, 1.682997515478e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.5480609906e4, -2.277903375285e4, -1.528418589129],
            [1.661210675962, 2.587414593138, 1.682997515478e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216633718226e4, TOL));
    ok(isequalRel(a, 4.216633738715e4, TOL));
    ok(isequalRel(ecc, 6.970674633954e-5, TOL));
    ok(isequalRel(incl, 6.56511222914e-5, TOL));
    ok(isequalRel(omega, 1.421068986777e-2, TOL));
    ok(isequalRel(argp, 5.479216046296, TOL));
    ok(isequalRel(nu, 2.190182011693e-1, TOL));
    ok(isequalRel(m, 2.189879121526e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.211996263499e+04, -1.925775672630e+03, -1.982743315433e-01], [1.405212063672e-01, 3.071541613467e+00, 1.795611668152e-04], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.211996263499e4, -1.92577567263e3, -1.982743315433e-1],
            [1.405212063672e-1, 3.071541613467, 1.795611668152e-4],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 4.216634261542e4, TOL));
    ok(isequalRel(a, 4.2166342783e4, TOL));
    ok(isequalRel(ecc, 6.304075253192e-5, TOL));
    ok(isequalRel(incl, 5.85876953682e-5, TOL));
    ok(isequalRel(omega, 3.466063919527e-2, TOL));
    ok(isequalRel(argp, 5.740143953637, TOL));
    ok(isequalRel(nu, 4.626913229175e-1, TOL));
    ok(isequalRel(m, 4.626350478021e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 28872
});

test("[-5.799242561336e+03, 2.589148111188e+03, 2.011545150996e+03], [2.325207364368e+00, -4.712567240989e-02, 7.296234070991e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-5.799242561336e3, 2.589148111188e3, 2.011545150996e3],
            [2.325207364368, -4.712567240989e-2, 7.296234070991],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.526685151086e3, TOL));
    ok(isequalRel(a, 6.532137453014e3, TOL));
    ok(isequalRel(ecc, 2.889098117477e-2, TOL));
    ok(isequalRel(incl, 1.683710955728, TOL));
    ok(isequalRel(omega, 2.757607816819, TOL));
    ok(isequalRel(argp, 4.242045608476, TOL));
    ok(isequalRel(nu, 2.349904176644, TOL));
    ok(isequalRel(m, 2.30815833179, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.769050619670e+03, 2.420465805618e+03, 4.035308558368e+03], [4.464585796417e+00, -1.060923208853e+00, 6.070907874485e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.76905061967e3, 2.420465805618e3, 4.035308558368e3],
            [4.464585796417, -1.060923208853, 6.070907874485],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.520647959172e3, TOL));
    ok(isequalRel(a, 6.526279046695e3, TOL));
    ok(isequalRel(ecc, 2.937401546552e-2, TOL));
    ok(isequalRel(incl, 1.683758853083, TOL));
    ok(isequalRel(omega, 2.757636827441, TOL));
    ok(isequalRel(argp, 4.220545967042, TOL));
    ok(isequalRel(nu, 2.713880114471, TOL));
    ok(isequalRel(m, 2.689015217385, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.175451573399e+03, 1.965987380859e+03, 5.582125696073e+03], [6.049639376478e+00, -1.935777557718e+00, 4.148607019377e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.175451573399e3, 1.965987380859e3, 5.582125696073e3],
            [6.049639376478, -1.935777557718, 4.148607019377],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.51346931154e3, TOL));
    ok(isequalRel(a, 6.519463020522e3, TOL));
    ok(isequalRel(ecc, 3.032088778104e-2, TOL));
    ok(isequalRel(incl, 1.683816729883, TOL));
    ok(isequalRel(omega, 2.757703761826, TOL));
    ok(isequalRel(argp, 4.221648802772, TOL));
    ok(isequalRel(nu, 3.052341460815, TOL));
    ok(isequalRel(m, 3.046811339913, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.210190248024e+03, 1.281545412937e+03, 6.474681727721e+03], [6.920746272878e+00, -2.580517337172e+00, 1.748783867509e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.210190248024e3, 1.281545412937e3, 6.474681727721e3],
            [6.920746272878, -2.580517337172, 1.748783867509],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.508121629846e3, TOL));
    ok(isequalRel(a, 6.514342076464e3, TOL));
    ok(isequalRel(ecc, 3.090121129435e-2, TOL));
    ok(isequalRel(incl, 1.683859143223, TOL));
    ok(isequalRel(omega, 2.757806295916, TOL));
    ok(isequalRel(argp, 4.247841273005, TOL));
    ok(isequalRel(nu, 3.3650745157, TOL));
    ok(isequalRel(m, 3.379087376721, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.967379953280e+02, 4.471235730478e+02, 6.607224005065e+03], [6.983396281749e+00, -2.925846167662e+00, -8.726552065311e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.96737995328e2, 4.471235730478e2, 6.607224005065e3],
            [6.983396281749, -2.925846167662, -8.726552065311e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.506782115003e3, TOL));
    ok(isequalRel(a, 6.512867783108e3, TOL));
    ok(isequalRel(ecc, 3.056806871265e-2, TOL));
    ok(isequalRel(incl, 1.683867367995, TOL));
    ok(isequalRel(omega, 2.757927138341, TOL));
    ok(isequalRel(argp, 4.279408369525, TOL));
    ok(isequalRel(nu, 3.674123865722, TOL));
    ok(isequalRel(m, 3.705786451326, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.896996635344e+03, -4.400473859436e+02, 5.954926754864e+03], [6.211488246365e+00, -2.926949814866e+00, -3.433959805617e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.896996635344e3, -4.400473859436e2, 5.954926754864e3],
            [6.211488246365, -2.926949814866, -3.433959805617],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.509946222022e3, TOL));
    ok(isequalRel(a, 6.515613675243e3, TOL));
    ok(isequalRel(ecc, 2.949282059374e-2, TOL));
    ok(isequalRel(incl, 1.683836924808, TOL));
    ok(isequalRel(omega, 2.75804069452, TOL));
    ok(isequalRel(argp, 4.290836164018, TOL));
    ok(isequalRel(nu, 4.007195184999, TOL));
    ok(isequalRel(m, 4.052760404378, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.545789701674e+03, -1.273559528721e+03, 4.580165129838e+03], [4.656984232729e+00, -2.568711512559e+00, -5.638510953752e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.545789701674e3, -1.273559528721e3, 4.580165129838e3],
            [4.656984232729, -2.568711512559, -5.638510953752],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.516119499293e3, TOL));
    ok(isequalRel(a, 6.521409740196e3, TOL));
    ok(isequalRel(ecc, 2.848177036626e-2, TOL));
    ok(isequalRel(incl, 1.683780393443, TOL));
    ok(isequalRel(omega, 2.758123203672, TOL));
    ok(isequalRel(argp, 4.269917054768, TOL));
    ok(isequalRel(nu, 4.378339757688, TOL));
    ok(isequalRel(m, 4.432527202422, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.627432993706e+03, -1.947942824694e+03, 2.634167149295e+03], [2.464141046782e+00, -1.873985160836e+00, -7.195743032304e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.627432993706e3, -1.947942824694e3, 2.634167149295e3],
            [2.464141046782, -1.873985160836, -7.195743032304],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.522284749894e3, TOL));
    ok(isequalRel(a, 6.52750814539e3, TOL));
    ok(isequalRel(ecc, 2.828803260517e-2, TOL));
    ok(isequalRel(incl, 1.683723680812, TOL));
    ok(isequalRel(omega, 2.758163619089, TOL));
    ok(isequalRel(argp, 4.235206283929, TOL));
    ok(isequalRel(nu, 4.770266516375, TOL));
    ok(isequalRel(m, 4.826671112807, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.984723185337e+03, -2.371376916090e+03, 3.498799620911e+02], [-1.212769495689e-01, -9.119815461885e-01, -7.859613893998e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.984723185337e3, -2.37137691609e3, 3.498799620911e2],
            [-1.212769495689e-1, -9.119815461885e-1, -7.859613893998],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.525164595724e3, TOL));
    ok(isequalRel(a, 6.53056146488e3, TOL));
    ok(isequalRel(ecc, 2.874720882759e-2, TOL));
    ok(isequalRel(incl, 1.683695305033, TOL));
    ok(isequalRel(omega, 2.75817085345, TOL));
    ok(isequalRel(argp, 4.221875015599, TOL));
    ok(isequalRel(nu, 5.14825714793, TOL));
    ok(isequalRel(m, 5.19989961128, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.548433259218e+03, -2.480164692448e+03, -1.979243145270e+03], [-2.763269533889e+00, 1.996919153146e-01, -7.482796996303e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.548433259218e3, -2.480164692448e3, -1.97924314527e3],
            [-2.763269533889, 1.996919153146e-1, -7.482796996303],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.52290488901e3, TOL));
    ok(isequalRel(a, 6.528359775329e3, TOL));
    ok(isequalRel(ecc, 2.890618727506e-2, TOL));
    ok(isequalRel(incl, 1.683711701743, TOL));
    ok(isequalRel(omega, 2.758172241885, TOL));
    ok(isequalRel(argp, 4.23955709792, TOL));
    ok(isequalRel(nu, 5.502142827149, TOL));
    ok(isequalRel(m, 5.542222930208, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 29141
});

test("[9.318088358700e+02, -1.017178522393e+03, 6.529192445268e+03], [-2.988479182834e-01, 7.613891977075e+00, 1.226399480369e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.3180883587e2, -1.017178522393e3, 6.529192445268e3],
            [-2.988479182834e-1, 7.613891977075, 1.226399480369],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.654813487604e3, TOL));
    ok(isequalRel(a, 6.654865318242e3, TOL));
    ok(isequalRel(ecc, 2.790767404911e-3, TOL));
    ok(isequalRel(incl, 1.438561827346, TOL));
    ok(isequalRel(omega, 4.773028895516, TOL));
    ok(isequalRel(argp, 4.441534164675, TOL));
    ok(isequalRel(nu, 3.251142425279, TOL));
    ok(isequalRel(m, 3.2517539308, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.344906141046e+01, 6.286202084526e+03, 2.223498371606e+03], [-1.113515974336e+00, 2.530970283428e+00, -7.219445567640e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.344906141046e1, 6.286202084526e3, 2.223498371606e3],
            [-1.113515974336, 2.530970283428, -7.21944556764],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.667409602629e3, TOL));
    ok(isequalRel(a, 6.667415841807e3, TOL));
    ok(isequalRel(ecc, 9.673528490398e-4, TOL));
    ok(isequalRel(incl, 1.438729223905, TOL));
    ok(isequalRel(omega, 4.772663394247, TOL));
    ok(isequalRel(argp, 4.519792026389, TOL));
    ok(isequalRel(nu, 4.561928014795, TOL));
    ok(isequalRel(m, 4.563841070107, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.585768122083e+02, 3.259260053478e+03, -5.722637324667e+03], [-1.012258127257e-01, -6.735338321376e+00, -3.804851872132e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.585768122083e2, 3.259260053478e3, -5.722637324667e3],
            [-1.012258127257e-1, -6.735338321376, -3.804851872132],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.650390494712e3, TOL));
    ok(isequalRel(a, 6.650410410281e3, TOL));
    ok(isequalRel(ecc, 1.73050211328e-3, TOL));
    ok(isequalRel(incl, 1.438604790616, TOL));
    ok(isequalRel(omega, 4.772537561443, TOL));
    ok(isequalRel(argp, 6.182791628537, TOL));
    ok(isequalRel(nu, 4.292054198164, TOL));
    ok(isequalRel(m, 4.295215603132, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.552561998463e+02, -5.132597629736e+03, -4.221272331177e+03], [1.077709303174e+00, -4.905938824423e+00, 5.892521263779e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.552561998463e2, -5.132597629736e3, -4.221272331177e3],
            [1.077709303174, -4.905938824423, 5.892521263779],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.652088033297e3, TOL));
    ok(isequalRel(a, 6.652090900983e3, TOL));
    ok(isequalRel(ecc, 6.565785196579e-4, TOL));
    ok(isequalRel(incl, 1.438671535544, TOL));
    ok(isequalRel(omega, 4.77208260793, TOL));
    ok(isequalRel(argp, 4.41376463802, TOL));
    ok(isequalRel(nu, 1.17450552079, TOL));
    ok(isequalRel(m, 1.17329436492, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.674429509677e+02, -5.038404029333e+03, 4.256738105326e+03], [4.794475348774e-01, 5.032326445668e+00, 5.857126248379e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.674429509677e2, -5.038404029333e3, 4.256738105326e3],
            [4.794475348774e-1, 5.032326445668, 5.857126248379],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.646445507706e3, TOL));
    ok(isequalRel(a, 6.646451408421e3, TOL));
    ok(isequalRel(ecc, 9.42231083173e-4, TOL));
    ok(isequalRel(incl, 1.438670267904, TOL));
    ok(isequalRel(omega, 4.772002711134, TOL));
    ok(isequalRel(argp, 3.703784689029, TOL));
    ok(isequalRel(nu, 3.281054437973, TOL));
    ok(isequalRel(m, 3.281316580767, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.591688201275e+02, 3.376305879365e+03, 5.699220173906e+03], [-9.067493283052e-01, 6.646149866798e+00, -3.852331832189e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.591688201275e2, 3.376305879365e3, 5.699220173906e3],
            [-9.067493283052e-1, 6.646149866798, -3.852331832189],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.633848816537e3, TOL));
    ok(isequalRel(a, 6.633879333801e3, TOL));
    ok(isequalRel(ecc, 2.144810920918e-3, TOL));
    ok(isequalRel(incl, 1.438605427167, TOL));
    ok(isequalRel(omega, 4.771545357769, TOL));
    ok(isequalRel(argp, 5.029815641462, TOL));
    ok(isequalRel(nu, 3.350101125732, TOL));
    ok(isequalRel(m, 3.350990480714, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-6.698518420486e+02, 6.196002294840e+03, -2.281957417704e+03], [-7.958040917752e-01, -2.752114827104e+00, -7.202478519577e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-6.698518420486e2, 6.19600229484e3, -2.281957417704e3],
            [-7.958040917752e-1, -2.752114827104, -7.202478519577],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.639339077823e3, TOL));
    ok(isequalRel(a, 6.639357504214e3, TOL));
    ok(isequalRel(ecc, 1.665931398776e-3, TOL));
    ok(isequalRel(incl, 1.438728454721, TOL));
    ok(isequalRel(omega, 4.771420543348, TOL));
    ok(isequalRel(argp, 4.830416962523, TOL));
    ok(isequalRel(nu, 4.94857899254, TOL));
    ok(isequalRel(m, 4.951817403123, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-7.842070801930e+02, -1.278531255533e+03, -6.449198925965e+03], [6.367023798193e-01, -7.595425203451e+00, 1.431090801759e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-7.84207080193e2, -1.278531255533e3, -6.449198925965e3],
            [6.367023798193e-1, -7.595425203451, 1.431090801759],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.615185029258e3, TOL));
    ok(isequalRel(a, 6.615191481104e3, TOL));
    ok(isequalRel(ecc, 9.87576619207e-4, TOL));
    ok(isequalRel(incl, 1.438562435955, TOL));
    ok(isequalRel(omega, 4.77104446738, TOL));
    ok(isequalRel(argp, 1.401357423633, TOL));
    ok(isequalRel(nu, 3.497936105017, TOL));
    ok(isequalRel(m, 3.498625615272, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.061581165884e+02, -6.607031157990e+03, 1.483302147702e+02], [1.009818574511e+00, 2.318437654711e-01, 7.692047844379e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.061581165884e2, -6.60703115799e3, 1.483302147702e2],
            [1.009818574511, 2.318437654711e-1, 7.692047844379],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.625578147453e3, TOL));
    ok(isequalRel(a, 6.625582027493e3, TOL));
    ok(isequalRel(ecc, 7.652547772083e-4, TOL));
    ok(isequalRel(incl, 1.438752426106, TOL));
    ok(isequalRel(omega, 4.770809169214, TOL));
    ok(isequalRel(argp, 5.792151297858, TOL));
    ok(isequalRel(nu, 5.136350963792e-1, TOL));
    ok(isequalRel(m, 5.128834615956e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[9.163491181317e+02, -8.840864924780e+02, 6.491098103617e+03], [-3.021630486618e-01, 7.669887108902e+00, 1.084336908891e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [9.163491181317e2, -8.84086492478e2, 6.491098103617e3],
            [-3.021630486618e-1, 7.669887108902, 1.084336908891],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.596739992521e3, TOL));
    ok(isequalRel(a, 6.596790118535e3, TOL));
    ok(isequalRel(ecc, 2.756546056247e-3, TOL));
    ok(isequalRel(incl, 1.438559063086, TOL));
    ok(isequalRel(omega, 4.770556067752, TOL));
    ok(isequalRel(argp, 4.434602404487, TOL));
    ok(isequalRel(nu, 3.277422958907, TOL));
    ok(isequalRel(m, 3.278171035304, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.040249096999e+02, 6.304318214051e+03, 1.960087398815e+03], [-1.108873823088e+00, 2.259522809253e+00, -7.351147709905e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.040249096999e2, 6.304318214051e3, 1.960087398815e3],
            [-1.108873823088, 2.259522809253, -7.351147709905],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.603486587833e3, TOL));
    ok(isequalRel(a, 6.603492629191e3, TOL));
    ok(isequalRel(ecc, 9.564899889534e-4, TOL));
    ok(isequalRel(incl, 1.438735355273, TOL));
    ok(isequalRel(omega, 4.770193881341, TOL));
    ok(isequalRel(argp, 4.302031480087, TOL));
    ok(isequalRel(nu, 4.818615885002, TOL));
    ok(isequalRel(m, 4.820517936984, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-9.446164284893e+02, 2.872172483790e+03, -5.846941033616e+03], [-5.111768583039e-02, -6.989747075746e+00, -3.413102600335e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-9.446164284893e2, 2.87217248379e3, -5.846941033616e3],
            [-5.111768583039e-2, -6.989747075746, -3.413102600335],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.577335309378e3, TOL));
    ok(isequalRel(a, 6.577351971602e3, TOL));
    ok(isequalRel(ecc, 1.59162569576e-3, TOL));
    ok(isequalRel(incl, 1.438593656194, TOL));
    ok(isequalRel(omega, 4.770053319995, TOL));
    ok(isequalRel(argp, 4.798439029491e-2, TOL));
    ok(isequalRel(nu, 4.204475559285, TOL));
    ok(isequalRel(m, 4.207258575667, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-1.871656988818e+02, -5.404861634673e+03, -3.731970576180e+03], [1.094696706449e+00, -4.412110995417e+00, 6.326060952339e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-1.871656988818e2, -5.404861634673e3, -3.73197057618e3],
            [1.094696706449, -4.412110995417, 6.326060952339],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.573114294694e3, TOL));
    ok(isequalRel(a, 6.573117905121e3, TOL));
    ok(isequalRel(ecc, 7.411286038596e-4, TOL));
    ok(isequalRel(incl, 1.43868830685, TOL));
    ok(isequalRel(omega, 4.769600577577, TOL));
    ok(isequalRel(argp, 4.601919442478, TOL));
    ok(isequalRel(nu, 1.071156580722, TOL));
    ok(isequalRel(m, 1.069855868217, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[8.845972046733e+02, -4.465745161630e+03, 4.725836326961e+03], [3.806560278094e-01, 5.691554045613e+00, 5.303910983386e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [8.845972046733e2, -4.46574516163e3, 4.725836326961e3],
            [3.806560278094e-1, 5.691554045613, 5.303910983386],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.553909770149e3, TOL));
    ok(isequalRel(a, 6.553920114688e3, TOL));
    ok(isequalRel(ecc, 1.256333636802e-3, TOL));
    ok(isequalRel(incl, 1.438648390019, TOL));
    ok(isequalRel(omega, 4.769517730771, TOL));
    ok(isequalRel(argp, 3.721160696525, TOL));
    ok(isequalRel(nu, 3.375274995895, TOL));
    ok(isequalRel(m, 3.375857366264, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.464076723613e+02, 4.086668396204e+03, 5.093055966501e+03], [-9.824244465967e-01, 6.072965199475e+00, -4.791630681766e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.464076723613e2, 4.086668396204e3, 5.093055966501e3],
            [-9.824244465967e-1, 6.072965199475, -4.791630681766],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.535066319931e3, TOL));
    ok(isequalRel(a, 6.535083408245e3, TOL));
    ok(isequalRel(ecc, 1.617052197068e-3, TOL));
    ok(isequalRel(incl, 1.438630519984, TOL));
    ok(isequalRel(omega, 4.769038308436, TOL));
    ok(isequalRel(argp, 5.080732696825, TOL));
    ok(isequalRel(nu, 3.441373946322, TOL));
    ok(isequalRel(m, 3.442330121509, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-7.522446749459e+02, 5.588354733011e+03, -3.275040925732e+03], [-6.611613700329e-01, -4.016290740302e+00, -6.676898026330e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-7.522446749459e2, 5.588354733011e3, -3.275040925732e3],
            [-6.611613700329e-1, -4.016290740302, -6.67689802633],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.523139137493e3, TOL));
    ok(isequalRel(a, 6.52315600463e3, TOL));
    ok(isequalRel(ecc, 1.608021315605e-3, TOL));
    ok(isequalRel(incl, 1.438703384846, TOL));
    ok(isequalRel(omega, 4.768947078294, TOL));
    ok(isequalRel(argp, 5.023523928243, TOL));
    ok(isequalRel(nu, 4.932554834367, TOL));
    ok(isequalRel(m, 4.935692418022, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-6.437287252548e+02, -2.585025285602e+03, -5.923013066083e+03], [8.079221418095e-01, -7.171597814175e+00, 3.041115058342e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-6.437287252548e2, -2.585025285602e3, -5.923013066083e3],
            [8.079221418095e-1, -7.171597814175, 3.041115058342],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.490085965241e3, TOL));
    ok(isequalRel(a, 6.490089087918e3, TOL));
    ok(isequalRel(ecc, 6.936464890584e-4, TOL));
    ok(isequalRel(incl, 1.438583151404, TOL));
    ok(isequalRel(omega, 4.768502956842, TOL));
    ok(isequalRel(argp, 2.147512766683, TOL));
    ok(isequalRel(nu, 2.967513492439, TOL));
    ok(isequalRel(m, 2.967273088337, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.844029581851e+02, -6.202356058171e+03, 1.781005360194e+03], [8.692504496186e-01, 2.226927513957e+00, 7.471676764710e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.844029581851e2, -6.202356058171e3, 1.781005360194e3],
            [8.692504496186e-1, 2.226927513957, 7.47167676471],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.481801128026e3, TOL));
    ok(isequalRel(a, 6.481802033257e3, TOL));
    ok(isequalRel(ecc, 3.737073375169e-4, TOL));
    ok(isequalRel(incl, 1.438741087827, TOL));
    ok(isequalRel(omega, 4.768351809548, TOL));
    ok(isequalRel(argp, 1.280936040457e-1, TOL));
    ok(isequalRel(nu, 1.528744208093e-1, TOL));
    ok(isequalRel(m, 1.527606362809e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[7.795921176491e+02, 1.100737283015e+03, 6.311595294805e+03], [-5.995523048656e-01, 7.721032522310e+00, -1.275153026528e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [7.795921176491e2, 1.100737283015e3, 6.311595294805e3],
            [-5.995523048656e-1, 7.72103252231, -1.275153026528],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.437470457748e3, TOL));
    ok(isequalRel(a, 6.437513987191e3, TOL));
    ok(isequalRel(ecc, 2.600353921139e-3, TOL));
    ok(isequalRel(incl, 1.43855571916, TOL));
    ok(isequalRel(omega, 4.767981317564, TOL));
    ok(isequalRel(argp, 4.74893087353, TOL));
    ok(isequalRel(nu, 3.269362202321, TOL));
    ok(isequalRel(m, 3.270026171986, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.030315558768e+02, 6.399180008372e+03, -3.641273587499e+02], [-1.008861923884e+00, -5.166366152128e-01, -7.799812287320e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.030315558768e2, 6.399180008372e3, -3.641273587499e2],
            [-1.008861923884, -5.166366152128e-1, -7.79981228732],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.427941398231e3, TOL));
    ok(isequalRel(a, 6.427955397644e3, TOL));
    ok(isequalRel(ecc, 1.475769388942e-3, TOL));
    ok(isequalRel(incl, 1.43875801384, TOL));
    ok(isequalRel(omega, 4.767745285928, TOL));
    ok(isequalRel(argp, 4.117578552992, TOL));
    ok(isequalRel(nu, 5.364426811137, TOL));
    ok(isequalRel(m, 5.366771263164, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-8.529391007119e+02, 1.926523202273e+02, -6.322470547838e+03], [3.960061942603e-01, -7.882964919438e+00, -2.893315173451e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-8.529391007119e2, 1.926523202273e2, -6.322470547838e3],
            [3.960061942603e-1, -7.882964919438, -2.893315173451e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.375606463225e3, TOL));
    ok(isequalRel(a, 6.375616078466e3, TOL));
    ok(isequalRel(ecc, 1.228058368261e-3, TOL));
    ok(isequalRel(incl, 1.438548458236, TOL));
    ok(isequalRel(omega, 4.767458789224, TOL));
    ok(isequalRel(argp, 1.079834071648, TOL));
    ok(isequalRel(nu, 3.595052659694, TOL));
    ok(isequalRel(m, 3.596129523039, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // *** error: t:= 440.000000 *** code =   6
    // 29238
});

test("[4.474279154954e+03, -1.447722861416e+03, 4.619839272345e+03], [4.712595821980e+00, 5.668306152772e+00, -2.701606741039e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.474279154954e3, -1.447722861416e3, 4.619839272345e3],
            [4.71259582198, 5.668306152772, -2.701606741039],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.719657783929e3, TOL));
    ok(isequalRel(a, 6.72258196471e3, TOL));
    ok(isequalRel(ecc, 2.085614589579e-2, TOL));
    ok(isequalRel(incl, 8.996688700562e-1, TOL));
    ok(isequalRel(omega, 3.723491805305, TOL));
    ok(isequalRel(argp, 1.647769568203, TOL));
    ok(isequalRel(nu, 3.856684162202e-1, TOL));
    ok(isequalRel(m, 3.702018396986e-1, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[1.922177124743e+03, 5.113011383417e+03, -4.087084702033e+03], [-6.490769650541e+00, -5.223501575279e-01, -3.896001153601e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.922177124743e3, 5.113011383417e3, -4.087084702033e3],
            [-6.490769650541, -5.223501575279e-1, -3.896001153601],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.721927099419e3, TOL));
    ok(isequalRel(a, 6.724846490205e3, TOL));
    ok(isequalRel(ecc, 2.083554807806e-2, TOL));
    ok(isequalRel(incl, 8.998223333854e-1, TOL));
    ok(isequalRel(omega, 3.716810828037, TOL));
    ok(isequalRel(argp, 1.659025131101, TOL));
    ok(isequalRel(nu, 2.353467440563, TOL));
    ok(isequalRel(m, 2.323593557526, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-6.157935468821e+03, -2.094707987903e+03, -1.941637309598e+03], [1.499006608594e-01, -5.175192523207e+00, 5.604262034415e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-6.157935468821e3, -2.094707987903e3, -1.941637309598e3],
            [1.499006608594e-1, -5.175192523207, 5.604262034415],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.727031374135e3, TOL));
    ok(isequalRel(a, 6.729866219855e3, TOL));
    ok(isequalRel(ecc, 2.052397602446e-2, TOL));
    ok(isequalRel(incl, 9.001439832273e-1, TOL));
    ok(isequalRel(omega, 3.708561249006, TOL));
    ok(isequalRel(argp, 1.650569749026, TOL));
    ok(isequalRel(nu, 4.25885985293, TOL));
    ok(isequalRel(m, 4.296006363366, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.482640524109e+03, -3.268459445550e+03, 5.146380061902e+03], [6.501814698230e+00, 4.402848753801e+00, -3.509435107562e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.482640524109e3, -3.26845944555e3, 5.146380061902e3],
            [6.50181469823, 4.402848753801, -3.509435107562e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.716249724923e3, TOL));
    ok(isequalRel(a, 6.719024402339e3, TOL));
    ok(isequalRel(ecc, 2.032137735504e-2, TOL));
    ok(isequalRel(incl, 8.995293188432e-1, TOL));
    ok(isequalRel(omega, 3.70132517009, TOL));
    ok(isequalRel(argp, 1.680134962843, TOL));
    ok(isequalRel(nu, 6.229835386726, TOL));
    ok(isequalRel(m, 6.231970099779, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[4.036264552866e+03, 4.827433472010e+03, -2.507990639548e+03], [-5.184409515423e+00, 1.772280694717e+00, -5.331390167990e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [4.036264552866e3, 4.82743347201e3, -2.507990639548e3],
            [-5.184409515423, 1.772280694717, -5.33139016799],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.725228003142e3, TOL));
    ok(isequalRel(a, 6.728054020044e3, TOL));
    ok(isequalRel(ecc, 2.049475083034e-2, TOL));
    ok(isequalRel(incl, 9.000798798682e-1, TOL));
    ok(isequalRel(omega, 3.694258870868, TOL));
    ok(isequalRel(argp, 1.704954140322, TOL));
    ok(isequalRel(nu, 1.928906360214, TOL));
    ok(isequalRel(m, 1.890311747313, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-5.776813716215e+03, -1.186415531930e+02, -3.641220524182e+03], [-2.539917206750e+00, -5.622701582125e+00, 4.403125405190e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-5.776813716215e3, -1.18641553193e2, -3.641220524182e3],
            [-2.53991720675, -5.622701582125, 4.40312540519],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.721987462883e3, TOL));
    ok(isequalRel(a, 6.724826415609e3, TOL));
    ok(isequalRel(ecc, 2.054653257801e-2, TOL));
    ok(isequalRel(incl, 8.999090117889e-1, TOL));
    ok(isequalRel(omega, 3.685929688621, TOL));
    ok(isequalRel(argp, 1.696652161771, TOL));
    ok(isequalRel(nu, 3.837856027087, TOL));
    ok(isequalRel(m, 3.864525427033, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[6.798699486521e+01, -4.456492134728e+03, 4.863717942833e+03], [7.183809419588e+00, 2.418917791052e+00, 2.015642495218e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [6.798699486521e1, -4.456492134728e3, 4.863717942833e3],
            [7.183809419588, 2.418917791052, 2.015642495218],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.71650743558e3, TOL));
    ok(isequalRel(a, 6.719331151834e3, TOL));
    ok(isequalRel(ecc, 2.049969994571e-2, TOL));
    ok(isequalRel(incl, 8.996078219187e-1, TOL));
    ok(isequalRel(omega, 3.679172839755, TOL));
    ok(isequalRel(argp, 1.714458963261, TOL));
    ok(isequalRel(nu, 5.795730699433, TOL));
    ok(isequalRel(m, 5.814675889982, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.520622070379e+03, 3.782382035542e+03, -5.967319316081e+02], [-3.027966069347e+00, 3.754152524768e+00, -6.013506362859e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.520622070379e3, 3.782382035542e3, -5.967319316081e2],
            [-3.027966069347, 3.754152524768, -6.013506362859],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.726684513704e3, TOL));
    ok(isequalRel(a, 6.729584553449e3, TOL));
    ok(isequalRel(ecc, 2.075906782496e-2, TOL));
    ok(isequalRel(incl, 9.002299697879e-1, TOL));
    ok(isequalRel(omega, 3.67148685207, TOL));
    ok(isequalRel(argp, 1.742303854431, TOL));
    ok(isequalRel(nu, 1.512897595518, TOL));
    ok(isequalRel(m, 1.471489306236, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-4.528051044554e+03, 1.808462733292e+03, -4.816997277621e+03], [-4.808419762697e+00, -5.185789344828e+00, 2.642104493777e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-4.528051044554e3, 1.808462733292e3, -4.816997277621e3],
            [-4.808419762697, -5.185789344828, 2.642104493777],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.716781089744e3, TOL));
    ok(isequalRel(a, 6.719740800681e3, TOL));
    ok(isequalRel(ecc, 2.098690457849e-2, TOL));
    ok(isequalRel(incl, 8.996654198839e-1, TOL));
    ok(isequalRel(omega, 3.663523025499, TOL));
    ok(isequalRel(argp, 1.722861308306, TOL));
    ok(isequalRel(nu, 3.446394713721, TOL));
    ok(isequalRel(m, 3.459182853549, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.356614680779e+03, -4.852512022719e+03, 3.856538161837e+03], [6.688446735149e+00, 1.185209579825e-01, 4.021854210077e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.356614680779e3, -4.852512022719e3, 3.856538161837e3],
            [6.688446735149, 1.185209579825e-1, 4.021854210077],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.719463719033e3, TOL));
    ok(isequalRel(a, 6.722415136345e3, TOL));
    ok(isequalRel(ecc, 2.095331036873e-2, TOL));
    ok(isequalRel(incl, 8.99846312558e-1, TOL));
    ok(isequalRel(omega, 3.656832378349, TOL));
    ok(isequalRel(argp, 1.719725905812, TOL));
    ok(isequalRel(nu, 5.40029542221, TOL));
    ok(isequalRel(m, 5.432349908996, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[6.149658001344e+03, 2.173594232607e+03, 1.369294887325e+03], [-3.458327771842e-01, 5.109857861076e+00, -5.842951828175e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [6.149658001344e3, 2.173594232607e3, 1.369294887325e3],
            [-3.458327771842e-1, 5.109857861076, -5.842951828175],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.72492191166e3, TOL));
    ok(isequalRel(a, 6.727922546357e3, TOL));
    ok(isequalRel(ecc, 2.111864606986e-2, TOL));
    ok(isequalRel(incl, 9.001902096084e-1, TOL));
    ok(isequalRel(omega, 3.648645507378, TOL));
    ok(isequalRel(argp, 1.747846293805, TOL));
    ok(isequalRel(nu, 1.128396722726, TOL));
    ok(isequalRel(m, 1.09048531929, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.629550114488e+03, 3.400980401577e+03, -5.344382171288e+03], [-6.368548448364e+00, -3.998963508932e+00, 5.772530637682e-01], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.629550114488e3, 3.400980401577e3, -5.344382171288e3],
            [-6.368548448364, -3.998963508932, 5.772530637682e-1],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.713476316757e3, TOL));
    ok(isequalRel(a, 6.716501912989e3, TOL));
    ok(isequalRel(ecc, 2.122432630575e-2, TOL));
    ok(isequalRel(incl, 8.995337568143e-1, TOL));
    ok(isequalRel(omega, 3.641280539566, TOL));
    ok(isequalRel(argp, 1.724247704599, TOL));
    ok(isequalRel(nu, 3.087220305974, TOL));
    ok(isequalRel(m, 3.08487621535, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
    // 88888
});

test("[1.020692345577e+03, 2.286562606342e+03, -6.191555659270e+03], [-3.746543902234e+00, 6.467532720713e+00, 1.827985678143e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [1.020692345577e3, 2.286562606342e3, -6.19155565927e3],
            [-3.746543902234, 6.467532720713, 1.827985678143],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.625280719812e3, TOL));
    ok(isequalRel(a, 6.626014152838e3, TOL));
    ok(isequalRel(ecc, 1.05209280726e-2, TOL));
    ok(isequalRel(incl, 1.271172110652, TOL));
    ok(isequalRel(omega, 2.020219537145, TOL));
    ok(isequalRel(argp, 1.108912409016, TOL));
    ok(isequalRel(nu, 3.847874084449, TOL));
    ok(isequalRel(m, 3.861612757496, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.226543491554e+03, 3.503709775249e+03, 4.532809793430e+03], [1.000992116067e+00, -5.788042888412e+00, 5.162585825662e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.226543491554e3, 3.503709775249e3, 4.53280979343e3],
            [1.000992116067, -5.788042888412, 5.162585825662],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.6330310907e3, TOL));
    ok(isequalRel(a, 6.633574667284e3, TOL));
    ok(isequalRel(ecc, 9.052250412713e-3, TOL));
    ok(isequalRel(incl, 1.271350239926, TOL));
    ok(isequalRel(omega, 2.016829095817, TOL));
    ok(isequalRel(argp, 1.042986910602, TOL));
    ok(isequalRel(nu, 6.046148101654, TOL));
    ok(isequalRel(m, 6.050371571658, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.456107065334e+03, -6.071938555030e+03, 1.222897685538e+03], [2.679390040234e+00, -4.482908110761e-01, -7.228792154938e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.456107065334e3, -6.07193855503e3, 1.222897685538e3],
            [2.679390040234, -4.482908110761e-1, -7.228792154938],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.641707289737e3, TOL));
    ok(isequalRel(a, 6.642309435299e3, TOL));
    ok(isequalRel(ecc, 9.521189153082e-3, TOL));
    ok(isequalRel(incl, 1.271554894215, TOL));
    ok(isequalRel(omega, 2.012808612484, TOL));
    ok(isequalRel(argp, 1.034231072197, TOL));
    ok(isequalRel(nu, 1.914091192733, TOL));
    ok(isequalRel(m, 1.896116972636, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[7.871645734899e+02, 2.719918009460e+03, -6.043866620243e+03], [-3.759883838595e+00, 6.277439314037e+00, 2.397897863858e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [7.871645734899e2, 2.71991800946e3, -6.043866620243e3],
            [-3.759883838595, 6.277439314037, 2.397897863858],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.625964322201e3, TOL));
    ok(isequalRel(a, 6.626664995046e3, TOL));
    ok(isequalRel(ecc, 1.028277032065e-2, TOL));
    ok(isequalRel(incl, 1.271190383408, TOL));
    ok(isequalRel(omega, 2.009042359582, TOL));
    ok(isequalRel(argp, 1.105486484401, TOL));
    ok(isequalRel(nu, 3.931537311526, TOL));
    ok(isequalRel(m, 3.946224861887, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-3.110976480293e+03, 3.121730262353e+03, 4.878152170355e+03], [1.244916055994e+00, -6.124880424955e+00, 4.700576353428e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-3.110976480293e3, 3.121730262353e3, 4.878152170355e3],
            [1.244916055994, -6.124880424955, 4.700576353428],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.631426011953e3, TOL));
    ok(isequalRel(a, 6.631939140117e3, TOL));
    ok(isequalRel(ecc, 8.796150676142e-3, TOL));
    ok(isequalRel(incl, 1.271315310465, TOL));
    ok(isequalRel(omega, 2.005677049072, TOL));
    ok(isequalRel(argp, 1.030217934101, TOL));
    ok(isequalRel(nu, 6.142192224381, TOL));
    ok(isequalRel(m, 6.144648352357, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.567562296951e+03, -6.112503839223e+03, 7.139637443537e+02], [2.440245751324e+00, 9.810900213933e-02, -7.319959258254e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.567562296951e3, -6.112503839223e3, 7.139637443537e2],
            [2.440245751324, 9.810900213933e-2, -7.319959258254],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.642037995413e3, TOL));
    ok(isequalRel(a, 6.64262128176e3, TOL));
    ok(isequalRel(ecc, 9.370681122593e-3, TOL));
    ok(isequalRel(incl, 1.271565197423, TOL));
    ok(isequalRel(omega, 2.001695070115, TOL));
    ok(isequalRel(argp, 1.026599628709, TOL));
    ok(isequalRel(nu, 2.002708132273, TOL));
    ok(isequalRel(m, 1.985637845032, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[5.560566178034e+02, 3.144522882008e+03, -5.855346361782e+03], [-3.754660143253e+00, 6.044752775392e+00, 2.957941671728e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [5.560566178034e2, 3.144522882008e3, -5.855346361782e3],
            [-3.754660143253, 6.044752775392, 2.957941671728],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.626844468362e3, TOL));
    ok(isequalRel(a, 6.627511386587e3, TOL));
    ok(isequalRel(ecc, 1.003138852591e-2, TOL));
    ok(isequalRel(incl, 1.271213220945, TOL));
    ok(isequalRel(omega, 1.997867733283, TOL));
    ok(isequalRel(argp, 1.097062999175, TOL));
    ok(isequalRel(nu, 4.020955344172, TOL));
    ok(isequalRel(m, 4.036484662356, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.982479405393e+03, 2.712616637110e+03, 5.192323304719e+03], [1.475566773233e+00, -6.427737013518e+00, 4.202420226902e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.982479405393e3, 2.71261663711e3, 5.192323304719e3],
            [1.475566773233, -6.427737013518, 4.202420226902],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.629861163234e3, TOL));
    ok(isequalRel(a, 6.630345581359e3, TOL));
    ok(isequalRel(ecc, 8.547559047484e-3, TOL));
    ok(isequalRel(incl, 1.271281327062, TOL));
    ok(isequalRel(omega, 1.994518241004, TOL));
    ok(isequalRel(argp, 1.01105713447, TOL));
    ok(isequalRel(nu, 6.245283000327, TOL));
    ok(isequalRel(m, 6.245926663275, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.663089643522e+03, -6.115482908846e+03, 1.964007286646e+02], [2.196121563878e+00, 6.524150925789e-01, -7.362824152460e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.663089643522e3, -6.115482908846e3, 1.964007286646e2],
            [2.196121563878, 6.524150925789e-1, -7.36282415246],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.642137015938e3, TOL));
    ok(isequalRel(a, 6.642702794748e3, TOL));
    ok(isequalRel(ecc, 9.228920995253e-3, TOL));
    ok(isequalRel(incl, 1.27157011515, TOL));
    ok(isequalRel(omega, 1.990582381545, TOL));
    ok(isequalRel(argp, 1.013915656513, TOL));
    ok(isequalRel(nu, 2.096871623755, TOL));
    ok(isequalRel(m, 2.080854087559, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[3.285499967384e+02, 3.557094905520e+03, -5.626214272111e+03], [-3.731193288240e+00, 5.769341171972e+00, 3.504058730818e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [3.285499967384e2, 3.55709490552e3, -5.626214272111e3],
            [-3.73119328824, 5.769341171972, 3.504058730818],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.627900352691e3, TOL));
    ok(isequalRel(a, 6.628534299831e3, TOL));
    ok(isequalRel(ecc, 9.779525182704e-3, TOL));
    ok(isequalRel(incl, 1.271240143893, TOL));
    ok(isequalRel(omega, 1.986696462737, TOL));
    ok(isequalRel(argp, 1.0830958227, TOL));
    ok(isequalRel(nu, 4.1166850118, TOL));
    ok(isequalRel(m, 4.132941784111, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[-2.842068767573e+03, 2.278423434920e+03, 5.472334371496e+03], [1.691852635382e+00, -6.693216334930e+00, 3.671022711877e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [-2.842068767573e3, 2.27842343492e3, 5.472334371496e3],
            [1.691852635382, -6.69321633493, 3.671022711877],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.628379251026e3, TOL));
    ok(isequalRel(a, 6.628838386695e3, TOL));
    ok(isequalRel(ecc, 8.322461617424e-3, TOL));
    ok(isequalRel(incl, 1.271249290598, TOL));
    ok(isequalRel(omega, 1.983352835854, TOL));
    ok(isequalRel(argp, 9.852497398353e-1, TOL));
    ok(isequalRel(nu, 7.247449604514e-2, TOL));
    ok(isequalRel(m, 7.127668165083e-2, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});

test("[2.742553988317e+03, -6.079670091229e+03, -3.263901264921e+02], [1.948497651478e+00, 1.211072678443e+00, -7.356193131278e+00], 3.986004418000e+05", function() {
    expect(11);
    var rets = rv2coe(
            [2.742553988317e3, -6.079670091229e3, -3.263901264921e2],
            [1.948497651478, 1.211072678443, -7.356193131278],
            3.986004418e5
        ),
        TOL = 0.000001,
        p = rets.shift(),
        a = rets.shift(),
        ecc = rets.shift(),
        incl = rets.shift(),
        omega = rets.shift(),
        argp = rets.shift(),
        nu = rets.shift(),
        m = rets.shift(),
        arglat = rets.shift(),
        truelon = rets.shift(),
        lonper = rets.shift();
    ok(isequalRel(p, 6.641994238861e3, TOL));
    ok(isequalRel(a, 6.642545324665e3, TOL));
    ok(isequalRel(ecc, 9.108405326374e-3, TOL));
    ok(isequalRel(incl, 1.271569416426, TOL));
    ok(isequalRel(omega, 1.979469619232, TOL));
    ok(isequalRel(argp, 9.963172878601e-1, TOL));
    ok(isequalRel(nu, 2.196448877477, TOL));
    ok(isequalRel(m, 2.181623524669, TOL));
    ok(isequalRel(arglat, 9.999991e5, TOL));
    ok(isequalRel(truelon, 9.999991e5, TOL));
    ok(isequalRel(lonper, 9.999991e5, TOL));
});
