// Write a function that replaces an element in an array
// The function must:
// - NOT change the original array
// - return a new array with the replacement value inserted
// - insert the replacement value at the provided index
function replace1(arr, index, value) {
  var r = arr.slice(0, index);
  r.push(value);
  var y = arr.slice(index + 1);
  return r.concat(y);
} /* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace1(numbers, 1, 2);
var newNames = replace1(names, 2, "Rares");

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
