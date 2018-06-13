// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement
var num = 10;
function validate(num) {
  return isNumber(num) && isPositive(num) && isLessOrEqual100(num);
}
function isNumber(num) {
 
    return typeof num ==="number";
}

function isPositive(num) {
  return num >= 0;
}
function isLessOrEqual100(num){
  return num <=100;
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
