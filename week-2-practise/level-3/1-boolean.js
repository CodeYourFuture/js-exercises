// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code? using of loose equality sign is not proper way of assigning variables to booleans, so i 
//i change loose equality sign to assign comaparison.
// Leave comments above your changes to explain

var isHappy = false;

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