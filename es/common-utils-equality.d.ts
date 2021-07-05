export declare function whetherValuesSimilar(firstValue: unknown, secondValue: unknown): boolean;
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
export declare function whetherValuesNotShallowSimilar(firstValue: unknown, secondValue: unknown): boolean;
export declare function isObjectsDeepEqual<T extends {}>(object1: unknown, object2: T): object1 is T;
export declare const isArraysUnsortedDeepEqual: <T extends unknown[]>(array1: unknown[], array2: T) => array1 is T;
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
export declare function isDeepEqual<T>(value1: unknown, value2: T): value1 is T;
