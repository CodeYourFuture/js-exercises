/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(number) {
  return number < 0;
}
function isBetween5and10(number) {
  return number > 5 && number <= 10;
}
function isLessThan8Characters(name) {
  return name.length < 8;
}
function startsWithD(name) {
  return name.startsWith("D");
}
/* 
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log(
  "Is 'Daniel' less than 8 characters long?",
  isLessThan8Characters("Daniel")
);
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

module.exports = {
  isNegative,
  isBetween5and10,
  isLessThan8Characters,
  startsWithD
};

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is 'Daniel' less than 8 characters long? true
  Does Daniel start with 'D'?
*/
