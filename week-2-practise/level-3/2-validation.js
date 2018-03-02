// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is an integer (not a float)
// - is not equal any of the numbers in the array `excludedNums`
// Tip: write other small functions for each requirement

var excludedNums = [6, 14, 91, 111];

function number(num) {
  return typeof num === "number";
}
function isInterger(num) {
  return num % 1 === 0;
}
function isNotEqual(num) {
  return (
    num != excludedNums[0] &&
    num != excludedNums[1] &&
    num != excludedNums[2] &&
    num != excludedNums[3]
  );
}
function validate(num) {
  if (number(num) && isInterger(num) && isNotEqual(num)) {
    return true;
  } else {
    return false;
  }
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
  true
  false
*/
