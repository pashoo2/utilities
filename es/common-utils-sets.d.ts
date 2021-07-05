/**
 * Concat multiple sets into a new one and returns the resulted Set
 *
 * @template T
 * @param {(...Array<Set<T> | undefined>)} sets
 * @returns {Set<T>}
 */
export declare const concatSets: <T>(...sets: (Set<T> | undefined)[]) => Set<T>;
