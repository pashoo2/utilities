"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDeepEqual = exports.isArraysUnsortedDeepEqual = exports.isObjectsDeepEqual = exports.whetherValuesNotShallowSimilar = exports.whetherValuesSimilar = void 0;
var fast_deep_equal_1 = __importDefault(require("fast-deep-equal"));
var common_utils_objects_1 = require("./common-utils-objects");
var common_utils_main_1 = require("./common-utils-main");
var common_utils_array_1 = require("./common-utils-array");
var common_utils_functions_1 = require("./common-utils.functions");
function whetherValuesSimilar(firstValue, secondValue) {
    return (firstValue === secondValue ||
        // eslint-disable-next-line eqeqeq
        (firstValue == null && secondValue == null) ||
        (typeof firstValue === 'number' &&
            typeof secondValue === 'number' &&
            isNaN(firstValue) &&
            isNaN(secondValue)));
}
exports.whetherValuesSimilar = whetherValuesSimilar;
/**
 * Fast comparison of two values for shallow similarity.
 * Returns false only for values which can't be decided
 * as same, e,g, {} !== 0, {} == {}, NaN == 0, Map({ a: undefined, b: undefined }) == Map()
 *
 * @export
 * @param {unknown} firstValue
 * @param {unknown} secondValue
 * @returns {boolean}
 */
function whetherValuesNotShallowSimilar(firstValue, secondValue) {
    if (Boolean(firstValue) !== Boolean(secondValue)) {
        // e.g. firstMapValueForKey = undefined !== secondMapValueForKey = 1
        return true;
    }
    if (firstValue &&
        secondValue &&
        (typeof firstValue === 'object') !== (typeof secondValue === 'object')) {
        // e.g. firstMapValueForKey = {} !== secondMapValueForKey = 'string'
        return true;
    }
    return false;
}
exports.whetherValuesNotShallowSimilar = whetherValuesNotShallowSimilar;
function isObjectsDeepEqual(object1, object2) {
    if (object1 === object2) {
        return true;
    }
    if (!object1 || !object2) {
        return false;
    }
    if (typeof object1 !== 'object' || typeof object2 !== 'object') {
        return false;
    }
    if (Object.keys(object1).every(function (object1Key) {
        if (isDeepEqual(object1[object1Key], object2[object1Key])) {
            return true;
        }
        return false;
    })) {
        return true;
    }
    return false;
}
exports.isObjectsDeepEqual = isObjectsDeepEqual;
var isArraysUnsortedDeepEqual = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    var isArray1ContainSimpleItems = array1.every(common_utils_main_1.isSimpleTypeValue);
    var isArray2ContainSimpleItems = array2.every(common_utils_main_1.isSimpleTypeValue);
    if (isArray1ContainSimpleItems !== isArray2ContainSimpleItems) {
        return false;
    }
    if (isArray1ContainSimpleItems) {
        // for an array what contains only a simple values it sufficates
        // to compare th
        if (common_utils_array_1.isArraysUnsortedSwallowEqual(array1, array2)) {
            return true;
        }
        return false;
    }
    if (common_utils_array_1.isArraysUnsortedSwallowEqual(array1, array2)) {
        return true;
    }
    if (array1.every(function (array1Item) {
        return array2.find(function (array2Item) { return isDeepEqual(array1Item, array2Item); });
    })) {
        return true;
    }
    return false;
};
exports.isArraysUnsortedDeepEqual = isArraysUnsortedDeepEqual;
/**
 * Compares two values with deep equality if objects
 * and return true or false.
 * If one of the values is Symbol and they are not equal
 * return false.
 * Arrays are compared independently from the items order.
 * Functions serializable compared by it's string representation.
 *
 * @export
 * @param {unknown} value1
 * @param {unknown} value2
 * @returns {boolean}
 */
function isDeepEqual(value1, value2) {
    if (value1 === value2) {
        return true;
    }
    if (typeof value1 === 'symbol' || typeof value2 === 'symbol') {
        return false;
    }
    if (typeof value1 !== typeof value2) {
        return false;
    }
    if (common_utils_main_1.isSimpleTypeValue(value1) || common_utils_main_1.isSimpleTypeValue(value2)) {
        return value1 === value2;
    }
    // value1 instanceof Array returns false in Workers
    if (common_utils_array_1.commonUtilsIsArray(value1) || common_utils_array_1.commonUtilsIsArray(value2)) {
        if (common_utils_array_1.commonUtilsIsArray(value1) !== common_utils_array_1.commonUtilsIsArray(value2)) {
            return false;
        }
        if (exports.isArraysUnsortedDeepEqual(value1, value2)) {
            return true;
        }
        return false;
    }
    if (value1 instanceof Map || value2 instanceof Map) {
        return fast_deep_equal_1.default(value1, value2);
    }
    if (value1 instanceof Set || value2 instanceof Set) {
        return fast_deep_equal_1.default(value1, value2);
    }
    if (value1 instanceof RegExp || value2 instanceof RegExp) {
        return fast_deep_equal_1.default(value1, value2);
    }
    if (value1 instanceof Date || value2 instanceof Date) {
        return fast_deep_equal_1.default(value1, value2);
    }
    if (value1 instanceof ArrayBuffer || value2 instanceof ArrayBuffer) {
        return fast_deep_equal_1.default(value1, value2);
    }
    if (common_utils_objects_1.isSimpleTypesObject(value1) || common_utils_objects_1.isSimpleTypesObject(value2)) {
        if (common_utils_objects_1.isObjectsSwallowEquals(value1, value2)) {
            return true;
        }
        return false;
    }
    if (typeof value1 === 'function' && typeof value2 === 'function') {
        if (common_utils_functions_1.isEqualFunctions(value1, value2)) {
            return true;
        }
        return false;
    }
    if (isObjectsDeepEqual(value1, value2)) {
        return true;
    }
    return false;
}
exports.isDeepEqual = isDeepEqual;
//# sourceMappingURL=common-utils-equality.js.map