// The code is valid but the program does not produce the expected result
// Why doesn't it work?  
  //it is because of the boolean value is in (" ") as string ("false")
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
