/*
  PIPING FUNCTIONS
  ================
  1. Write 3 functions:
  - one that adds 2 numbers together
  - one that multiplies 2 numbers together
  - one that formats a number so it's returned as a string with a £ sign before it (e.g. 20 -> £20)

  2. Using the variable startingValue as input, perform the following operations using your functions all
  on one line (assign the result to the variable badCode):
  - add 10 to startingValue
  - multiply the result by 2
  - format it
  
  3. Write a more readable version of what you wrote in step 2 under the BETTER PRACTICE comment. Assign
  the final result to the variable goodCode
*/

function add(a, b) {
  let total = a + b;
  let total1 = parseFloat(total.toFixed(1));
  console.log(total1);
  return total1;
}

function multiply(a, b) {
  return a * b;
}

function format() {
  let number = 16;
  console.log("£" + number);
  return "£" + number;
}

let changedValue = add(10);
let changeAnotherValue = multiply(2);
const startingValue = ((2 + changedValue) * changeAnotherValue).toString();

let formatValue = "£" + startingValue;
console.log(startingValue);

// function add() function multiply() function format();

// Why can this code be seen as bad practice? Comment your answer.
// the name indicates the value might change therefore, const is not an ideal way to declare a startingValue, let is a better way.

let badCode = 4;

/* BETTER PRACTICE */

let goodCode = 5;

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("add function - case 1 works", add(1, 3) === 4);
test("add function - case 2 works", add(2.4, 5.3) === 7.7);
test("multiply function works", multiply(2, 3) === 6);
test("format function works", format(16) === "£16");
test("badCode variable correctly assigned", badCode === "£24");
test("goodCode variable correctly assigned", goodCode === "£24");
