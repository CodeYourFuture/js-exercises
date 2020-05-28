// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement

function isNumber(v) {
  return typeof v === "number";
}

function isPositive(v) {
  return v > 0;
}

function upTo100(v) {
  return v <= 100;
}

function validate(num) {
  return isNumber(num) && isPositive(num) && upTo100(num);
}

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
