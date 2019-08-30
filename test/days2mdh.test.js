import chai from "chai";
import chaiAlmost from "chai-almost";

chai.use(chaiAlmost(0.00000001));
const expect = chai.expect;

import days2mdh from "../js/days2mdh";

describe("days2mdh", () => {
    it("julian date 2001, 1", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2000, 1);
        expect(mon).to.be.equal(1);
        expect(day).to.be.equal(1);
        expect(hr).to.be.equal(0);
        expect(minute).to.be.equal(0);
        expect(sec).to.be.equal(0);
    });

    it("julian date 2012, 39", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2012, 39);
        expect(mon).to.be.equal(2);
        expect(day).to.be.equal(8);
        expect(hr).to.be.equal(0);
        expect(minute).to.be.equal(0);
        expect(sec).to.be.equal(0);
    });

    it("julian date 2012, 39.015625", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2012, 39.015625);
        expect(mon).to.be.equal(2);
        expect(day).to.be.equal(8);
        expect(hr).to.be.equal(0);
        expect(minute).to.be.equal(22);
        expect(sec).to.be.equal(30);
    });

    it("julian date 2100, 365", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2100, 365);
        expect(mon).to.be.equal(12);
        expect(day).to.be.equal(30);
        expect(hr).to.be.equal(0);
        expect(minute).to.be.equal(0);
        expect(sec).to.be.equal(0);
    });

    // From running octave itmat.m...
    it("2000, 179.784950620000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2000, 179.78495062);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(27);
        expect(hr).to.be.equal(18);
        expect(minute).to.be.equal(50);
        expect(sec).to.be.almost.equal(19.733567999083);
        // 5
    });

    it("2004, 31.910709590000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2004, 31.91070959);
        expect(mon).to.be.equal(1);
        expect(day).to.be.equal(31);
        expect(hr).to.be.equal(21);
        expect(minute).to.be.equal(51);
        expect(sec).to.be.almost.equal(25.308575999977);
        // 4632
    });

    it("2006, 176.824120140000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 176.82412014);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(25);
        expect(hr).to.be.equal(19);
        expect(minute).to.be.equal(46);
        expect(sec).to.be.almost.equal(43.980095999214);
        // 6251
    });

    it("2006, 176.332154440000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 176.33215444);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(25);
        expect(hr).to.be.equal(7);
        expect(minute).to.be.equal(58);
        expect(sec).to.be.almost.equal(18.143616000925);
        // 8195
    });

    it("2006, 176.561574750000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 176.56157475);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(25);
        expect(hr).to.be.equal(13);
        expect(minute).to.be.equal(28);
        expect(sec).to.be.almost.equal(40.058400000471);
        // 9880
    });

    it("2005, 148.794179280000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2005, 148.79417928);
        expect(mon).to.be.equal(5);
        expect(day).to.be.equal(28);
        expect(hr).to.be.equal(19);
        expect(minute).to.be.equal(3);
        expect(sec).to.be.almost.equal(37.089792000752);
        // 9998
    });

    it("1980, 230.296297880000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(1980, 230.29629788);
        expect(mon).to.be.equal(8);
        expect(day).to.be.equal(17);
        expect(hr).to.be.equal(7);
        expect(minute).to.be.equal(6);
        expect(sec).to.be.almost.equal(40.136831999771);
        // 11801
    });

    it("2006, 176.028448930000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 176.02844893);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(25);
        expect(hr).to.be.equal(0);
        expect(minute).to.be.equal(40);
        expect(sec).to.be.almost.equal(57.987551999668);
        // 14128
    });

    it("2006, 151.674157710000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 151.67415771);
        expect(mon).to.be.equal(5);
        expect(day).to.be.equal(31);
        expect(hr).to.be.equal(16);
        expect(minute).to.be.equal(10);
        expect(sec).to.be.almost.equal(47.226144000251);
        // 16925
    });
    //dayofyr=363
    //mon=12 day=29
    //hr=19 minute=0 sec=0.000288

    it("2005, 363.791666670000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2005, 363.79166667);
        expect(mon).to.be.equal(12);
        expect(day).to.be.equal(29);
        expect(hr).to.be.equal(19);
        expect(minute).to.be.equal(0);
        expect(sec).to.be.almost.equal(0.000287998591);
        // 20413
    });

    it("2006, 176.023412440000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 176.02341244);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(25);
        expect(hr).to.be.equal(0);
        expect(minute).to.be.equal(33);
        expect(sec).to.be.almost.equal(42.834815998885);
        // 21897
    });

    it("2006, 94.462359120000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 94.46235912);
        expect(mon).to.be.equal(4);
        expect(day).to.be.equal(4);
        expect(hr).to.be.equal(11);
        expect(minute).to.be.equal(5);
        expect(sec).to.be.almost.equal(47.827968000183);
        // 22312
    });
    // *** error: t:= 494.202867 *** code =   1

    it("2006, 176.559091070000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 176.55909107);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(25);
        expect(hr).to.be.equal(13);
        expect(minute).to.be.equal(25);
        expect(sec).to.be.almost.equal(5.468447999465);
        // 22674
    });

    it("2006, 175.457520520000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 175.45752052);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(24);
        expect(hr).to.be.equal(10);
        expect(minute).to.be.equal(58);
        expect(sec).to.be.almost.equal(49.772928000239);
        // 23177
    });

    it("1994, 305.499999990000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(1994, 305.49999999);
        expect(mon).to.be.equal(11);
        expect(day).to.be.equal(1);
        expect(hr).to.be.equal(11);
        expect(minute).to.be.equal(59);
        expect(sec).to.be.almost.equal(59.999135999315);
        // 23333
    });

    it("2006, 171.765354630000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 171.76535463);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(20);
        expect(hr).to.be.equal(18);
        expect(minute).to.be.equal(22);
        expect(sec).to.be.almost.equal(6.640031999159);
        // 23599
    });

    it("2006, 177.040617400000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 177.0406174);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(26);
        expect(hr).to.be.equal(0);
        expect(minute).to.be.equal(58);
        expect(sec).to.be.almost.equal(29.343360000184);
        // 24208
    });

    it("2004, 39.680572850000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2004, 39.68057285);
        expect(mon).to.be.equal(2);
        expect(day).to.be.equal(8);
        expect(hr).to.be.equal(16);
        expect(minute).to.be.equal(20);
        expect(sec).to.be.almost.equal(1.494239999761);
        // 25954
    });

    it("2006, 106.745032470000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 106.74503247);
        expect(mon).to.be.equal(4);
        expect(day).to.be.equal(16);
        expect(hr).to.be.equal(17);
        expect(minute).to.be.equal(52);
        expect(sec).to.be.almost.equal(50.805407999842);
        // 26900
    });

    it("2006, 174.858188710000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 174.85818871);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(23);
        expect(hr).to.be.equal(20);
        expect(minute).to.be.equal(35);
        expect(sec).to.be.almost.equal(47.50454400064);
        // 26975
    });

    it("2006, 177.786158330000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 177.78615833);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(26);
        expect(hr).to.be.equal(18);
        expect(minute).to.be.equal(52);
        expect(sec).to.be.almost.equal(4.079712000548);
        // 28057
    });

    it("2006, 175.570711360000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 175.57071136);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(24);
        expect(hr).to.be.equal(13);
        expect(minute).to.be.equal(41);
        expect(sec).to.be.almost.equal(49.461503999137);
        // 28129
    });

    it("2006, 167.217886660000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 167.21788666);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(16);
        expect(hr).to.be.equal(5);
        expect(minute).to.be.equal(13);
        expect(sec).to.be.almost.equal(45.407424000423);
        // 28350
    });
    // *** error: t:= 1560.000000 *** code =   1

    it("2006, 177.810791840000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 177.81079184);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(26);
        expect(hr).to.be.equal(19);
        expect(minute).to.be.equal(27);
        expect(sec).to.be.almost.equal(32.414976000637);
        // 28623
    });

    it("2006, 176.466833970000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 176.46683397);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(25);
        expect(hr).to.be.equal(11);
        expect(minute).to.be.equal(12);
        expect(sec).to.be.almost.equal(14.455008000896);
        // 28626
    });

    it("2005, 333.020126610000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2005, 333.02012661);
        expect(mon).to.be.equal(11);
        expect(day).to.be.equal(29);
        expect(hr).to.be.equal(0);
        expect(minute).to.be.equal(28);
        expect(sec).to.be.almost.equal(58.939103998018);
        // 28872
    });

    it("2006, 170.267838450000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 170.26783845);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(19);
        expect(hr).to.be.equal(6);
        expect(minute).to.be.equal(25);
        expect(sec).to.be.almost.equal(41.242079999938);
        // 29141
    });
    // *** error: t:= 440.000000 *** code =   6

    it("2006, 177.287320100000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(2006, 177.2873201);
        expect(mon).to.be.equal(6);
        expect(day).to.be.equal(26);
        expect(hr).to.be.equal(6);
        expect(minute).to.be.equal(53);
        expect(sec).to.be.almost.equal(44.456639998971);
        // 29238
    });

    it("1980, 275.987084650000", function() {
        let [mon, day, hr, minute, sec] = days2mdh(1980, 275.98708465);
        expect(mon).to.be.equal(10);
        expect(day).to.be.equal(1);
        expect(hr).to.be.equal(23);
        expect(minute).to.be.equal(41);
        expect(sec).to.be.almost.equal(24.113759998763);
        // 88888
    });
});
