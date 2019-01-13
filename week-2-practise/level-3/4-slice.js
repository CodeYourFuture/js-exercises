// Write a function that replaces an element in an array
// The function must:
// - NOT change the original array
// - return a new array with the replacement value inserted
// - insert the replacement value at the provided index
/*function firstPartOfArr(arr, index) {
  return arr.slice(0, index);
}
function lastPartOfArr(arr, index) {
  return arr.slice(index + 1, arr.length);
}*/

var modArr = require("../level-2/4-slice.js");

function replace(arr, index, value) {
  let replacedArrFirst = modArr.firstPartOfArr(arr, index);
  let replacedArrLast = modArr.lastPartOfArr(arr, index);
  return replacedArrFirst.concat(value, replacedArrLast); // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace(numbers, 1, 2);
var newNames = replace(names, 2, "Rares");

console.log(numbers);
console.log(newNumbers);
console.log(names);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3, 3]
  [1, 2, 3]
  [Irina, Ashleigh, Mozafar]
  [Irina, Ashleigh, Rares]
*/
