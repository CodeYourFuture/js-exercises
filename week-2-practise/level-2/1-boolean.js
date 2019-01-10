// The code is valid but the program does not produce the expected result
// Why doesn't it work? The value assigned to isHappy was string "false" we have to remove the quotation to make it boolean
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
