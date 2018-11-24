// The code is valid but the program does not produce the expected result
// Why doesn't it work? Because everything With a "Value" is  True and "false" is sting with value here
// Fix it. to fix it we sholde just remove the strings ""

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
