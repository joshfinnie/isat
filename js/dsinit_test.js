/*global test: true, expect: true, isequalRel: true, module: true,
  getgravc: true, dsinit: true,
 */

// Need to get globals, using same input constant 72 as with run that
// generated asserts

var rets = getgravc(72),
    tumin = rets.shift(),
    mu = rets.shift(),
    radiusearthkm = rets.shift(),
    xke = rets.shift(),
    j2 = rets.shift(),
    j3 = rets.shift(),
    j4 = rets.shift(),
    j3oj2 = rets.shift();

module("dsinit");

// 5

test(" 9.800539401920e-01,  2.103967656036e-02,  3.623303527140e+00, -1.968466918871e-04, -4.620853989286e-05,  9.143969877776e-05,  9.047265431838e-05,", function() {
    var rets = dsinit(
            9.80053940192e-1,
            2.103967656036e-2,
            3.62330352714,
            -1.968466918871e-4,
            -4.620853989286e-5,
            9.143969877776e-5,
            9.047265431838e-5,
            1.015004737244e-2,
            1.987316640953e-1,
            -1.225562568207e-3,
            -2.87693210799e-4,
            5.693012719481e-4,
            5.632804773904e-4,
            1.75908249414e-2,
            1.313903514872e1,
            4.721576706992,
            2.38911507621,
            -6.53293014808e-2,
            -2.576626675289e-1,
            -7.103439559619e-1,
            7.986387467636,
            -1.166475754387,
            0.0,
            0.0,
            1.71602708407,
            2.512139658858,
            5.246109831442e-3,
            5.245868658927e-3,
            4.766670465451,
            -2.539711450894e-7,
            2.387324687663e-7,
            6.668001023728,
            9.879517039032,
            1.630805643792,
            9.259764788332e-1,
            8.286842069497e-1,
            -2.05015105615,
            1.24894436282,
            4.701299585848,
            1.450506e-1,
            0.0,
            2.000636014976e-1,
            0.0,
            5.245868658927e-3,
            0.0,
            1.450506e-1,
            2.103967656036e-2
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 1.450506e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 2.000636014976e-1, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 5.245868658927e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 0.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, -5.739257257134e-10, TOL));
    ok(isequalRel(didt, -2.669482583786e-8, TOL));
    ok(isequalRel(dmdt, -6.045613838815e-8, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -6.171410259572e-8, TOL));
    ok(isequalRel(domdt, 6.528741483006e-8, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, 0.0, TOL));
    ok(isequalRel(xlamo, 0.0, TOL));
    ok(isequalRel(xli, 0.0, TOL));
    ok(isequalRel(xni, 0.0, TOL));
});
// 4632
// 6251

test(" 4.358815257110e-01,  4.729513710532e-01,  4.621022739372e+00, -4.106209626082e-04, -3.776251664788e-05,  5.482975046298e-05,  3.980536524969e-05,", function() {
    var rets = dsinit(
            4.35881525711e-1,
            4.729513710532e-1,
            4.621022739372,
            -4.106209626082e-4,
            -3.776251664788e-5,
            5.482975046298e-5,
            3.980536524969e-5,
            3.199828401516e-1,
            9.000040530708e-1,
            -2.556515817813e-3,
            -2.351084818406e-4,
            3.413686516514e-4,
            2.478272060157e-4,
            2.645498128236e-1,
            2.823898158515,
            5.927750640042,
            5.580094190508e-1,
            4.998289169492e-1,
            9.668540331305e-1,
            -7.476532737815,
            -1.96738756969,
            2.987165889194,
            0.0,
            0.0,
            5.741801269032e-1,
            3.530050585206e-1,
            8.748086886633e-3,
            8.74854701963e-3,
            4.870720014138,
            -1.284567215801e-6,
            -1.358937308455e-6,
            2.900052189777,
            7.057852947556,
            1.364174869534,
            -2.248209584395e-1,
            -5.118745162783,
            -1.041382803617,
            1.083975928476,
            7.743675261388e-1,
            6.877146e-1,
            0.0,
            1.11977881347,
            0.0,
            8.74854701963e-3,
            0.0,
            6.877146e-1,
            4.729513710532e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 6.877146e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 1.11977881347, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 8.74854701963e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 2.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, -1.197359551623e-11, TOL));
    ok(isequalRel(d2211, 6.453213834121e-11, TOL));
    ok(isequalRel(d3210, -3.893722738131e-12, TOL));
    ok(isequalRel(d3222, -7.364857538023e-12, TOL));
    ok(isequalRel(d4410, 2.576960140946e-12, TOL));
    ok(isequalRel(d4422, 4.361455592714e-12, TOL));
    ok(isequalRel(d5220, -2.528789465953e-12, TOL));
    ok(isequalRel(d5232, 6.767712568551e-13, TOL));
    ok(isequalRel(d5421, -2.280698046562e-12, TOL));
    ok(isequalRel(d5433, -1.659570821491e-12, TOL));
    ok(isequalRel(dedt, -2.888547623461e-8, TOL));
    ok(isequalRel(didt, -9.784108269214e-9, TOL));
    ok(isequalRel(dmdt, 9.270786742527e-8, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -6.124323489695e-8, TOL));
    ok(isequalRel(domdt, -1.415521073384e-8, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, -8.753597222054e-3, TOL));
    ok(isequalRel(xlamo, 2.66289952581, TOL));
    ok(isequalRel(xli, 2.66289952581, TOL));
    ok(isequalRel(xni, 8.74854701963e-3, TOL));
});

// 8195

test(" 4.289855844945e-01,  4.997148204060e-01,  4.712788660783e+00, -4.105604224204e-04, -3.869698011745e-05,  5.474139856001e-05,  3.871905129561e-05,", function() {
    var rets = dsinit(
            4.289855844945e-1,
            4.99714820406e-1,
            4.712788660783,
            -4.105604224204e-4,
            -3.869698011745e-5,
            5.474139856001e-5,
            3.871905129561e-5,
            5.202004853494e-2,
            9.033113351973e-1,
            -2.556138896122e-3,
            -2.409264279726e-4,
            3.408185749187e-4,
            2.410638425744e-4,
            4.864426121357e-2,
            1.251742101403e1,
            2.488450010326,
            -6.448698696437e-1,
            8.062989067707e-1,
            -7.726437183168,
            -1.155188982526,
            5.782028627321,
            -2.0082436748,
            0.0,
            0.0,
            2.019617116981,
            2.850471734357e-1,
            8.762146865654e-3,
            8.762667060363e-3,
            6.097806906008,
            -1.408338623247e-6,
            -1.540202957123e-6,
            1.736414847372,
            1.535838635358e1,
            9.953838810723e-2,
            1.087290794062e-1,
            6.157731267206e-2,
            -8.590805802032,
            -2.838481585876,
            7.665591155216,
            7.069051e-1,
            0.0,
            1.127426846252,
            0.0,
            8.762667060363e-3,
            0.0,
            7.069051e-1,
            4.99714820406e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 7.069051e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 1.127426846252, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 8.762667060363e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 2.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, -1.22306600034e-11, TOL));
    ok(isequalRel(d2211, 7.174605316403e-11, TOL));
    ok(isequalRel(d3210, -4.151751044682e-12, TOL));
    ok(isequalRel(d3222, -8.877536621154e-12, TOL));
    ok(isequalRel(d4410, 3.097256488149e-12, TOL));
    ok(isequalRel(d4422, 5.507367501422e-12, TOL));
    ok(isequalRel(d5220, -3.254911516032e-12, TOL));
    ok(isequalRel(d5232, 7.95136450968e-13, TOL));
    ok(isequalRel(d5421, -2.951741474264e-12, TOL));
    ok(isequalRel(d5433, -2.267801942329e-12, TOL));
    ok(isequalRel(dedt, -4.867357573014e-9, TOL));
    ok(isequalRel(didt, -1.740817385888e-9, TOL));
    ok(isequalRel(dmdt, 7.2752906293e-9, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -8.615750092681e-8, TOL));
    ok(isequalRel(domdt, 2.335815977949e-8, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, -8.754040087689e-3, TOL));
    ok(isequalRel(xlamo, 2.158241444311, TOL));
    ok(isequalRel(xli, 2.158241444311, TOL));
    ok(isequalRel(xni, 8.762667060363e-3, TOL));
});

// 9880

test(" 9.862976975087e-01,  7.342528284100e-04,  5.716345999363e+00, -3.844603186866e-05, -4.732890446927e-05,  9.462305117515e-05,  9.458830617460e-05,", function() {
    var rets = dsinit(
            9.862976975087e-1,
            7.3425282841e-4,
            5.716345999363,
            -3.844603186866e-5,
            -4.732890446927e-5,
            9.462305117515e-5,
            9.45883061746e-5,
            -2.695688550324e-2,
            1.649753069066e-1,
            -2.393640304675e-4,
            -2.946685725612e-4,
            5.89120744159e-4,
            5.889044226567e-4,
            -1.75306938244e-2,
            1.630534276736e1,
            2.986878196174,
            1.457191263623,
            2.004645812038e-1,
            9.81311764279e-1,
            -3.108145795094e-1,
            1.086186823499e1,
            -2.988008293373,
            0.0,
            0.0,
            3.007604046768,
            5.377307065517e-1,
            5.069604859229e-3,
            5.06938472225e-3,
            5.465934884933,
            -2.264779093452e-7,
            2.171553869084e-7,
            1.347308349031e1,
            4.769908021423,
            2.121080157488,
            -9.649460768102e-2,
            3.902915047865e-1,
            4.483080689261e-1,
            8.376216737664,
            -1.193938800509,
            2.70971e-2,
            0.0,
            1.657329751109e-1,
            0.0,
            5.06938472225e-3,
            0.0,
            2.70971e-2,
            7.3425282841e-4
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 2.70971e-2, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 1.657329751109e-1, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 5.06938472225e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 1.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, 2.142414632713e-10, TOL));
    ok(isequalRel(didt, -2.100861346923e-8, TOL));
    ok(isequalRel(dmdt, -1.007233935453e-7, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, 5.240300896038e-8, TOL));
    ok(isequalRel(domdt, -2.079390322813e-8, TOL));
    ok(isequalRel(del1, -1.069242230635e-12, TOL));
    ok(isequalRel(del2, 2.268988798894e-11, TOL));
    ok(isequalRel(del3, 3.47829658441e-12, TOL));
    ok(isequalRel(xfact, -4.374900909933e-3, TOL));
    ok(isequalRel(xlamo, 2.4292222369, TOL));
    ok(isequalRel(xli, 2.4292222369, TOL));
    ok(isequalRel(xni, 5.06938472225e-3, TOL));
});

// 9998

test(" 6.846539709542e-01,  5.355365089730e-01,  8.285461931653e-01, -3.598896383932e-04, -3.529408803158e-05,  4.810694202241e-05,  3.278563067952e-05,", function() {
    var rets = dsinit(
            6.846539709542e-1,
            5.35536508973e-1,
            8.285461931653e-1,
            -3.598896383932e-4,
            -3.529408803158e-5,
            4.810694202241e-5,
            3.278563067952e-5,
            -3.295141721071e-1,
            7.288682597402e-1,
            -2.240663865223e-3,
            -2.197401071657e-4,
            2.995126148595e-4,
            2.041225145857e-4,
            -2.842063666668e-1,
            7.241600464427,
            1.668607687869,
            5.923151674967,
            -1.556942593186,
            -5.548981285667,
            1.612144872051e-1,
            3.273877043602,
            -2.146959216736,
            0.0,
            0.0,
            1.265125075736,
            1.817184457299e-1,
            9.971844927633e-3,
            9.971131604593e-3,
            4.02185644315,
            -3.528457562328e-6,
            -6.780000141855e-8,
            2.557388153538,
            8.004285429241,
            -1.949045345611,
            6.119118527262,
            6.841370517902e-1,
            -6.022288391897,
            -1.633514023053,
            3.788583001984,
            7.318036e-1,
            0.0,
            8.166674822762e-1,
            0.0,
            9.971131604593e-3,
            0.0,
            7.318036e-1,
            5.35536508973e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 7.318036e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 8.166674822762e-1, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 9.971131604593e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 0.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, 2.638606466889e-8, TOL));
    ok(isequalRel(didt, -3.476737419877e-8, TOL));
    ok(isequalRel(dmdt, 8.037814258571e-8, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -6.033631306028e-8, TOL));
    ok(isequalRel(domdt, 9.465204016205e-9, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, 0.0, TOL));
    ok(isequalRel(xlamo, 0.0, TOL));
    ok(isequalRel(xli, 0.0, TOL));
    ok(isequalRel(xni, 0.0, TOL));
});

// 11801

test(" 9.801384832532e-01,  1.336798440000e-06,  4.617827041512e-01, -1.928451076707e-06, -5.559746452923e-05,  1.111948547358e-04,  1.111947804133e-04,", function() {
    var rets = dsinit(
            9.801384832532e-1,
            1.33679844e-6,
            4.617827041512e-1,
            -1.928451076707e-6,
            -5.559746452923e-5,
            1.111948547358e-4,
            1.111947804133e-4,
            -2.173422574442e-2,
            1.983142799855e-1,
            -1.200648805206e-5,
            -3.461484201792e-4,
            6.922963776275e-4,
            6.92295914897e-4,
            -5.358747472118e-3,
            1.078528759969e1,
            8.9373351052,
            -4.630982613971e-1,
            -8.634002275673e-1,
            1.168263836916,
            -3.781220061153e-1,
            5.061183248572,
            3.08924967943,
            0.0,
            0.0,
            4.943902851905,
            5.821811010073,
            4.314022550354e-3,
            4.313874514604e-3,
            6.145897708218e-1,
            -1.54209500554e-7,
            1.449944717919e-7,
            4.216765164053,
            1.468549811421e1,
            -1.569394720994e-1,
            -1.398188689264,
            -1.680069232651e-1,
            1.343399415874,
            -1.774410090226,
            9.396297462977,
            1.1562e-3,
            0.0,
            1.996377411601e-1,
            0.0,
            4.313874514604e-3,
            0.0,
            1.1562e-3,
            1.33679844e-6
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 1.1562e-3, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 1.996377411601e-1, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 4.313874514604e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 1.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, 7.405672912273e-12, TOL));
    ok(isequalRel(didt, 1.917646021027e-8, TOL));
    ok(isequalRel(dmdt, -1.336452685205e-7, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, 6.865572727316e-8, TOL));
    ok(isequalRel(domdt, -2.09497409653e-8, TOL));
    ok(isequalRel(del1, -5.40161705918e-13, TOL));
    ok(isequalRel(del2, 1.319183725301e-11, TOL));
    ok(isequalRel(del3, 1.815021571877e-12, TOL));
    ok(isequalRel(xfact, -4.375061997072e-3, TOL));
    ok(isequalRel(xlamo, 1.954280633142, TOL));
    ok(isequalRel(xli, 1.954280633142, TOL));
    ok(isequalRel(xni, 4.313874514604e-3, TOL));
});

// 14128

test(" 4.680747993911e-01,  3.131887589093e-01,  4.278836976885e+00, -1.565426252795e-04, -1.357597034132e-05,  2.250191985532e-05,  1.864825807826e-05,", function() {
    var rets = dsinit(
            4.680747993911e-1,
            3.131887589093e-1,
            4.278836976885,
            -1.565426252795e-4,
            -1.357597034132e-5,
            2.250191985532e-5,
            1.864825807826e-5,
            8.624271127389e-2,
            8.836888491856e-1,
            -9.746304600404e-4,
            -8.45236509585e-5,
            1.400963888348e-4,
            1.161035872326e-4,
            1.60339942452e-2,
            2.070490436592,
            7.270449727238,
            7.572811749063e-3,
            2.712754928035,
            4.211910638255e-3,
            -5.76909447454,
            -2.992321735369,
            4.009225233322,
            0.0,
            0.0,
            2.298863660699,
            8.372169888892e-1,
            2.131535165822e-2,
            2.131732105901e-2,
            5.149138427074,
            -6.488927718517e-6,
            -5.833365942055e-6,
            5.540026309401,
            4.286859926875,
            3.326689201301,
            -4.118802452673e-1,
            -3.822206433384,
            -1.852783409566,
            2.175359468061,
            -8.44123622077e-1,
            5.596327e-1,
            0.0,
            1.083685404539,
            0.0,
            2.131732105901e-2,
            0.0,
            5.596327e-1,
            3.131887589093e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 5.596327e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 1.083685404539, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 2.131732105901e-2, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 0.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, -2.324540208861e-9, TOL));
    ok(isequalRel(didt, -9.012956177194e-9, TOL));
    ok(isequalRel(dmdt, 3.250770527931e-8, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -2.039277854983e-8, TOL));
    ok(isequalRel(domdt, -1.115284366841e-8, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, 0.0, TOL));
    ok(isequalRel(xlamo, 0.0, TOL));
    ok(isequalRel(xli, 0.0, TOL));
    ok(isequalRel(xni, 0.0, TOL));
});

// 16925

test(" 9.768540719074e-01,  6.184952661581e-01,  3.426128445555e+00, -3.244378761083e-03, -3.604476295552e-04,  4.452686665858e-04,  2.750249539548e-04,", function() {
    var rets = dsinit(
            9.768540719074e-1,
            6.184952661581e-1,
            3.426128445555,
            -3.244378761083e-3,
            -3.604476295552e-4,
            4.452686665858e-4,
            2.750249539548e-4,
            -1.4017741458e-1,
            2.139068072733e-1,
            -2.019942082109e-2,
            -2.244137904207e-3,
            2.772231554066e-3,
            1.712298467698e-3,
            -1.156263617362e-1,
            1.342983301258,
            2.373573855782e1,
            1.488445240897,
            1.681085250112,
            -1.539375336156,
            -4.405223915392e-1,
            -1.641109798937,
            1.098582545735e1,
            0.0,
            0.0,
            4.071885638059e-1,
            6.222933050742,
            1.077308058974e-3,
            1.077283640185e-3,
            3.271188586538,
            -4.147025214065e-8,
            3.858053576462e-8,
            9.726328330151,
            1.5079659824e1,
            -4.80668748938,
            7.971761783749,
            7.614242560927e-1,
            -2.792471768775,
            2.853856110337,
            6.643935146438,
            7.864447e-1,
            0.0,
            2.155725972308e-1,
            0.0,
            1.077283640185e-3,
            0.0,
            7.864447e-1,
            6.184952661581e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 7.864447e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 2.155725972308e-1, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 1.077283640185e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 0.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, 9.991744175572e-8, TOL));
    ok(isequalRel(didt, -2.656246157481e-7, TOL));
    ok(isequalRel(dmdt, -7.442607144689e-7, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -7.900872576398e-7, TOL));
    ok(isequalRel(domdt, 9.925475448625e-7, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, 0.0, TOL));
    ok(isequalRel(xlamo, 0.0, TOL));
    ok(isequalRel(xli, 0.0, TOL));
    ok(isequalRel(xni, 0.0, TOL));
});

// 20413

test(" 4.667741107229e-01,  5.508148245610e-01,  4.416489349660e+00, -4.075107416397e-04, -4.074643162103e-05,  5.461755872540e-05,  3.660538607241e-05,", function() {
    var rets = dsinit(
            4.667741107229e-1,
            5.50814824561e-1,
            4.41648934966,
            -4.075107416397e-4,
            -4.074643162103e-5,
            5.46175587254e-5,
            3.660538607241e-5,
            -1.448694740914e-1,
            8.84376576781e-1,
            -2.537151660045e-3,
            -2.536862616486e-4,
            3.400475512134e-4,
            2.279042158902e-4,
            -1.671806012792e-1,
            2.823148385069e-1,
            1.956688264698,
            7.560455550249e-1,
            -2.82470790637e-1,
            -1.88315544592,
            1.82198011548e-1,
            1.221664044049e-1,
            -2.581256708122,
            0.0,
            0.0,
            4.912171010008,
            3.517903093612e-1,
            8.782060217382e-3,
            8.782535528761e-3,
            3.455919470557,
            -1.910984836962e-6,
            -1.729308560804e-6,
            1.395145995474,
            4.527362363151e-1,
            -1.416027632726,
            1.45484104924,
            7.775545601669e-1,
            -9.150438705484e-1,
            -2.067807705441,
            -6.097888439984e-1,
            7.42169e-1,
            0.0,
            1.085156717098,
            0.0,
            8.782535528761e-3,
            0.0,
            7.42169e-1,
            5.50814824561e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 7.42169e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 1.085156717098, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 8.782535528761e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 2.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, -1.35843048033e-11, TOL));
    ok(isequalRel(d2211, 8.393534226859e-11, TOL));
    ok(isequalRel(d3210, -7.731467500396e-12, TOL));
    ok(isequalRel(d3222, -1.225068944742e-11, TOL));
    ok(isequalRel(d4410, 4.702956210526e-12, TOL));
    ok(isequalRel(d4422, 8.003291640479e-12, TOL));
    ok(isequalRel(d5220, -6.224656265138e-12, TOL));
    ok(isequalRel(d5232, 2.558930440722e-12, TOL));
    ok(isequalRel(d5421, -5.640794406041e-12, TOL));
    ok(isequalRel(d5433, -3.910753384831e-12, TOL));
    ok(isequalRel(dedt, 1.441546149773e-8, TOL));
    ok(isequalRel(didt, -1.685608671533e-9, TOL));
    ok(isequalRel(dmdt, 1.94884956772e-7, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -6.831807033508e-9, TOL));
    ok(isequalRel(domdt, -7.014119890435e-8, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, -8.754654235733e-3, TOL));
    ok(isequalRel(xlamo, -2.560712769541, TOL));
    ok(isequalRel(xli, -2.560712769541, TOL));
    ok(isequalRel(xni, 8.782535528761e-3, TOL));
});

// 21897
// 22312
// *** error: t:= 494.202867 *** code =   1

test(" 4.461431438481e-01,  5.687741989094e-01,  4.421379762224e+00, -4.152029536535e-04, -4.255636236536e-05,  5.589164123999e-05,  3.670280290501e-05,", function() {
    var rets = dsinit(
            4.461431438481e-1,
            5.687741989094e-1,
            4.421379762224,
            -4.152029536535e-4,
            -4.255636236536e-5,
            5.589164123999e-5,
            3.670280290501e-5,
            -6.781121236965e-2,
            8.949616166056e-1,
            -2.585043179178e-3,
            -2.649548450829e-4,
            3.479799570045e-4,
            2.285107306474e-4,
            -9.300055233772e-2,
            1.01143349191e1,
            6.174055799605,
            1.436091100595,
            9.894345792869e-1,
            -7.445807450018,
            -1.671723221244,
            4.048778658683,
            2.787486533023e-1,
            0.0,
            0.0,
            2.003968969617,
            3.276925483789e-1,
            8.581775564227e-3,
            8.58233251624e-3,
            6.18623575789,
            -1.877848338725e-6,
            -1.889270581478e-6,
            1.813115954744,
            1.643557313837e1,
            -1.421821877921e-1,
            2.491510678518,
            8.950346641696e-2,
            -8.822850177431,
            -2.661737982326,
            7.910128348311,
            7.541712e-1,
            0.0,
            1.10834516154,
            0.0,
            8.58233251624e-3,
            0.0,
            7.541712e-1,
            5.687741989094e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 7.541712e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 1.10834516154, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 8.58233251624e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 2.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, -1.241189028817e-11, TOL));
    ok(isequalRel(d2211, 8.551864262335e-11, TOL));
    ok(isequalRel(d3210, -6.602089272382e-12, TOL));
    ok(isequalRel(d3222, -1.302466004394e-11, TOL));
    ok(isequalRel(d4410, 4.891528985291e-12, TOL));
    ok(isequalRel(d4422, 8.891260588609e-12, TOL));
    ok(isequalRel(d5220, -6.477888050339e-12, TOL));
    ok(isequalRel(d5232, 2.138467008675e-12, TOL));
    ok(isequalRel(d5421, -5.750904185904e-12, TOL));
    ok(isequalRel(d5433, -4.51054933261e-12, TOL));
    ok(isequalRel(dedt, 7.330390566401e-9, TOL));
    ok(isequalRel(didt, -2.350896248702e-8, TOL));
    ok(isequalRel(dmdt, -2.726008010046e-9, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -9.800554699737e-8, TOL));
    ok(isequalRel(domdt, 3.479071142642e-8, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, -8.755049561816e-3, TOL));
    ok(isequalRel(xlamo, 2.409040817745, TOL));
    ok(isequalRel(xli, 2.409040817745, TOL));
    ok(isequalRel(xni, 8.58233251624e-3, TOL));
});

// 22674

test(" 9.924402794872e-01,  5.268569159708e-01,  5.167015834603e+00, -3.645715464322e-04, -3.538528327605e-05,  4.867981516121e-05,  3.348460411695e-05,", function() {
    var rets = dsinit(
            9.924402794872e-1,
            5.268569159708e-1,
            5.167015834603,
            -3.645715464322e-4,
            -3.538528327605e-5,
            4.867981516121e-5,
            3.348460411695e-5,
            1.335551822618e-1,
            1.227285282698e-1,
            -2.269813307285e-3,
            -2.203078864713e-4,
            3.030793086581e-4,
            2.084743056819e-4,
            1.012064733473e-1,
            1.743998961512e1,
            3.164791090678,
            -3.199300228592,
            4.664978268716e-1,
            -7.168375325603,
            3.420608511894e-1,
            8.465783464086,
            -1.818289405144,
            0.0,
            0.0,
            1.346832291139,
            1.449687929999e-1,
            9.857038097825e-3,
            9.853789469239e-3,
            3.138517383448,
            -4.803174199882e-6,
            4.696272070899e-6,
            9.381951731311,
            9.59003754521,
            -8.992776337465e-1,
            -2.058802147183,
            -1.165590178778,
            -6.225633496546,
            2.282389782041,
            3.618008474818,
            7.258491e-1,
            0.0,
            1.230387309486e-1,
            0.0,
            9.853789469239e-3,
            0.0,
            7.258491e-1,
            5.268569159708e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 7.258491e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 1.230387309486e-1, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 9.853789469239e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 0.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, -1.045444380488e-8, TOL));
    ok(isequalRel(didt, 2.376724085775e-8, TOL));
    ok(isequalRel(dmdt, -2.642690499755e-8, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -4.838389780477e-7, TOL));
    ok(isequalRel(domdt, 4.812656940526e-7, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, 0.0, TOL));
    ok(isequalRel(xlamo, 0.0, TOL));
    ok(isequalRel(xli, 0.0, TOL));
    ok(isequalRel(xni, 0.0, TOL));
});

// 23177

test(" 8.767351504117e-01,  9.463978197680e-01,  5.312084111370e-01, -5.081511320759e-03, -3.248271505978e-03,  1.504089035974e-03,  3.482288694116e-04,", function() {
    var rets = dsinit(
            8.767351504117e-1,
            9.46397819768e-1,
            5.31208411137e-1,
            -5.081511320759e-3,
            -3.248271505978e-3,
            1.504089035974e-3,
            3.482288694116e-4,
            -2.328528826856e-3,
            4.809734670776e-1,
            -3.163736207572e-2,
            -2.022365695321e-2,
            9.364420626367e-3,
            2.168064209911e-3,
            -2.895833784881e-3,
            3.995477449554,
            2.548928504566e1,
            8.310226113488e-1,
            -3.71803363131e-2,
            -5.208379182207e-1,
            2.162664475876e-2,
            -1.002513894286,
            1.001300979507e1,
            0.0,
            0.0,
            3.849219568564,
            2.356194490192e-2,
            3.18936717334e-4,
            3.189177226396e-4,
            4.139920985731e-2,
            -1.102439219498e-7,
            6.851791339748e-8,
            2.567833618728e1,
            3.829122677668,
            1.717602413072,
            -1.421861902345,
            -1.018792332212,
            7.806838841821e-1,
            1.012719038286e1,
            -1.037186103277,
            9.728298e-1,
            0.0,
            5.017647066558e-1,
            0.0,
            3.189177226396e-4,
            0.0,
            9.728298e-1,
            9.46397819768e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 9.728298e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 5.017647066558e-1, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 3.189177226396e-4, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 0.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, 2.968135603242e-9, TOL));
    ok(isequalRel(didt, -3.439044884764e-7, TOL));
    ok(isequalRel(dmdt, -3.438051105625e-6, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -5.053925231474e-7, TOL));
    ok(isequalRel(domdt, 6.914571527623e-7, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, 0.0, TOL));
    ok(isequalRel(xlamo, 0.0, TOL));
    ok(isequalRel(xli, 0.0, TOL));
    ok(isequalRel(xni, 0.0, TOL));
});

// 23333

test(" 9.926886154337e-01,  3.343177840848e-01,  4.789944431026e+00, -1.738090138239e-04, -1.505235132354e-05,  2.456223144115e-05,  2.004016516758e-05,", function() {
    var rets = dsinit(
            9.926886154337e-1,
            3.343177840848e-1,
            4.789944431026,
            -1.738090138239e-4,
            -1.505235132354e-5,
            2.456223144115e-5,
            2.004016516758e-5,
            1.141559521691e-2,
            1.207034083544e-1,
            -1.082130562202e-3,
            -9.371556193695e-5,
            1.529238371106e-4,
            1.247695658719e-4,
            6.79427489384e-3,
            2.003045339565e1,
            2.211939691926,
            4.180135541233e-1,
            -2.14603903785e-1,
            3.703990857776,
            9.931402744621e-2,
            1.086424461544e1,
            -2.824901577941,
            0.0,
            0.0,
            3.217495488339,
            4.405647364347e-1,
            1.953881035267e-2,
            1.952919673236e-2,
            4.972443038932e-3,
            -1.198223317894e-5,
            1.172590697508e-5,
            3.735227503813,
            1.729498918205e1,
            3.506359240961e-1,
            -9.417227746221e-2,
            3.278561983564e-1,
            4.459680168698,
            -1.664599028406,
            9.044696472935,
            5.782022e-1,
            0.0,
            1.20998441053e-1,
            0.0,
            1.952919673236e-2,
            0.0,
            5.782022e-1,
            3.343177840848e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 5.782022e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 1.20998441053e-1, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 1.952919673236e-2, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 0.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, -4.020215919893e-10, TOL));
    ok(isequalRel(didt, -8.390202397339e-10, TOL));
    ok(isequalRel(dmdt, -3.093486129009e-8, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, 1.298165842561e-7, TOL));
    ok(isequalRel(domdt, -1.214482290414e-7, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, 0.0, TOL));
    ok(isequalRel(xlamo, 0.0, TOL));
    ok(isequalRel(xli, 0.0, TOL));
    ok(isequalRel(xni, 0.0, TOL));
});

// 23599

test(" 9.977390326858e-01,  7.096896000000e-06,  5.429679160382e+00, -4.359221435156e-06, -5.454519985382e-05,  1.090900126053e-04,  1.090896255044e-04,", function() {
    var rets = dsinit(
            9.977390326858e-1,
            7.096896e-6,
            5.429679160382,
            -4.359221435156e-6,
            -5.454519985382e-5,
            1.090900126053e-4,
            1.090896255044e-4,
            -1.083047439793e-1,
            6.720731102433e-2,
            -2.714040335773e-5,
            -3.395970466932e-4,
            6.791916832972e-4,
            6.791892732165e-4,
            -7.564404853169e-2,
            3.767328239899,
            1.581833001499e1,
            -1.872126641261,
            -2.907894586864e-1,
            8.194386720961e-1,
            -7.797944210889e-1,
            -1.428938019349,
            9.936004110508,
            0.0,
            0.0,
            5.037771726289,
            8.429940287133e-1,
            4.397272137107e-3,
            4.397108759492e-3,
            1.396474586435,
            -1.641412021814e-7,
            1.630334252187e-7,
            1.114414424666e1,
            7.90614093135,
            -5.626930686788e-3,
            -2.487816486377,
            2.349040036708e-1,
            -1.117504942767e-1,
            5.153323530243,
            3.233275263102,
            2.664e-3,
            0.0,
            6.725800805485e-2,
            0.0,
            4.397108759492e-3,
            0.0,
            2.664e-3,
            7.096896e-6
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 2.664e-3, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 6.725800805485e-2, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 4.397108759492e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 1.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, 9.92869738968e-11, TOL));
    ok(isequalRel(didt, 3.031124826307e-8, TOL));
    ok(isequalRel(dmdt, -1.325603345647e-7, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, 1.822046740261e-8, TOL));
    ok(isequalRel(domdt, 4.338936906528e-8, TOL));
    ok(isequalRel(del1, -6.44692189363e-13, TOL));
    ok(isequalRel(del2, 1.431037712307e-11, TOL));
    ok(isequalRel(del3, 2.011847944584e-12, TOL));
    ok(isequalRel(xfact, -4.375013627469e-3, TOL));
    ok(isequalRel(xlamo, 2.631376049241, TOL));
    ok(isequalRel(xli, 2.631376049241, TOL));
    ok(isequalRel(xni, 4.397108759492e-3, TOL));
});

// 24208

test(" 9.999999999756e-01,  3.115225000000e-08,  2.710391608592e-01, -2.902754621049e-07, -5.482067443771e-05,  1.096413471676e-04,  1.096413454598e-04,", function() {
    var rets = dsinit(
            9.999999999756e-1,
            3.115225e-8,
            2.710391608592e-1,
            -2.902754621049e-7,
            -5.482067443771e-5,
            1.096413471676e-4,
            1.096413454598e-4,
            -6.378753298339e-2,
            6.981317007921e-6,
            -1.807247749069e-6,
            -3.413121445456e-4,
            6.826242784585e-4,
            6.826242678259e-4,
            -2.876970046754e-2,
            1.333992996164e1,
            4.892059732956,
            1.689817110256,
            2.754638380722e-1,
            -1.338739623226,
            3.722456902921e-1,
            8.253714037282,
            -1.071983687153,
            0.0,
            0.0,
            4.036986406591e-1,
            3.964236143225e-1,
            4.37516034265e-3,
            4.374997775854e-3,
            4.25535008114,
            -1.625870617371e-7,
            1.625931017325e-7,
            1.45374273858e1,
            3.006154336733,
            2.231085072369,
            -2.105266627735e-1,
            -1.762284682913e-1,
            -1.198590634013,
            9.539627269283,
            -2.735935826075,
            1.765e-4,
            0.0,
            6.981317007977e-6,
            0.0,
            4.374997775854e-3,
            0.0,
            1.765e-4,
            3.115225e-8
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 1.765e-4, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 6.981317007977e-6, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 4.374997775854e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 1.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, 3.553156778959e-12, TOL));
    ok(isequalRel(didt, -2.555341579158e-8, TOL));
    ok(isequalRel(dmdt, -9.603349062976e-8, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, 0.0, TOL));
    ok(isequalRel(domdt, 2.359014000576e-8, TOL));
    ok(isequalRel(del1, -6.397483834459e-13, TOL));
    ok(isequalRel(del2, 1.410403339869e-11, TOL));
    ok(isequalRel(del3, 1.978471517958e-12, TOL));
    ok(isequalRel(xfact, -4.375016371464e-3, TOL));
    ok(isequalRel(xlamo, 4.519114215663, TOL));
    ok(isequalRel(xli, 4.519114215663, TOL));
    ok(isequalRel(xni, 4.374997775854e-3, TOL));
});

// 25954

test(" 9.999999590350e-01,  1.101576100000e-07,  1.504114277393e+00, -5.458354928034e-07, -5.481927818934e-05,  1.096385503399e-04,  1.096385443012e-04,", function() {
    var rets = dsinit(
            9.99999959035e-1,
            1.1015761e-7,
            1.504114277393,
            -5.458354928034e-7,
            -5.481927818934e-5,
            1.096385503399e-4,
            1.096385443012e-4,
            3.134894679716e-2,
            2.862339934185e-4,
            -3.398358092612e-6,
            -3.413034515383e-4,
            6.826068654794e-4,
            6.826068278822e-4,
            2.000630099778e-2,
            3.956575789077,
            1.652997143817e1,
            2.076153554075,
            1.09897225735e-1,
            -5.818957556802e-1,
            4.481930162117e-1,
            -1.129325285006,
            1.056567498445e1,
            0.0,
            0.0,
            1.971276525301,
            3.181019641392,
            4.375271956456e-3,
            4.375109379983e-3,
            4.651962191022,
            -1.625967594802e-7,
            1.626027800693e-7,
            1.692870278037e1,
            3.318943922456,
            2.623614504262e-1,
            2.251844529048,
            -9.937247788382e-1,
            8.122714145074e-1,
            1.111024835979e1,
            -1.489207064283,
            3.319e-4,
            0.0,
            2.862339973271e-4,
            0.0,
            4.375109379983e-3,
            0.0,
            3.319e-4,
            1.1015761e-7
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 3.319e-4, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 2.862339973271e-4, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 4.375109379983e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 1.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, -3.521807114582e-12, TOL));
    ok(isequalRel(didt, -3.07381148514e-8, TOL));
    ok(isequalRel(dmdt, -1.613621211138e-7, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, 0.0, TOL));
    ok(isequalRel(domdt, 9.08879256671e-8, TOL));
    ok(isequalRel(del1, -6.398136216901e-13, TOL));
    ok(isequalRel(del2, 1.410522936173e-11, TOL));
    ok(isequalRel(del3, 1.978672345716e-12, TOL));
    ok(isequalRel(xfact, -4.375014382954e-3, TOL));
    ok(isequalRel(xlamo, 1.082634277327, TOL));
    ok(isequalRel(xli, 1.082634277327, TOL));
    ok(isequalRel(xni, 4.375109379983e-3, TOL));
});

// 26900

test(" 3.669656121548e-01,  3.139223067713e-01,  2.159817024075e+00, -3.720978016674e-04, -3.226647047178e-05,  5.345251045300e-05,  4.427461125982e-05,", function() {
    var rets = dsinit(
            3.669656121548e-1,
            3.139223067713e-1,
            2.159817024075,
            -3.720978016674e-4,
            -3.226647047178e-5,
            5.3452510453e-5,
            4.427461125982e-5,
            4.525325835392e-1,
            9.302345077967e-1,
            -2.316671583676e-3,
            -2.00890236149e-4,
            3.327939898804e-4,
            2.756526196186e-4,
            4.714471153965e-1,
            4.938361689104,
            9.915361480964,
            3.805314774695,
            -4.033107780993,
            3.078769405047,
            -4.186982926525,
            1.829903197356,
            4.830822077162,
            0.0,
            0.0,
            3.853994597295,
            5.280959654819,
            8.973503564981e-3,
            8.973959238486e-3,
            4.121251198722,
            -6.772847467554e-7,
            -9.789586434359e-7,
            3.661706391172,
            1.237778093895e1,
            -3.293349160083,
            3.205045658268,
            -3.721535433952,
            3.127067944841,
            1.881696181512,
            5.733881237525,
            5.602877e-1,
            0.0,
            1.19505137345,
            0.0,
            8.973959238486e-3,
            0.0,
            5.602877e-1,
            3.139223067713e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 5.602877e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 1.19505137345, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 8.973959238486e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 2.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, -9.786807233862e-12, TOL));
    ok(isequalRel(d2211, 4.375070167297e-11, TOL));
    ok(isequalRel(d3210, -7.299736059955e-13, TOL));
    ok(isequalRel(d3222, -3.088972920727e-12, TOL));
    ok(isequalRel(d4410, 1.175930799908e-12, TOL));
    ok(isequalRel(d4422, 1.666014658389e-12, TOL));
    ok(isequalRel(d5220, -5.223073387126e-13, TOL));
    ok(isequalRel(d5232, -4.239623278319e-14, TOL));
    ok(isequalRel(d5421, -5.046358599919e-13, TOL));
    ok(isequalRel(d5433, -3.893572552863e-13, TOL));
    ok(isequalRel(dedt, -3.971152052616e-8, TOL));
    ok(isequalRel(didt, 9.978447336132e-10, TOL));
    ok(isequalRel(dmdt, 2.773996268752e-9, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -6.124174505388e-9, TOL));
    ok(isequalRel(domdt, 1.574985894206e-8, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, -8.752357893374e-3, TOL));
    ok(isequalRel(xlamo, 5.815472857673, TOL));
    ok(isequalRel(xli, 5.815472857673, TOL));
    ok(isequalRel(xni, 8.973959238486e-3, TOL));
});

// 26975
// 28057

test(" 5.774330664585e-01,  2.352832036000e-05,  4.647183479530e+00, -3.988100801283e-06, -2.740688187581e-05,  5.481311890993e-05,  5.481247407583e-05,", function() {
    var rets = dsinit(
            5.774330664585e-1,
            2.352832036e-5,
            4.64718347953,
            -3.988100801283e-6,
            -2.740688187581e-5,
            5.481311890993e-5,
            5.481247407583e-5,
            1.233438061238e-1,
            8.164380281199e-1,
            -2.482981559624e-5,
            -1.706345593936e-4,
            3.412651040191e-4,
            3.412610892981e-4,
            1.105337187989e-1,
            8.767976650646,
            6.169258803781,
            -1.152824021952,
            2.246796171257,
            -1.154475187594,
            -1.523900599171,
            3.250295769937,
            1.892522670385,
            0.0,
            0.0,
            2.059978512381,
            1.626058686901,
            8.751201649839e-3,
            8.751201528747e-3,
            5.669000452744,
            -4.732303306962e-7,
            -1.999135774132e-7,
            3.15799800719,
            1.30228679628e1,
            2.120494801971,
            -7.545400183037e-1,
            -3.322838238711e-1,
            -2.102528269689,
            -1.9378868293,
            8.019981829044,
            4.8506e-3,
            0.0,
            9.55215208958e-1,
            0.0,
            8.751201528747e-3,
            0.0,
            4.8506e-3,
            2.352832036e-5
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 4.8506e-3, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 9.55215208958e-1, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 8.751201528747e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 0.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, -1.106805331423e-10, TOL));
    ok(isequalRel(didt, -8.158095760647e-9, TOL));
    ok(isequalRel(dmdt, -2.27484745765e-8, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -1.962977385408e-8, TOL));
    ok(isequalRel(domdt, 8.552991333113e-9, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, 0.0, TOL));
    ok(isequalRel(xlamo, 0.0, TOL));
    ok(isequalRel(xli, 0.0, TOL));
    ok(isequalRel(xni, 0.0, TOL));
});

// 28129
// 28350
// *** error: t:= 1560.000000 *** code =   1

test(" 8.786504992963e-01,  3.905066339681e-01,  2.971510317983e+00, -2.120658619569e-04, -1.855950189595e-05,  2.897882708615e-05,  2.262378656488e-05,", function() {
    var rets = dsinit(
            8.786504992963e-1,
            3.905066339681e-1,
            2.971510317983,
            -2.120658619569e-4,
            -1.855950189595e-5,
            2.897882708615e-5,
            2.262378656488e-5,
            2.722596005818e-1,
            4.77465496226e-1,
            -1.320316739475e-3,
            -1.15550993467e-4,
            1.804214508603e-4,
            1.40855127913e-4,
            2.34645319094e-1,
            1.77622295797e1,
            1.577591992681,
            -5.936254038933,
            1.169202637163,
            -7.594596902903e-1,
            -1.449580783613,
            9.294909311397,
            -1.975013243152,
            0.0,
            0.0,
            3.606984295022,
            3.715744890972,
            1.655781496506e-2,
            1.655279727416e-2,
            2.006838915138,
            -8.592532289781e-6,
            5.392137164581e-6,
            5.938562976121,
            1.175748702715e1,
            2.138574136804,
            -7.324682871238,
            -5.405862432734e-1,
            -1.640247637107,
            3.189234780521e-1,
            6.127782826163,
            6.249053e-1,
            0.0,
            4.977679026688e-1,
            0.0,
            1.655279727416e-2,
            0.0,
            6.249053e-1,
            3.905066339681e-1
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 6.249053e-1, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 4.977679026688e-1, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 1.655279727416e-2, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 0.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, -1.284368777035e-8, TOL));
    ok(isequalRel(didt, 2.182189987367e-8, TOL));
    ok(isequalRel(dmdt, -1.266772856942e-8, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, -1.981003275567e-8, TOL));
    ok(isequalRel(domdt, 2.122734368629e-8, TOL));
    ok(isequalRel(del1, 0.0, TOL));
    ok(isequalRel(del2, 0.0, TOL));
    ok(isequalRel(del3, 0.0, TOL));
    ok(isequalRel(xfact, 0.0, TOL));
    ok(isequalRel(xlamo, 0.0, TOL));
    ok(isequalRel(xli, 0.0, TOL));
    ok(isequalRel(xni, 0.0, TOL));
});

// 28623

test(" 9.999999994502e-01,  1.122250000000e-09,  2.407123197766e-01, -5.509538844302e-08, -5.482128209438e-05,  1.096425641272e-04,  1.096425640657e-04,", function() {
    var rets = dsinit(
            9.999999994502e-1,
            1.12225e-9,
            2.407123197766e-1,
            -5.509538844302e-8,
            -5.482128209438e-5,
            1.096425641272e-4,
            1.096425640657e-4,
            1.006889932162e-1,
            3.316125578181e-5,
            -3.430225070548e-7,
            -3.413159278008e-4,
            6.826318552185e-4,
            6.826318548355e-4,
            6.952479533275e-2,
            1.397388821705e1,
            4.797029487281,
            2.148442577894,
            -5.343190451679e-2,
            1.782467849547e-1,
            4.59828447619e-1,
            8.887642026753,
            -1.167039270606,
            0.0,
            0.0,
            1.422713433736,
            9.712827100519e-1,
            4.375111778864e-3,
            4.374949216286e-3,
            5.008105351538,
            -1.625828407295e-7,
            1.62588880222e-7,
            9.646010296956,
            8.132201558755,
            3.027985928786e-1,
            2.108163619135,
            -5.607883259758e-1,
            1.297708424089,
            3.714486889036,
            3.437622249834,
            3.35e-5,
            0.0,
            3.316125578789e-5,
            0.0,
            4.374949216286e-3,
            0.0,
            3.35e-5,
            1.12225e-9
        ),
        em = rets.shift(),
        argpm = rets.shift(),
        inclm = rets.shift(),
        mm = rets.shift(),
        nm = rets.shift(),
        nodem = rets.shift(),
        irez = rets.shift(),
        atime = rets.shift(),
        d2201 = rets.shift(),
        d2211 = rets.shift(),
        d3210 = rets.shift(),
        d3222 = rets.shift(),
        d4410 = rets.shift(),
        d4422 = rets.shift(),
        d5220 = rets.shift(),
        d5232 = rets.shift(),
        d5421 = rets.shift(),
        d5433 = rets.shift(),
        dedt = rets.shift(),
        didt = rets.shift(),
        dmdt = rets.shift(),
        dndt = rets.shift(),
        dnodt = rets.shift(),
        domdt = rets.shift(),
        del1 = rets.shift(),
        del2 = rets.shift(),
        del3 = rets.shift(),
        xfact = rets.shift(),
        xlamo = rets.shift(),
        xli = rets.shift(),
        xni = rets.shift(),
        TOL = 0.0000001;
    expect(31);
    ok(isequalRel(em, 3.35e-5, TOL));
    ok(isequalRel(argpm, 0.0, TOL));
    ok(isequalRel(inclm, 3.316125578789e-5, TOL));
    ok(isequalRel(mm, 0.0, TOL));
    ok(isequalRel(nm, 4.374949216286e-3, TOL));
    ok(isequalRel(nodem, 0.0, TOL));
    ok(isequalRel(irez, 1.0, TOL));
    ok(isequalRel(atime, 0.0, TOL));
    ok(isequalRel(d2201, 0.0, TOL));
    ok(isequalRel(d2211, 0.0, TOL));
    ok(isequalRel(d3210, 0.0, TOL));
    ok(isequalRel(d3222, 0.0, TOL));
    ok(isequalRel(d4410, 0.0, TOL));
    ok(isequalRel(d4422, 0.0, TOL));
    ok(isequalRel(d5220, 0.0, TOL));
    ok(isequalRel(d5232, 0.0, TOL));
    ok(isequalRel(d5421, 0.0, TOL));
    ok(isequalRel(d5433, 0.0, TOL));
    ok(isequalRel(dedt, -1.163351218344e-12, TOL));
    ok(isequalRel(didt, -2.947177196394e-8, TOL));
    ok(isequalRel(dmdt, -1.045030124521e-7, TOL));
    ok(isequalRel(dndt, 0.0, TOL));
    ok(isequalRel(dnodt, 0.0, TOL));
    ok(isequalRel(domdt, 3.403399555001e-8, TOL));
    ok(isequalRel(del1, -6.397199405204e-13, TOL));
    ok(isequalRel(del2, 1.410351263886e-11, TOL));
    ok(isequalRel(del3, 1.978384035449e-12, TOL));
    ok(isequalRel(xfact, -4.37501440557e-3, TOL));
    ok(isequalRel(xlamo, 4.79738694763, TOL));
    ok(isequalRel(xli, 4.79738694763, TOL));
    ok(isequalRel(xni, 4.374949216286e-3, TOL));
});

// 28626
// 28872
// 29141
// *** error: t:= 440.000000 *** code =   6
// 29238
// 88888
