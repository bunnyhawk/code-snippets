/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  const last = funcs[funcs.length - 1];
  const rest = funcs.slice(0, -1);
  return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args));
}

// Updated ES6 version
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

/** 
 * EXAMPLE USAGE
 * function square(num) {
 *   return num * num;
 * }
 * function double(num) {
 *   return num * 2;
 * }
 * function addTen(num) {
 *   return num + 10;
 * }
 * function squareThenDoubleThenAddTen(num) {
 *   return compose(addTen, double, square)(num);
 * }
 * console.log(squareThenDoubleThenAddTen(7)); 
 * Returns 108
 */
