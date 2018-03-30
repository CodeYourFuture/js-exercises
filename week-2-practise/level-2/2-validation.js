// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement

function validate(num) {}

function isNumber(value) {
  return typeof value === "number";
}
var value = [10, 15, 19, "hello", "fine", 1 / 2];
console.log(isNumber(19));

function isPositiveNumber(value) {
  return value > 0;
}
console.log(isPositiveNumber(-3));

function isLessThanOrEquallToHundred(values) {
  return values <= 100;
}

console.log(isLessThanOrEquallToHundred(120, 90, 150));

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(validate(10));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-12));
console.log(validate("16"));

/* 
  EXPECTED RESULT
  ---------------
  true
  true
  false
  false
  false
*/
