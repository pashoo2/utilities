/**
 * Is it a non arrow function stringified
 *
 * @export
 * @param {string} valueStringified
 * @returns {boolean}
 */
export function isNonArrowFunctionStringified(
  valueStringified: string
): boolean {
  return /^(?:async)*[ ]*function[ ]*(?:[a-zA-Z]\w*)*[ ]*\(.*\)[ ]*/.test(
    valueStringified
  );
}

/**
 * Is it an arrow function stringified
 *
 * @export
 * @param {string} valueStringified
 * @returns {boolean}
 */
export function isArrowFunctionStringified(valueStringified: string): boolean {
  return /^(?:async)*[ ]*\(.*\)[ ]*=>[ ]*/.test(valueStringified);
}

/**
 * Is it a browser's built-in function.
 *
 * @export
 * @param {Function} f
 * @returns {boolean}
 */
export function isNativeFunction(f: Function): boolean {
  return (
    typeof f === 'function' &&
    (f === Function.prototype ||
      /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/.test(
        String(f)
      ))
  );
}

/**
 * Is is an arrow function
 *
 * @export
 * @param {Function} fn
 * @returns {boolean}
 */
export function isArrowFunction(fn: Function): boolean {
  if (typeof fn !== 'function') return false;
  if (isNativeFunction(fn)) {
    return false;
  }
  return (
    fn.prototype === undefined &&
    /^[^{]+?=>/.test(Function.prototype.toString.call(fn))
  );
}

/**
 * Returns whether the argument is a non native function.
 *
 * @export
 * @param {unknown} value
 * @returns {value is (...args: unknown[])}
 */
export function isNonNativeFunction(
  value: unknown
): value is (...args: unknown[]) => unknown {
  return typeof value === 'function' && !isNativeFunction(value);
}

/**
 * Create a function from a serialized function
 *
 * @export
 * @param {string} functionSerialized
 * @returns {(...args: any[]) => any}
 */
export function createFunctionFromSerializedFunction(
  functionSerialized: string
): (...args: any[]) => any {
  // eslint-disable-next-line no-eval
  try {
    // TODO - ReDoS attacks and make it create function in a sandbox
    const functionCreatedFromString = eval(`(${functionSerialized})`);
    if (!functionCreatedFromString) {
      throw new Error('Failed to create function by it body');
    }
    return functionCreatedFromString;
  } catch (err) {
    throw new Error(
      `Faild to parser the function serialized ${functionSerialized}`
    );
  }
}

/**
 * Checks whether functions bodies are equal.
 *
 * @export
 * @param {Function} fn1
 * @param {Function} fn2
 * @returns {boolean}
 */
export function isEqualFunctions(fn1: Function, fn2: Function): boolean {
  if (fn1 === fn2) {
    return true;
  }
  if (fn1.length !== fn2.length) {
    return false;
  }
  if (fn1.name !== fn2.name) {
    return false;
  }
  if (isArrowFunction(fn1) !== isArrowFunction(fn2)) {
    return false;
  }
  if (isNativeFunction(fn1) || isNativeFunction(fn2)) {
    // native functions which not equal each other not equal at all
    return false;
  }
  // compare them stringified
  return String(fn1).trim() === String(fn2).trim();
}
