"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonUtilsArrayUniq = exports.commonUtilsArrayDefinedOnly = exports.commonUtilsArrayIncludesAll = exports.commonUtilsArrayCalculateLengthOfIntegerArray = exports.commonUtilsArrayDoCallbackTillNoError = exports.commonUtilsArrayDeleteFromArray = exports.commonUtilsArrayOrderByDec = exports.commonUtilsArrayOrderByDecComparationFunction = exports.commonUtilsAreAllArraysEqualOrNotDefined = exports.commonUtilsReturnArrayIfTwoArraysEqualsOrNotDefinedAndReturnArrayIfEquals = exports.commonUtilsReturnArrayIfTwoArraysEquals = exports.isArraysSwallowEqual = exports.isArraysUnsortedSwallowEqual = exports.commonUtilsIsArray = void 0;
var common_utils_number_1 = require("./common-utils-number");
var common_utils_main_1 = require("./common-utils-main");
/**
 * Whether a value is an array or not.
 *
 * @param {unknown} a
 * @returns {a is Array<unknown>}
 */
var commonUtilsIsArray = function (a) {
    return a instanceof Array || Array.isArray(a);
};
exports.commonUtilsIsArray = commonUtilsIsArray;
/**
 * Checks whether two array items are equal
 *
 * @param {Array<any>} firstArray
 * @param {Array<any>} secondArray
 * @returns {boolean}
 */
var isArraysUnsortedSwallowEqual = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    return array1.every(function (item) { return array2.includes(item); });
};
exports.isArraysUnsortedSwallowEqual = isArraysUnsortedSwallowEqual;
/**
 * Checks whether two arrays have the same items.
 * Order doesn't matter.
 *
 * @param {Array<any>} firstArray
 * @param {Array<any>} secondArray
 * @returns {boolean}
 */
var isArraysSwallowEqual = function (firstArray, secondArray) {
    if (firstArray === secondArray) {
        return true;
    }
    return exports.isArraysUnsortedSwallowEqual(firstArray, secondArray);
};
exports.isArraysSwallowEqual = isArraysSwallowEqual;
/**
 * Checks whether two items are arrays and the two array items are equal and all items in the same order and return the second
 * one if equals.
 * Returns the second array if two arrays are equal or returns false otherwise.
 *
 * @template S
 * @template F
 * @param {F} firstArray
 * @param {S} secondArray
 * @returns {S | false}
 */
var commonUtilsReturnArrayIfTwoArraysEquals = function (firstArray, secondArray) {
    return exports.commonUtilsIsArray(firstArray) &&
        exports.commonUtilsIsArray(secondArray) &&
        exports.isArraysSwallowEqual(firstArray, secondArray);
};
exports.commonUtilsReturnArrayIfTwoArraysEquals = commonUtilsReturnArrayIfTwoArraysEquals;
/**
 * .
 *
 * @template S
 * @template F
 * @param {F} firstArray
 * @param {S} secondArray
 * @returns {S | false}
 */
var commonUtilsReturnArrayIfTwoArraysEqualsOrNotDefinedAndReturnArrayIfEquals = function (firstArray, secondArray) {
    if (!firstArray && !secondArray) {
        return secondArray;
    }
    if (exports.commonUtilsReturnArrayIfTwoArraysEquals(firstArray, secondArray)) {
        return secondArray;
    }
    return false;
};
exports.commonUtilsReturnArrayIfTwoArraysEqualsOrNotDefinedAndReturnArrayIfEquals = commonUtilsReturnArrayIfTwoArraysEqualsOrNotDefinedAndReturnArrayIfEquals;
/**
 * Checks whether all arrays has the same items in the same order
 * or undefined or null.
 *
 * @param {...Array<Array<any>>} arrays
 * @returns {boolean}
 */
var commonUtilsAreAllArraysEqualOrNotDefined = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    if (!arrays.length) {
        return true;
    }
    if (arrays.length === 1) {
        return true;
    }
    return !!arrays.reduce(exports.commonUtilsReturnArrayIfTwoArraysEquals, arrays[0]);
};
exports.commonUtilsAreAllArraysEqualOrNotDefined = commonUtilsAreAllArraysEqualOrNotDefined;
var commonUtilsArrayOrderByDecComparationFunction = function (a, b) { return Number(b) - Number(a); };
exports.commonUtilsArrayOrderByDecComparationFunction = commonUtilsArrayOrderByDecComparationFunction;
/**
 * sort array by decreasing
 * value on increased index
 * @param {any[]} arr
 */
var commonUtilsArrayOrderByDec = function (arr) {
    return arr.sort(exports.commonUtilsArrayOrderByDecComparationFunction);
};
exports.commonUtilsArrayOrderByDec = commonUtilsArrayOrderByDec;
/**
 * delete an item from the array
 * @param {Array} arr
 * @param {any} item
 */
var commonUtilsArrayDeleteFromArray = function (arr, item) {
    if (arr instanceof Array && arr.length) {
        var idxOfItem = arr.findIndex(function (el) { return el === item; });
        if (idxOfItem !== -1) {
            arr.splice(idxOfItem, 1);
        }
    }
};
exports.commonUtilsArrayDeleteFromArray = commonUtilsArrayDeleteFromArray;
/**
 * call a callback function for an each item in the
 * array till the result is not an intstance of the
 * Error. If any callback resulted with an Error
 * then the execution will break.
 */
var commonUtilsArrayDoCallbackTillNoError = function (arr, cb) {
    if (!(arr instanceof Array)) {
        return new Error('The array value must be an instance of Array');
    }
    var len = arr.length;
    var idx = 0;
    var r;
    for (; idx < len; idx += 1) {
        r = cb(arr[idx]);
        if (r instanceof Error) {
            return r;
        }
    }
};
exports.commonUtilsArrayDoCallbackTillNoError = commonUtilsArrayDoCallbackTillNoError;
/**
 * calculate the overall lenght
 * of the numeric array in bytes
 * @param {number[]} arr
 * @param {number} [maxNumber] - maximum value of the valid number
 * @param {number} [minNumber] - minimum value of the valid number
 * @returns {number | Error} - return a length of the array or an Error
 * if a non-finite or an unsafe number will be met
 */
var commonUtilsArrayCalculateLengthOfIntegerArray = function (arr, maxNumber, minNumber) {
    if (!(arr instanceof Array)) {
        return new Error('The array value must be an instance of Array');
    }
    var maxNumberRes = typeof maxNumber === 'number' ? maxNumber : Number.MAX_SAFE_INTEGER;
    var minNumberRes = typeof minNumber === 'number' ? minNumber : 0;
    var len = arr.length;
    var idx = 0;
    var item;
    var result = 0;
    var bytesInIntem;
    for (; idx < len; idx += 1) {
        item = arr[idx];
        if (typeof item !== 'number') {
            return new Error('The value is not a number');
        }
        if (!Number.isInteger(item)) {
            return new Error('The value is not an integer number');
        }
        if (item < 0) {
            return new Error('The number must be greater than 0');
        }
        if (!Number.isFinite(item)) {
            return new Error('The value is not a finite number');
        }
        if (item > maxNumberRes) {
            return new Error('The number is too big');
        }
        if (item < minNumberRes) {
            return new Error('The number is too small');
        }
        bytesInIntem = common_utils_number_1.bytesInInteger(item);
        if (bytesInIntem instanceof Error) {
            return bytesInIntem;
        }
        result += bytesInIntem;
    }
    return result;
};
exports.commonUtilsArrayCalculateLengthOfIntegerArray = commonUtilsArrayCalculateLengthOfIntegerArray;
/**
 * check wherether the array
 * includes all items
 * @param testedArray
 * @param requiredItems
 */
var commonUtilsArrayIncludesAll = function (testedArray, requiredItems) {
    var len = requiredItems.length;
    var idx = 0;
    while (idx < len) {
        if (!testedArray.includes(requiredItems[idx])) {
            return false;
        }
        idx++;
    }
    return true;
};
exports.commonUtilsArrayIncludesAll = commonUtilsArrayIncludesAll;
/**
 * Returns only defined items of an array
 *
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
var commonUtilsArrayDefinedOnly = function (arr) {
    return arr.filter(common_utils_main_1.isDefined);
};
exports.commonUtilsArrayDefinedOnly = commonUtilsArrayDefinedOnly;
/**
 * Returns uniq items of an array
 *
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
var commonUtilsArrayUniq = function (arr) {
    return Array.from(new Set(arr));
};
exports.commonUtilsArrayUniq = commonUtilsArrayUniq;
//# sourceMappingURL=common-utils-array.js.map