/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  var first =  arr[0]
  return first
}

function last(arr) {
  var lastValue = arr[arr.length-1]
  return lastValue
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

console.log(first(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  Mozafar
*/
