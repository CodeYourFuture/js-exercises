// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
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
  when writing a boolean, the false and true should be written without any qoutation marks
  or they will be treated as string. As a string the first value is (isHappy ==true) and that for sure will give back true  
Also, in this case it is recommended to use === as other options can give wrong answers
  */
