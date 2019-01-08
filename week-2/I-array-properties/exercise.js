/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/

function isEmpty(arr) {
  // complete this statement
  if (arr === undefined || arr.length == 0) return true;
  else return false;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = [];
var x;

console.log(isEmpty(numbers));
console.log(isEmpty(names));
console.log(isEmpty(x));

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/
