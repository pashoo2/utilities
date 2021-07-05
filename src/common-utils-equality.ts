import checkDeepEqualityNonSimple from 'fast-deep-equal';
import {
  isObjectsSwallowEquals,
  isSimpleTypesObject,
} from './common-utils-objects';
import {isSimpleTypeValue} from './common-utils-main';
import {
  isArraysUnsortedSwallowEqual,
  commonUtilsIsArray,
} from './common-utils-array';
import {isEqualFunctions} from './common-utils.functions';

export function whetherValuesSimilar(
  firstValue: unknown,
  secondValue: unknown
): boolean {
  return (
    firstValue === secondValue ||
    // eslint-disable-next-line eqeqeq
    (firstValue == null && secondValue == null) ||
    (typeof firstValue === 'number' &&
      typeof secondValue === 'number' &&
      isNaN(firstValue) &&
      isNaN(secondValue))
  );
}

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
export function whetherValuesNotShallowSimilar(
  firstValue: unknown,
  secondValue: unknown
): boolean {
  if (Boolean(firstValue) !== Boolean(secondValue)) {
    // e.g. firstMapValueForKey = undefined !== secondMapValueForKey = 1
    return true;
  }
  if (
    firstValue &&
    secondValue &&
    (typeof firstValue === 'object') !== (typeof secondValue === 'object')
  ) {
    // e.g. firstMapValueForKey = {} !== secondMapValueForKey = 'string'
    return true;
  }
  return false;
}

export function isObjectsDeepEqual<T extends {}>(
  object1: unknown,
  object2: T
): object1 is T {
  if (object1 === object2) {
    return true;
  }
  if (!object1 || !object2) {
    return false;
  }
  if (typeof object1 !== 'object' || typeof object2 !== 'object') {
    return false;
  }
  if (
    Object.keys(object1 as {}).every(object1Key => {
      if (
        isDeepEqual((object1 as any)[object1Key], (object2 as any)[object1Key])
      ) {
        return true;
      }

      return false;
    })
  ) {
    return true;
  }

  return false;
}

export const isArraysUnsortedDeepEqual = <T extends unknown[]>(
  array1: unknown[],
  array2: T
): array1 is T => {
  if (array1.length !== array2.length) {
    return false;
  }

  const isArray1ContainSimpleItems = array1.every(isSimpleTypeValue);
  const isArray2ContainSimpleItems = array2.every(isSimpleTypeValue);

  if (isArray1ContainSimpleItems !== isArray2ContainSimpleItems) {
    return false;
  }
  if (isArray1ContainSimpleItems) {
    // for an array what contains only a simple values it sufficates
    // to compare th
    if (isArraysUnsortedSwallowEqual(array1, array2)) {
      return true;
    }

    return false;
  }
  if (isArraysUnsortedSwallowEqual(array1, array2)) {
    return true;
  }
  if (
    array1.every(array1Item =>
      array2.find(array2Item => isDeepEqual(array1Item, array2Item))
    )
  ) {
    return true;
  }

  return false;
};

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
export function isDeepEqual<T>(value1: unknown, value2: T): value1 is T {
  if (value1 === value2) {
    return true;
  }
  if (typeof value1 === 'symbol' || typeof value2 === 'symbol') {
    return false;
  }
  if (typeof value1 !== typeof value2) {
    return false;
  }
  if (isSimpleTypeValue(value1) || isSimpleTypeValue(value2)) {
    return (value1 as any) === (value2 as any);
  }
  // value1 instanceof Array returns false in Workers
  if (commonUtilsIsArray(value1) || commonUtilsIsArray(value2)) {
    if (commonUtilsIsArray(value1) !== commonUtilsIsArray(value2)) {
      return false;
    }
    if (isArraysUnsortedDeepEqual(value1 as any, value2 as any)) {
      return true;
    }

    return false;
  }

  if (value1 instanceof Map || value2 instanceof Map) {
    return checkDeepEqualityNonSimple(value1, value2);
  }
  if (value1 instanceof Set || value2 instanceof Set) {
    return checkDeepEqualityNonSimple(value1, value2);
  }
  if (value1 instanceof RegExp || value2 instanceof RegExp) {
    return checkDeepEqualityNonSimple(value1, value2);
  }
  if (value1 instanceof Date || value2 instanceof Date) {
    return checkDeepEqualityNonSimple(value1, value2);
  }
  if (value1 instanceof ArrayBuffer || value2 instanceof ArrayBuffer) {
    return checkDeepEqualityNonSimple(value1, value2);
  }
  if (isSimpleTypesObject(value1) || isSimpleTypesObject(value2)) {
    if (isObjectsSwallowEquals(value1, value2)) {
      return true;
    }

    return false;
  }
  if (typeof value1 === 'function' && typeof value2 === 'function') {
    if (isEqualFunctions(value1, value2)) {
      return true;
    }

    return false;
  }
  if (isObjectsDeepEqual(value1, value2)) {
    return true;
  }

  return false;
}
