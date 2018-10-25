// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain

var isHappy = false; //false must not to be in a ""
// I have changed   (isHappy == true) to (isHappy) because outomaticly if would check if
// condition is true print ... and else print ... so we don't need to declare conditions again.
// and also if we want to do that we need === not ==.
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
