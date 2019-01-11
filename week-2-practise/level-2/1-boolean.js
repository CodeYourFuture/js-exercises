// The code is valid but the program does not produce the expected result
// Why doesn't it work? the value assigned to the variable isHappy is string it must be aboolean we removed "".
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
