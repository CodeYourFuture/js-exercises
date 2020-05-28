// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the item removed
// - remove the item at the specified index

function remove(arr, index) {
  let arr1 = arr.slice(0, index); 
  let arr2 = arr.slice(index + 1);
  return arr1.concat(arr2); // complete this statement
}

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
