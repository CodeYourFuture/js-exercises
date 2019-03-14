// The code is valid but the program does not produce the expected result
// Why doesn't it work?
// Fix it.

var isHappy = "false";
var isHappy = "true";

if (isHappy) {
  console.log("I am not happy");
} else {
  console.log("I am happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
