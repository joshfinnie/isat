/** Satellite record populated by twoline2rv / sgp4init and updated by sgp4. */
export declare class Satrec {
    constructor();
    /** Satellite catalog number */
    satnum: number;
    /** Two-digit epoch year */
    epochyr: number;
    /** Day of year of epoch (fractional) */
    epochdays: number;
    /** Julian date of epoch */
    jdsatepoch: number;

    /** First derivative of mean motion [rad/min²] */
    ndot: number;
    /** Second derivative of mean motion [rad/min³] */
    nddot: number;
    /** BSTAR drag term [1/er] */
    bstar: number;

    /** Eccentricity */
    ecco: number;
    /** Inclination [rad] */
    inclo: number;
    /** Right ascension of ascending node [rad] */
    nodeo: number;
    /** Argument of perigee [rad] */
    argpo: number;
    /** Mean anomaly [rad] */
    mo: number;
    /** Mean motion [rad/min] */
    no: number;

    /** Semi-major axis [er] */
    a: number;
    /** Apogee altitude [er] */
    alta: number;
    /** Perigee altitude [er] */
    altp: number;

    /** Method flag: 'n' = near-earth, 'd' = deep-space */
    method: "n" | "d";
    /** Initialisation flag: 'y' during init, 'n' after */
    init: "y" | "n";
    /** Error code (0 = success) */
    error: number;
    /** Simplified flag (1 = isimp) */
    isimp: number;
    /** Resonance flag */
    irez: number;

    // Near-earth secular coefficients
    aycof: number;
    con41: number;
    cc1: number;
    cc4: number;
    cc5: number;
    d2: number;
    d3: number;
    d4: number;
    delmo: number;
    eta: number;
    argpdot: number;
    omgcof: number;
    sinmao: number;
    t: number;
    t2cof: number;
    t3cof: number;
    t4cof: number;
    t5cof: number;
    x1mth2: number;
    x7thm1: number;
    mdot: number;
    nodedot: number;
    xlcof: number;
    xmcof: number;
    nodecf: number;

    // Deep-space secular rates
    d2201: number;
    d2211: number;
    d3210: number;
    d3222: number;
    d4410: number;
    d4422: number;
    d5220: number;
    d5232: number;
    d5421: number;
    d5433: number;
    dedt: number;
    del1: number;
    del2: number;
    del3: number;
    didt: number;
    dmdt: number;
    dnodt: number;
    domdt: number;

    // Deep-space long-period periodic terms
    e3: number;
    ee2: number;
    peo: number;
    pgho: number;
    pho: number;
    pinco: number;
    plo: number;
    se2: number;
    se3: number;
    sgh2: number;
    sgh3: number;
    sgh4: number;
    sh2: number;
    sh3: number;
    si2: number;
    si3: number;
    sl2: number;
    sl3: number;
    sl4: number;
    xgh2: number;
    xgh3: number;
    xgh4: number;
    xh2: number;
    xh3: number;
    xi2: number;
    xi3: number;
    xl2: number;
    xl3: number;
    xl4: number;

    // Deep-space resonance state
    gsto: number;
    xfact: number;
    xlamo: number;
    zmol: number;
    zmos: number;
    atime: number;
    xli: number;
    xni: number;
}

/** WGS gravity model selector: 721 = WGS-72 low-precision, 72 = WGS-72, 84 = WGS-84 */
export type WhichConst = 721 | 72 | 84;

/**
 * Returns Earth gravity constants for the chosen model.
 * @returns [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2]
 */
export function getgravc(
    whichconst: WhichConst
): [
    tumin: number,
    mu: number,
    radiusearthkm: number,
    xke: number,
    j2: number,
    j3: number,
    j4: number,
    j3oj2: number,
];

/**
 * Parses a two-line element set into a Satrec and runs sgp4init.
 * @param whichconst - Gravity model (721 | 72 | 84)
 * @param longstr1   - TLE line 1
 * @param longstr2   - TLE line 2
 * @param typerun    - 'c' = catalog, 'm' = manual, 'v' = verification
 * @param typeinput  - 'e' = epoch days, 'd' = days from epoch, 'm' = minutes from epoch
 */
export function twoline2rv(
    whichconst: WhichConst,
    longstr1: string,
    longstr2: string,
    typerun: "c" | "m" | "v",
    typeinput: "e" | "d" | "m"
): Satrec;

/**
 * Initializes a Satrec for SGP4 propagation.
 * @param whichconst - Gravity model
 * @param satrec     - Partially-filled satellite record (mutated in place)
 * @param xbstar     - BSTAR drag term
 * @param xecco      - Eccentricity
 * @param epoch      - Epoch (days from 0 Jan 1950)
 * @param xargpo     - Argument of perigee [rad]
 * @param xinclo     - Inclination [rad]
 * @param xmo        - Mean anomaly [rad]
 * @param xno        - Mean motion [rad/min]
 * @param xnodeo     - RAAN [rad]
 * @returns Fully initialised Satrec
 */
export function sgp4init(
    whichconst: WhichConst,
    satrec: Partial<Satrec> | Record<string, unknown>,
    xbstar: number,
    xecco: number,
    epoch: number,
    xargpo: number,
    xinclo: number,
    xmo: number,
    xno: number,
    xnodeo: number
): Satrec;

/** ECI position vector [km, km, km] */
export type Vec3 = [x: number, y: number, z: number];

/**
 * Propagates a satellite to time `tsince` minutes past epoch.
 * @returns [satrec, r, v] — updated record, position [km], velocity [km/s]
 */
export function sgp4(satrec: Satrec, tsince: number): [satrec: Satrec, r: Vec3, v: Vec3];

/**
 * Computes Greenwich Sidereal Time.
 * @param jdut1 - Julian date (UT1)
 * @returns GST [rad]
 */
export function gstime(jdut1: number): number;

/**
 * Converts a calendar date/time to a Julian date.
 * @returns Julian date [days]
 */
export function jday(
    yr: number,
    mon: number,
    day: number,
    hr: number,
    min: number,
    sec: number
): number;

/**
 * Converts a Julian date to calendar date/time.
 * @returns [year, mon, day, hr, min, sec]
 */
export function invjday(
    jd: number
): [year: number, mon: number, day: number, hr: number, min: number, sec: number];

/**
 * Converts day-of-year to month/day/hour/minute/second.
 * @returns [mon, day, hr, minute, sec]
 */
export function days2mdh(
    year: number,
    days: number
): [mon: number, day: number, hr: number, minute: number, sec: number];

/**
 * Converts ECI position/velocity vectors to classical orbital elements.
 * @param r  - Position vector [km]
 * @param v  - Velocity vector [km/s]
 * @param mu - Gravitational parameter [km³/s²]
 * @returns [p, a, ecc, incl, omega, argp, nu, m, arglat, truelon, lonper] all in km or rad;
 *          undefined-valued elements use the library UNDEFINED sentinel for inapplicable cases.
 */
export function rv2coe(
    r: Vec3,
    v: Vec3,
    mu: number
): [
    p: number,
    a: number,
    ecc: number,
    incl: number,
    omega: number,
    argp: number,
    nu: number,
    m: number,
    arglat: number,
    truelon: number,
    lonper: number,
];
