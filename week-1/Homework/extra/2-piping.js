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

function add(firstNum ,secondNum) {
  const addition = firstNum +secondNum;// adds to number
  const roundify = Math.round(addition*100)/100;// rounds the result
   console.log(roundify);// checks the answer
  return roundify;// returns the rounded answer
    
}
 
function multiply(num1,num2) {// input 2 number
  let multipication = num1 * num2;// multiplays them
  return multipication;// returns the result
}

function format(number) {// inputs a number 
 const stringify = number.toString(); // converts number to string 
 const formater = "£"+stringify; // adds GBP symbol to to the stringified number.
 return formater; // returns the final result
}

const startingValue = 2

// Why can this code be seen as bad practice? Comment your answer.

 /*guys at Capgemini showed me this please explain this part onwards to me*/
let badCode = format(multiply(add(10, startingValue), 2));

 
//add(10,startingValue)
//multiply(add(10,startingValue),2)
//format(multiply(add(10,startingValue),2))

/* BETTER PRACTICE */

/*this was my attempts but its not right*/
//let goodCode = new obj();
  //goodCode.add(10,startingValue);
  //goodCode.multiply(2);
  //goodCode.format();
  
  


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