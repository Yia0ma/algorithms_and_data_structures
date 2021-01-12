// Test all challenges here.

const {bubbleSort} = require("./sort_algorithms/bubbleSort");
const {selectionSort} = require("./sort_algorithms/selectionSort");

const arr = [10, 5, 3, 8, 1];

selectionSort(arr);

console.log(arr);