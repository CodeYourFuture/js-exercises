// The code is valid but the program does not produce the expected result
// Why doesn't it work?  The value of the var isHappy is expected to be a boolean, in this case it is a string
// Fix it.    Just take off the quotations mark. The typeof below is just a double check of the type for us

var isHappy = false;

if (isHappy) {
  console.log("I am happy")
  console.log(typeof isHappy);
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/