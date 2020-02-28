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
console.clear();
function add( a, b) {
  let sum = a + b; // 2.4 + 5.3 = 7.69999999
  let roundNumber = Math.round(sum * 10)/10; // 7.6999999 * 10 = 76.99999  >>  round (76.99999) = 77  >> 77 / 10 = 7.7
  return roundNumber;
}

function multiply( a, b) {
  let multiple = a * b;
  return multiple;
}

function format(number) {
  let poundFormat = `£${number}`;
  return poundFormat;
}

const startingValue = 2

// Why can this code be seen as bad practice? Comment your answer.
// I think this code is too complexe becuse it  used nested functions and it's too hard for others and it's not readable 
let badCode = format(multiply(add(startingValue,10),2)); 

/* BETTER PRACTICE */
let addNumber = add(startingValue,10);
let multipleNumber = multiply(addNumber,2);
let goodCode = format(multipleNumber);

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