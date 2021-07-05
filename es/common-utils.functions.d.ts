/**
 * Is it a non arrow function stringified
 *
 * @export
 * @param {string} valueStringified
 * @returns {boolean}
 */
export declare function isNonArrowFunctionStringified(valueStringified: string): boolean;
/**
 * Is it an arrow function stringified
 *
 * @export
 * @param {string} valueStringified
 * @returns {boolean}
 */
export declare function isArrowFunctionStringified(valueStringified: string): boolean;
/**
 * Is it a browser's built-in function.
 *
 * @export
 * @param {Function} f
 * @returns {boolean}
 */
export declare function isNativeFunction(f: Function): boolean;
/**
 * Is is an arrow function
 *
 * @export
 * @param {Function} fn
 * @returns {boolean}
 */
export declare function isArrowFunction(fn: Function): boolean;
/**
 * Returns whether the argument is a non native function.
 *
 * @export
 * @param {unknown} value
 * @returns {value is (...args: unknown[])}
 */
export declare function isNonNativeFunction(value: unknown): value is (...args: unknown[]) => unknown;
/**
 * Create a function from a serialized function
 *
 * @export
 * @param {string} functionSerialized
 * @returns {(...args: any[]) => any}
 */
export declare function createFunctionFromSerializedFunction(functionSerialized: string): (...args: any[]) => any;
/**
 * Checks whether functions bodies are equal.
 *
 * @export
 * @param {Function} fn1
 * @param {Function} fn2
 * @returns {boolean}
 */
export declare function isEqualFunctions(fn1: Function, fn2: Function): boolean;
