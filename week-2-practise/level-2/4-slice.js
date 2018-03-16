// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the item removed
// - remove the item at the specified index

function remove(arr, index) {
  return arr.slice(0, arr.length - 1); // complete this statement
}
var arr = ["Irina", "Ashleigh", "Mozafar", "Daniel"];
var newArr = remove(arr, 3);
console.log(newArr);

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNames = remove(names, 1);

console.log(newNumbers);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2]
  
  [Irina, Mozafar]
*/
