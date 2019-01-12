// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain

var isHappy = "false";
//the double equal sign checks the value of isHappy. To check the type in addition to the value we us the triple equal
if (isHappy === true) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/