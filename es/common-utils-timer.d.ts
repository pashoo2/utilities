/**
 * Returns a Promise which will throw after a certain amount of time passed.
 *
 * @export
 * @param {number} timeoutMs
 * @param {Error} [error]
 * @returns {Promise<Error>}
 */
export declare function timeout(timeoutMs: number, error?: Error): Promise<Error>;
/**
 * Returns a Promise that will resolve after a passed amount of milliseconds.
 *
 * @export
 * @param {number} delayMs
 * @returns {Promise<void>}
 */
export declare function delay(delayMs: number): Promise<void>;
