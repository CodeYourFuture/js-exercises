// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement

function validate(num) {
  if (isAnumber(num) && isPositive(num) && lessThanEqual(num)) {
    return true;
  } else {
    return false;
  }
}
function isAnumber(num) {
  return typeof num === "number";
}

/*
function isAnumber(num) {
  if (isNaN(num)) {
    return false;
  } else {
    return true;
  }
}*/

function isPositive(num) {
  return num > 0;
}

function lessThanEqual(num) {
  return num <= 100;
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
