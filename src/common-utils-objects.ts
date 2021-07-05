import {TDictionary, TObjectKeys, TSimpleTypes} from './types';
import {isDefined, isSimpleTypeValue} from './common-utils-main';

/**
 * Whether an object doesn't have any keys
 *
 * @param {*} o
 * @returns {o is object}
 */
export const isNotEmptyObject = (o: any): o is object => {
  return !!o && typeof o === 'object' && !!Object.keys(o).length;
};

/**
 * Whether an object has any keys
 *
 * @param {*} o
 * @returns {boolean}
 */
export const isEmptyObject = (o: any): boolean => {
  return !isNotEmptyObject(o);
};

/**
 * Returns keys of an object
 *
 * @param {object} o
 * @returns {Array<TObjectKeys>}
 */
export const getObjectKeys = (o: object): Array<TObjectKeys> =>
  (Object.keys(o) as Array<TObjectKeys>).concat(
    Object.getOwnPropertySymbols(o)
  );

/**
 * Is an object doesn't have a constructor
 *
 * @param {unknown} o
 * @returns {o is Record<string, unknown>}
 */
export const isSimpleObject = (o: unknown): o is Record<string, unknown> =>
  o !== null &&
  typeof o === 'object' &&
  Object.getPrototypeOf(o) === Object.prototype &&
  o !== Object.prototype;

/**
 *
 *
 * @param {unknown} o
 * @returns {o is Record<string, unknown>}
 */
export const isSimpleTypesObject = (o: unknown): o is Record<string, unknown> =>
  isSimpleObject(o) &&
  Object.keys(o).every(objectKey => isSimpleTypeValue(o[objectKey]));

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
export function extend<T extends TDictionary<any>, E extends TDictionary<any>>(
  o: T | undefined,
  ext: E,
  replaceExisting?: boolean
): T & E {
  if (!o) {
    return ext;
  }
  if (!isSimpleObject(o) || !isSimpleObject(ext)) {
    if (replaceExisting && ext) {
      return ext;
    }
    return (!o || isEmptyObject(o)) && ext ? ext : o;
  }

  const keys = getObjectKeys(ext);
  let idx = 0;
  let k: keyof E;
  const len = keys.length;

  while (idx < len) {
    k = keys[idx];
    idx++;
    if (!isDefined(ext[k])) {
      continue;
    }
    if (replaceExisting || !isDefined(o[k])) {
      o[k] = ext[k];
    } else if (typeof o[k] === 'object' && typeof ext[k] === 'object') {
      o[k] = extend(o[k], ext[k]);
    }
  }
  return o;
}
/**
 * Whether two objects are equal without a deep comparison of values
 *
 * @template T
 * @param {*} simpleValuesObject1
 * @param {T} simpleValuesObject2
 * @returns
 */
export const isObjectsSwallowEquals = <T>(
  simpleValuesObject1: any,
  simpleValuesObject2: T
) => {
  if (
    simpleValuesObject1 &&
    simpleValuesObject2 &&
    typeof simpleValuesObject1 === 'object' &&
    typeof simpleValuesObject2 === 'object'
  ) {
    const simpleValuesObject1Keys = Object.keys(simpleValuesObject1);
    const simpleValuesObject2Keys = Object.keys(simpleValuesObject2);
    if (simpleValuesObject1Keys.length !== simpleValuesObject2Keys.length) {
      return false;
    }
    return simpleValuesObject1Keys.every(
      simpleObject1Key =>
        (simpleValuesObject2 as any)[simpleObject1Key] ===
        simpleValuesObject1[simpleObject1Key]
    );
  }
  return false;
};

/**
 * Compares objects by going deep into
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {T}
 */
export function deepCloneObject<
  T extends
    | Record<string, any>
    | TSimpleTypes
    | Array<TSimpleTypes | Record<string, any>>
>(value: T): T {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(deepCloneObject) as T;
  }

  const clone = {} as Record<string, unknown>;

  Object.keys(value as Record<string, any>).forEach((key: string): void => {
    clone[key] = deepCloneObject((value as Record<string, any>)[key]);
  });
  return clone as T;
}
