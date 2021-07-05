import {bytesInInteger} from './common-utils-number';
import {isDefined} from './common-utils-main';

/**
 * Whether a value is an array or not.
 *
 * @param {unknown} a
 * @returns {a is Array<unknown>}
 */
export const commonUtilsIsArray = (a: unknown): a is Array<unknown> =>
  a instanceof Array || Array.isArray(a);

/**
 * Checks whether two array items are equal
 *
 * @param {Array<any>} firstArray
 * @param {Array<any>} secondArray
 * @returns {boolean}
 */

export const isArraysUnsortedSwallowEqual = <T extends unknown[]>(
  array1: unknown[],
  array2: T
): array1 is T => {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every((item): boolean => array2.includes(item));
};

/**
 * Checks whether two arrays have the same items.
 * Order doesn't matter.
 *
 * @param {Array<any>} firstArray
 * @param {Array<any>} secondArray
 * @returns {boolean}
 */
export const isArraysSwallowEqual = (
  firstArray: Array<any>,
  secondArray: Array<any>
): boolean => {
  if (firstArray === secondArray) {
    return true;
  }
  return isArraysUnsortedSwallowEqual(firstArray, secondArray);
};

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
export const commonUtilsReturnArrayIfTwoArraysEquals = (
  firstArray: any,
  secondArray: any
): boolean =>
  commonUtilsIsArray(firstArray) &&
  commonUtilsIsArray(secondArray) &&
  isArraysSwallowEqual(firstArray, secondArray);

/**
 * .
 *
 * @template S
 * @template F
 * @param {F} firstArray
 * @param {S} secondArray
 * @returns {S | false}
 */
export const commonUtilsReturnArrayIfTwoArraysEqualsOrNotDefinedAndReturnArrayIfEquals =
  <S>(
    firstArray: unknown,
    secondArray: S
  ): S extends Array<unknown> ? S : false => {
    if (!firstArray && !secondArray) {
      return secondArray as S extends Array<unknown> ? S : false;
    }
    if (commonUtilsReturnArrayIfTwoArraysEquals(firstArray, secondArray)) {
      return secondArray as S extends Array<unknown> ? S : false;
    }
    return false as S extends Array<unknown> ? S : false;
  };

/**
 * Checks whether all arrays has the same items in the same order
 * or undefined or null.
 *
 * @param {...Array<Array<any>>} arrays
 * @returns {boolean}
 */
export const commonUtilsAreAllArraysEqualOrNotDefined = (
  ...arrays: Array<Array<unknown>>
): boolean => {
  if (!arrays.length) {
    return true;
  }
  if (arrays.length === 1) {
    return true;
  }
  return !!arrays.reduce(
    commonUtilsReturnArrayIfTwoArraysEquals,
    arrays[0] as Array<unknown> | boolean
  );
};

export const commonUtilsArrayOrderByDecComparationFunction = <T>(
  a: T,
  b: T
): number => Number(b) - Number(a);

/**
 * sort array by decreasing
 * value on increased index
 * @param {any[]} arr
 */
export const commonUtilsArrayOrderByDec = <T>(arr: T[]): T[] =>
  arr.sort(commonUtilsArrayOrderByDecComparationFunction);

/**
 * delete an item from the array
 * @param {Array} arr
 * @param {any} item
 */

export const commonUtilsArrayDeleteFromArray = <T>(arr: T[], item: T) => {
  if (arr instanceof Array && arr.length) {
    const idxOfItem = arr.findIndex((el: T) => el === item);

    if (idxOfItem !== -1) {
      arr.splice(idxOfItem, 1);
    }
  }
};

/**
 * call a callback function for an each item in the
 * array till the result is not an intstance of the
 * Error. If any callback resulted with an Error
 * then the execution will break.
 */
export const commonUtilsArrayDoCallbackTillNoError = <T>(
  arr: T[],
  cb: (v: T) => Error | any
): Error | void => {
  if (!(arr instanceof Array)) {
    return new Error('The array value must be an instance of Array');
  }

  const len = arr.length;
  let idx = 0;
  let r: Error | any;

  for (; idx < len; idx += 1) {
    r = cb(arr[idx]);

    if (r instanceof Error) {
      return r;
    }
  }
};

/**
 * calculate the overall lenght
 * of the numeric array in bytes
 * @param {number[]} arr
 * @param {number} [maxNumber] - maximum value of the valid number
 * @param {number} [minNumber] - minimum value of the valid number
 * @returns {number | Error} - return a length of the array or an Error
 * if a non-finite or an unsafe number will be met
 */
export const commonUtilsArrayCalculateLengthOfIntegerArray = (
  arr: number[],
  maxNumber?: number,
  minNumber?: number
): number | Error => {
  if (!(arr instanceof Array)) {
    return new Error('The array value must be an instance of Array');
  }

  const maxNumberRes =
    typeof maxNumber === 'number' ? maxNumber : Number.MAX_SAFE_INTEGER;
  const minNumberRes = typeof minNumber === 'number' ? minNumber : 0;
  const len = arr.length;
  let idx = 0;
  let item;
  let result = 0;
  let bytesInIntem;

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
    bytesInIntem = bytesInInteger(item);
    if (bytesInIntem instanceof Error) {
      return bytesInIntem;
    }
    result += bytesInIntem;
  }
  return result;
};

/**
 * check wherether the array
 * includes all items
 * @param testedArray
 * @param requiredItems
 */
export const commonUtilsArrayIncludesAll = (
  testedArray: any[],
  requiredItems: any[]
): boolean => {
  const len = requiredItems.length;
  let idx = 0;

  while (idx < len) {
    if (!testedArray.includes(requiredItems[idx])) {
      return false;
    }
    idx++;
  }
  return true;
};

/**
 * Returns only defined items of an array
 *
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
export const commonUtilsArrayDefinedOnly = <T>(arr: T[]): NonNullable<T>[] =>
  arr.filter(isDefined);

/**
 * Returns uniq items of an array
 *
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
export const commonUtilsArrayUniq = <T>(arr: T[]): T[] =>
  Array.from(new Set(arr));
