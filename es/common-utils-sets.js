"use strict";
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
exports.concatSets = void 0;
var common_utils_main_1 = require("./common-utils-main");
/**
 * Concat multiple sets into a new one and returns the resulted Set
 *
 * @template T
 * @param {(...Array<Set<T> | undefined>)} sets
 * @returns {Set<T>}
 */
var concatSets = function () {
    var sets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sets[_i] = arguments[_i];
    }
    return new (Set.bind.apply(Set, __spreadArray([void 0], __read(sets.filter(common_utils_main_1.isDefined)))))();
};
exports.concatSets = concatSets;
//# sourceMappingURL=common-utils-sets.js.map