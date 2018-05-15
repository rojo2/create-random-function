import lcg from "@rojo2/linear-congruential-generator";

/**
 * Returns a function that generates a pseudo-random number.
 *
 * @param {number} [initialValue=0] - Initial value (also called seed)
 * @returns {Function} - Returns a function that generates pseudo-random numbers based on its initial value
 */
export default function createRandomFunction(initialValue = 0) {
  
  const { linearCongruentialGenerator, MODULUS } = lcg;

  let currentValue = initialValue;

  /**
   * Returns a pseudo-random number.
   *
   * @returns {number} - Returns a value between 0.0 and 1.0 
   */
  return function() {
    currentValue = linearCongruentialGenerator(currentValue);
    return currentValue / MODULUS;
  };

}

