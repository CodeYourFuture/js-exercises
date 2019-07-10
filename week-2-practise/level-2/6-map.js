// You have been given an array of percentages
// 1. Write a function that formats the numbers into a string with the percentage symbol appended e.g. "10%"
// 2. Declare a new array, `percentagesFormatted`, containing
//    - each item in `percentages` formatted by your function

var percentages = [1, 23, 92, 18];
/* this function take a value and add it a string % */

function perc(index) {
  return (index += "%");
}
/* n line 12 the .map () method takes each element of the array (in this case the percentages) and passes 
these elements to the perc function, it will result in the new modification array stored 
in percentagesFormatted */

var percentagesFormatted = percentages.map(perc);

console.log(percentagesFormatted);

/* 
  EXPECTED RESULT
  ---------------
  [1%, 23%, 92%, 18%]
*/
