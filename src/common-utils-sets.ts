import {isDefined} from './common-utils-main';

/**
 * Concat multiple sets into a new one and returns the resulted Set
 *
 * @template T
 * @param {(...Array<Set<T> | undefined>)} sets
 * @returns {Set<T>}
 */
export const concatSets = <T>(...sets: Array<Set<T> | undefined>): Set<T> => {
  return new Set(...sets.filter(isDefined));
};
