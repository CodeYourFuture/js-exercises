// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code? line 6 must be a boolean
// Leave comments above your changes to explain

var isHappy = false; // I changed the type of input to a boolean (true !== "true"). However, I've changed the if statement after second thought to NOT includes "==" or "===" comparisons.

if (isHappy) {
  //We don't need to declare if a var is equal to a boolian true. In presented case it checks "isHappy" to be true.
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
