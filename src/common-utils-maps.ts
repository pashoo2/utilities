import {
  whetherValuesSimilar,
  whetherValuesNotShallowSimilar,
} from './common-utils-equality';
export function filterMapKeys<M extends Map<any, any>, F extends Array<any>>(
  map: M,
  filterKeys: F
): M {
  if (!filterKeys.length) {
    return map;
  }

  const filteredMap = new Map() as M;

  for (const [key, value] of map) {
    if (!filterKeys.includes(key)) {
      filteredMap.set(key, value);
    }
  }
  return filteredMap;
}

/**
 * Merge all maps into the target
 *
 * @export
 * @template M
 * @param {M} mapTarget
 * @param {...M[]} maps
 * @returns {M}
 */
export function mergeMaps<M extends Map<any, any>>(
  mapTarget: M,
  ...maps: M[]
): M {
  const mergedMap = mapTarget;

  for (let idx = 0, len = maps.length; idx < len; idx += 1) {
    const map = maps[idx];
    let entry;
    for (entry of map) {
      mergedMap.set(entry[0], entry[1]);
    }
  }
  return mergedMap;
}

/**
 * Clones readonly Map or normal map
 * into normal map.
 *
 * @export
 * @template T
 * @param {(Readonly<T> | T)} map
 * @returns {T}
 */
export function cloneMap<T extends Map<unknown, unknown>>(
  map: Readonly<T> | T
): T {
  return new Map(map as unknown as T) as T;
}

export function whetherTwoMapsSimilar<T>(
  firstMap: Map<unknown, T>,
  secondMap: Map<unknown, T>,
  comparator?: (
    firstValue: T | undefined,
    secondValue: T | undefined,
    key: T extends Map<infer K, unknown> ? K : never
  ) => boolean
): boolean {
  if (firstMap === secondMap) {
    return true;
  }

  const mapsKeys = new Set([...firstMap.keys(), ...secondMap.keys()]) as Set<
    T extends Map<infer K, unknown> ? K : never
  >;
  let firstMapKey;

  for (firstMapKey of mapsKeys) {
    const secondMapValueForKey = secondMap.get(firstMapKey);
    const firstMapValueForKey = firstMap.get(firstMapKey);

    if (whetherValuesSimilar(firstMapValueForKey, secondMapValueForKey)) {
      continue;
    }
    if (!comparator) {
      return false;
    }
    if (
      whetherValuesNotShallowSimilar(firstMapValueForKey, secondMapValueForKey)
    ) {
      return false;
    }
    if (!comparator(firstMapValueForKey, secondMapValueForKey, firstMapKey)) {
      return false;
    }
  }

  return true;
}
