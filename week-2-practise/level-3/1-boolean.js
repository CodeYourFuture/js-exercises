// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain

//isHappy variable assigned to a string "false" instead of a boolean false.
var isHappy = false;

//We don't need the comparison inside the if statement parantheses. We can write ```if (isHappy) {console.log("I am happy")} else {console.log("I am not happy")}``` means when isHappy true the function will run the first code block otherwise second code block will be run.
//Additionally ES6 introduced Ternary Opeartors which make it shorter to write if statements as below;
isHappy ? console.log("I am happy") : console.log("I am not happy");

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
