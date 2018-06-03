/*
  PIPING FUNCTIONS
  ================
  Using the provided functions:
  - multiply `startingValue` by 2
  - add 10
  - format
  - assign to the variable `result`

  As a learning exercise (you wouldn't do this normally), do all of the above in 1 line of code 
*/


/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function format(num) {
  return "£" + num.toFixed(2);
}
var startingValue = 5;




let result = format(add(multiply(2,startingValue),10));
               

 multiply(5,2) | add(5,10) | format;
console.log("Expected result: 20.00");
console.log("Actual result: " + result);
