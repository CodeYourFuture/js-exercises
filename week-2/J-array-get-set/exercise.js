/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  result= numbers[0];
  return result; // complete this statement
}

function last(arr) {
  result= names[(names.length)-1];
  return result;
 // complete this statement
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
