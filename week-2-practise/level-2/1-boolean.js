// The code is valid but the program does not produce the expected result
// Why doesn't it work? false was declared as a string but it should be a boolean, so I removed "" .
// Fix it.

var isHappy = false;

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
