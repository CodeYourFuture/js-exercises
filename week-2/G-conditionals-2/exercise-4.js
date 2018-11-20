/*
  Conditionals
  ---------------------------------
  Write a function that checks if a sentence contains the word "code"
  - if the sentence contains the word "code" then return true
  - otherwise return false

  Hint: Google how to check if a string contains a word
*/

/*Option to try:
(sentence = str.includes(code)))
or you may use the function $sentence.includes(code) *note when you write this in a function, you don't write tthe $ sign

*/

function containsCode(sentence) {
  if (sentence.includes("code")) {
    return true;
  } else {
    return false;
  }
}
//G-conditional is done

/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var sentence1 = "code your future";
var sentence2 = "draw your future";
var sentence3 = "design your future";

console.log("'" + sentence1 + "': " + containsCode(sentence1));
console.log("'" + sentence2 + "': " + containsCode(sentence2));
console.log("'" + sentence3 + "': " + containsCode(sentence3));

/* 
    EXPECTED RESULT
    ---------------
    'code your future': true
    'draw your future': false
    'design your future': false
    */
