/*
  Predicates
  ---------------------------------
  Write a predicate to predicates
  The variables should have values that match the expected results.
*/

// Finish the predicate function to test if the passed number is negative (less than zero)
function isNegative(number) {}

// Finish the predicate function to test if the passed number is below 9
function isBelow9(number) {}

/*
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var number = 5;
var numberNegative = isNegative(number);
var numberBelow9 = isBelow9(number);
console.log("The number in test is " + number);
console.log("Is the number negative? " + numberNegative);
console.log("Is the number below 9? " + numberBelow9);

module.exports = {
  isNegative,
  isBelow9
};

/*
  EXPECTED RESULT
  ---------------
  The number in test is 5
  Is the number negative? false
  Is the number below 9? true
*/
