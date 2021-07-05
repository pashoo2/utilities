"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsError = void 0;
/**
 * Whether a value is an error.
 *
 * @param {unknown} v
 * @returns {v is Error}
 */
var checkIsError = function (v) { return v instanceof Error; };
exports.checkIsError = checkIsError;
//# sourceMappingURL=common-utils-check-value.js.map