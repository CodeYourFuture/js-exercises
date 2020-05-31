/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(inputNumber) {
  let result = inputNumber < 0;
  return result;
}
 
function isBetween5and10(inputValue){
  let result=(inputValue > 5) && (inputValue < 10);
  return result;
}

function isShortName(inputName){
  let result=inputName.length < 10;
  return result;
}

function startsWithD(inputName){
  let result = inputName.substring(0,1) === "D";
  return result;
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/
