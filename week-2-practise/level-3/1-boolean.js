// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?   /   "false" is a string, not boolean.
// Leave comments above your changes to explain

var isHappy = false; // "isHappy" variable was assigned to a string "false" instead of a boolean <false>.

if (isHappy == true) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
