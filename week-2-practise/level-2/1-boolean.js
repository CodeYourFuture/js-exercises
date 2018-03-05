// The code is valid but the program does not produce the expected result
// Why doesn't it work?
// Fix it.

var isHappy = false; /* before there was a string value. 
if tests conditions but they have to be same type of value. 
for exemple string === string // number === number // Boolean===Boolean*/
if (isHappy) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
