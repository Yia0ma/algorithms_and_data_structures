/**
 * Write a recursive function called reverse which
 * accepts a string and returns a new string in reverse.
 */

 exports.reverse = (str) => {
     if (str.length === 1) return str;
     return this.reverse(str.substr(1)) + str[0];
 }