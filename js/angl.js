import { mag } from "./mag.js";
import { dot } from "./math_utils.js";

// this function calculates the angle between two vectors.  the output is
// set to 999999.1 to indicate an undefined value.  be sure to check for
// this at the output phase.
//
// [theta] = angl ( vec1,vec2 );
// -----------------------------------------------------------------------------

function angl(vec1, vec2) {
    const SMALL = 0.00000001,
        UNDEFINED = 999999.1,
        magv1 = mag(vec1),
        magv2 = mag(vec2);
    let temp, theta;

    if (magv1 * magv2 > SMALL * SMALL) {
        temp = dot(vec1, vec2) / (magv1 * magv2);
        if (Math.abs(temp) > 1.0) {
            temp = Math.sign(temp);
        }
        theta = Math.acos(temp);
    } else {
        theta = UNDEFINED;
    }
    return theta;
}

export { angl };
