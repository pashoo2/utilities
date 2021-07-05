"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConstructor = void 0;
var isConstructor = function (v) {
    var _a, _b;
    return (typeof v === 'function' &&
        typeof ((_b = (_a = v.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) === 'string');
};
exports.isConstructor = isConstructor;
//# sourceMappingURL=common-utils-classes.js.map