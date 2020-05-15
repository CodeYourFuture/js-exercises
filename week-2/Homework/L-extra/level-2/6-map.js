// You have been given an array of percetages
// 1. Write a function that formats the numbers into a string with the percentage symbol appended e.g. "10%"
// 2. Declare a new array, `percentagesFormatted`, containing
//    - each item in `percentages` formatted by your function

var percentages = [1, 23, 92, 18];
function percentageFormat(array) {
  length = array.length;
  const string = array.join("% ");
  const newArr = string.split(" ");
  newArr[length - 1] = newArr[length - 1] + "%";
  return newArr;
}
percentagesFormatted = percentageFormat(percentages);
console.log(percentagesFormatted);

/*
  EXPECTED RESULT
  ---------------
  [1%, 23%, 92%, 18%]
*/
