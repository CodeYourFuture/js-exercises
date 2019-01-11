// Write a function that replaces an element in an array
// The function must:
// - get the index of the first item matching `valueToReplace`
// - insert `newValue` at that index
// - NOT change the original array
// - return a new array with the replacement value inserted
function firstPartOfArr(arr, index) {
  return arr.slice(0, index);
}

function lastPartOfArr(arr, index) {
  return arr.slice(index + 1, arr.length);
}

function replace(arr, valueToReplace, newValue) {
  let replacedArr = [];
  let removedIndex = arr.indexOf(valueToReplace);
  let replacedArrFirst = firstPartOfArr(arr, removedIndex);
  replacedArr[removedIndex] = newValue;
  let replacedArrLast = lastPartOfArr(arr, removedIndex);
  return replacedArrFirst.concat(replacedArr[removedIndex], replacedArrLast);
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace(numbers, 3, 2);
var newNames = replace(names, "Ashleigh", "Rares");

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
  [Irina, Rares, Mozafar]
*/
