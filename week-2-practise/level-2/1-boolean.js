// The code is valid but the program does not produce the expected result
// Why doesn't it work?
// Fix it.

<<<<<<< HEAD
var isNotHappy = "true";

if (isNotHappy) {
  console.log("I am not happy");
} else {
  console.log("I am happy");
=======
var isHappy = "false";

if (isHappy) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
>>>>>>> master
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
