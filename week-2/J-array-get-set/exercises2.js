/*
  Array setters
  -------------
  WITHOUT changing the array literal declaration,
  - assign the number 4 to the end of this array
  - change the first value in the array to the number 1
*/

var numbers = [2, 2, 3]; // Don't change this array literal declaration

numbers[0] = 1;
numbers = numbers.concat(4);
/* 
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);

module.exports = {
  numbers
};

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4]
*/
