// Write a function that replaces an element in an array
// The function must:
// - get the index of the first item matching `valueToReplace`
// - insert `newValue` at that index
// - NOT change the original array
// - return a new array with the replacement value inserted

function replace(arr, valueToReplace, newValue) {
  arr1 = arr.slice(0, arr.indexOf(valueToReplace));
  arr1.push(newValue);
  arr2 = arr.slice(arr.indexOf(valueToReplace+1));
  arr3 = arr1.concat(arr2)
  return arr3; // complete this statement
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
