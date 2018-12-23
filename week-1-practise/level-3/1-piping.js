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
//Calling all the functions in a one line only.
var result = format(add(multiply(startingValue, 2), 10));

/*
  Broke the code into pieces to understand each step :D
  
  var startingValue = 5;
  startingValue = multiply(startingValue, 2);
  startingValue = add(startingValue, 10);
  startingValue = format(startingValue);
  var result = startingValue;
/*




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
