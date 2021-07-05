"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCancellablePromiseByNativePromise = exports.createRejectablePromiseByNativePromise = exports.resolvePromisePending = exports.createPromisePending = exports.createPromisePendingRejectable = exports.createCustomPromise = void 0;
var createCustomPromise = function () {
    var resolve = undefined;
    var reject = undefined;
    var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });
    if (!resolve) {
        throw new Error('Failed to create a work promise resolver function');
    }
    if (!reject) {
        throw new Error('Failed to create a work promise rejector function');
    }
    return {
        resolve: resolve,
        reject: reject,
        promise: promise,
    };
};
exports.createCustomPromise = createCustomPromise;
/**
 * Create promise can be rejected or resolved from the outside
 *
 * @template T
 * @param {ICustomPromiseCreator<T>} [customPromiseCreator=createCustomPromise]
 * @returns {IPromisePendingRejectable<T>}
 */
var createPromisePendingRejectable = function (customPromiseCreator) {
    if (customPromiseCreator === void 0) { customPromiseCreator = exports.createCustomPromise; }
    var _a = customPromiseCreator(), promise = _a.promise, resolve = _a.resolve, reject = _a.reject;
    promise.resolve = resolve;
    promise.reject = reject;
    return promise;
};
exports.createPromisePendingRejectable = createPromisePendingRejectable;
/**
 * Creates promise in the pending state
 * with a special resolve method
 *
 *
 * @template T
 * @param {IPromisePendingRejectableCreator} [promisePendingRejectableCreator=createPromisePendingRejectable]
 * @returns {IPromisePending<T>}
 */
var createPromisePending = function (promisePendingRejectableCreator) {
    if (promisePendingRejectableCreator === void 0) { promisePendingRejectableCreator = exports.createPromisePendingRejectable; }
    return promisePendingRejectableCreator();
};
exports.createPromisePending = createPromisePending;
/**
 * Resolves promise pending with a value passed
 * in the arguments.
 *
 * @template T
 * @param {IPromisePending<T>} promisePending
 * @param {T} value
 */
var resolvePromisePending = function (promisePending, value) {
    promisePending.resolve(value);
};
exports.resolvePromisePending = resolvePromisePending;
/**
 * By a native promise it creates a rejectable promise.
 *
 * @export
 * @template T
 * @template E
 * @param {Promise<T>} nativePromise
 * @returns {IPromisePendingRejectable<T, E>} - promise which flow can be stopped
 */
function createRejectablePromiseByNativePromise(nativePromise) {
    var rejectablePromise = exports.createPromisePendingRejectable();
    var promiseRace = Promise.race([nativePromise, rejectablePromise]);
    promiseRace.reject =
        rejectablePromise.reject;
    return promiseRace;
}
exports.createRejectablePromiseByNativePromise = createRejectablePromiseByNativePromise;
/**
 * By a native promise it creates a cancellable promise.
 *
 * @export
 * @template T
 * @template E
 * @param {Promise<T>} nativePromise
 * @returns {IPromiseCancellable<T, E>} - promise which flow can be stopped
 */
function createCancellablePromiseByNativePromise(nativePromise) {
    var rejectablePromise = exports.createPromisePendingRejectable();
    var promiseRace = Promise.race([nativePromise, rejectablePromise]);
    promiseRace.cancel = function () {
        return rejectablePromise.resolve;
    };
    return promiseRace;
}
exports.createCancellablePromiseByNativePromise = createCancellablePromiseByNativePromise;
//# sourceMappingURL=common-utils.promises.js.map