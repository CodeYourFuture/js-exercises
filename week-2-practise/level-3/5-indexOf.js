// Write a function that replaces an element in an array
// The function must:
// - get the index of the first item matching `valueToReplace`
// - insert `newValue` at that index
// - NOT change the original array
// - return a new array with the replacement value inserted

function replace(arr, valueToReplace, newValue) {
  let index = arr.indexOf(valueToRemove);
  if (index >= 0){
    let part1 = arr.slice(0, index);
    let part2 =arr.slice(index + 1);
    return part1.concat(newvalue, part2);

  }
  return; // complete this statement
}
function remove(array, element) {
  return array.filter(e => e !== element);
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace(arr, 3, 2);
var newNames = replace(arr, "Ashleigh", "Rares");

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
