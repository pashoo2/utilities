"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.timeout = void 0;
/**
 * Returns a Promise which will throw after a certain amount of time passed.
 *
 * @export
 * @param {number} timeoutMs
 * @param {Error} [error]
 * @returns {Promise<Error>}
 */
function timeout(timeoutMs, error) {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            rej(error || new Error('Time out'));
        }, timeoutMs);
    });
}
exports.timeout = timeout;
/**
 * Returns a Promise that will resolve after a passed amount of milliseconds.
 *
 * @export
 * @param {number} delayMs
 * @returns {Promise<void>}
 */
function delay(delayMs) {
    return new Promise(function (res) {
        setTimeout(function () {
            res();
        }, delayMs);
    });
}
exports.delay = delay;
//# sourceMappingURL=common-utils-timer.js.map