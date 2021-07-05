"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCloneObject = exports.isObjectsSwallowEquals = exports.extend = exports.isSimpleTypesObject = exports.isSimpleObject = exports.getObjectKeys = exports.isEmptyObject = exports.isNotEmptyObject = void 0;
var common_utils_main_1 = require("./common-utils-main");
/**
 * Whether an object doesn't have any keys
 *
 * @param {*} o
 * @returns {o is object}
 */
var isNotEmptyObject = function (o) {
    return !!o && typeof o === 'object' && !!Object.keys(o).length;
};
exports.isNotEmptyObject = isNotEmptyObject;
/**
 * Whether an object has any keys
 *
 * @param {*} o
 * @returns {boolean}
 */
var isEmptyObject = function (o) {
    return !exports.isNotEmptyObject(o);
};
exports.isEmptyObject = isEmptyObject;
/**
 * Returns keys of an object
 *
 * @param {object} o
 * @returns {Array<TObjectKeys>}
 */
var getObjectKeys = function (o) {
    return Object.keys(o).concat(Object.getOwnPropertySymbols(o));
};
exports.getObjectKeys = getObjectKeys;
/**
 * Is an object doesn't have a constructor
 *
 * @param {unknown} o
 * @returns {o is Record<string, unknown>}
 */
var isSimpleObject = function (o) {
    return o !== null &&
        typeof o === 'object' &&
        Object.getPrototypeOf(o) === Object.prototype &&
        o !== Object.prototype;
};
exports.isSimpleObject = isSimpleObject;
/**
 *
 *
 * @param {unknown} o
 * @returns {o is Record<string, unknown>}
 */
var isSimpleTypesObject = function (o) {
    return exports.isSimpleObject(o) &&
        Object.keys(o).every(function (objectKey) { return common_utils_main_1.isSimpleTypeValue(o[objectKey]); });
};
exports.isSimpleTypesObject = isSimpleTypesObject;
/**
 * extends object with another object if the object
 * have no properties
 *
 * @export
 * @template T
 * @template E
 * @param {T} o
 * @param {E} ext
 * @returns {T}
 */
function extend(o, ext, replaceExisting) {
    if (!o) {
        return ext;
    }
    if (!exports.isSimpleObject(o) || !exports.isSimpleObject(ext)) {
        if (replaceExisting && ext) {
            return ext;
        }
        return (!o || exports.isEmptyObject(o)) && ext ? ext : o;
    }
    var keys = exports.getObjectKeys(ext);
    var idx = 0;
    var k;
    var len = keys.length;
    while (idx < len) {
        k = keys[idx];
        idx++;
        if (!common_utils_main_1.isDefined(ext[k])) {
            continue;
        }
        if (replaceExisting || !common_utils_main_1.isDefined(o[k])) {
            o[k] = ext[k];
        }
        else if (typeof o[k] === 'object' && typeof ext[k] === 'object') {
            o[k] = extend(o[k], ext[k]);
        }
    }
    return o;
}
exports.extend = extend;
/**
 * Whether two objects are equal without a deep comparison of values
 *
 * @template T
 * @param {*} simpleValuesObject1
 * @param {T} simpleValuesObject2
 * @returns
 */
var isObjectsSwallowEquals = function (simpleValuesObject1, simpleValuesObject2) {
    if (simpleValuesObject1 &&
        simpleValuesObject2 &&
        typeof simpleValuesObject1 === 'object' &&
        typeof simpleValuesObject2 === 'object') {
        var simpleValuesObject1Keys = Object.keys(simpleValuesObject1);
        var simpleValuesObject2Keys = Object.keys(simpleValuesObject2);
        if (simpleValuesObject1Keys.length !== simpleValuesObject2Keys.length) {
            return false;
        }
        return simpleValuesObject1Keys.every(function (simpleObject1Key) {
            return simpleValuesObject2[simpleObject1Key] ===
                simpleValuesObject1[simpleObject1Key];
        });
    }
    return false;
};
exports.isObjectsSwallowEquals = isObjectsSwallowEquals;
/**
 * Compares objects by going deep into
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {T}
 */
function deepCloneObject(value) {
    if (!value || typeof value !== 'object') {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map(deepCloneObject);
    }
    var clone = {};
    Object.keys(value).forEach(function (key) {
        clone[key] = deepCloneObject(value[key]);
    });
    return clone;
}
exports.deepCloneObject = deepCloneObject;
//# sourceMappingURL=common-utils-objects.js.map