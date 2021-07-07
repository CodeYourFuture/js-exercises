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

function add(num1,num2) {
  const sum = Math.round((num1+num2)*10)/10;
  return sum;
}

function multiply(num1,num2) {
  const multply= num1*num2;
  return multply;
}

function format(num) {

   return "£"+num;

}

const startingValue = 2;

// Why can this code be seen as bad practice? Comment your answer.
//we need to create a new value for each calculation, this way makes coding so long
let value1 = add(startingValue,10);
let value2 = multiply(value1,2);
let value3= format(value2)
let badCode = value3;


/* BETTER PRACTICE */
 let goodCode = format(multiply(add(startingValue,10),2));
 

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
      status = "PASSED"
  } else {
      status = "FAILED"
  }

  console.log(`${test_name}: ${status}`)
}

test('add function - case 1 works', add(1,3) === 4)
test('add function - case 2 works', add(2.4,5.3) === 7.7)
test('multiply function works', multiply(2,3) === 6)
test('format function works', format(16) === "£16")
test('badCode variable correctly assigned', badCode === "£24")
test('goodCode variable correctly assigned', goodCode === "£24")