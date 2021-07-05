"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSimpleTypeValue = exports.waitFor = exports.getItemsCount = exports.isDefined = void 0;
var typed_array_utils_1 = require("@pashoo2/typed-array-utils");
/**
 * Returns whether value is not undefined, null or NaN
 *
 * @template T
 * @param {T} v
 * @returns {v is NonNullable<T>}
 */
var isDefined = function (v) {
    return v !== null && v !== undefined && (typeof v !== 'number' || !Number.isNaN(v));
};
exports.isDefined = isDefined;
/**
 * Count of items
 *
 * @template T
 * @param {T} arg - argument which is able to count it's items number
 * @returns {number} - chars in string, bytes in typed arrays, keys in object, members in map, items in set, items in array
 */
var getItemsCount = function (arg) {
    if (arg instanceof Map || arg instanceof Set) {
        return arg.size;
    }
    else if (Array.isArray(arg)) {
        return arg.length;
    }
    else if (arg && typeof arg === 'object') {
        return Object.keys(arg).length;
    }
    else if (typeof arg === 'string') {
        return arg.length;
    }
    else if (typed_array_utils_1.isTypedArray(arg)) {
        return arg.byteLength;
    }
    throw new Error('Unsupported type');
};
exports.getItemsCount = getItemsCount;
/**
 * Return a Promise which will be resolved
 * when the callback returns any value
 * which is defined(not null, ubdefined, NaN).
 *
 * @template R - resolved type return by the callback function
 * @param {() => R | undefined} cb - callback function called each interval till not trow or return somethind
 * @param {number} [checkIntervalMs=100] - interval when the callback will be called
 * @param {number} [timeoutMs = 360000] - timeout when the promise will be rejected if not resolved before
 * @returns {Promise<R>}
 * @throw - rejects on timeout or if the callback thrown an error
 */
var waitFor = function (cb, checkIntervalMs, timeoutMs) {
    if (checkIntervalMs === void 0) { checkIntervalMs = 100; }
    if (timeoutMs === void 0) { timeoutMs = 360000; }
    return new Promise(function (res, rej) {
        var timeout;
        var checkInterval;
        var clearTimers = function () {
            checkInterval && clearInterval(checkInterval);
            timeout && clearTimeout(timeout);
            checkInterval = undefined;
            timeout = undefined;
        };
        if (timeoutMs) {
            timeout = setTimeout(function () {
                clearTimers();
                rej(new Error('Timeout'));
            }, timeoutMs);
        }
        checkInterval = setInterval(function () {
            var result;
            try {
                result = cb();
            }
            catch (err) {
                clearTimers();
                rej(err);
                return;
            }
            if (exports.isDefined(result)) {
                clearTimers();
                res(result);
            }
        }, checkIntervalMs);
    });
};
exports.waitFor = waitFor;
var isSimpleTypeValue = function (v) {
    return v === null ||
        (typeof v !== 'object' &&
            (v === undefined || typeof v === 'string' || typeof v === 'number'));
};
exports.isSimpleTypeValue = isSimpleTypeValue;
//# sourceMappingURL=common-utils-main.js.map