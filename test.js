// Test all challenges here.

const {bubbleSort} = require("./sort_algorithms/bubbleSort");
const {selectionSort} = require("./sort_algorithms/selectionSort");
const {insertionSort} = require("./sort_algorithms/insertionSort");

const arr = [10, 5, 3, 8, 1];

insertionSort(arr);

console.log(arr);