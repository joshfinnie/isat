/*global
  module: true, test: true, equal: true, notEqual: true, ok: true, isequalRel: true,
  newtonnu: true
 */

module("newtonnu");

test("eccentricity = 0.0", function() {
    var TOLERANCE = 1e-14,
        TOLERANCE_BIG = 1e-13,
        ecc = 0.0,
        rets,
        e0,
        m;

    rets = newtonnu(ecc, -6.28);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - -6.28) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.18530717958598e-3) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, -3.14);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - -3.14) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.14318530717959) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 0.0);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - 0.0) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 0.0) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 3.14);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - 3.14) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.14) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 6.28);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - 6.28) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 6.28) < TOLERANCE, "got m=" + m);
});

test("eccentricity = 0.333", function() {
    var TOLERANCE = 1e-14,
        TOLERANCE_BIG = 1e-13,
        ecc = 0.333,
        rets,
        e0,
        m;

    rets = newtonnu(ecc, -6.28);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - 2.25319794362693e-3) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 1.50288366327809e-3) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, -3.14);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - -3.13934114612643) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.144593912405) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 0.0);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - 0.0) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 0.0) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 3.14);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - 3.13934114612643) < TOLERANCE_BIG, "got e0=" + e0);
    ok(Math.abs(m - 3.13859139477458) < TOLERANCE_BIG, "got m=" + m);

    rets = newtonnu(ecc, 6.28);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - -2.25319794362693e-3) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 6.28168242351631) < TOLERANCE_BIG, "got m=" + m);
});

test("eccentricity = 0.666", function() {
    var TOLERANCE = 1e-14,
        TOLERANCE_BIG = 1e-13,
        ecc = 0.666,
        rets,
        e0,
        m;

    rets = newtonnu(ecc, -6.28);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - 1.42622271470173e-3) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 4.76358708731962e-4) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, -3.14);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - -3.13803564246188) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.1475186291334) < TOLERANCE_BIG, "got m=" + m);

    rets = newtonnu(ecc, 0.0);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - 0.0) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 0.0) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 3.14);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - 3.13803564246188) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.13566667804618) < TOLERANCE_BIG, "got m=" + m);

    rets = newtonnu(ecc, 6.28);
    e0 = rets.shift();
    m = rets.shift();
    ok(Math.abs(e0 - -1.42622271470173e-3) < TOLERANCE);
    ok(Math.abs(m - 6.28270894847085) < TOLERANCE_BIG, "got m=" + m);
});

test("testmat.m results", function() {
    // 5
    var TOL = 0.000001,
        rets;

    rets = newtonnu(1.856839661347e-1, 4.406401781136);
    ok(isequalRel(rets.shift(), -1.693500912993, TOL));
    ok(isequalRel(rets.shift(), 4.773972245877, TOL));

    rets = newtonnu(1.851411170975e-1, 2.988460057544);
    ok(isequalRel(rets.shift(), 2.957079757746, TOL));
    ok(isequalRel(rets.shift(), 2.923112339227, TOL));

    rets = newtonnu(1.856989869471e-1, 1.434828952104);
    ok(isequalRel(rets.shift(), 1.252067006852, TOL));
    ok(isequalRel(rets.shift(), 1.075720867283, TOL));

    rets = newtonnu(1.858012633167e-1, 5.209551568087);
    ok(isequalRel(rets.shift(), -9.162653479718e-1, TOL));
    ok(isequalRel(rets.shift(), 5.514322334927, TOL));

    rets = newtonnu(1.850633960634e-1, 3.513807794463);
    ok(isequalRel(rets.shift(), -2.695056670829, TOL));
    ok(isequalRel(rets.shift(), 3.668047110329, TOL));

    rets = newtonnu(1.856388540272e-1, 2.152516069731);
    ok(isequalRel(rets.shift(), 1.987937576469, TOL));
    ok(isequalRel(rets.shift(), 1.818217088405, TOL));

    rets = newtonnu(1.863381127011e-1, 6.24307909942);
    ok(isequalRel(rets.shift(), -3.321602291535e-2, TOL));
    ok(isequalRel(rets.shift(), 6.256157557215, TOL));

    rets = newtonnu(1.855375875133e-1, 4.085982404991);
    ok(isequalRel(rets.shift(), -2.037116767007, TOL));
    ok(isequalRel(rets.shift(), 4.411796032899, TOL));

    rets = newtonnu(1.853306179043e-1, 2.729639278624);
    ok(isequalRel(rets.shift(), 2.647817867576, TOL));
    ok(isequalRel(rets.shift(), 2.559979838351, TOL));

    rets = newtonnu(1.859736824913e-1, 1.003249486494);
    ok(isequalRel(rets.shift(), 8.529304762464e-1, TOL));
    ok(isequalRel(rets.shift(), 7.128530079849e-1, TOL));

    rets = newtonnu(1.858540672265e-1, 4.787559941164);
    ok(isequalRel(rets.shift(), -1.31050499891, TOL));
    ok(isequalRel(rets.shift(), 5.15227388912, TOL));

    rets = newtonnu(1.850788067685e-1, 3.255632011792);
    ok(isequalRel(rets.shift(), -3.004138755279, TOL));
    ok(isequalRel(rets.shift(), 3.304406322893, TOL));
    // 4632

    rets = newtonnu(1.455338138953e-1, 5.998398344535e-1);
    ok(isequalRel(rets.shift(), 5.219876549463e-1, TOL));
    ok(isequalRel(rets.shift(), 4.494239015219e-1, TOL));

    rets = newtonnu(1.455107353728e-1, 1.35572953574);
    ok(isequalRel(rets.shift(), 1.215238700804, TOL));
    ok(isequalRel(rets.shift(), 1.078829295587, TOL));

    rets = newtonnu(1.454826923634e-1, 1.98594340475);
    ok(isequalRel(rets.shift(), 1.848256889119, TOL));
    ok(isequalRel(rets.shift(), 1.708338309375, TOL));

    rets = newtonnu(1.454720410785e-1, 2.209343273602);
    ok(isequalRel(rets.shift(), 2.086712434391, TOL));
    ok(isequalRel(rets.shift(), 1.960174868014, TOL));
    // 6251

    rets = newtonnu(2.843508525266e-3, 5.878252404382);
    ok(isequalRel(rets.shift(), -4.038141422773e-1, TOL));
    ok(isequalRel(rets.shift(), 5.880488460609, TOL));

    rets = newtonnu(3.376171121503e-3, 1.450679689026);
    ok(isequalRel(rets.shift(), 1.447328515807, TOL));
    ok(isequalRel(rets.shift(), 1.443978045695, TOL));

    rets = newtonnu(3.544166013612e-3, 3.280757728716);
    ok(isequalRel(rets.shift(), -3.001935078983, TOL));
    ok(isequalRel(rets.shift(), 3.281743590394, TOL));

    rets = newtonnu(3.600050068409e-3, 5.017749103053);
    ok(isequalRel(rets.shift(), -1.262004546185, TOL));
    ok(isequalRel(rets.shift(), 5.024610533924, TOL));

    rets = newtonnu(4.24842883009e-3, 7.050316851707e-1);
    ok(isequalRel(rets.shift(), 7.022828933235e-1, TOL));
    ok(isequalRel(rets.shift(), 6.99538569484e-1, TOL));

    rets = newtonnu(4.550610606204e-3, 2.746082539211);
    ok(isequalRel(rets.shift(), 2.744325586999, TOL));
    ok(isequalRel(rets.shift(), 2.742564957154, TOL));

    rets = newtonnu(3.929277166681e-3, 4.642871348913);
    ok(isequalRel(rets.shift(), -1.63639362668, TOL));
    ok(isequalRel(rets.shift(), 4.650712506846, TOL));

    rets = newtonnu(3.678356420796e-3, 2.327986184503e-1);
    ok(isequalRel(rets.shift(), 2.319515290377e-1, TOL));
    ok(isequalRel(rets.shift(), 2.311059586657e-1, TOL));

    rets = newtonnu(3.768503158891e-3, 2.197801244803);
    ok(isequalRel(rets.shift(), 2.194746168633, TOL));
    ok(isequalRel(rets.shift(), 2.191687737705, TOL));

    rets = newtonnu(3.094892579346e-3, 3.988588600513);
    ok(isequalRel(rets.shift(), -2.292275337606, TOL));
    ok(isequalRel(rets.shift(), 3.993233706748, TOL));

    rets = newtonnu(2.843839523788e-3, 5.585413699649);
    ok(isequalRel(rets.shift(), -6.959463928446e-1, TOL));
    ok(isequalRel(rets.shift(), 5.589062134074, TOL));

    rets = newtonnu(3.546297390768e-3, 1.190045223729);
    ok(isequalRel(rets.shift(), 1.186755052311, TOL));
    ok(isequalRel(rets.shift(), 1.183467074085, TOL));

    rets = newtonnu(3.871245429332e-3, 3.09494034149);
    ok(isequalRel(rets.shift(), 3.094759454018, TOL));
    ok(isequalRel(rets.shift(), 3.094578217478, TOL));

    rets = newtonnu(3.830682076651e-3, 4.893163296023);
    ok(isequalRel(rets.shift(), -1.386255038754, TOL));
    ok(isequalRel(rets.shift(), 4.900695907535, TOL));

    rets = newtonnu(4.291094373757e-3, 5.792132070155e-1);
    ok(isequalRel(rets.shift(), 5.768686096083e-1, TOL));
    ok(isequalRel(rets.shift(), 5.745282383129e-1, TOL));

    rets = newtonnu(4.500171741789e-3, 2.628295360431);
    ok(isequalRel(rets.shift(), 2.626081190485, TOL));
    ok(isequalRel(rets.shift(), 2.623862696238, TOL));

    rets = newtonnu(3.728008119345e-3, 4.522332982372);
    ok(isequalRel(rets.shift(), -1.75719014626, TOL));
    ok(isequalRel(rets.shift(), 4.529658595867, TOL));

    rets = newtonnu(3.314475452111e-3, 4.833955774302e-2);
    ok(isequalRel(rets.shift(), 4.817966408982e-2, TOL));
    ok(isequalRel(rets.shift(), 4.802003554972e-2, TOL));

    rets = newtonnu(3.476031515181e-3, 1.963288807041);
    ok(isequalRel(rets.shift(), 1.960074954471, TOL));
    ok(isequalRel(rets.shift(), 1.956858988939, TOL));

    rets = newtonnu(3.061988804711e-3, 3.719587170064);
    ok(isequalRel(rets.shift(), -2.561923082393, TOL));
    ok(isequalRel(rets.shift(), 3.722939421547, TOL));

    rets = newtonnu(3.0185926972e-3, 5.324365580014);
    ok(isequalRel(rets.shift(), -9.563511026201e-1, TOL));
    ok(isequalRel(rets.shift(), 5.329300676741, TOL));

    rets = newtonnu(3.799018634628e-3, 9.741987854508e-1);
    ok(isequalRel(rets.shift(), 9.710593812987e-1, TOL));
    ok(isequalRel(rets.shift(), 9.679233517514e-1, TOL));

    rets = newtonnu(4.17148412849e-3, 2.945319559456);
    ok(isequalRel(rets.shift(), 2.944504384945, TOL));
    ok(isequalRel(rets.shift(), 2.943687546606, TOL));

    rets = newtonnu(3.96152176657e-3, 4.789304733122);
    ok(isequalRel(rets.shift(), -1.489931355478, TOL));
    ok(isequalRel(rets.shift(), 4.797202528045, TOL));
    // 8195

    rets = newtonnu(6.866679038576e-1, 2.613009397654);
    ok(isequalRel(rets.shift(), 2.020259327952, TOL));
    ok(isequalRel(rets.shift(), 1.401790903669, TOL));

    rets = newtonnu(6.867283634668e-1, 2.961126539238);
    ok(isequalRel(rets.shift(), 2.727710756785, TOL));
    ok(isequalRel(rets.shift(), 2.451531625324, TOL));

    rets = newtonnu(6.867381437714e-1, 3.234035448475);
    ok(isequalRel(rets.shift(), -2.927750569629, TOL));
    ok(isequalRel(rets.shift(), 3.50117157931, TOL));

    rets = newtonnu(6.866895933949e-1, 3.541952899055);
    ok(isequalRel(rets.shift(), -2.261613026813, TOL));
    ok(isequalRel(rets.shift(), 4.550821733826, TOL));

    rets = newtonnu(6.865986595814e-1, 4.127179172619);
    ok(isequalRel(rets.shift(), -1.35284216193, TOL));
    ok(isequalRel(rets.shift(), 5.600698163503, TOL));

    rets = newtonnu(6.866592555576e-1, 1.695649454174);
    ok(isequalRel(rets.shift(), 9.088009790091e-1, TOL));
    ok(isequalRel(rets.shift(), 3.671866268738e-1, TOL));

    rets = newtonnu(6.866249970949e-1, 2.619601954539);
    ok(isequalRel(rets.shift(), 2.032139114172, TOL));
    ok(isequalRel(rets.shift(), 1.417296941539, TOL));

    rets = newtonnu(6.866856337694e-1, 2.965349613386);
    ok(isequalRel(rets.shift(), 2.737212459312, TOL));
    ok(isequalRel(rets.shift(), 2.467036669796, TOL));

    rets = newtonnu(6.8669541294e-1, 3.238085269989);
    ok(isequalRel(rets.shift(), -2.918462081655, TOL));
    ok(isequalRel(rets.shift(), 3.516677703844, TOL));

    rets = newtonnu(6.866467632282e-1, 3.547474198617);
    ok(isequalRel(rets.shift(), -2.250779727158, TOL));
    ok(isequalRel(rets.shift(), 4.56633053749, TOL));

    rets = newtonnu(6.86557642217e-1, 4.143072416289);
    ok(isequalRel(rets.shift(), -1.334438323568, TOL));
    ok(isequalRel(rets.shift(), 5.616216430647, TOL));

    rets = newtonnu(6.866127327248e-1, 1.728437343991);
    ok(isequalRel(rets.shift(), 9.352598690906e-1, TOL));
    ok(isequalRel(rets.shift(), 3.827059612942e-1, TOL));

    rets = newtonnu(6.865870212103e-1, 2.62613258554);
    ok(isequalRel(rets.shift(), 2.043963913744, TOL));
    ok(isequalRel(rets.shift(), 1.432812715882, TOL));

    rets = newtonnu(6.866479054501e-1, 2.96956503759);
    ok(isequalRel(rets.shift(), 2.74670678821, TOL));
    ok(isequalRel(rets.shift(), 2.482551388602, TOL));

    rets = newtonnu(6.866577546707e-1, 3.242144019262);
    ok(isequalRel(rets.shift(), -2.909160234363, TOL));
    ok(isequalRel(rets.shift(), 3.532193398632, TOL));

    rets = newtonnu(6.866090696296e-1, 3.553039212915);
    ok(isequalRel(rets.shift(), -2.239898258322, TOL));
    ok(isequalRel(rets.shift(), 4.581848810139, TOL));

    rets = newtonnu(6.865219861167e-1, 4.159436417334);
    ok(isequalRel(rets.shift(), -1.315756242332, TOL));
    ok(isequalRel(rets.shift(), 5.631744250455, TOL));

    rets = newtonnu(6.865718043358e-1, 1.759697486449);
    ok(isequalRel(rets.shift(), 9.611028295108e-1, TOL));
    ok(isequalRel(rets.shift(), 3.982350854065e-1, TOL));

    rets = newtonnu(6.865543454928e-1, 2.632603055222);
    ok(isequalRel(rets.shift(), 2.055734571975, TOL));
    ok(isequalRel(rets.shift(), 1.448337376153, TOL));

    rets = newtonnu(6.866155039773e-1, 2.973772889409);
    ok(isequalRel(rets.shift(), 2.75619354343, TOL));
    ok(isequalRel(rets.shift(), 2.498074862607, TOL));

    rets = newtonnu(6.866254503966e-1, 3.24621153262);
    ok(isequalRel(rets.shift(), -2.899845383805, TOL));
    ok(isequalRel(rets.shift(), 3.547717680073, TOL));

    rets = newtonnu(6.865767504906e-1, 3.558648318838);
    ok(isequalRel(rets.shift(), -2.228968584018, TOL));
    ok(isequalRel(rets.shift(), 4.597375507549, TOL));

    rets = newtonnu(6.864919004431e-1, 4.176296398714);
    ok(isequalRel(rets.shift(), -1.296786064341, TOL));
    ok(isequalRel(rets.shift(), 5.647280523859, TOL));

    rets = newtonnu(6.865366485917e-1, 1.78954197885);
    ok(isequalRel(rets.shift(), 9.863603307447e-1, TOL));
    ok(isequalRel(rets.shift(), 4.137727036757e-1, TOL));
    // 9880

    rets = newtonnu(7.074789674872e-1, 2.613353781448);
    ok(isequalRel(rets.shift(), 1.984097373815, TOL));
    ok(isequalRel(rets.shift(), 1.33618813526, TOL));

    rets = newtonnu(7.075425806213e-1, 2.953696643023);
    ok(isequalRel(rets.shift(), 2.693867477717, TOL));
    ok(isequalRel(rets.shift(), 2.387560937341, TOL));

    rets = newtonnu(7.075501192075e-1, 3.213941865671);
    ok(isequalRel(rets.shift(), -2.96713866675, TOL));
    ok(isequalRel(rets.shift(), 3.43885642454, TOL));

    rets = newtonnu(7.07501857791e-1, 3.501203792419);
    ok(isequalRel(rets.shift(), -2.313960934883, TOL));
    ok(isequalRel(rets.shift(), 4.490179928072, TOL));

    rets = newtonnu(7.07413703486e-1, 4.021124830156);
    ok(isequalRel(rets.shift(), -1.443127233313, TOL));
    ok(isequalRel(rets.shift(), 5.541714395334, TOL));

    rets = newtonnu(7.074880079976e-1, 1.638267445445);
    ok(isequalRel(rets.shift(), 8.337176182159e-1, TOL));
    ok(isequalRel(rets.shift(), 3.098685960655e-1, TOL));

    rets = newtonnu(7.07453321851e-1, 2.624123778438);
    ok(isequalRel(rets.shift(), 2.003809886512, TOL));
    ok(isequalRel(rets.shift(), 1.361650714943, TOL));

    rets = newtonnu(7.075145068396e-1, 2.960372493246);
    ok(isequalRel(rets.shift(), 2.709385359246, TOL));
    ok(isequalRel(rets.shift(), 2.413024413463, TOL));

    rets = newtonnu(7.075196023956e-1, 3.220205927721);
    ok(isequalRel(rets.shift(), -2.952117584532, TOL));
    ok(isequalRel(rets.shift(), 3.464324359213, TOL));

    rets = newtonnu(7.07468900938e-1, 3.509519813311);
    ok(isequalRel(rets.shift(), -2.296663494009, TOL));
    ok(isequalRel(rets.shift(), 4.515654848025, TOL));

    rets = newtonnu(7.073807397407e-1, 4.043449649444);
    ok(isequalRel(rets.shift(), -1.414767295713, TOL));
    ok(isequalRel(rets.shift(), 5.5672055931, TOL));

    rets = newtonnu(7.074407245305e-1, 1.700573304283);
    ok(isequalRel(rets.shift(), 8.811291040794e-1, TOL));
    ok(isequalRel(rets.shift(), 3.353684409392e-1, TOL));

    rets = newtonnu(7.074213601086e-1, 2.634691028511);
    ok(isequalRel(rets.shift(), 2.023350663209, TOL));
    ok(isequalRel(rets.shift(), 1.387143205884, TOL));

    rets = newtonnu(7.07480320995e-1, 2.967017186326);
    ok(isequalRel(rets.shift(), 2.724877433271, TOL));
    ok(isequalRel(rets.shift(), 2.438518432461, TOL));

    rets = newtonnu(7.074831964281e-1, 3.226494742039);
    ok(isequalRel(rets.shift(), -2.937059155838, TOL));
    ok(isequalRel(rets.shift(), 3.489823348923, TOL));

    rets = newtonnu(7.074302810557e-1, 3.517957445017);
    ok(isequalRel(rets.shift(), -2.279232554485, TOL));
    ok(isequalRel(rets.shift(), 4.541161349068, TOL));

    rets = newtonnu(7.073426782139e-1, 4.066845514948);
    ok(isequalRel(rets.shift(), -1.385718614044, TOL));
    ok(isequalRel(rets.shift(), 5.592729339613, TOL));

    rets = newtonnu(7.073898343357e-1, 1.757450772531);
    ok(isequalRel(rets.shift(), 9.264595436735e-1, TOL));
    ok(isequalRel(rets.shift(), 3.609025622811e-1, TOL));

    rets = newtonnu(7.073844594661e-1, 2.64506787827);
    ok(isequalRel(rets.shift(), 2.042729306308, TOL));
    ok(isequalRel(rets.shift(), 1.412668190983, TOL));

    rets = newtonnu(7.074414286305e-1, 2.973633805192);
    ok(isequalRel(rets.shift(), 2.740347340465, TOL));
    ok(isequalRel(rets.shift(), 2.464045443944, TOL));

    rets = newtonnu(7.074423311942e-1, 3.232810138934);
    ok(isequalRel(rets.shift(), -2.92196049835, TOL));
    ok(isequalRel(rets.shift(), 3.515355714905, TOL));

    rets = newtonnu(7.073874505795e-1, 3.526521093421);
    ok(isequalRel(rets.shift(), -2.261662989335, TOL));
    ok(isequalRel(rets.shift(), 4.566701625887, TOL));

    rets = newtonnu(7.073010396884e-1, 4.091409233514);
    ok(isequalRel(rets.shift(), -1.355934909694, TOL));
    ok(isequalRel(rets.shift(), 5.618287722502, TOL));

    rets = newtonnu(7.073368998088e-1, 1.809626469631);
    ok(isequalRel(rets.shift(), 9.699069515904e-1, TOL));
    ok(isequalRel(rets.shift(), 3.86472057025e-1, TOL));
    // 9998

    rets = newtonnu(2.716148207783e-2, 5.781740115703);
    ok(isequalRel(rets.shift(), -4.885403307166e-1, TOL));
    ok(isequalRel(rets.shift(), 5.807392877827, TOL));

    rets = newtonnu(2.716659459679e-2, 6.101465692941);
    ok(isequalRel(rets.shift(), -1.768738888294e-1, TOL));
    ok(isequalRel(rets.shift(), 6.111091464856, TOL));

    rets = newtonnu(2.716755405657e-2, 1.389307149831e-1);
    ok(isequalRel(rets.shift(), 1.352177074359e-1, TOL));
    ok(isequalRel(rets.shift(), 1.315553572091e-1, TOL));

    rets = newtonnu(2.716378367535e-2, 4.588417955321e-1);
    ok(isequalRel(rets.shift(), 4.469533982133e-1, TOL));
    ok(isequalRel(rets.shift(), 4.352126617664e-1, TOL));

    rets = newtonnu(2.715556395731e-2, 7.764561441336e-1);
    ok(isequalRel(rets.shift(), 7.576064037511e-1, TOL));
    ok(isequalRel(rets.shift(), 7.389455208803e-1, TOL));

    rets = newtonnu(2.714407348493e-2, 1.090500167808);
    ok(isequalRel(rets.shift(), 1.066574003483, TOL));
    ok(isequalRel(rets.shift(), 1.042807997579, TOL));

    rets = newtonnu(2.713093521576e-2, 1.400107160725);
    ok(isequalRel(rets.shift(), 1.373428643431, TOL));
    ok(isequalRel(rets.shift(), 1.34682442433, TOL));

    rets = newtonnu(2.711763450764e-2, 1.704879207196);
    ok(isequalRel(rets.shift(), 1.677952837997, TOL));
    ok(isequalRel(rets.shift(), 1.650990743932, TOL));

    rets = newtonnu(2.710521487919e-2, 2.00488988398);
    ok(isequalRel(rets.shift(), 1.980154348505, TOL));
    ok(isequalRel(rets.shift(), 1.95528866047, TOL));

    rets = newtonnu(2.709435717698e-2, 2.300636343814);
    ok(isequalRel(rets.shift(), 2.280256305522, TOL));
    ok(isequalRel(rets.shift(), 2.259699443657, TOL));

    rets = newtonnu(2.708564805003e-2, 2.592956156753);
    ok(isequalRel(rets.shift(), 2.578662787795, TOL));
    ok(isequalRel(rets.shift(), 2.564208091348, TOL));

    rets = newtonnu(2.707976836312e-2, 2.882928008781);
    ok(isequalRel(rets.shift(), 2.875908133917, TOL));
    ok(isequalRel(rets.shift(), 2.868797803699, TOL));

    rets = newtonnu(2.707745330068e-2, 3.17177330821);
    ok(isequalRel(rets.shift(), -3.110583544821, TOL));
    ok(isequalRel(rets.shift(), 3.173441275497, TOL));
    // 11801

    rets = newtonnu(7.316022415966e-1, 3.288549055618);
    ok(isequalRel(rets.shift(), -2.771917696774, TOL));
    ok(isequalRel(rets.shift(), 3.775604547447, TOL));

    rets = newtonnu(7.309987995342e-1, 2.539391847291);
    ok(isequalRel(rets.shift(), 1.807131007853, TOL));
    ok(isequalRel(rets.shift(), 1.096451998254, TOL));

    rets = newtonnu(7.305135354946e-1, 3.550285442989);
    ok(isequalRel(rets.shift(), -2.174449759259, TOL));
    ok(isequalRel(rets.shift(), 4.710143401486, TOL));

    rets = newtonnu(7.298769657158e-1, 2.876960270493);
    ok(isequalRel(rets.shift(), 2.491840505066, TOL));
    ok(isequalRel(rets.shift(), 2.050272913542, TOL));
    // 14128

    rets = newtonnu(1.211244188429e-3, 2.423482789142e-2);
    ok(isequalRel(rets.shift(), 2.420549421947e-2, TOL));
    ok(isequalRel(rets.shift(), 2.417617831819e-2, TOL));

    rets = newtonnu(1.204966652741e-3, 5.289647058498e-1);
    ok(isequalRel(rets.shift(), 5.283569476242e-1, TOL));
    ok(isequalRel(rets.shift(), 5.277495058332e-1, TOL));

    rets = newtonnu(1.192304030227e-3, 1.037694577457);
    ok(isequalRel(rets.shift(), 1.036668034368, TOL));
    ok(isequalRel(rets.shift(), 1.035641803106, TOL));

    rets = newtonnu(1.1759436082e-3, 1.551150302261);
    ok(isequalRel(rets.shift(), 1.549974598892, TOL));
    ok(isequalRel(rets.shift(), 1.548798910187, TOL));

    rets = newtonnu(1.158121853711e-3, 2.070994646747);
    ok(isequalRel(rets.shift(), 2.069978126779, TOL));
    ok(isequalRel(rets.shift(), 2.068961325284, TOL));

    rets = newtonnu(1.143952893278e-3, 2.598631981531);
    ok(isequalRel(rets.shift(), 2.598040642045, TOL));
    ok(isequalRel(rets.shift(), 2.597449013251, TOL));

    rets = newtonnu(1.139311322585e-3, 3.131180299349);
    ok(isequalRel(rets.shift(), 3.131168429885, TOL));
    ok(isequalRel(rets.shift(), 3.131156553664, TOL));

    rets = newtonnu(1.145149449569e-3, 3.662685446796);
    ok(isequalRel(rets.shift(), -2.619929489302, TOL));
    ok(isequalRel(rets.shift(), 3.66382647193, TOL));

    rets = newtonnu(1.157830776929e-3, 4.189544099786);
    ok(isequalRel(rets.shift(), -2.092637770046, TOL));
    ok(isequalRel(rets.shift(), 4.191551263798, TOL));

    rets = newtonnu(1.174172010601e-3, 4.711085143769);
    ok(isequalRel(rets.shift(), -1.57092599123, TOL));
    ok(isequalRel(rets.shift(), 4.713433487951, TOL));

    rets = newtonnu(1.19178077171e-3, 5.226262443973);
    ok(isequalRel(rets.shift(), -1.0558853081, TOL));
    ok(isequalRel(rets.shift(), 5.228337249439, TOL));

    rets = newtonnu(1.205845104887e-3, 5.734321009877);
    ok(isequalRel(rets.shift(), -5.482355086072e-1, TOL));
    ok(isequalRel(rets.shift(), 5.735578263509, TOL));

    rets = newtonnu(1.210865633436e-3, 6.237991092039);
    ok(isequalRel(rets.shift(), -4.513954269262e-2, TOL));
    ok(isequalRel(rets.shift(), 6.238100403848, TOL));

    rets = newtonnu(1.205766439863e-3, 4.591253600639e-1);
    ok(isequalRel(rets.shift(), 4.585912959803e-1, TOL));
    ok(isequalRel(rets.shift(), 4.580575207886e-1, TOL));

    rets = newtonnu(1.193775211743e-3, 9.672534794013e-1);
    ok(isequalRel(rets.shift(), 9.662709410443e-1, TOL));
    ok(isequalRel(rets.shift(), 9.652887362883e-1, TOL));

    rets = newtonnu(1.177820064704e-3, 1.480000229664);
    ok(isequalRel(rets.shift(), 1.478827323557, TOL));
    ok(isequalRel(rets.shift(), 1.477654481158, TOL));

    rets = newtonnu(1.159970274751e-3, 1.998835589395);
    ok(isequalRel(rets.shift(), 1.997780015661, TOL));
    ok(isequalRel(rets.shift(), 1.996724188649, TOL));

    rets = newtonnu(1.144897789529e-3, 2.525463771786);
    ok(isequalRel(rets.shift(), 2.524801848593, TOL));
    ok(isequalRel(rets.shift(), 2.524139616495, TOL));

    rets = newtonnu(1.138736282854e-3, 3.057695076183);
    ok(isequalRel(rets.shift(), 3.057599596803, TOL));
    ok(isequalRel(rets.shift(), 3.057504063283, TOL));

    rets = newtonnu(1.143295172548e-3, 3.589668189295);
    ok(isequalRel(rets.shift(), -2.693021550525, TOL));
    ok(isequalRel(rets.shift(), 3.590659579127, TOL));

    rets = newtonnu(1.155268452626e-3, 4.117250443365);
    ok(isequalRel(rets.shift(), -2.164977909555, TOL));
    ok(isequalRel(rets.shift(), 4.119164661096, TOL));

    rets = newtonnu(1.171225937288e-3, 4.63956921156);
    ok(isequalRel(rets.shift(), -1.642447923612, TOL));
    ok(isequalRel(rets.shift(), 4.641905604283, TOL));

    rets = newtonnu(1.188876403708e-3, 5.155722578143);
    ok(isequalRel(rets.shift(), -1.1263890587, TOL));
    ok(isequalRel(rets.shift(), 5.157869644151, TOL));

    rets = newtonnu(1.20379937403e-3, 5.664696981605);
    ok(isequalRel(rets.shift(), -6.177906995606e-1, TOL));
    ok(isequalRel(rets.shift(), 5.666091891122, TOL));
    // 16925

    rets = newtonnu(5.588503598295e-1, 3.228842773114);
    ok(isequalRel(rets.shift(), -2.977843536462, TOL));
    ok(isequalRel(rets.shift(), 3.396444611351, TOL));

    rets = newtonnu(5.585233356674e-1, 5.118810788625);
    ok(isequalRel(rets.shift(), -6.739995370803e-1, TOL));
    ok(isequalRel(rets.shift(), 5.957769084386, TOL));

    rets = newtonnu(5.58062137419e-1, 2.819537459986);
    ok(isequalRel(rets.shift(), 2.549531730254, TOL));
    ok(isequalRel(rets.shift(), 2.238092684462, TOL));

    rets = newtonnu(5.5784778267e-1, 3.807540447635);
    ok(isequalRel(rets.shift(), -1.989994285351, TOL));
    ok(isequalRel(rets.shift(), 4.802737937689, TOL));

    rets = newtonnu(5.573540142195e-1, 2.221250150424);
    ok(isequalRel(rets.shift(), 1.643606196665, TOL));
    ok(isequalRel(rets.shift(), 1.08772887396, TOL));

    rets = newtonnu(5.573812749174e-1, 3.320785430055);
    ok(isequalRel(rets.shift(), -2.807700525931, TOL));
    ok(isequalRel(rets.shift(), 3.658151267708, TOL));

    rets = newtonnu(5.567523549887e-1, 6.060784968882);
    ok(isequalRel(rets.shift(), -1.190230401788e-1, TOL));
    ok(isequalRel(rets.shift(), 6.230272275488, TOL));

    rets = newtonnu(5.566328651392e-1, 2.925115255302);
    ok(isequalRel(rets.shift(), 2.739868148757, TOL));
    ok(isequalRel(rets.shift(), 2.52222128265, TOL));

    rets = newtonnu(5.562657187843e-1, 3.992590610128);
    ok(isequalRel(rets.shift(), -1.73411219228, TOL));
    ok(isequalRel(rets.shift(), 5.097936928032, TOL));

    rets = newtonnu(5.558490397474e-1, 2.423750578165);
    ok(isequalRel(rets.shift(), 1.91721790199, TOL));
    ok(isequalRel(rets.shift(), 1.394389780453, TOL));

    rets = newtonnu(5.558964845678e-1, 3.438269293796);
    ok(isequalRel(rets.shift(), -2.596118489327, TOL));
    ok(isequalRel(rets.shift(), 3.975478979288, TOL));

    rets = newtonnu(5.553207140524e-1, 1.018738373234);
    ok(isequalRel(rets.shift(), 5.804332042561e-1, TOL));
    ok(isequalRel(rets.shift(), 2.759029633628e-1, TOL));
    // 20413

    rets = newtonnu(7.787670244171e-1, 2.756537247626);
    ok(isequalRel(rets.shift(), 2.131665152184, TOL));
    ok(isequalRel(rets.shift(), 1.472210466701, TOL));

    rets = newtonnu(7.787318278023e-1, 2.795498343882);
    ok(isequalRel(rets.shift(), 2.221359885948, TOL));
    ok(isequalRel(rets.shift(), 1.601689785835, TOL));

    rets = newtonnu(7.786982908955e-1, 2.831678475947);
    ok(isequalRel(rets.shift(), 2.307792741023, TOL));
    ok(isequalRel(rets.shift(), 1.731174049415, TOL));

    rets = newtonnu(7.786664754119e-1, 2.865606725861);
    ok(isequalRel(rets.shift(), 2.391490433266, TOL));
    ok(isequalRel(rets.shift(), 1.860662946097, TOL));

    rets = newtonnu(7.786360598891e-1, 2.89769728265);
    ok(isequalRel(rets.shift(), 2.472887575894, TOL));
    ok(isequalRel(rets.shift(), 1.99015620525, TOL));

    rets = newtonnu(7.786078600369e-1, 2.928282952468);
    ok(isequalRel(rets.shift(), 2.552350213864, TOL));
    ok(isequalRel(rets.shift(), 2.119653396692, TOL));

    rets = newtonnu(7.785815482761e-1, 2.957635499184);
    ok(isequalRel(rets.shift(), 2.63019164453, TOL));
    ok(isequalRel(rets.shift(), 2.249154231614, TOL));

    rets = newtonnu(7.785571740818e-1, 2.985982433197);
    ok(isequalRel(rets.shift(), 2.706685147711, TOL));
    ok(isequalRel(rets.shift(), 2.378658363389, TOL));

    rets = newtonnu(7.785347838381e-1, 3.013517951608);
    ok(isequalRel(rets.shift(), 2.782073090457, TOL));
    ok(isequalRel(rets.shift(), 2.508165437906, TOL));

    rets = newtonnu(7.785144207609e-1, 3.04041130426);
    ok(isequalRel(rets.shift(), 2.856574092018, TOL));
    ok(isequalRel(rets.shift(), 2.637675094174, TOL));

    rets = newtonnu(7.784961248099e-1, 3.066813191577);
    ok(isequalRel(rets.shift(), 2.930388730377, TOL));
    ok(isequalRel(rets.shift(), 2.76718696496, TOL));

    rets = newtonnu(7.784799325977e-1, 3.092860814165);
    ok(isequalRel(rets.shift(), 3.003704221097, TOL));
    ok(isequalRel(rets.shift(), 2.896700677442, TOL));

    rets = newtonnu(7.78465877298e-1, 3.118682005899);
    ok(isequalRel(rets.shift(), 3.076698380864, TOL));
    ok(isequalRel(rets.shift(), 3.026215853894, TOL));

    rets = newtonnu(7.784539885554e-1, 3.144398764351);
    ok(isequalRel(rets.shift(), -3.133642195446, TOL));
    ok(isequalRel(rets.shift(), 3.155732112386, TOL));

    rets = newtonnu(7.784442923988e-1, 3.170130419862);
    ok(isequalRel(rets.shift(), -3.060777713141, TOL));
    ok(isequalRel(rets.shift(), 3.2852490675, TOL));

    rets = newtonnu(7.784368111594e-1, 3.195996643139);
    ok(isequalRel(rets.shift(), -2.987723959261, TOL));
    ok(isequalRel(rets.shift(), 3.414766331066, TOL));

    rets = newtonnu(7.784315633925e-1, 3.222120473262);
    ok(isequalRel(rets.shift(), -2.914307995972, TOL));
    ok(isequalRel(rets.shift(), 3.54428351291, TOL));

    rets = newtonnu(7.784285638045e-1, 3.24863155025);
    ok(isequalRel(rets.shift(), -2.8403502243, TOL));
    ok(isequalRel(rets.shift(), 3.67380022161, TOL));

    rets = newtonnu(7.784278231833e-1, 3.275669759147);
    ok(isequalRel(rets.shift(), -2.765660810361, TOL));
    ok(isequalRel(rets.shift(), 3.803316065264, TOL));

    rets = newtonnu(7.784293483318e-1, 3.303389540241);
    ok(isequalRel(rets.shift(), -2.690035584593, TOL));
    ok(isequalRel(rets.shift(), 3.932830652264, TOL));

    rets = newtonnu(7.784331420011e-1, 3.331965201172);
    ok(isequalRel(rets.shift(), -2.613251163757, TOL));
    ok(isequalRel(rets.shift(), 4.06234359207, TOL));

    rets = newtonnu(7.784392028199e-1, 3.361597697789);
    ok(isequalRel(rets.shift(), -2.535058961257, TOL));
    ok(isequalRel(rets.shift(), 4.191854495991, TOL));

    rets = newtonnu(7.78447525214e-1, 3.392523559727);
    ok(isequalRel(rets.shift(), -2.455177620809, TOL));
    ok(isequalRel(rets.shift(), 4.321362977954, TOL));

    rets = newtonnu(7.784580993053e-1, 3.425026973822);
    ok(isequalRel(rets.shift(), -2.373283205275, TOL));
    ok(isequalRel(rets.shift(), 4.450868655273, TOL));

    rets = newtonnu(7.784709107731e-1, 3.459456592715);
    ok(isequalRel(rets.shift(), -2.288996151076, TOL));
    ok(isequalRel(rets.shift(), 4.580371149403, TOL));
    // 21897

    rets = newtonnu(7.418713178843e-1, 2.68745132226);
    ok(isequalRel(rets.shift(), 2.060438630814, TOL));
    ok(isequalRel(rets.shift(), 1.405736344711, TOL));

    rets = newtonnu(7.419337660802e-1, 2.987505710749);
    ok(isequalRel(rets.shift(), 2.745722754815, TOL));
    ok(isequalRel(rets.shift(), 2.459624965475, TOL));

    rets = newtonnu(7.419644108308e-1, 3.224276172793);
    ok(isequalRel(rets.shift(), -2.927460249785, TOL));
    ok(isequalRel(rets.shift(), 3.513392292221, TOL));

    rets = newtonnu(7.419481115307e-1, 3.492015957339);
    ok(isequalRel(rets.shift(), -2.279410450834, TOL));
    ok(isequalRel(rets.shift(), 4.567109724343, TOL));

    rets = newtonnu(7.418581430988e-1, 4.004886348835);
    ok(isequalRel(rets.shift(), -1.392342932897, TOL));
    ok(isequalRel(rets.shift(), 5.620919368097, TOL));

    rets = newtonnu(7.418951234893e-1, 1.942770864677);
    ok(isequalRel(rets.shift(), 1.026099336304, TOL));
    ok(isequalRel(rets.shift(), 3.915680573883e-1, TOL));

    rets = newtonnu(7.418764474845e-1, 2.701998565017);
    ok(isequalRel(rets.shift(), 2.089900680155, TOL));
    ok(isequalRel(rets.shift(), 1.445756171797, TOL));

    rets = newtonnu(7.419379802954e-1, 2.996922400116);
    ok(isequalRel(rets.shift(), 2.769425329935, TOL));
    ok(isequalRel(rets.shift(), 2.499630537234, TOL));

    rets = newtonnu(7.419670075317e-1, 3.233306439119);
    ok(isequalRel(rets.shift(), -2.90424983446, TOL));
    ok(isequalRel(rets.shift(), 3.55338732656, TOL));

    rets = newtonnu(7.419483855201e-1, 3.504335932164);
    ok(isequalRel(rets.shift(), -2.2523035818, TOL));
    ok(isequalRel(rets.shift(), 4.607096710975, TOL));

    rets = newtonnu(7.4185602629e-1, 4.041909597073);
    ok(isequalRel(rets.shift(), -1.345356100353, TOL));
    ok(isequalRel(rets.shift(), 5.660913156366, TOL));

    rets = newtonnu(7.41884275317e-1, 2.00910288213);
    ok(isequalRel(rets.shift(), 1.088994490396, TOL));
    ok(isequalRel(rets.shift(), 4.315652579809e-1, TOL));

    rets = newtonnu(7.418809620621e-1, 2.716133347635);
    ok(isequalRel(rets.shift(), 2.118925849628, TOL));
    ok(isequalRel(rets.shift(), 1.485729925734, TOL));

    rets = newtonnu(7.419415750629e-1, 3.006257125092);
    ok(isequalRel(rets.shift(), 2.793011280787, TOL));
    ok(isequalRel(rets.shift(), 2.539590123051, TOL));

    rets = newtonnu(7.419690216489e-1, 3.242368909528);
    ok(isequalRel(rets.shift(), -2.881011487452, TOL));
    ok(isequalRel(rets.shift(), 3.593336307449, TOL));

    rets = newtonnu(7.419480886518e-1, 3.51690840558);
    ok(isequalRel(rets.shift(), -2.224936476777, TOL));
    ok(isequalRel(rets.shift(), 4.647037629019, TOL));

    rets = newtonnu(7.41853947363e-1, 4.082099274567);
    ok(isequalRel(rets.shift(), -1.296428685507, TOL));
    ok(isequalRel(rets.shift(), 5.700862798318, TOL));

    rets = newtonnu(7.418755898522e-1, 2.067738535875);
    ok(isequalRel(rets.shift(), 1.148095891832, TOL));
    ok(isequalRel(rets.shift(), 4.7151686647e-1, TOL));

    rets = newtonnu(7.418851730991e-1, 2.729884161534);
    ok(isequalRel(rets.shift(), 2.147537543031, TOL));
    ok(isequalRel(rets.shift(), 1.525656676188, TOL));

    rets = newtonnu(7.419448675302e-1, 3.015515314817);
    ok(isequalRel(rets.shift(), 2.816486755941, TOL));
    ok(isequalRel(rets.shift(), 2.579502785323, TOL));

    rets = newtonnu(7.419707694028e-1, 3.251467701041);
    ok(isequalRel(rets.shift(), -2.857740303804, TOL));
    ok(isequalRel(rets.shift(), 3.63323830275, TOL));

    rets = newtonnu(7.419475344599e-1, 3.529749790986);
    ok(isequalRel(rets.shift(), -2.197294697318, TOL));
    ok(isequalRel(rets.shift(), 4.686931561882, TOL));

    rets = newtonnu(7.41852461159e-1, 4.125998165449);
    ok(isequalRel(rets.shift(), -1.245322222785, TOL));
    ok(isequalRel(rets.shift(), 5.740767723337, TOL));

    rets = newtonnu(7.418690431082e-1, 2.120113766971);
    ok(isequalRel(rets.shift(), 1.203920733653, TOL));
    ok(isequalRel(rets.shift(), 5.114211265811e-1, TOL));
    // 22312

    rets = newtonnu(2.675181425237e-2, 5.290184034854);
    ok(isequalRel(rets.shift(), -9.707515982488e-1, TOL));
    ok(isequalRel(rets.shift(), 5.33451225834, TOL));

    rets = newtonnu(2.439822350749e-2, 5.029815553106e-1);
    ok(isequalRel(rets.shift(), 4.91343428159e-1, TOL));
    ok(isequalRel(rets.shift(), 4.798320824675e-1, TOL));

    rets = newtonnu(2.336377341457e-2, 1.883160080065);
    ok(isequalRel(rets.shift(), 1.860844649395, TOL));
    ok(isequalRel(rets.shift(), 1.838456779477, TOL));

    rets = newtonnu(2.364469118874e-2, 3.250644890537);
    ok(isequalRel(rets.shift(), -3.029936048462, TOL));
    ok(isequalRel(rets.shift(), 3.255883862338, TOL));

    rets = newtonnu(2.100327812399e-2, 4.665716463652);
    ok(isequalRel(rets.shift(), -1.596476606959, TOL));
    ok(isequalRel(rets.shift(), 4.707705053138, TOL));

    rets = newtonnu(1.874584407606e-2, 6.058390627524);
    ok(isequalRel(rets.shift(), -2.206535941986e-1, TOL));
    ok(isequalRel(rets.shift(), 6.06663456746, TOL));

    rets = newtonnu(1.892815082464e-2, 1.23506538467);
    ok(isequalRel(rets.shift(), 1.217248427872, TOL));
    ok(isequalRel(rets.shift(), 1.1994909787, TOL));

    rets = newtonnu(1.773690758731e-2, 2.692951932245);
    ok(isequalRel(rets.shift(), 2.685196158742, TOL));
    ok(isequalRel(rets.shift(), 2.677379214425, TOL));

    rets = newtonnu(1.568324749544e-2, 4.01389669636);
    ok(isequalRel(rets.shift(), -2.257216711005, TOL));
    ok(isequalRel(rets.shift(), 4.038099895934, TOL));

    rets = newtonnu(1.481759681755e-2, 5.439861002541);
    ok(isequalRel(rets.shift(), -8.323114308968e-1, TOL));
    ok(isequalRel(rets.shift(), 5.461831330983, TOL));

    rets = newtonnu(1.305180624613e-2, 6.96309747098e-1);
    ok(isequalRel(rets.shift(), 6.879798375972e-1, TOL));
    ok(isequalRel(rets.shift(), 6.796922298301e-1, TOL));

    rets = newtonnu(1.155741395162e-2, 2.069636245312);
    ok(isequalRel(rets.shift(), 2.059458850841, TOL));
    ok(isequalRel(rets.shift(), 2.04925409905, TOL));

    rets = newtonnu(1.165528802335e-2, 3.434663530073);
    ok(isequalRel(rets.shift(), -2.845135636307, TOL));
    ok(isequalRel(rets.shift(), 3.441454572335, TOL));

    rets = newtonnu(9.67399570175e-3, 4.977688537268);
    ok(isequalRel(rets.shift(), -1.296172903117, TOL));
    ok(isequalRel(rets.shift(), 4.996323889873, TOL));

    rets = newtonnu(6.812314294138e-3, 1.066893958335e-1);
    ok(isequalRel(rets.shift(), 1.059664124081e-1, TOL));
    ok(isequalRel(rets.shift(), 1.052458861213e-1, TOL));

    rets = newtonnu(6.901471261849e-3, 1.43250979715);
    ok(isequalRel(rets.shift(), 1.425677404982, TOL));
    ok(isequalRel(rets.shift(), 1.418848477048, TOL));

    rets = newtonnu(6.637568551695e-3, 3.027959831728);
    ok(isequalRel(rets.shift(), 3.02720471002, TOL));
    ok(isequalRel(rets.shift(), 3.026447106884, TOL));

    rets = newtonnu(3.791297143854e-3, 4.522842999589);
    ok(isequalRel(rets.shift(), -1.756617573611, TOL));
    ok(isequalRel(rets.shift(), 4.530293762977, TOL));

    rets = newtonnu(2.272010245208e-3, 5.577829006748);
    ok(isequalRel(rets.shift(), -7.038846157609e-1, TOL));
    ok(isequalRel(rets.shift(), 5.580771099954, TOL));

    rets = newtonnu(1.961854943427e-3, 1.081212776615);
    ok(isequalRel(rets.shift(), 1.079482180249, TOL));
    ok(isequalRel(rets.shift(), 1.077752386014, TOL));

    rets = newtonnu(7.438880868106e-4, 3.524034448127);
    ok(isequalRel(rets.shift(), -2.758873153847, TOL));
    ok(isequalRel(rets.shift(), 3.52458995432, TOL));

    rets = newtonnu(1.204363911379e-3, 1.20658930956);
    ok(isequalRel(rets.shift(), 1.205464185119, TOL));
    ok(isequalRel(rets.shift(), 1.204339303021, TOL));
    // *** error: t:= 494.202867 *** code =   1
    // 22674

    rets = newtonnu(7.54417289084e-1, 2.685592796046);
    ok(isequalRel(rets.shift(), 2.031335824792, TOL));
    ok(isequalRel(rets.shift(), 1.355519116917, TOL));

    rets = newtonnu(7.544731574519e-1, 2.975858362533);
    ok(isequalRel(rets.shift(), 2.704630595709, TOL));
    ok(isequalRel(rets.shift(), 2.38534591459, TOL));

    rets = newtonnu(7.544983721924e-1, 3.200101244478);
    ok(isequalRel(rets.shift(), -2.985454411948, TOL));
    ok(isequalRel(rets.shift(), 3.415058858959, TOL));

    rets = newtonnu(7.544806038316e-1, 3.444664010443);
    ok(isequalRel(rets.shift(), -2.36645716944, TOL));
    ok(isequalRel(rets.shift(), 4.444723368166, TOL));

    rets = newtonnu(7.54395415075e-1, 3.86270826535);
    ok(isequalRel(rets.shift(), -1.563122514175, TOL));
    ok(isequalRel(rets.shift(), 5.474435995996, TOL));

    rets = newtonnu(7.544818233776e-1, 1.571691104696);
    ok(isequalRel(rets.shift(), 7.165195428979e-1, TOL));
    ok(isequalRel(rets.shift(), 2.210030004631e-1, TOL));

    rets = newtonnu(7.543704233005e-1, 2.645476966811);
    ok(isequalRel(rets.shift(), 1.951513514987, TOL));
    ok(isequalRel(rets.shift(), 1.25115723835, TOL));

    rets = newtonnu(7.544273950354e-1, 2.951373432026);
    ok(isequalRel(rets.shift(), 2.64226307695, TOL));
    ok(isequalRel(rets.shift(), 2.281015266753, TOL));

    rets = newtonnu(7.544556439375e-1, 3.177710326905);
    ok(isequalRel(rets.shift(), -3.045112911187, TOL));
    ok(isequalRel(rets.shift(), 3.310749209521, TOL));

    rets = newtonnu(7.544423660167e-1, 3.416429814041);
    ok(isequalRel(rets.shift(), -2.433458465877, TOL));
    ok(isequalRel(rets.shift(), 4.340429491937, TOL));

    rets = newtonnu(7.543649856597e-1, 3.798493751187);
    ok(isequalRel(rets.shift(), -1.664128273727, TOL));
    ok(isequalRel(rets.shift(), 5.370138822445, TOL));

    rets = newtonnu(7.543973649324e-1, 1.06557063684);
    ok(isequalRel(rets.shift(), 4.34295556404e-1, TOL));
    ok(isequalRel(rets.shift(), 1.168666772008e-1, TOL));

    rets = newtonnu(7.543205050293e-1, 2.601631683239);
    ok(isequalRel(rets.shift(), 1.868099933621, TOL));
    ok(isequalRel(rets.shift(), 1.146871579335, TOL));

    rets = newtonnu(7.54378272617e-1, 2.926221972581);
    ok(isequalRel(rets.shift(), 2.579082513888, TOL));
    ok(isequalRel(rets.shift(), 2.176764093643, TOL));

    rets = newtonnu(7.544097492072e-1, 3.155441928149);
    ok(isequalRel(rets.shift(), -3.104580501402, TOL));
    ok(isequalRel(rets.shift(), 3.206520759535, TOL));

    rets = newtonnu(7.544010397628e-1, 3.389359534002);
    ok(isequalRel(rets.shift(), -2.499036758909, TOL));
    ok(isequalRel(rets.shift(), 4.236218513604, TOL));

    rets = newtonnu(7.543315566779e-1, 3.742567954597);
    ok(isequalRel(rets.shift(), -1.758357028408, TOL));
    ok(isequalRel(rets.shift(), 5.265930365825, TOL));

    rets = newtonnu(7.540773149328e-1, 1.379633086621e-1);
    ok(isequalRel(rets.shift(), 5.172866833145e-2, TOL));
    ok(isequalRel(rets.shift(), 1.273864704904e-2, TOL));

    rets = newtonnu(7.542695512343e-1, 2.55314856253);
    ok(isequalRel(rets.shift(), 1.78042516822, TOL));
    ok(isequalRel(rets.shift(), 1.042667920789, TOL));

    rets = newtonnu(7.543275574825e-1, 2.900284963886);
    ok(isequalRel(rets.shift(), 2.514954715674, TOL));
    ok(isequalRel(rets.shift(), 2.072598332621, TOL));

    rets = newtonnu(7.543624491072e-1, 3.133228268447);
    ok(isequalRel(rets.shift(), 3.119239914294, TOL));
    ok(isequalRel(rets.shift(), 3.102379251274, TOL));

    rets = newtonnu(7.54358402577e-1, 3.363281180717);
    ok(isequalRel(rets.shift(), -2.563372295632, TOL));
    ok(isequalRel(rets.shift(), 4.132095878009, TOL));

    rets = newtonnu(7.54296724133e-1, 3.692964050534);
    ok(isequalRel(rets.shift(), -1.847064592697, TOL));
    ok(isequalRel(rets.shift(), 5.161814529443, TOL));

    rets = newtonnu(7.544385527024e-1, 5.400593266884);
    ok(isequalRel(rets.shift(), -3.498303424809e-1, TOL));
    ok(isequalRel(rets.shift(), 6.191930050445, TOL));
    // 23177

    rets = newtonnu(7.263087733555e-1, 2.637418480129);
    ok(isequalRel(rets.shift(), 1.993247562015, TOL));
    ok(isequalRel(rets.shift(), 1.330791003283, TOL));

    rets = newtonnu(7.262533237763e-1, 2.993942370793);
    ok(isequalRel(rets.shift(), 2.774325838562, TOL));
    ok(isequalRel(rets.shift(), 2.513553063295, TOL));

    rets = newtonnu(7.262566786379e-1, 3.271456185468);
    ok(isequalRel(rets.shift(), -2.817877380632, TOL));
    ok(isequalRel(rets.shift(), 3.696323676145, TOL));

    rets = newtonnu(7.263198311914e-1, 3.616660347911);
    ok(isequalRel(rets.shift(), -2.048952515975, TOL));
    ok(isequalRel(rets.shift(), 4.879092111333, TOL));

    rets = newtonnu(7.263454271303e-1, 4.837457714387);
    ok(isequalRel(rets.shift(), -6.755217307564e-1, TOL));
    ok(isequalRel(rets.shift(), 6.061850677234, TOL));

    rets = newtonnu(7.263670854616e-1, 2.458314087655);
    ok(isequalRel(rets.shift(), 1.683561447863, TOL));
    ok(isequalRel(rets.shift(), 9.618077026516e-1, TOL));

    rets = newtonnu(7.262956957566e-1, 2.899985976628);
    ok(isequalRel(rets.shift(), 2.549754191281, TOL));
    ok(isequalRel(rets.shift(), 2.14456273068, TOL));

    rets = newtonnu(7.262798501064e-1, 3.184506271738);
    ok(isequalRel(rets.shift(), -3.033910417165, TOL));
    ok(isequalRel(rets.shift(), 3.327331274225, TOL));

    rets = newtonnu(7.263238070861e-1, 3.489692093179);
    ok(isequalRel(rets.shift(), -2.309893474338, TOL));
    ok(isequalRel(rets.shift(), 4.510101082385, TOL));

    rets = newtonnu(7.264120176083e-1, 4.11678948967);
    ok(isequalRel(rets.shift(), -1.287858790195, TOL));
    ok(isequalRel(rets.shift(), 5.692856020935, TOL));

    rets = newtonnu(7.264167991962e-1, 2.169100857506);
    ok(isequalRel(rets.shift(), 1.290991144736, TOL));
    ok(isequalRel(rets.shift(), 5.92825233055e-1, TOL));

    rets = newtonnu(7.263406648409e-1, 2.794279417344);
    ok(isequalRel(rets.shift(), 2.311571109619, TOL));
    ok(isequalRel(rets.shift(), 1.775570986411, TOL));
    // 23333

    rets = newtonnu(9.906044031463e-1, 2.710920576748);
    ok(isequalRel(rets.shift(), 6.086820953334e-1, TOL));
    ok(isequalRel(rets.shift(), 4.226762810877e-2, TOL));

    rets = newtonnu(9.906744583785e-1, 2.804969305754);
    ok(isequalRel(rets.shift(), 7.658434418298e-1, TOL));
    ok(isequalRel(rets.shift(), 7.916219999337e-2, TOL));

    rets = newtonnu(9.907363097222e-1, 2.853418125097);
    ok(isequalRel(rets.shift(), 8.789727658895e-1, TOL));
    ok(isequalRel(rets.shift(), 1.160226162864e-1, TOL));

    rets = newtonnu(9.907930387002e-1, 2.885019187817);
    ok(isequalRel(rets.shift(), 9.70333137868e-1, TOL));
    ok(isequalRel(rets.shift(), 1.528555719233e-1, TOL));

    rets = newtonnu(9.908453428193e-1, 2.908057142832);
    ok(isequalRel(rets.shift(), 1.048314299258, TOL));
    ok(isequalRel(rets.shift(), 1.896643340401e-1, TOL));

    rets = newtonnu(9.9089341621e-1, 2.925984490012);
    ok(isequalRel(rets.shift(), 1.117098298413, TOL));
    ok(isequalRel(rets.shift(), 2.264511571453e-1, TOL));

    rets = newtonnu(9.909372927325e-1, 2.940546063766);
    ok(isequalRel(rets.shift(), 1.17910704685, TOL));
    ok(isequalRel(rets.shift(), 2.632178986692e-1, TOL));

    rets = newtonnu(9.909769444104e-1, 2.952737452853);
    ok(isequalRel(rets.shift(), 1.235883470382, TOL));
    ok(isequalRel(rets.shift(), 2.999662394134e-1, TOL));

    rets = newtonnu(9.910123176508e-1, 2.963176615147);
    ok(isequalRel(rets.shift(), 1.288478100658, TOL));
    ok(isequalRel(rets.shift(), 3.366977788907e-1, TOL));

    rets = newtonnu(9.910433489629e-1, 2.972271689837);
    ok(isequalRel(rets.shift(), 1.3376422756, TOL));
    ok(isequalRel(rets.shift(), 3.734140816695e-1, TOL));

    rets = newtonnu(9.910699726623e-1, 2.980305455016);
    ok(isequalRel(rets.shift(), 1.383934130026, TOL));
    ok(isequalRel(rets.shift(), 4.101167015781e-1, TOL));

    rets = newtonnu(9.91092125027e-1, 2.987481446559);
    ok(isequalRel(rets.shift(), 1.427780988229, TOL));
    ok(isequalRel(rets.shift(), 4.468071947966e-1, TOL));

    rets = newtonnu(9.911097467267e-1, 2.993950801145);
    ok(isequalRel(rets.shift(), 1.469518180325, TOL));
    ok(isequalRel(rets.shift(), 4.834871268905e-1, TOL));

    rets = newtonnu(9.911146043875e-1, 2.995970942154);
    ok(isequalRel(rets.shift(), 1.483009748697, TOL));
    ok(isequalRel(rets.shift(), 4.957116964193e-1, TOL));
    // 23599

    rets = newtonnu(5.784051420876e-1, 2.04273402982);
    ok(isequalRel(rets.shift(), 1.402040163613, TOL));
    ok(isequalRel(rets.shift(), 8.318515906631e-1, TOL));

    rets = newtonnu(5.783202612333e-1, 2.353987642725);
    ok(isequalRel(rets.shift(), 1.787403278048, TOL));
    ok(isequalRel(rets.shift(), 1.222597034643, TOL));

    rets = newtonnu(5.782452116786e-1, 2.571151958504);
    ok(isequalRel(rets.shift(), 2.109673564379, TOL));
    ok(isequalRel(rets.shift(), 1.613374145509, TOL));

    rets = newtonnu(5.78185881873e-1, 2.742767240296);
    ok(isequalRel(rets.shift(), 2.396293113376, TOL));
    ok(isequalRel(rets.shift(), 2.004172092034, TOL));

    rets = newtonnu(5.781435183037e-1, 2.890012644494);
    ok(isequalRel(rets.shift(), 2.661834460677, TOL));
    ok(isequalRel(rets.shift(), 2.394983832435, TOL));

    rets = newtonnu(5.781182295785e-1, 3.024294654572);
    ok(isequalRel(rets.shift(), 2.915437361688, TOL));
    ok(isequalRel(rets.shift(), 2.785804532415, TOL));

    rets = newtonnu(5.781099191721e-1, 3.15307305742);
    ok(isequalRel(rets.shift(), -3.119389581938, TOL));
    ok(isequalRel(rets.shift(), 3.1766304866, TOL));

    rets = newtonnu(5.781185602132e-1, 3.282377737929);
    ok(isequalRel(rets.shift(), -2.870524379645, TOL));
    ok(isequalRel(rets.shift(), 3.567458447874, TOL));

    rets = newtonnu(5.781442547519e-1, 3.418369059747);
    ok(isequalRel(rets.shift(), -2.615313371561, TOL));
    ok(isequalRel(rets.shift(), 3.958285119243, TOL));

    rets = newtonnu(5.781871583535e-1, 3.568979715947);
    ok(isequalRel(rets.shift(), -2.346758356903, TOL));
    ok(isequalRel(rets.shift(), 4.349106621248, TOL));

    rets = newtonnu(5.782471511503e-1, 3.74677762245);
    ok(isequalRel(rets.shift(), -2.05503377184, TOL));
    ok(isequalRel(rets.shift(), 4.739917727954, TOL));

    rets = newtonnu(5.783226767564e-1, 3.975937404662);
    ok(isequalRel(rets.shift(), -1.724021766408, TOL));
    ok(isequalRel(rets.shift(), 5.130710549596, TOL));

    rets = newtonnu(5.784060990336e-1, 4.314306727539);
    ok(isequalRel(rets.shift(), -1.322360872112, TOL));
    ok(isequalRel(rets.shift(), 5.521472489589, TOL));

    rets = newtonnu(5.784609433935e-1, 4.944459382375);
    ok(isequalRel(rets.shift(), -7.762795773556e-1, TOL));
    ok(isequalRel(rets.shift(), 5.912192623481, TOL));

    rets = newtonnu(5.784178049311e-1, 9.098140980551e-2);
    ok(isequalRel(rets.shift(), 4.704380301857e-2, TOL));
    ok(isequalRel(rets.shift(), 1.984286548586e-2, TOL));

    rets = newtonnu(5.784567893684e-1, 1.428319169135);
    ok(isequalRel(rets.shift(), 8.422745412591e-1, TOL));
    ok(isequalRel(rets.shift(), 4.106535910989e-1, TOL));

    rets = newtonnu(5.783928239487e-1, 2.011549338173);
    ok(isequalRel(rets.shift(), 1.367916471514, TOL));
    ok(isequalRel(rets.shift(), 8.013862671461e-1, TOL));

    rets = newtonnu(5.783078403339e-1, 2.33405051583);
    ok(isequalRel(rets.shift(), 1.760134801544, TOL));
    ok(isequalRel(rets.shift(), 1.192161926553, TOL));

    rets = newtonnu(5.782317383207e-1, 2.556248718242);
    ok(isequalRel(rets.shift(), 2.086111386365, TOL));
    ok(isequalRel(rets.shift(), 1.582970266417, TOL));

    rets = newtonnu(5.781711345647e-1, 2.730476349827);
    ok(isequalRel(rets.shift(), 2.374907377344, TOL));
    ok(isequalRel(rets.shift(), 1.97380014494, TOL));

    rets = newtonnu(5.781274575091e-1, 2.879148887278);
    ok(isequalRel(rets.shift(), 2.641739070668, TOL));
    ok(isequalRel(rets.shift(), 2.364644291315, TOL));

    rets = newtonnu(5.781008606368e-1, 3.01415582337);
    ok(isequalRel(rets.shift(), 2.89603339582, TOL));
    ok(isequalRel(rets.shift(), 2.755497745077, TOL));

    rets = newtonnu(5.780912522479e-1, 3.143153611159);
    ok(isequalRel(rets.shift(), -3.138573761097, TOL));
    ok(isequalRel(rets.shift(), 3.146356738774, TOL));

    rets = newtonnu(5.780985986352e-1, 3.2722242567);
    ok(isequalRel(rets.shift(), -2.889925052126, TOL));
    ok(isequalRel(rets.shift(), 3.537218006355, TOL));

    rets = newtonnu(5.781229951224e-1, 3.407467729449);
    ok(isequalRel(rets.shift(), -2.635406959541, TOL));
    ok(isequalRel(rets.shift(), 3.928078269318, TOL));

    rets = newtonnu(5.781646028457e-1, 3.556605575105);
    ok(isequalRel(rets.shift(), -2.36815629953, TOL));
    ok(isequalRel(rets.shift(), 4.318933711585, TOL));

    rets = newtonnu(5.782233506636e-1, 3.731687084934);
    ok(isequalRel(rets.shift(), -2.078651571054, TOL));
    ok(isequalRel(rets.shift(), 4.70977924044, TOL));

    rets = newtonnu(5.782978841206e-1, 3.955539621498);
    ok(isequalRel(rets.shift(), -1.751463602273, TOL));
    ok(isequalRel(rets.shift(), 5.100607219443, TOL));

    rets = newtonnu(5.783814148451e-1, 4.28177432293);
    ok(isequalRel(rets.shift(), -1.356992012291, TOL));
    ok(isequalRel(rets.shift(), 5.491405423111, TOL));

    rets = newtonnu(5.784415819901e-1, 4.875919714831);
    ok(isequalRel(rets.shift(), -8.265088773899e-1, TOL));
    ok(isequalRel(rets.shift(), 5.882161169868, TOL));

    rets = newtonnu(5.783988140863e-1, 6.236497677359);
    ok(isequalRel(rets.shift(), -2.413249280196e-2, TOL));
    ok(isequalRel(rets.shift(), 6.273009664811, TOL));

    rets = newtonnu(5.784399994085e-1, 1.361334154581);
    ok(isequalRel(rets.shift(), 7.926705899408e-1, TOL));
    ok(isequalRel(rets.shift(), 3.806880266413e-1, TOL));

    rets = newtonnu(5.783808309591e-1, 1.97953466651);
    ok(isequalRel(rets.shift(), 1.333644047704, TOL));
    ok(isequalRel(rets.shift(), 7.714515489745e-1, TOL));

    rets = newtonnu(5.782958886741e-1, 2.313907266475);
    ok(isequalRel(rets.shift(), 1.732965656025, TOL));
    ok(isequalRel(rets.shift(), 1.162257387001, TOL));

    rets = newtonnu(5.782187822181e-1, 2.541333908517);
    ok(isequalRel(rets.shift(), 2.062746643187, TOL));
    ok(isequalRel(rets.shift(), 1.553096911448, TOL));

    rets = newtonnu(5.781569290539e-1, 2.718253536163);
    ok(isequalRel(rets.shift(), 2.353768115677, TOL));
    ok(isequalRel(rets.shift(), 1.943958687704, TOL));
    // 24208

    rets = newtonnu(2.654297752769e-3, 1.355056725607);
    ok(isequalRel(rets.shift(), 1.352464692186, TOL));
    ok(isequalRel(rets.shift(), 1.34987340699, TOL));

    rets = newtonnu(2.634424546089e-3, 1.882982264873);
    ok(isequalRel(rets.shift(), 1.880474158934, TOL));
    ok(isequalRel(rets.shift(), 1.87796504922, TOL));

    rets = newtonnu(2.617868391905e-3, 2.413251211721);
    ok(isequalRel(rets.shift(), 2.411506966265, TOL));
    ok(isequalRel(rets.shift(), 2.409761022177, TOL));

    rets = newtonnu(2.608930185835e-3, 2.945196393376);
    ok(isequalRel(rets.shift(), 2.944686643777, TOL));
    ok(isequalRel(rets.shift(), 2.944176242933, TOL));

    rets = newtonnu(2.610099643301e-3, 3.477711644804);
    ok(isequalRel(rets.shift(), -2.804611720956, TOL));
    ok(isequalRel(rets.shift(), 3.479436587838, TOL));

    rets = newtonnu(2.621280442174e-3, 4.009403899752);
    ok(isequalRel(rets.shift(), -2.271779892611, TOL));
    ok(isequalRel(rets.shift(), 4.013408618543, TOL));

    rets = newtonnu(2.639328633586e-3, 4.539064512266);
    ok(isequalRel(rets.shift(), -1.741520416782, TOL));
    ok(isequalRel(rets.shift(), 4.544265848486, TOL));

    rets = newtonnu(2.659026281401e-3, 5.06621426086);
    ok(isequalRel(rets.shift(), -1.214477881036, TOL));
    ok(isequalRel(rets.shift(), 5.071199432057, TOL));

    rets = newtonnu(2.675047219934e-3, 5.591159816614);
    ok(isequalRel(rets.shift(), -6.90320301636e-1, TOL));
    ok(isequalRel(rets.shift(), 5.594568433296, TOL));

    rets = newtonnu(2.683325530177e-3, 6.11465517718);
    ok(isequalRel(rets.shift(), -1.68080640174e-1, TOL));
    ok(isequalRel(rets.shift(), 6.115553561464, TOL));

    rets = newtonnu(2.681605396723e-3, 3.545203619987e-1);
    ok(isequalRel(rets.shift(), 3.53590635362e-1, TOL));
    ok(isequalRel(rets.shift(), 3.526620797908e-1, TOL));

    rets = newtonnu(2.670087967001e-3, 8.783370687673e-1);
    ok(isequalRel(rets.shift(), 8.762837072798e-1, TOL));
    ok(isequalRel(rets.shift(), 8.742321032115e-1, TOL));
    // 25954

    rets = newtonnu(2.118980881091e-4, 3.094712057265e-1);
    ok(isequalRel(rets.shift(), 3.094066776144e-1, TOL));
    ok(isequalRel(rets.shift(), 3.09342156015e-1, TOL));

    rets = newtonnu(2.018857414327e-4, 7.522873900398e-1);
    ok(isequalRel(rets.shift(), 7.521494495312e-1, TOL));
    ok(isequalRel(rets.shift(), 7.520115191915e-1, TOL));

    rets = newtonnu(1.853991043408e-4, 1.221123179806);
    ok(isequalRel(rets.shift(), 1.220949005707, TOL));
    ok(isequalRel(rets.shift(), 1.220774837144, TOL));

    rets = newtonnu(1.657288742284e-4, 1.735739082203);
    ok(isequalRel(rets.shift(), 1.735575600417, TOL));
    ok(isequalRel(rets.shift(), 1.735412116409, TOL));

    rets = newtonnu(1.479780786326e-4, 2.315992652649);
    ok(isequalRel(rets.shift(), 2.315883889995, TOL));
    ok(isequalRel(rets.shift(), 2.315775121884, TOL));

    rets = newtonnu(1.384411464309e-4, 2.961761549236);
    ok(isequalRel(rets.shift(), 2.961736785495, TOL));
    ok(isequalRel(rets.shift(), 2.961712020067, TOL));

    rets = newtonnu(1.414428690715e-4, 3.626207835025);
    ok(isequalRel(rets.shift(), -2.656911574341, TOL));
    ok(isequalRel(rets.shift(), 3.626339634777, TOL));

    rets = newtonnu(1.555355900366e-4, 4.244384461393);
    ok(isequalRel(rets.shift(), -2.038662030031, TOL));
    ok(isequalRel(rets.shift(), 4.244662097773, TOL));

    rets = newtonnu(1.749131783852e-4, 4.79238344272);
    ok(isequalRel(rets.shift(), -1.490627511845, TOL));
    ok(isequalRel(rets.shift(), 4.792732146727, TOL));

    rets = newtonnu(1.936266716627e-4, 5.283165782504);
    ok(isequalRel(rets.shift(), -9.998565999283e-1, TOL));
    ok(isequalRel(rets.shift(), 5.283491623474, TOL));

    rets = newtonnu(2.074197220398e-4, 5.737762198434);
    ok(isequalRel(rets.shift(), -5.453155131111e-1, TOL));
    ok(isequalRel(rets.shift(), 5.737977380162, TOL));

    rets = newtonnu(2.137717161693e-4, 6.174117635266);
    ok(isequalRel(rets.shift(), -1.090444050002e-1, TOL));
    ok(isequalRel(rets.shift(), 6.17416416662, TOL));

    rets = newtonnu(2.116506173217e-4, 3.237859936919e-1);
    ok(isequalRel(rets.shift(), 3.237186620887e-1, TOL));
    ok(isequalRel(rets.shift(), 3.236513372416e-1, TOL));

    rets = newtonnu(2.013927155994e-4, 7.671738094483e-1);
    ok(isequalRel(rets.shift(), 7.670340321889e-1, TOL));
    ok(isequalRel(rets.shift(), 7.668942650642e-1, TOL));

    rets = newtonnu(1.847419205128e-4, 1.237171927001);
    ok(isequalRel(rets.shift(), 1.236997376721, TOL));
    ok(isequalRel(rets.shift(), 1.236822831723, TOL));

    rets = newtonnu(1.650458110166e-4, 1.753662603595);
    ok(isequalRel(rets.shift(), 1.753500307239, TOL));
    ok(isequalRel(rets.shift(), 1.753338008449, TOL));

    rets = newtonnu(1.474658285037e-4, 2.336291941255);
    ok(isequalRel(rets.shift(), 2.336185607203, TOL));
    ok(isequalRel(rets.shift(), 2.33607926772, TOL));

    rets = newtonnu(1.382992296552e-4, 2.98372427584);
    ok(isequalRel(rets.shift(), 2.983702531855, TOL));
    ok(isequalRel(rets.shift(), 2.983680786387, TOL));

    rets = newtonnu(1.417267990267e-4, 3.647603983939);
    ok(isequalRel(rets.shift(), -2.635512625096, TOL));
    ok(isequalRel(rets.shift(), 3.647741384485, TOL));

    rets = newtonnu(1.560996564057e-4, 4.263576124747);
    ok(isequalRel(rets.shift(), -2.01946853768, TOL));
    ok(isequalRel(rets.shift(), 4.263857419013, TOL));

    rets = newtonnu(1.755451493936e-4, 4.809374887);
    ok(isequalRel(rets.shift(), -1.47363570148, TOL));
    ok(isequalRel(rets.shift(), 4.809724322911, TOL));

    rets = newtonnu(1.941563959538e-4, 5.298627489863);
    ok(isequalRel(rets.shift(), -9.843960883758e-1, TOL));
    ok(isequalRel(rets.shift(), 5.298950939055, TOL));

    rets = newtonnu(2.077379521664e-4, 5.752349988353);
    ok(isequalRel(rets.shift(), -5.307301601004e-1, TOL));
    ok(isequalRel(rets.shift(), 5.752560296384, TOL));

    rets = newtonnu(2.138219808942e-4, 6.188357826844);
    ok(isequalRel(rets.shift(), -9.48072366642e-2, TOL));
    ok(isequalRel(rets.shift(), 6.188398312032, TOL));

    rets = newtonnu(2.114225876523e-4, 3.381384865579e-1);
    ok(isequalRel(rets.shift(), 3.380683580049e-1, TOL));
    ok(isequalRel(rets.shift(), 3.379982364464e-1, TOL));
    // 26900

    rets = newtonnu(3.702590174409e-4, 6.17860600833);
    ok(isequalRel(rets.shift(), -1.045406550777e-1, TOL));
    ok(isequalRel(rets.shift(), 6.178683288757, TOL));

    rets = newtonnu(3.701274097376e-4, 1.311787735524e-1);
    ok(isequalRel(rets.shift(), 1.311303687009e-1, TOL));
    ok(isequalRel(rets.shift(), 1.310819727321e-1, TOL));

    rets = newtonnu(3.687418981571e-4, 2.886761651077e-1);
    ok(isequalRel(rets.shift(), 2.885712089504e-1, TOL));
    ok(isequalRel(rets.shift(), 2.884662713473e-1, TOL));
    // 26975

    rets = newtonnu(5.600550020529e-1, 3.055085867742e-1);
    ok(isequalRel(rets.shift(), 1.631489467787e-1, TOL));
    ok(isequalRel(rets.shift(), 7.218137586086e-2, TOL));

    rets = newtonnu(5.600301892854e-1, 2.271836458316);
    ok(isequalRel(rets.shift(), 1.704232394083, TOL));
    ok(isequalRel(rets.shift(), 1.149180531845, TOL));

    rets = newtonnu(5.600934955264e-1, 2.816149153755);
    ok(isequalRel(rets.shift(), 2.541895638297, TOL));
    ok(isequalRel(rets.shift(), 2.225783135424, TOL));

    rets = newtonnu(5.600478225224e-1, 3.196415647512);
    ok(isequalRel(rets.shift(), -3.038422921054, TOL));
    ok(isequalRel(rets.shift(), 3.302439923089, TOL));

    rets = newtonnu(5.599706577269e-1, 3.598925992357);
    ok(isequalRel(rets.shift(), -2.315578114506, TOL));
    ok(isequalRel(rets.shift(), 4.379317682113, TOL));

    rets = newtonnu(5.599893485981e-1, 4.288678697633);
    ok(isequalRel(rets.shift(), -1.37620734461, TOL));
    ok(isequalRel(rets.shift(), 5.456398759969, TOL));

    rets = newtonnu(5.600638670535e-1, 9.537448265413e-1);
    ok(isequalRel(rets.shift(), 5.355334773051e-1, TOL));
    ok(isequalRel(rets.shift(), 2.497329415917e-1, TOL));

    rets = newtonnu(5.600082181346e-1, 2.389582311632);
    ok(isequalRel(rets.shift(), 1.863103837074, TOL));
    ok(isequalRel(rets.shift(), 1.326850334671, TOL));

    rets = newtonnu(5.600491118493e-1, 2.883301197419);
    ok(isequalRel(rets.shift(), 2.661903692274, TOL));
    ok(isequalRel(rets.shift(), 2.403439199449, TOL));

    rets = newtonnu(5.599936084298e-1, 3.257500895422);
    ok(isequalRel(rets.shift(), -2.923965037926, TOL));
    ok(isequalRel(rets.shift(), 3.480130621318, TOL));

    rets = newtonnu(5.599206562963e-1, 3.679624684616);
    ok(isequalRel(rets.shift(), -2.184027891888, TOL));
    ok(isequalRel(rets.shift(), 4.557056318968, TOL));

    rets = newtonnu(5.599717319624e-1, 4.500602674831);
    ok(isequalRel(rets.shift(), -1.163172871369, TOL));
    ok(isequalRel(rets.shift(), 5.634103189003, TOL));

    rets = newtonnu(5.599370292825e-1, 1.40763063129);
    ok(isequalRel(rets.shift(), 8.47109577409e-1, TOL));
    ok(isequalRel(rets.shift(), 4.275097677437e-1, TOL));

    rets = newtonnu(5.599861031042e-1, 2.491749272943);
    ok(isequalRel(rets.shift(), 2.011110812908, TOL));
    ok(isequalRel(rets.shift(), 1.504537491082, TOL));

    rets = newtonnu(5.600061902363e-1, 2.947772957086);
    ok(isequalRel(rets.shift(), 2.77950087723, TOL));
    ok(isequalRel(rets.shift(), 2.581129241572, TOL));

    rets = newtonnu(5.599428934279e-1, 3.319721883918);
    ok(isequalRel(rets.shift(), -2.808440659401, TOL));
    ok(isequalRel(rets.shift(), 3.657859039487, TOL));

    rets = newtonnu(5.598778587657e-1, 3.768254456239);
    ok(isequalRel(rets.shift(), -2.046154814096, TOL));
    ok(isequalRel(rets.shift(), 4.734833973902, TOL));

    rets = newtonnu(5.599408868531e-1, 4.78776839572);
    ok(isequalRel(rets.shift(), -9.153090753996e-1, TOL));
    ok(isequalRel(rets.shift(), 5.81176994113, TOL));

    rets = newtonnu(5.598628789548e-1, 1.720153608349);
    ok(isequalRel(rets.shift(), 1.105802238942, TOL));
    ok(isequalRel(rets.shift(), 6.053832396828e-1, TOL));

    rets = newtonnu(5.599638794879e-1, 2.582573301986);
    ok(isequalRel(rets.shift(), 2.150677425754, TOL));
    ok(isequalRel(rets.shift(), 1.68225207098, TOL));

    rets = newtonnu(5.599653791676e-1, 3.010336368451);
    ok(isequalRel(rets.shift(), 2.895354066762, TOL));
    ok(isequalRel(rets.shift(), 2.758858172723, TOL));

    rets = newtonnu(5.598962994359e-1, 3.383730187939);
    ok(isequalRel(rets.shift(), -2.691259411846, TOL));
    ok(isequalRel(rets.shift(), 3.835629480898, TOL));

    rets = newtonnu(5.598436970652e-1, 3.867476885835);
    ok(isequalRel(rets.shift(), -1.900264427413, TOL));
    ok(isequalRel(rets.shift(), 4.912653141722, TOL));

    rets = newtonnu(5.598443873674e-1, 5.200514292271);
    ok(isequalRel(rets.shift(), -6.18290607351e-1, TOL));
    ok(isequalRel(rets.shift(), 5.989404621744, TOL));
    // 28057

    rets = newtonnu(7.33396156979e-4, 4.195374323083);
    ok(isequalRel(rets.shift(), -2.087173328153, TOL));
    ok(isequalRel(rets.shift(), 4.196649750355, TOL));

    rets = newtonnu(1.327018230815e-3, 1.32730644031);
    ok(isequalRel(rets.shift(), 1.326018771385, TOL));
    ok(isequalRel(rets.shift(), 1.324731309901, TOL));

    rets = newtonnu(9.196305043762e-4, 2.457233819566);
    ok(isequalRel(rets.shift(), 2.456652243602, TOL));
    ok(isequalRel(rets.shift(), 2.456070460641, TOL));

    rets = newtonnu(2.671287814371e-3, 3.165700582569);
    ok(isequalRel(rets.shift(), -3.117420245421, TOL));
    ok(isequalRel(rets.shift(), 3.16582962693, TOL));

    rets = newtonnu(1.029370833968e-3, 4.964434733801);
    ok(isequalRel(rets.shift(), -1.317753854023, TOL));
    ok(isequalRel(rets.shift(), 4.966428043901, TOL));

    rets = newtonnu(8.855437590308e-4, 4.47488688995);
    ok(isequalRel(rets.shift(), -1.807437642047, TOL));
    ok(isequalRel(rets.shift(), 4.476608529551, TOL));

    rets = newtonnu(1.198447314706e-3, 1.453658925869);
    ok(isequalRel(rets.shift(), 1.452468774268, TOL));
    ok(isequalRel(rets.shift(), 1.451278707145, TOL));

    rets = newtonnu(7.950634398042e-4, 2.005371775591);
    ok(isequalRel(rets.shift(), 2.004650493391, TOL));
    ok(isequalRel(rets.shift(), 2.00392909074, TOL));

    rets = newtonnu(2.769612384846e-3, 3.150346841263);
    ok(isequalRel(rets.shift(), -3.132814186852, TOL));
    ok(isequalRel(rets.shift(), 3.150395432965, TOL));

    rets = newtonnu(8.577165476244e-4, 4.694534930147);
    ok(isequalRel(rets.shift(), -1.587792790516, TOL));
    ok(isequalRel(rets.shift(), 4.696250109326, TOL));

    rets = newtonnu(1.047239373767e-3, 4.68736097192);
    ok(isequalRel(rets.shift(), -1.594777409954, TOL));
    ok(isequalRel(rets.shift(), 4.689454835484, TOL));

    rets = newtonnu(1.04615986668e-3, 1.618368989317);
    ok(isequalRel(rets.shift(), 1.617323986854, TOL));
    ok(isequalRel(rets.shift(), 1.616278959159, TOL));

    rets = newtonnu(8.652745849065e-4, 1.575763395697);
    ok(isequalRel(rets.shift(), 1.574898129818, TOL));
    ok(isequalRel(rets.shift(), 1.574032862513, TOL));

    rets = newtonnu(2.766168153711e-3, 3.136831201507);
    ok(isequalRel(rets.shift(), 3.136818012312, TOL));
    ok(isequalRel(rets.shift(), 3.136804804902, TOL));

    rets = newtonnu(7.9656708452e-4, 4.256230709275);
    ok(isequalRel(rets.shift(), -2.026239353112, TOL));
    ok(isequalRel(rets.shift(), 4.257661324079, TOL));

    rets = newtonnu(1.200865835031e-3, 4.85013427642);
    ok(isequalRel(rets.shift(), -1.431861637168, TOL));
    ok(isequalRel(rets.shift(), 4.852512964413, TOL));

    rets = newtonnu(8.864163207241e-4, 1.831932871163);
    ok(isequalRel(rets.shift(), 1.831076408746, TOL));
    ok(isequalRel(rets.shift(), 1.830219848756, TOL));

    rets = newtonnu(1.038983051778e-3, 1.316307731762);
    ok(isequalRel(rets.shift(), 1.315302343401, TOL));
    ok(isequalRel(rets.shift(), 1.314297087223, TOL));

    rets = newtonnu(2.661219266844e-3, 3.12129580875);
    ok(isequalRel(rets.shift(), 3.12124172606, TOL));
    ok(isequalRel(rets.shift(), 3.121187571518, TOL));

    rets = newtonnu(9.326937609175e-4, 3.809280071246);
    ok(isequalRel(rets.shift(), -2.473327526707, TOL));
    ok(isequalRel(rets.shift(), 3.810435701051, TOL));

    rets = newtonnu(1.32969870234e-3, 4.974229143065);
    ok(isequalRel(rets.shift(), -1.307672008445, TOL));
    ok(isequalRel(rets.shift(), 4.976797231949, TOL));

    rets = newtonnu(7.360717491391e-4, 2.110838769814);
    ok(isequalRel(rets.shift(), 2.110207331193, TOL));
    ok(isequalRel(rets.shift(), 2.109575773273, TOL));

    rets = newtonnu(1.219309889156e-3, 1.191933899729);
    ok(isequalRel(rets.shift(), 1.190801311088, TOL));
    ok(isequalRel(rets.shift(), 1.18966897886, TOL));

    rets = newtonnu(2.462219959731e-3, 3.099310142526);
    ok(isequalRel(rets.shift(), 3.099205936369, TOL));
    ok(isequalRel(rets.shift(), 3.099101602196, TOL));
    // 28129

    rets = newtonnu(4.640666248398e-3, 2.688053122763);
    ok(isequalRel(rets.shift(), 2.68601555489, TOL));
    ok(isequalRel(rets.shift(), 2.683973751649, TOL));

    rets = newtonnu(4.638074038857e-3, 3.716820103224);
    ok(isequalRel(rets.shift(), -2.563837041079, TOL));
    ok(isequalRel(rets.shift(), 3.721881328029, TOL));

    rets = newtonnu(4.629207297044e-3, 4.780504691011);
    ok(isequalRel(rets.shift(), -1.498062854847, TOL));
    ok(isequalRel(rets.shift(), 4.789739420407, TOL));

    rets = newtonnu(4.611707205141e-3, 5.818459689103);
    ok(isequalRel(rets.shift(), -4.62662995964e-1, TOL));
    ok(isequalRel(rets.shift(), 5.822580667009, TOL));

    rets = newtonnu(4.616435403522e-3, 6.068134805952e-1);
    ok(isequalRel(rets.shift(), 6.041859154156e-1, TOL));
    ok(isequalRel(rets.shift(), 6.015633540021e-1, TOL));

    rets = newtonnu(4.621156197662e-3, 1.643346322335);
    ok(isequalRel(rets.shift(), 1.638736534015, TOL));
    ok(isequalRel(rets.shift(), 1.634126039048, TOL));

    rets = newtonnu(4.642194405799e-3, 2.705502836523);
    ok(isequalRel(rets.shift(), 2.703537836641, TOL));
    ok(isequalRel(rets.shift(), 2.701568716408, TOL));

    rets = newtonnu(4.635494796957e-3, 3.734349294046);
    ok(isequalRel(rets.shift(), -2.546241395989, TOL));
    ok(isequalRel(rets.shift(), 3.73954349488, TOL));

    rets = newtonnu(4.630325740817e-3, 4.798073754256);
    ok(isequalRel(rets.shift(), -1.480499111761, TOL));
    ok(isequalRel(rets.shift(), 4.8072976571, TOL));

    rets = newtonnu(4.609045984338e-3, 5.836171484637);
    ok(isequalRel(rets.shift(), -4.450255704088e-1, TOL));
    ok(isequalRel(rets.shift(), 5.840143843312, TOL));

    rets = newtonnu(4.617930660554e-3, 6.244211807145e-1);
    ok(isequalRel(rets.shift(), 6.217264454195e-1, TOL));
    ok(isequalRel(rets.shift(), 6.190367806071e-1, TOL));

    rets = newtonnu(4.618929629951e-3, 1.660972656137);
    ok(isequalRel(rets.shift(), 1.656371520467, TOL));
    ok(isequalRel(rets.shift(), 1.651769492992, TOL));
    // 28350

    rets = newtonnu(1.092900560486e-3, 3.755536003947);
    ok(isequalRel(rets.shift(), -2.527019406997, TOL));
    ok(isequalRel(rets.shift(), 3.756796077475, TOL));

    rets = newtonnu(6.742081783819e-4, 2.612214602642);
    ok(isequalRel(rets.shift(), 2.611874030661, TOL));
    ok(isequalRel(rets.shift(), 2.611533359642, TOL));

    rets = newtonnu(1.074437396221e-3, 3.363041521853);
    ok(isequalRel(rets.shift(), -2.919907668492, TOL));
    ok(isequalRel(rets.shift(), 3.363513879197, TOL));

    rets = newtonnu(9.97949933366e-4, 5.939466001665);
    ok(isequalRel(rets.shift(), -3.433831630345e-1, TOL));
    ok(isequalRel(rets.shift(), 5.94013812861, TOL));

    rets = newtonnu(5.727401464106e-4, 1.971189384963);
    ok(isequalRel(rets.shift(), 1.97066188515, TOL));
    ok(isequalRel(rets.shift(), 1.970134326561, TOL));

    rets = newtonnu(1.069219642677e-3, 3.056861482628);
    ok(isequalRel(rets.shift(), 3.056770946507, TOL));
    ok(isequalRel(rets.shift(), 3.056680362185, TOL));

    rets = newtonnu(1.376351918738e-3, 3.159198185783);
    ok(isequalRel(rets.shift(), -3.123962874545, TOL));
    ok(isequalRel(rets.shift(), 3.159246696158, TOL));

    rets = newtonnu(1.294617565144e-3, 5.288416964379);
    ok(isequalRel(rets.shift(), -9.936830163633e-1, TOL));
    ok(isequalRel(rets.shift(), 5.290587233593, TOL));

    rets = newtonnu(1.504204024512e-3, 9.807516430894e-1);
    ok(isequalRel(rets.shift(), 9.795022984388e-1, TOL));
    ok(isequalRel(rets.shift(), 9.782534781184e-1, TOL));

    rets = newtonnu(1.6440445841e-3, 3.255122645661);
    ok(isequalRel(rets.shift(), -3.027876261481, TOL));
    ok(isequalRel(rets.shift(), 3.255495597846, TOL));

    rets = newtonnu(4.134101163345e-4, 3.376722047172);
    ok(isequalRel(rets.shift(), -2.906366928972, TOL));
    ok(isequalRel(rets.shift(), 3.376914728603, TOL));

    rets = newtonnu(1.425465157565e-3, 2.974557517523);
    ok(isequalRel(rets.shift(), 2.974320353619, TOL));
    ok(isequalRel(rets.shift(), 2.974083023159, TOL));
    // *** error: t:= 1560.000000 *** code =   1
    // 28623

    rets = newtonnu(6.253749953957e-1, 4.416709793252);
    ok(isequalRel(rets.shift(), -1.150086158832, TOL));
    ok(isequalRel(rets.shift(), 5.703940901115, TOL));

    rets = newtonnu(6.252060714442e-1, 2.531984598019);
    ok(isequalRel(rets.shift(), 1.981646449199, TOL));
    ok(isequalRel(rets.shift(), 1.408469011228, TOL));

    rets = newtonnu(6.249787437426e-1, 3.217306037618);
    ok(isequalRel(rets.shift(), -2.984238326928, TOL));
    ok(isequalRel(rets.shift(), 3.396884756261, TOL));

    rets = newtonnu(6.251022227779e-1, 4.076040856151);
    ok(isequalRel(rets.shift(), -1.521709521421, TOL));
    ok(isequalRel(rets.shift(), 5.385825063318, TOL));

    rets = newtonnu(6.250011839676e-1, 2.350737456572);
    ok(isequalRel(rets.shift(), 1.710842920648, TOL));
    ok(isequalRel(rets.shift(), 1.091960814968, TOL));

    rets = newtonnu(6.247306804556e-1, 3.123949627337);
    ok(isequalRel(rets.shift(), 3.104885159496, TOL));
    ok(isequalRel(rets.shift(), 3.08195801137, TOL));

    rets = newtonnu(6.24804125772e-1, 3.858943902046);
    ok(isequalRel(rets.shift(), -1.816555642639, TOL));
    ok(isequalRel(rets.shift(), 5.072660218557, TOL));

    rets = newtonnu(6.247830071695e-1, 2.100922125379);
    ok(isequalRel(rets.shift(), 1.395741968258, TOL));
    ok(isequalRel(rets.shift(), 7.805074740614e-1, TOL));

    rets = newtonnu(6.244905477618e-1, 3.031490045493);
    ok(isequalRel(rets.shift(), 2.913351627055, TOL));
    ok(isequalRel(rets.shift(), 2.772051574029, TOL));

    rets = newtonnu(6.245071111651e-1, 3.699088170812);
    ok(isequalRel(rets.shift(), -2.067695498498, TOL));
    ok(isequalRel(rets.shift(), 4.764472125349, TOL));

    rets = newtonnu(6.245202261218e-1, 1.697545348109);
    ok(isequalRel(rets.shift(), 9.99403186358e-1, TOL));
    ok(isequalRel(rets.shift(), 4.740890128887e-1, TOL));

    rets = newtonnu(6.242578356432e-1, 2.937315397418);
    ok(isequalRel(rets.shift(), 2.721671031936, TOL));
    ok(isequalRel(rets.shift(), 2.467168050717, TOL));
    // 28626

    rets = newtonnu(5.248254601406e-5, 6.922562299435e-1);
    ok(isequalRel(rets.shift(), 6.92222732288e-1, TOL));
    ok(isequalRel(rets.shift(), 6.921892353092e-1, TOL));

    rets = newtonnu(3.81131444285e-5, 9.132128511527e-1);
    ok(isequalRel(rets.shift(), 9.131826860351e-1, TOL));
    ok(isequalRel(rets.shift(), 9.131525212689e-1, TOL));

    rets = newtonnu(2.128915564641e-5, 1.073151733387);
    ok(isequalRel(rets.shift(), 1.073133026501, TOL));
    ok(isequalRel(rets.shift(), 1.073114319711, TOL));

    rets = newtonnu(5.049959995073e-6, 4.527199825854e-1);
    ok(isequalRel(rets.shift(), 4.527177736717e-1, TOL));
    ok(isequalRel(rets.shift(), 4.52715564763e-1, TOL));

    rets = newtonnu(1.687344340959e-5, 5.20268475793);
    ok(isequalRel(rets.shift(), -1.080485663665, TOL));
    ok(isequalRel(rets.shift(), 5.20271452904, TOL));

    rets = newtonnu(3.407549879677e-5, 5.320193939209);
    ok(isequalRel(rets.shift(), -9.629633955461e-1, TOL));
    ok(isequalRel(rets.shift(), 5.320249883786, TOL));

    rets = newtonnu(4.918143532648e-5, 5.533109643824);
    ok(isequalRel(rets.shift(), -7.500421372633e-1, TOL));
    ok(isequalRel(rets.shift(), 5.533176695405, TOL));

    rets = newtonnu(6.098391755986e-5, 5.767930670346);
    ok(isequalRel(rets.shift(), -5.152245874123e-1, TOL));
    ok(isequalRel(rets.shift(), 5.767990768391, TOL));

    rets = newtonnu(6.864105801929e-5, 6.010623465194);
    ok(isequalRel(rets.shift(), -2.72543364452e-1, TOL));
    ok(isequalRel(rets.shift(), 6.010660419651, TOL));

    rets = newtonnu(7.161768038708e-5, 6.25627830862);
    ok(isequalRel(rets.shift(), -2.690507184454e-2, TOL));
    ok(isequalRel(rets.shift(), 6.256282161981, TOL));

    rets = newtonnu(6.970674633954e-5, 2.190182011693e-1);
    ok(isequalRel(rets.shift(), 2.190030564033e-1, TOL));
    ok(isequalRel(rets.shift(), 2.189879121526e-1, TOL));

    rets = newtonnu(6.304075253192e-5, 4.626913229175e-1);
    ok(isequalRel(rets.shift(), 4.626631849629e-1, TOL));
    ok(isequalRel(rets.shift(), 4.626350478021e-1, TOL));
    // 28872

    rets = newtonnu(2.889098117477e-2, 2.349904176644);
    ok(isequalRel(rets.shift(), 2.329132639724, TOL));
    ok(isequalRel(rets.shift(), 2.30815833179, TOL));

    rets = newtonnu(2.937401546552e-2, 2.713880114471);
    ok(isequalRel(rets.shift(), 2.701528475405, TOL));
    ok(isequalRel(rets.shift(), 2.689015217385, TOL));

    rets = newtonnu(3.032088778104e-2, 3.052341460815);
    ok(isequalRel(rets.shift(), 3.04959680289, TOL));
    ok(isequalRel(rets.shift(), 3.046811339913, TOL));

    rets = newtonnu(3.090121129435e-2, 3.3650745157);
    ok(isequalRel(rets.shift(), -2.911155853618, TOL));
    ok(isequalRel(rets.shift(), 3.379087376721, TOL));

    rets = newtonnu(3.056806871265e-2, 3.674123865722);
    ok(isequalRel(rets.shift(), -2.593331067741, TOL));
    ok(isequalRel(rets.shift(), 3.705786451326, TOL));

    rets = newtonnu(2.949282059374e-2, 4.007195184999);
    ok(isequalRel(rets.shift(), -2.253311008563, TOL));
    ok(isequalRel(rets.shift(), 4.052760404378, TOL));

    rets = newtonnu(2.848177036626e-2, 4.378339757688);
    ok(isequalRel(rets.shift(), -1.877808093262, TOL));
    ok(isequalRel(rets.shift(), 4.432527202422, TOL));

    rets = newtonnu(2.828803260517e-2, 4.770266516375);
    ok(isequalRel(rets.shift(), -1.484697441886, TOL));
    ok(isequalRel(rets.shift(), 4.826671112807, TOL));

    rets = newtonnu(2.874720882759e-2, 5.14825714793);
    ok(isequalRel(rets.shift(), -1.109022019444, TOL));
    ok(isequalRel(rets.shift(), 5.19989961128, TOL));

    rets = newtonnu(2.890618727506e-2, 5.502142827149);
    ok(isequalRel(rets.shift(), -7.608952181292e-1, TOL));
    ok(isequalRel(rets.shift(), 5.542222930208, TOL));
    // 29141

    rets = newtonnu(2.790767404911e-3, 3.251142425279);
    ok(isequalRel(rets.shift(), -3.031737340732, TOL));
    ok(isequalRel(rets.shift(), 3.2517539308, TOL));

    rets = newtonnu(9.673528490398e-4, 4.561928014795);
    ok(isequalRel(rets.shift(), -1.720300799107, TOL));
    ok(isequalRel(rets.shift(), 4.563841070107, TOL));

    rets = newtonnu(1.73050211328e-3, 4.292054198164);
    ok(isequalRel(rets.shift(), -1.989550684125, TOL));
    ok(isequalRel(rets.shift(), 4.295215603132, TOL));

    rets = newtonnu(6.565785196579e-4, 1.17450552079);
    ok(isequalRel(rets.shift(), 1.173899904405, TOL));
    ok(isequalRel(rets.shift(), 1.17329436492, TOL));

    rets = newtonnu(9.42231083173e-4, 3.281054437973);
    ok(isequalRel(rets.shift(), -3.001999828363, TOL));
    ok(isequalRel(rets.shift(), 3.281316580767, TOL));

    rets = newtonnu(2.144810920918e-3, 3.350101125732);
    ok(isequalRel(rets.shift(), -2.932639736833, TOL));
    ok(isequalRel(rets.shift(), 3.350990480714, TOL));

    rets = newtonnu(1.665931398776e-3, 4.94857899254);
    ok(isequalRel(rets.shift(), -1.332986950083, TOL));
    ok(isequalRel(rets.shift(), 4.951817403123, TOL));

    rets = newtonnu(9.87576619207e-4, 3.497936105017);
    ok(isequalRel(rets.shift(), -2.784904526737, TOL));
    ok(isequalRel(rets.shift(), 3.498625615272, TOL));

    rets = newtonnu(7.652547772083e-4, 5.136350963792e-1);
    ok(isequalRel(rets.shift(), 5.132592163169e-1, TOL));
    ok(isequalRel(rets.shift(), 5.128834615956e-1, TOL));

    rets = newtonnu(2.756546056247e-3, 3.277422958907);
    ok(isequalRel(rets.shift(), -3.005388564923, TOL));
    ok(isequalRel(rets.shift(), 3.278171035304, TOL));

    rets = newtonnu(9.564899889534e-4, 4.818615885002);
    ok(isequalRel(rets.shift(), -1.463618371786, TOL));
    ok(isequalRel(rets.shift(), 4.820517936984, TOL));

    rets = newtonnu(1.59162569576e-3, 4.204475559285);
    ok(isequalRel(rets.shift(), -2.07731850794, TOL));
    ok(isequalRel(rets.shift(), 4.207258575667, TOL));

    rets = newtonnu(7.411286038596e-4, 1.071156580722);
    ok(isequalRel(rets.shift(), 1.07050616663, TOL));
    ok(isequalRel(rets.shift(), 1.069855868217, TOL));

    rets = newtonnu(1.256333636802e-3, 3.375274995895);
    ok(isequalRel(rets.shift(), -2.907619214981, TOL));
    ok(isequalRel(rets.shift(), 3.375857366264, TOL));

    rets = newtonnu(1.617052197068e-3, 3.441373946322);
    ok(isequalRel(rets.shift(), -2.841333457667, TOL));
    ok(isequalRel(rets.shift(), 3.442330121509, TOL));

    rets = newtonnu(1.608021315605e-3, 4.932554834367);
    ok(isequalRel(rets.shift(), -1.34906154193, TOL));
    ok(isequalRel(rets.shift(), 4.935692418022, TOL));

    rets = newtonnu(6.936464890584e-4, 2.967513492439);
    ok(isequalRel(rets.shift(), 2.967393310906, TOL));
    ok(isequalRel(rets.shift(), 2.967273088337, TOL));

    rets = newtonnu(3.737073375169e-4, 1.528744208093e-1);
    ok(isequalRel(rets.shift(), 1.528175232903e-1, TOL));
    ok(isequalRel(rets.shift(), 1.527606362809e-1, TOL));

    rets = newtonnu(2.600353921139e-3, 3.269362202321);
    ok(isequalRel(rets.shift(), -3.013491333661, TOL));
    ok(isequalRel(rets.shift(), 3.270026171986, TOL));

    rets = newtonnu(1.475769388942e-3, 5.364426811137);
    ok(isequalRel(rets.shift(), -9.175860068807e-1, TOL));
    ok(isequalRel(rets.shift(), 5.366771263164, TOL));

    rets = newtonnu(1.228058368261e-3, 3.595052659694);
    ok(isequalRel(rets.shift(), -2.687594364238, TOL));
    ok(isequalRel(rets.shift(), 3.596129523039, TOL));
    // *** error: t:= 440.000000 *** code =   6
    // 29238

    rets = newtonnu(2.085614589579e-2, 3.856684162202e-1);
    ok(isequalRel(rets.shift(), 3.77897063609e-1, TOL));
    ok(isequalRel(rets.shift(), 3.702018396986e-1, TOL));

    rets = newtonnu(2.083554807806e-2, 2.353467440563);
    ok(isequalRel(rets.shift(), 2.338583676235, TOL));
    ok(isequalRel(rets.shift(), 2.323593557526, TOL));

    rets = newtonnu(2.052397602446e-2, 4.25885985293);
    ok(isequalRel(rets.shift(), -2.005791564012, TOL));
    ok(isequalRel(rets.shift(), 4.296006363366, TOL));

    rets = newtonnu(2.032137735504e-2, 6.229835386726);
    ok(isequalRel(rets.shift(), -5.227706556589e-2, TOL));
    ok(isequalRel(rets.shift(), 6.231970099779, TOL));

    rets = newtonnu(2.049475083034e-2, 1.928906360214);
    ok(isequalRel(rets.shift(), 1.909641151699, TOL));
    ok(isequalRel(rets.shift(), 1.890311747313, TOL));

    rets = newtonnu(2.054653257801e-2, 3.837856027087);
    ok(isequalRel(rets.shift(), -2.432045742682, TOL));
    ok(isequalRel(rets.shift(), 3.864525427033, TOL));

    rets = newtonnu(2.049969994571e-2, 5.795730699433);
    ok(isequalRel(rets.shift(), -4.779382424385e-1, TOL));
    ok(isequalRel(rets.shift(), 5.814675889982, TOL));

    rets = newtonnu(2.075906782496e-2, 1.512897595518);
    ok(isequalRel(rets.shift(), 1.492184263057, TOL));
    ok(isequalRel(rets.shift(), 1.471489306236, TOL));

    rets = newtonnu(2.098690457849e-2, 3.446394713721);
    ok(isequalRel(rets.shift(), -2.830427963887, TOL));
    ok(isequalRel(rets.shift(), 3.459182853549, TOL));

    rets = newtonnu(2.095331036873e-2, 5.40029542221);
    ok(isequalRel(rets.shift(), -8.66807402088e-1, TOL));
    ok(isequalRel(rets.shift(), 5.432349908996, TOL));

    rets = newtonnu(2.111864606986e-2, 1.128396722726);
    ok(isequalRel(rets.shift(), 1.1093955835, TOL));
    ok(isequalRel(rets.shift(), 1.09048531929, TOL));

    rets = newtonnu(2.122432630575e-2, 3.087220305974);
    ok(isequalRel(rets.shift(), 3.08605437207, TOL));
    ok(isequalRel(rets.shift(), 3.08487621535, TOL));
    // 88888

    rets = newtonnu(1.05209280726e-2, 3.847874084449);
    ok(isequalRel(rets.shift(), -2.428455442886, TOL));
    ok(isequalRel(rets.shift(), 3.861612757496, TOL));

    rets = newtonnu(9.052250412713e-3, 6.046148101654);
    ok(isequalRel(rets.shift(), -2.349207912162e-1, TOL));
    ok(isequalRel(rets.shift(), 6.050371571658, TOL));

    rets = newtonnu(9.521189153082e-3, 1.914091192733);
    ok(isequalRel(rets.shift(), 1.905111024903, TOL));
    ok(isequalRel(rets.shift(), 1.896116972636, TOL));

    rets = newtonnu(1.028277032065e-2, 3.931537311526);
    ok(isequalRel(rets.shift(), -2.344317306241, TOL));
    ok(isequalRel(rets.shift(), 3.946224861887, TOL));

    rets = newtonnu(8.796150676142e-3, 6.142192224381);
    ok(isequalRel(rets.shift(), -1.397623268963e-1, TOL));
    ok(isequalRel(rets.shift(), 6.144648352357, TOL));

    rets = newtonnu(9.370681122593e-3, 2.002708132273);
    ok(isequalRel(rets.shift(), 1.994181128036, TOL));
    ok(isequalRel(rets.shift(), 1.985637845032, TOL));

    rets = newtonnu(1.003138852591e-2, 4.020955344172);
    ok(isequalRel(rets.shift(), -2.254477506419, TOL));
    ok(isequalRel(rets.shift(), 4.036484662356, TOL));

    rets = newtonnu(8.547559047484e-3, 6.245283000327);
    ok(isequalRel(rets.shift(), -3.757978372458e-2, TOL));
    ok(isequalRel(rets.shift(), 6.245926663275, TOL));

    rets = newtonnu(9.228920995253e-3, 2.096871623755);
    ok(isequalRel(rets.shift(), 2.088871932006, TOL));
    ok(isequalRel(rets.shift(), 2.080854087559, TOL));

    rets = newtonnu(9.779525182704e-3, 4.1166850118);
    ok(isequalRel(rets.shift(), -2.158382836358, TOL));
    ok(isequalRel(rets.shift(), 4.132941784111, TOL));

    rets = newtonnu(8.322461617424e-3, 7.247449604514e-2);
    ok(isequalRel(rets.shift(), 7.187433818701e-2, TOL));
    ok(isequalRel(rets.shift(), 7.127668165083e-2, TOL));

    rets = newtonnu(9.108405326374e-3, 2.196448877477);
    ok(isequalRel(rets.shift(), 2.189045911904, TOL));
    ok(isequalRel(rets.shift(), 2.181623524669, TOL));
});
