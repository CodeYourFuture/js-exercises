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
//const pipe = (multiply, add, format) => (...args) =>
//multiply(add(format(...args)));
//const pipe = (multiply, add, format);
//const pipe = (multiply, add);

var startingValue = 5;
//const result = pipe(multiply(startingValue, 2), add(10), format);
//const result = pipe(multiply, add, format);
//const result = pipe(multiply, add);
var result = format(add(multiply(startingValue, 2), 10));

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

console.log("Expected result: 20.00");
console.log("Actual result: " + result);
