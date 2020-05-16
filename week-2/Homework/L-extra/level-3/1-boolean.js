// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain
// My comment : Firstly we cannot write booleans between quotes. Secondly we usually do not
// assign a false value to a variable at the beginning, but I do not know the reason of this.

var isHappy = true;
isHappy = false;
if (isHappy == true) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/*
  EXPECTED RESULT
  ---------------
  I am not happy
*/
