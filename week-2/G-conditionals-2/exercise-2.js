/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the grade is less than 50 then return "fail"
  - if 50 or higher then return "pass"

*/

function studentPassed(grade) {}

/* 
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  ---------------------------*/
var grade1 = 49;
var grade2 = 50;
var grade3 = 100;

console.log("'" + grade1 + "': " + studentPassed(grade1));
console.log("'" + grade2 + "': " + studentPassed(grade2));
console.log("'" + grade3 + "': " + studentPassed(grade3));

module.exports = {
  studentPassed
};

/* 
EXPECTED RESULT
---------------
'49': failed
'50': passed
'100': passed
*/
