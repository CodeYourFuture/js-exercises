/* 
You have been given an array of UK currency pound. 
Write a function that formats the numbers into a string with a "£" sign before.
Declare a new array, `poundWithSign`.
---.map()---
*/

var pounds = [55.99, 104.99, 80.99, 3.99, 14.99];

function finance(number) {
  return "£" + number;
}

var poundWithSign = pounds.map(finance);

console.log(poundWithSign);

/*
  EXPECTED RESULT
  
  [ '£55.99', '£104.99', '£80.99', '£3.99', '£14.99']
*/
