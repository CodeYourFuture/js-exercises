// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the first item matching `valueToRemove` removed
// TIP: Use the .indexOf() method

function firstPartOfArr(arr, removedIndex) {
  return arr.slice(0, removedIndex);
}

function lastPartOfArr(arr, removedIndex) {
  return arr.slice(removedIndex + 1, arr.length);
}

function remove(arr, valueToRemove) {
  let removedIndex = arr.indexOf(valueToRemove);
  return firstPartOfArr(arr, removedIndex).concat(
    lastPartOfArr(arr, removedIndex)
  ); // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 3);
var newNames = remove(names, "Ashleigh");

console.log(newNumbers);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3]
  [Irina, Mozafar]
*/
