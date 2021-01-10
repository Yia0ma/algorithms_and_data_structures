/**
 * Write a recursive function called fib which accepts a
 * number and returns the nth number in the Fubonnaci
 * sequence.
 */

exports.fib = (num) => {
     if (num <= 2) return 1;
     return this.fib(num-1) + this.fib(num-2);
};