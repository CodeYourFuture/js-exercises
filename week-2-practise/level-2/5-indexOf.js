// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the first item matching `valueToRemove` removed
// TIP: Use the .indexOf() method

function remove(arr, valueToRemove) {
  var getIndex = 0;
  if (arr.indexOf(valueToRemove) === -1) {
    getIndex = arr.indexOf(arr[valueToRemove]);
  } else {
    getIndex = arr.indexOf(valueToRemove);
  }
  var newArray = [];
  arr.forEach(function(value, index) {
    if (index != getIndex) {
      newArray.push(value);
    }
  });

  return newArray;
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNames = remove(names, "Ashleigh");

console.log(newNumbers);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3]
  [Irina, Mozafar]
*/
