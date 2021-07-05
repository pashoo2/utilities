"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqualFunctions = exports.createFunctionFromSerializedFunction = exports.isNonNativeFunction = exports.isArrowFunction = exports.isNativeFunction = exports.isArrowFunctionStringified = exports.isNonArrowFunctionStringified = void 0;
/**
 * Is it a non arrow function stringified
 *
 * @export
 * @param {string} valueStringified
 * @returns {boolean}
 */
function isNonArrowFunctionStringified(valueStringified) {
    return /^(?:async)*[ ]*function[ ]*(?:[a-zA-Z]\w*)*[ ]*\(.*\)[ ]*/.test(valueStringified);
}
exports.isNonArrowFunctionStringified = isNonArrowFunctionStringified;
/**
 * Is it an arrow function stringified
 *
 * @export
 * @param {string} valueStringified
 * @returns {boolean}
 */
function isArrowFunctionStringified(valueStringified) {
    return /^(?:async)*[ ]*\(.*\)[ ]*=>[ ]*/.test(valueStringified);
}
exports.isArrowFunctionStringified = isArrowFunctionStringified;
/**
 * Is it a browser's built-in function.
 *
 * @export
 * @param {Function} f
 * @returns {boolean}
 */
function isNativeFunction(f) {
    return (typeof f === 'function' &&
        (f === Function.prototype ||
            /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/.test(String(f))));
}
exports.isNativeFunction = isNativeFunction;
/**
 * Is is an arrow function
 *
 * @export
 * @param {Function} fn
 * @returns {boolean}
 */
function isArrowFunction(fn) {
    if (typeof fn !== 'function')
        return false;
    if (isNativeFunction(fn)) {
        return false;
    }
    return (fn.prototype === undefined &&
        /^[^{]+?=>/.test(Function.prototype.toString.call(fn)));
}
exports.isArrowFunction = isArrowFunction;
/**
 * Returns whether the argument is a non native function.
 *
 * @export
 * @param {unknown} value
 * @returns {value is (...args: unknown[])}
 */
function isNonNativeFunction(value) {
    return typeof value === 'function' && !isNativeFunction(value);
}
exports.isNonNativeFunction = isNonNativeFunction;
/**
 * Create a function from a serialized function
 *
 * @export
 * @param {string} functionSerialized
 * @returns {(...args: any[]) => any}
 */
function createFunctionFromSerializedFunction(functionSerialized) {
    // eslint-disable-next-line no-eval
    try {
        // TODO - ReDoS attacks and make it create function in a sandbox
        var functionCreatedFromString = eval("(" + functionSerialized + ")");
        if (!functionCreatedFromString) {
            throw new Error('Failed to create function by it body');
        }
        return functionCreatedFromString;
    }
    catch (err) {
        throw new Error("Faild to parser the function serialized " + functionSerialized);
    }
}
exports.createFunctionFromSerializedFunction = createFunctionFromSerializedFunction;
/**
 * Checks whether functions bodies are equal.
 *
 * @export
 * @param {Function} fn1
 * @param {Function} fn2
 * @returns {boolean}
 */
function isEqualFunctions(fn1, fn2) {
    if (fn1 === fn2) {
        return true;
    }
    if (fn1.length !== fn2.length) {
        return false;
    }
    if (fn1.name !== fn2.name) {
        return false;
    }
    if (isArrowFunction(fn1) !== isArrowFunction(fn2)) {
        return false;
    }
    if (isNativeFunction(fn1) || isNativeFunction(fn2)) {
        // native functions which not equal each other not equal at all
        return false;
    }
    // compare them stringified
    return String(fn1).trim() === String(fn2).trim();
}
exports.isEqualFunctions = isEqualFunctions;
//# sourceMappingURL=common-utils.functions.js.map