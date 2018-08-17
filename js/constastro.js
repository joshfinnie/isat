/*global nm2m: true, ft2m: true, // from constmath
*/

// ------------------------------------------------------------------------------
//
//                           function constastro
//
//  this function sets constants for various astrodynamic operations. 
//
//  author        : david vallado                  719-573-2600    2 apr 2007
//
//  revisions
//
//  inputs        : description                    range / units
//    none
//
//  outputs       :
//    re, flat, omegaearth, mu;
//    eccearth, eccearthsqrd;
//    renm, reft, tusec, tumin, tuday, omegaearthradptu, omegaearthradpmin;
//    velkmps, velftps, velradpmin;
//    degpsec, radpday;
//    speedoflight, au, earth2moon, moonradius, sunradius;
//
//  locals        :
//                -
//
//  coupling      :
//    none.
//
// constastro;
// ------------------------------------------------------------------------------

import {ft2m, nm2m} from './constmath';

// -----------------------  physical constants  ----------------
// WGS-84/EGM-96 constants used here
export const re = 6378.137;         // km
export const flat = 1.0 / 298.257223563;
export const omegaearth = 7.292115e-11;     // rad/s
export const mu = 398600.4418;      // km3/s2
export const mum = 3.986004418e14;   // m3/s2

// derived constants from the base values
export const eccearth = Math.sqrt(2.0 * flat - flat * flat);
export const eccearthsqrd = eccearth * eccearth;

export const renm = re / nm2m;
export const reft = re * 1000.0 / ft2m;

export const tusec = Math.sqrt(Math.pow(re, 3) / mu);
export const tumin = tusec / 60.0;
export const tuday = tusec / 86400.0;

export const omegaearthradptu  = omegaearth * tusec;
export const omegaearthradpmin = omegaearth * 60.0;

export const velkmps = Math.sqrt(mu / re);
export const velftps = velkmps * 1000.0 / ft2m;
export const velradpmin = velkmps * 60.0 / re;
//for afspc
//velkmps1 = velradpmin*6378.135/60.0   7.90537051051763
//mu1 = velkmps*velkmps*6378.135        3.986003602567418e+005
export const degpsec = (180.0 / Math.PI) / tusec;
export const radpday = 2.0 * Math.PI * 1.002737909350795;

export const speedoflight = 2.99792458e8; // m/s
export const au = 149597870.0;      // km
export const earth2moon = 384400.0; // km
export const moonradius =   1738.0; // km
export const sunradius = 696000.0; // km

export const masssun = 1.9891e30;
export const massearth = 5.9742e24;
export const massmoon = 7.3483e22;
