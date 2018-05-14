// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the first item matching `valueToRemove` removed
// TIP: Use the .indexOf() method

function remove(arr, valueToRemove) {
  let index = arr.indexOf(valueToRemove);
  return index > 0 ? arr.slice(0, index).concat(arr.slice(index + 1)) : arr; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var numbers1 = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNumbers1 = remove(numbers1, 2);
var newNames = remove(names, "Ashleigh");

console.log(newNumbers);
console.log(newNumbers1);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3]
  [Irina, Mozafar]
*/
