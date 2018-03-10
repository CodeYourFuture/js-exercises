// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement

function isNumber(num) {
  if (typeof num === "number") {
    return true;
  }
  return false;
}

function isPositive(num) {
  return num >= 0;
}

function isLessThanOrEqualTo100(num) {
  if (num <= 100) {
    return true;
  }
  return false;
}

function validate(num) {
  return isPositive(num) && isLessThanOrEqualTo100(num) && isNumber(num);
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
