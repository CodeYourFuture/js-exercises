// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain

// var isHappy = "false";//it should be boolean false not a string
 var isHappy = false;
// if (isHappy == true) { 
  //it works because
  //isHappy is a string and boolean true is converted to strin "true" (coercion)
if (isHappy) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}
//it can be refactored as:
console.log(isHappy ? "I am happy" : "I am not happy");
/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
