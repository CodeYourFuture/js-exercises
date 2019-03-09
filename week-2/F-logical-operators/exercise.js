/*
  Logical Operators
  ---------------------------------
  Using logical operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

// Do not change these two statements
var htmlLevel = 8;
var cssLevel = 4;

// Finish the statements below to check whether HTML, CSS knowledge are above 5
// (hint: use the comparison operator from before)
var htmlLevelAbove5;
var cssLevelAbove5;

// Finish the next two statements
// Use the previous variables and logical operators
// Do not "hardcode" the answers
var cssAndHtmlAbove5;
var cssOrHtmlAbove5;

/* 
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is Html knowledge above 5?", htmlLevelAbove5);
console.log("Is CSS knowledge above 5?", cssLevelAbove5);
console.log("Is Html And CSS knowledge above 5?", cssAndHtmlAbove5);
console.log("Is either Html or CSS knowledge above 5?", cssOrHtmlAbove5);

module.exports = {
  cssAndHtmlAbove5,
  cssOrHtmlAbove5
};

/* 
  EXPECTED RESULT
  ---------------
  Is Html knowledge above 5? true
  Is CSS knowledge above 5? false
  Is Html And CSS knowledge above 5? false
  Is either Html or CSS knowledge above 5? true
*/
