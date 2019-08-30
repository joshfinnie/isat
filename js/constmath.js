// ------------------------------------------------------------------------------
//
//                           function constmath
//
//  this function sets constants for mathematical operations.
//
//  author        : david vallado                  719-573-2600    2 apr 2007
//
//  revisions
//
//  inputs        : description                    range / units
//    none
//
//  outputs       :
//    rad, twopi, halfpi;
//    ft2m, mile2m, nm2m, mile2ft, mileph2kmph, nmph2kmph;
//
//  locals        :
//                -
//
//  coupling      :
//    none.
//
// constmath;
// ------------------------------------------------------------------------------

export const small = 0.00000001;

export const infinite = 999999.9;
export const UNDEFINED = 999999.1; // lowercase is JavaScript reserved word

// -------------------------  mathematical  --------------------
export const rad = 180.0 / Math.PI;
export const twopi = 2.0 * Math.PI;
export const halfpi = Math.PI * 0.5;

// -------------------------  conversions  ---------------------
export const ft2m = 0.3048;
export const mile2m = 1609.344;
export const nm2m = 1852;
export const mile2ft = 5280;
export const mileph2kmph = 0.44704;
export const nmph2kmph = 0.5144444;
