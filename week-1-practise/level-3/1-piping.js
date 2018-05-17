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

var startingValue = 5;

function piping(x) {
  return startingValue * 2 + 10;
}
var result = piping(startingValue);

/* DO NOT EDIT BELOW THIS LINE */
var result = format(add(multiply(2, startingValue), 10));
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

console.log("Expected result: 20.00");
console.log("Actual result: " + result);
