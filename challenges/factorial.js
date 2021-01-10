/**
 * Write a function named factorial which accepts a number 
 * and returns the factorial of that number.
 */

 module.exports.factorial = (num) => {
     if (num === 1 || num === 0) return 1;
     return num * this.factorial(num - 1);
 }