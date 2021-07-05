import { TDictionary, TObjectKeys, TSimpleTypes } from './types';
/**
 * Whether an object doesn't have any keys
 *
 * @param {*} o
 * @returns {o is object}
 */
export declare const isNotEmptyObject: (o: any) => o is object;
/**
 * Whether an object has any keys
 *
 * @param {*} o
 * @returns {boolean}
 */
export declare const isEmptyObject: (o: any) => boolean;
/**
 * Returns keys of an object
 *
 * @param {object} o
 * @returns {Array<TObjectKeys>}
 */
export declare const getObjectKeys: (o: object) => Array<TObjectKeys>;
/**
 * Is an object doesn't have a constructor
 *
 * @param {unknown} o
 * @returns {o is Record<string, unknown>}
 */
export declare const isSimpleObject: (o: unknown) => o is Record<string, unknown>;
/**
 *
 *
 * @param {unknown} o
 * @returns {o is Record<string, unknown>}
 */
export declare const isSimpleTypesObject: (o: unknown) => o is Record<string, unknown>;
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
export declare function extend<T extends TDictionary<any>, E extends TDictionary<any>>(o: T | undefined, ext: E, replaceExisting?: boolean): T & E;
/**
 * Whether two objects are equal without a deep comparison of values
 *
 * @template T
 * @param {*} simpleValuesObject1
 * @param {T} simpleValuesObject2
 * @returns
 */
export declare const isObjectsSwallowEquals: <T>(simpleValuesObject1: any, simpleValuesObject2: T) => boolean;
/**
 * Compares objects by going deep into
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {T}
 */
export declare function deepCloneObject<T extends Record<string, any> | TSimpleTypes | Array<TSimpleTypes | Record<string, any>>>(value: T): T;
