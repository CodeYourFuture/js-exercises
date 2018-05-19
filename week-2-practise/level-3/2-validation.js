// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is an integer (not a float)
// - is not equal any of the numbers in the array `excludedNums`
// Tip: write other small functions for each requirement

var excludedNums = [6, 14, 91, 111];

function validate(num) {
  if (typeof num == "number") {
    return isAnum(num);
  } else return false;
}

function isAnum(num) {
  if (Number.isInteger(num)) {
    return isNotInTheList(num);
  } else return false;
}

function isNotInTheList(num) {
  for (var i = 0; i < excludedNums.length; i++) {
    if (excludedNums[i] == num) {
      return false;
    }
  }
  return true;
}

console.log(isNotInTheList(91));

// var excludedNums = [6, 14, 91, 111];

// function isWholenum(num) {
//   if (excludedNums.includes(num) == num) {
//     return false;
//   } else return true;
// }

// console.log(validate(6));
// console.log(validate(10.5));
// console.log(validate(101));
// console.log(validate(-91));
// console.log(validate("16"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
  true
  false
*/
