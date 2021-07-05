"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = exports.getPowTen = exports.bytesInInteger = void 0;
/**
 * Returns how many bytes in the
 * number
 *
 * @export
 * @param {number} num
 * @returns {number | Error}
 */
function bytesInInteger(num) {
    if (typeof num !== 'number') {
        return Error('The argument must be a number');
    }
    if (!Number.isInteger(num)) {
        return Error('The number must be an integer');
    }
    if (num <= 255) {
        return 1;
    }
    else if (num <= 4294967295) {
        return 4;
    }
    return 8;
}
exports.bytesInInteger = bytesInInteger;
/**
 * Return ten to the power memoized
 * to reduce number of calculations.
 *
 * @param {number} power - power of 10
 * @returns {number} - Math.pow(10, power)
 */
var getPowTen = function (power) {
    return Math.pow(10, power);
};
exports.getPowTen = getPowTen;
/**
 * Round a number to a required precision.
 *
 * @param {number} num - a number to round
 * @param {number} precision - count of digits after floating point
 * @returns {number} - the number rounding to precision required
 */
var round = function (num, precision) {
    var mult = exports.getPowTen(precision);
    return Math.round((num + Number.EPSILON) * mult) / mult;
};
exports.round = round;
//# sourceMappingURL=common-utils-number.js.map