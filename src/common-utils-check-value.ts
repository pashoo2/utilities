/**
 * Whether a value is an error.
 *
 * @param {unknown} v
 * @returns {v is Error}
 */
export const checkIsError = (v: unknown): v is Error => v instanceof Error;
