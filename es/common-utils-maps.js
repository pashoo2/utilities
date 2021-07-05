"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whetherTwoMapsSimilar = exports.cloneMap = exports.mergeMaps = exports.filterMapKeys = void 0;
var common_utils_equality_1 = require("./common-utils-equality");
function filterMapKeys(map, filterKeys) {
    var e_1, _a;
    if (!filterKeys.length) {
        return map;
    }
    var filteredMap = new Map();
    try {
        for (var map_1 = __values(map), map_1_1 = map_1.next(); !map_1_1.done; map_1_1 = map_1.next()) {
            var _b = __read(map_1_1.value, 2), key = _b[0], value = _b[1];
            if (!filterKeys.includes(key)) {
                filteredMap.set(key, value);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (map_1_1 && !map_1_1.done && (_a = map_1.return)) _a.call(map_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return filteredMap;
}
exports.filterMapKeys = filterMapKeys;
/**
 * Merge all maps into the target
 *
 * @export
 * @template M
 * @param {M} mapTarget
 * @param {...M[]} maps
 * @returns {M}
 */
function mergeMaps(mapTarget) {
    var e_2, _a;
    var maps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        maps[_i - 1] = arguments[_i];
    }
    var mergedMap = mapTarget;
    for (var idx = 0, len = maps.length; idx < len; idx += 1) {
        var map = maps[idx];
        var entry = void 0;
        try {
            for (var map_2 = (e_2 = void 0, __values(map)), map_2_1 = map_2.next(); !map_2_1.done; map_2_1 = map_2.next()) {
                entry = map_2_1.value;
                mergedMap.set(entry[0], entry[1]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (map_2_1 && !map_2_1.done && (_a = map_2.return)) _a.call(map_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    return mergedMap;
}
exports.mergeMaps = mergeMaps;
/**
 * Clones readonly Map or normal map
 * into normal map.
 *
 * @export
 * @template T
 * @param {(Readonly<T> | T)} map
 * @returns {T}
 */
function cloneMap(map) {
    return new Map(map);
}
exports.cloneMap = cloneMap;
function whetherTwoMapsSimilar(firstMap, secondMap, comparator) {
    var e_3, _a;
    if (firstMap === secondMap) {
        return true;
    }
    var mapsKeys = new Set(__spreadArray(__spreadArray([], __read(firstMap.keys())), __read(secondMap.keys())));
    var firstMapKey;
    try {
        for (var mapsKeys_1 = __values(mapsKeys), mapsKeys_1_1 = mapsKeys_1.next(); !mapsKeys_1_1.done; mapsKeys_1_1 = mapsKeys_1.next()) {
            firstMapKey = mapsKeys_1_1.value;
            var secondMapValueForKey = secondMap.get(firstMapKey);
            var firstMapValueForKey = firstMap.get(firstMapKey);
            if (common_utils_equality_1.whetherValuesSimilar(firstMapValueForKey, secondMapValueForKey)) {
                continue;
            }
            if (!comparator) {
                return false;
            }
            if (common_utils_equality_1.whetherValuesNotShallowSimilar(firstMapValueForKey, secondMapValueForKey)) {
                return false;
            }
            if (!comparator(firstMapValueForKey, secondMapValueForKey, firstMapKey)) {
                return false;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (mapsKeys_1_1 && !mapsKeys_1_1.done && (_a = mapsKeys_1.return)) _a.call(mapsKeys_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return true;
}
exports.whetherTwoMapsSimilar = whetherTwoMapsSimilar;
//# sourceMappingURL=common-utils-maps.js.map