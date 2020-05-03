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

function add(num1, num2) {
  //good practice to store it in variable first, if it's complicated
  return (num1 * 10 + num2 * 10) / 10;
  // the fix above is valid,
  //you can use parse float: rtead here about it :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  //numbers in Js are treated as decimal floating numbers
  //Here you can read more about it
  //http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
}

function multiply(num1, num2) {
  return num1 * num2;
}

function format(num) {
  return "£" + num;
}

const startingValue = 2;

// Why can this code be seen as bad practice? Comment your answer.
let badCode = format(multiply(add(startingValue, 10), 2));
//complicated to read, hard to debug, hard to upgrade

/* BETTER PRACTICE */

//either new functions, or set of variables
let addedAmount = add(stringExample, 10);
let multiplayedAmount = multiply(addedAmount, 2);
let goodCode = format(multiplayedAmount);

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
//#endregion Ex2_e_solved

//#endregion
