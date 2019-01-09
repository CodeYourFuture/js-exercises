// Write a function that replaces an element in an array
// The function must:
// - get the index of the first item matching `valueToReplace`
// - insert `newValue` at that index
// - NOT change the original array
// - return a new array with the replacement value inserted
// Matthew comment: bit hacky. forEach and forLoop are combined so that any looping through the array
// ends at the first index.

function replace(arr, valueToReplace, newValue) {
  var newArray = [];
  arr.forEach(function(item) {
    newArray.push(item);
  });
  var getIndex = newArray.indexOf(valueToReplace);
  for (var i = 0; i < newArray.length; i++) {
    if (i === getIndex) {
      newArray[i] = newValue;
    }
  }

  return newArray;
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
