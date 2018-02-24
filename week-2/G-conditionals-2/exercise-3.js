/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the mark is 80 or higher then the grade is "A"
  - if the mark is between 60 and 80 then the grade is "B"
  - if the mark is between 50 and 60 then the grade is "C"
  - Otherwise the grade is "F"
*/

function calculateGrade(mark) {
  if (mark >= 80) {
    return "A";
  } else if (mark >= 60 && mark < 80) {
    return "B";
  } else if (mark >= 50 && mark < 60) {
    return "C";
  } else {
    return "F";
  }
}

/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var grade1 = 49;
var grade2 = 90;
var grade3 = 70;
var grade4 = 55;

console.log("'" + grade1 + "': " + calculateGrade(grade1));
console.log("'" + grade2 + "': " + calculateGrade(grade2));
console.log("'" + grade3 + "': " + calculateGrade(grade3));

/* 
  EXPECTED RESULT
  ---------------
  '49': F
  '90': A
  '70': B
  '55': C
  */
