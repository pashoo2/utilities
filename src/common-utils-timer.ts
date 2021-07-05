/**
 * Returns a Promise which will throw after a certain amount of time passed.
 *
 * @export
 * @param {number} timeoutMs
 * @param {Error} [error]
 * @returns {Promise<Error>}
 */
export function timeout(timeoutMs: number, error?: Error): Promise<Error> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(error || new Error('Time out'));
    }, timeoutMs);
  });
}

/**
 * Returns a Promise that will resolve after a passed amount of milliseconds.
 *
 * @export
 * @param {number} delayMs
 * @returns {Promise<void>}
 */
export function delay(delayMs: number): Promise<void> {
  return new Promise(res => {
    setTimeout(() => {
      res();
    }, delayMs);
  });
}
