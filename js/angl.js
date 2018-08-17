/*global mag: true, dot: true, sign: true
 */
// this function calculates the angle between two vectors.  the output is
// set to 999999.1 to indicate an undefined value.  be sure to check for
// this at the output phase.
//
// [theta] = angl ( vec1,vec2 );
// -----------------------------------------------------------------------------
import mag from './mag';
import { dot } from './math_utils';

export default function angl(vec1, vec2) {
    const SMALL = 0.00000001;
    const UNDEFINED = 999999.1;
    const magv1 = mag(vec1);
    const magv2 = mag(vec2);
    let temp;
    let theta = UNDEFINED;

    if (magv1 * magv2 > SMALL * SMALL) {
        temp = dot(vec1, vec2) / (magv1 * magv2);
        if (Math.abs(temp) > 1.0) {
            temp = sign(temp) * 1.0;
        }
        theta = Math.acos(temp);
    }

    return theta;
}
