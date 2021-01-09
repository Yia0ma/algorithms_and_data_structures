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

/*
    Write a function calle sameFrequency. Given two
    positive integers, find out if the two numbers
    have the same frequency of digits.

    Restrictions:

        Time: O(n)
*/

function sameFrequency(num1, num2) {
    let lookup = {};

    while (num1 % 10 !== 0) {
        let temp = num1 % 10;
        lookup[temp] ? lookup[temp] += 1 : lookup[temp] = 1;
        num1 = Math.floor(num1 / 10);
    }

    console.log(lookup);

    while (num2 % 10 !== 0) {
        let temp = num2 % 10;
        if (!lookup[temp]) {
            return false;
        }
        lookup[temp] -= 1;
        num2 = Math.floor(num2 / 10);
    }

    return true;
}

/*
    Implement a function called, areThereDuplicates which
    accepts a variable number of arguments, and checks
    wheter there are any duplicates among the arguments
    passed in. 

    Restrictions:

        Time: O(n)
        Space: O(n)
*/

function areThereDuplicates(...args) {
    args.sort((a,b) => a > b);
    console.log(args);
    let index1 = 0;
    let index2 = 1;

    while (index2 < args.length) {
        if (args[index1] === args[index2])
            return true;
        index1++;
        index2++;
    }
    return false;
}

/*
    Write a function calle averagePair. Given a sorted
    array of integers and a target average, determine
    if there is a pair of values in the array where the
    average of the pair equals the target average.


*/

function averagePair(arr, avg) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let temp = (arr[i] + arr[j]) / 2;
        if (temp === avg) {
            console.log(arr[i], arr[j]);
            return true;
        }
        if (temp > avg)
            j--;
        else
            i++;
    }
    return false;
}

/*
    Write a functions called isSubsequence which takes
    in two strings and checks whether the characters in
    the first string form a subsequence of the characters
    in the second string.

    Restrictions:

        Time: O(n + m) or Space: O(1)
*/

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    while (j < str2.length) {
        if (str1[i] === str2[j]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}
