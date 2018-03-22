/*
  Predicates
  ---------------------------------
  Write a predicate to predicates
  The variables should have values that match the expected results.
*/

function isNegative(number) {
  return number < 0;
}

function isBetweenZeroAnd10(number) {
  return number >= 0 && number <= 10;
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var number = 5;
var numberNegative = isNegative(number);
var numberBetweenZeroAnd10 = isBetweenZeroAnd10(number);
console.log("The number in test is " + number);
console.log("Is the number negative? " + numberNegative);
console.log("Is the number between 0 and 10? " + numberBetweenZeroAnd10);

/* 
  EXPECTED RESULT
  ---------------
  The number in test is 5
  Is the number negative? false
  Is the number between 0 and 10? true
*/
