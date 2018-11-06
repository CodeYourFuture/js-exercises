// The code is valid but the program does not produce the expected result
// Why doesn't it work? "false" is strim but false is value
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
