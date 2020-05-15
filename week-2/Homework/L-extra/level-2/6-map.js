// You have been given an array of percentages
// 1. Write a function that formats the numbers into a string with the percentage symbol appended e.g. "10%"
// 2. Declare a new array, `percentagesFormatted`, containing
//    - each item in `percentages` formatted by your function

var percentages = [1, 23, 92, 18];
function formattingNumbers(x) {
  let percentagesAdded = x + "%";
  return percentagesAdded;
}
let percentagesFormatted = percentages.map(formattingNumbers);
console.log(percentagesFormatted);

/*
  EXPECTED RESULT
  ---------------
  [1%, 23%, 92%, 18%]
*/
