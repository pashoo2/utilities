export declare function filterMapKeys<M extends Map<any, any>, F extends Array<any>>(map: M, filterKeys: F): M;
/**
 * Merge all maps into the target
 *
 * @export
 * @template M
 * @param {M} mapTarget
 * @param {...M[]} maps
 * @returns {M}
 */
export declare function mergeMaps<M extends Map<any, any>>(mapTarget: M, ...maps: M[]): M;
/**
 * Clones readonly Map or normal map
 * into normal map.
 *
 * @export
 * @template T
 * @param {(Readonly<T> | T)} map
 * @returns {T}
 */
export declare function cloneMap<T extends Map<unknown, unknown>>(map: Readonly<T> | T): T;
export declare function whetherTwoMapsSimilar<T>(firstMap: Map<unknown, T>, secondMap: Map<unknown, T>, comparator?: (firstValue: T | undefined, secondValue: T | undefined, key: T extends Map<infer K, unknown> ? K : never) => boolean): boolean;
