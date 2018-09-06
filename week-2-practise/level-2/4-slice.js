// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the item removed
// - remove the item at the specified index

function remove(arr, index) {
   a=arr.slice(0, index);
 // concat(
    b=arr.slice(index+1, arr.length); // complete this statement
  return a.concat(b);
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3, 4, 5, 6];
var names = ["Irina", "Ashleigh", "Mozafar", "a", "b", "c"];

var newNumbers = remove(numbers, 4);
var newNames = remove(names, 3);

console.log(newNumbers);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2]
  [Irina, Mozafar]
*/
