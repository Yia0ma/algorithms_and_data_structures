/**
 * Write a function called power which accepts a base and
 * an exponent. The function should return the power of
 * the base to the exponent.
 */

 exports.power = (base, exponent) => {
     if (exponent === 0) return 1;
     return base * this.power(base, exponent - 1);
 };