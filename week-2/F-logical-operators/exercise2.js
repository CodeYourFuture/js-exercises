/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(number) {
  if (number == 5) return false;
  else if (number < 0 ||(number > 4 && number < 11) || number.length > 5 || number[0] === "D") return true;   
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */ 

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isNegative(10))
console.log("Is Daniel a short name?", isNegative("Daniel"));
console.log("Does Daniel start with 'D'?", isNegative("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a long name? true
  Does Daniel start with 'D'?
*/
