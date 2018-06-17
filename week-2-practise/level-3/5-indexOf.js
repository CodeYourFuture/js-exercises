// Write a function that replaces an element in an array
// The function must:
// - get the index of the first item matching `valueToReplace`
// - insert `newValue` at that index
// - NOT change the original array
// - return a new array with the replacement value inserted

function replace(arr, valueToReplace, newValue) {
  return arr
    .slice(0, arr.indexOf(valueToReplace))
    .concat(newValue, arr.slice(arr.indexOf(valueToReplace) + 1));
}

//here the arr.indexOf(valueToReplace) = 1,making arr.slice(0,1) = [1];
//adding a new value = which is 2 = [1,2]
// arr.slice(arr.indexOf(valueToReplace + 1)) = 1 + 1 = 2. slicing index 2 from the array producing [3]. Adding it together = [1,2,3].
// complete this statement

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
