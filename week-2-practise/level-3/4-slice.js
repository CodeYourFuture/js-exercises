// Write a function that replaces an element in an array
// The function must:
// - NOT change the original array
// - return a new array with the replacement value inserted
// - insert the replacement value at the provided index

function replace(arr, index, value) {
<<<<<<< HEAD
  arr.splice(index, 1, value);
  return arr;
=======
  return; // complete this statement
>>>>>>> master
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

<<<<<<< HEAD
var newNumbers = replace(numbers, 1, 2);
var newNames = replace(names, 2, "Rares");
=======
var newNumbers = replace(arr, 1, 2);
var newNames = replace(arr, 2, "Rares");
>>>>>>> master

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
