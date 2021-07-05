import { TTypedArrays } from '@pashoo2/typed-array-utils';
/**
 * Returns whether value is not undefined, null or NaN
 *
 * @template T
 * @param {T} v
 * @returns {v is NonNullable<T>}
 */
export declare const isDefined: <T>(v: T) => v is NonNullable<T>;
/**
 * Count of items
 *
 * @template T
 * @param {T} arg - argument which is able to count it's items number
 * @returns {number} - chars in string, bytes in typed arrays, keys in object, members in map, items in set, items in array
 */
export declare const getItemsCount: <T extends string | {} | any[] | Map<any, any> | Set<any> | TTypedArrays>(arg: T) => number;
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
export declare const waitFor: <R>(cb: () => NonNullable<R> | undefined, checkIntervalMs?: number, timeoutMs?: number) => Promise<R>;
export declare const isSimpleTypeValue: (v: unknown) => v is string | number | null | undefined;
