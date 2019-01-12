// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code? The boolean value of false was a string which was wrong.
// Leave comments above your changes to explain.i removed the quotation mark

var isHappy = false;

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
