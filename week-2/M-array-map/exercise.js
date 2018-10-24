/*
  Array methods - .map()
  -------------------------
  `numbersDoubled` should be an array containing all every value in `numbers` doubled
  Use the .map() method to transform each item in the array
*/

function double(num) {
  return num * 2;
}

var numbers = [1, 2, 3, 4];
var numbersDoubled = numbers.map(double); // complete this statement (use map and the double function)

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbersDoubled);

/* 
  EXPECTED RESULT
  ---------------
  [2,4,6,8]
*/
