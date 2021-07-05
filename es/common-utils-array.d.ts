/**
 * Whether a value is an array or not.
 *
 * @param {unknown} a
 * @returns {a is Array<unknown>}
 */
export declare const commonUtilsIsArray: (a: unknown) => a is unknown[];
/**
 * Checks whether two array items are equal
 *
 * @param {Array<any>} firstArray
 * @param {Array<any>} secondArray
 * @returns {boolean}
 */
export declare const isArraysUnsortedSwallowEqual: <T extends unknown[]>(array1: unknown[], array2: T) => array1 is T;
/**
 * Checks whether two arrays have the same items.
 * Order doesn't matter.
 *
 * @param {Array<any>} firstArray
 * @param {Array<any>} secondArray
 * @returns {boolean}
 */
export declare const isArraysSwallowEqual: (firstArray: Array<any>, secondArray: Array<any>) => boolean;
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
export declare const commonUtilsReturnArrayIfTwoArraysEquals: (firstArray: any, secondArray: any) => boolean;
/**
 * .
 *
 * @template S
 * @template F
 * @param {F} firstArray
 * @param {S} secondArray
 * @returns {S | false}
 */
export declare const commonUtilsReturnArrayIfTwoArraysEqualsOrNotDefinedAndReturnArrayIfEquals: <S>(firstArray: unknown, secondArray: S) => S extends unknown[] ? S : false;
/**
 * Checks whether all arrays has the same items in the same order
 * or undefined or null.
 *
 * @param {...Array<Array<any>>} arrays
 * @returns {boolean}
 */
export declare const commonUtilsAreAllArraysEqualOrNotDefined: (...arrays: Array<Array<unknown>>) => boolean;
export declare const commonUtilsArrayOrderByDecComparationFunction: <T>(a: T, b: T) => number;
/**
 * sort array by decreasing
 * value on increased index
 * @param {any[]} arr
 */
export declare const commonUtilsArrayOrderByDec: <T>(arr: T[]) => T[];
/**
 * delete an item from the array
 * @param {Array} arr
 * @param {any} item
 */
export declare const commonUtilsArrayDeleteFromArray: <T>(arr: T[], item: T) => void;
/**
 * call a callback function for an each item in the
 * array till the result is not an intstance of the
 * Error. If any callback resulted with an Error
 * then the execution will break.
 */
export declare const commonUtilsArrayDoCallbackTillNoError: <T>(arr: T[], cb: (v: T) => Error | any) => Error | void;
/**
 * calculate the overall lenght
 * of the numeric array in bytes
 * @param {number[]} arr
 * @param {number} [maxNumber] - maximum value of the valid number
 * @param {number} [minNumber] - minimum value of the valid number
 * @returns {number | Error} - return a length of the array or an Error
 * if a non-finite or an unsafe number will be met
 */
export declare const commonUtilsArrayCalculateLengthOfIntegerArray: (arr: number[], maxNumber?: number | undefined, minNumber?: number | undefined) => number | Error;
/**
 * check wherether the array
 * includes all items
 * @param testedArray
 * @param requiredItems
 */
export declare const commonUtilsArrayIncludesAll: (testedArray: any[], requiredItems: any[]) => boolean;
/**
 * Returns only defined items of an array
 *
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
export declare const commonUtilsArrayDefinedOnly: <T>(arr: T[]) => NonNullable<T>[];
/**
 * Returns uniq items of an array
 *
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
export declare const commonUtilsArrayUniq: <T>(arr: T[]) => T[];
