// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement

function validate(num) {
  return isNumber(num) && isPositiveNum(num) && lessOrEquals(num);
}
function isNumber(num){
  return (typeof num === "number") ? true : false ;
}

function isPositiveNum(num){
  return num >=0 ? true : false;
}

function lessOrEquals(num){
  return num <= 100 ? true : false;
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
