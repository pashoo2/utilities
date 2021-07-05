/**
 * Returns how many bytes in the
 * number
 *
 * @export
 * @param {number} num
 * @returns {number | Error}
 */
export declare function bytesInInteger(num: number): number | Error;
/**
 * Return ten to the power memoized
 * to reduce number of calculations.
 *
 * @param {number} power - power of 10
 * @returns {number} - Math.pow(10, power)
 */
export declare const getPowTen: (power: number) => number;
/**
 * Round a number to a required precision.
 *
 * @param {number} num - a number to round
 * @param {number} precision - count of digits after floating point
 * @returns {number} - the number rounding to precision required
 */
export declare const round: (num: number, precision: number) => number;
