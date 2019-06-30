/*
  Logical Operators
  ---------------------------------
  Using logical operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

// Do not change these two statement
var htmlLevel = 8;
var cssLevel = 4;

// Finish the statement to check whether HTML, CSS knowledge are above 5
// (hint: use the comparison operator from before)
var htmlLevelAbove5 = 10;
var cssLevelAbove5 = 6;

if(htmlLevel < htmlLevelAbove5){ htmlLevelAbove5 = true;}
else{htmlLevelAbove5 = false;}

if(cssLevelAbove5 < cssLevel){ cssLevelAbove5 = true;}
else{cssLevelAbove5 = false;}


// Finish the next two statement
// Use the previous variables and logical operators
// Do not "hardcode" the answers
var cssAndHtmlAbove5 = 6;
var cssOrHtmlAbove5 = 8;

if(cssAndHtmlAbove5 < cssLevel){ cssAndHtmlAbove5 = true;}
else{cssAndHtmlAbove5 = false;}

if(cssOrHtmlAbove5 > cssLevel){ cssOrHtmlAbove5 = true;}
else{cssOrHtmlAbove5 = false;}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is Html knowledge above 5?", htmlLevelAbove5);
console.log("Is CSS knowledge above 5?", cssLevelAbove5);
console.log("Is Html And CSS knowledge above 5?", cssAndHtmlAbove5);
console.log(
  "Is either Html or CSS knowledge above 5?",
  cssOrHtmlAbove5
);

/* 
  EXPECTED RESULT
  ---------------
  Is Html knowledge above 5? true
  Is CSS knowledge above 5? false
  Is Html And CSS knowledge above 5? false
  Is either Html or CSS knowledge above 5? true
*/
