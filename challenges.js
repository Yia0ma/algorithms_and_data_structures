/* 
    Anagrams.

    Given two strings, write a function to determine if
    the second string is an anagram of the first.
    An anagram is a word, phrase, or name formed by
    rearranging the letters of another.
*/

/*
    Using Frequency Counter Pattern.

        1. Create 2 objects in which key would represent
        each character in strings and values - how many
        times character occur in the string.
        2. Itterate through each string and fill up
        the objects with data desribed above.
        3. Itterate through either one of objects and
        check if both objects contain the same amount
        of occurancies.
*/

// Return Frequency Counter Object.
function getFrequencyCounter(str) {
    const frequencyCounter = {};
    /*
        If key doesnt exist in an object return set value to one, else add one to value.
     */
    for (let char of str)
        frequencyCounter[char] ? frequencyCounter[char] += 1 : frequencyCounter[char] = 1;
    
    return frequencyCounter;
}

function validAnagram(str1, str2) {
    // If length of strings differs no need to check them.
    if (str1.length !== str2.length)
        return false;

    const frequencyCounter1 = getFrequencyCounter(str1);
    const frequencyCounter2 = getFrequencyCounter(str2);

    /*
        If key doesn't exist in one of the objects or
        value of the same key differs return false.
    */
    for (let key in frequencyCounter1) {
        if (!key in frequencyCounter2)
            return false;
        if (frequencyCounter1[key] !== frequencyCounter2[key])
            return false;
    }

    return true;
}

/* 
    Implement a function called countUniqueValues, which 
    accepts a sorted array, and counts the unique values
    in the array. There can be negative numbers in the
    array, but it will always be sorted.
*/

/*
    1. If length of array equal to zero return 0.
    2. If length of arrat equal to 1 return 1.
    3. Create 2 pointers to beginning of an array.
    4. While second pointer is less or equal to last
    index of an array.
        4.1. Check if numbers are different in array
        to which pointers point to.
        4.2. If numbers are different move first pointer
        1 index and replace with second pointers value.
    5. Increase second pointer index by 1.
*/

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return 1;

    let pointer1 = 0;
    let pointer2 = 1;

    while (pointer2 <= arr.length - 1) {
        if (arr[pointer1] !== arr[pointer2]) {
            pointer1++;
            arr[pointer1] = arr[pointer2];
        }
        pointer2++;
    }

    return pointer1 + 1;
}

console.log(countUniqueValues([1,1,2,3,3,4]));