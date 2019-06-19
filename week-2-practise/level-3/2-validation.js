// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is an integer (not a float)
// - is not equal any of the numbers in the array `excludedNums`
// Tip: write other small functions for each requirement

var excludedNums = [6, 14, 91, 111];

function validate(num) {
  if (isNumber(num) && isInt(num) && notEqual(num)) {
    return true;
  } else {
    return false;
  }
}

function notEqual(num) {
  if (excludedNums.includes(num)) {
    console.log("il numero è incluso nell'array");
    return false;
  }
  console.log("il numero non è incluso nell'array");
  return true;
}

function isInt(num) {
  console.log("intero è " + Number.isInteger(num));
  return Number.isInteger(num);
}

function isNumber(num) {
  console.log("il type of è " + typeof num);
  return typeof num === "number";
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
