// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain

var isHappy = false;// "false" is not the same as false.

if (isHappy === true) { // when we use === value and type of both sides of asignment will be considered.
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
