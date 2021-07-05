import { MaybeError, IPromiseCancellable, IPromisePendingRejectable, IPromisePending, ICustomPromiseDescription, ICustomPromiseCreator, IPromisePendingRejectableCreator } from './types';
export declare const createCustomPromise: <T, E extends MaybeError = void>() => ICustomPromiseDescription<T, E>;
/**
 * Create promise can be rejected or resolved from the outside
 *
 * @template T
 * @param {ICustomPromiseCreator<T>} [customPromiseCreator=createCustomPromise]
 * @returns {IPromisePendingRejectable<T>}
 */
export declare const createPromisePendingRejectable: <T, E extends MaybeError = void>(customPromiseCreator?: ICustomPromiseCreator<T, E>) => IPromisePendingRejectable<T, E>;
/**
 * Creates promise in the pending state
 * with a special resolve method
 *
 *
 * @template T
 * @param {IPromisePendingRejectableCreator} [promisePendingRejectableCreator=createPromisePendingRejectable]
 * @returns {IPromisePending<T>}
 */
export declare const createPromisePending: <T, E extends MaybeError = void>(promisePendingRejectableCreator?: IPromisePendingRejectableCreator<T, E>) => IPromisePending<T>;
/**
 * Resolves promise pending with a value passed
 * in the arguments.
 *
 * @template T
 * @param {IPromisePending<T>} promisePending
 * @param {T} value
 */
export declare const resolvePromisePending: <T>(promisePending: IPromisePending<T>, value: T) => void;
/**
 * By a native promise it creates a rejectable promise.
 *
 * @export
 * @template T
 * @template E
 * @param {Promise<T>} nativePromise
 * @returns {IPromisePendingRejectable<T, E>} - promise which flow can be stopped
 */
export declare function createRejectablePromiseByNativePromise<T, E extends MaybeError = void>(nativePromise: Promise<T>): IPromisePendingRejectable<T, E>;
/**
 * By a native promise it creates a cancellable promise.
 *
 * @export
 * @template T
 * @template E
 * @param {Promise<T>} nativePromise
 * @returns {IPromiseCancellable<T, E>} - promise which flow can be stopped
 */
export declare function createCancellablePromiseByNativePromise<T, E extends Error = Error>(nativePromise: Promise<T>): IPromiseCancellable<T, E>;
