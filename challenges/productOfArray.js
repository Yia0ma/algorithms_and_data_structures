/**
 * Write a function named productOfArrat which takes in 
 * an array of numbers and returns the product of them all
 */

 module.exports.productOfArray = (nums) => {
     if (nums.length === 0) return 1;
     return nums.pop() * this.productOfArray(nums);
 }