/**
 * Write a function called recursiveRange which accepts a
 * number and adds up all the numbers from 0 to the number
 * passed to the functions.
 */

 exports.recursiveRange = (num) => {
     if (num === 0) return num;
     return num + this.recursiveRange(num - 1);
 };