/**
 * Implementation of a binary search.
 */

 exports.binarySearch = (arr, val) => {
     let left = 0;
     let right = arr.length - 1;

     while (left <= right) {
         let index = Math.floor((left + right) / 2);
         if (arr[index] === val) return index;
         if (arr[index] > val) right = index - 1;
         else left = index + 1;
     }
     return -1;
 };