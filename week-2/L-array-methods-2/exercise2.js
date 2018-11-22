/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  return str[0].toUpperCase() + str.substr(1);
  // .map(function (word) {
  // console.log("First capital letter: " + word[0]);
  // console.log("remain letters: " + word.substr(1));
  // return word[0].toUpperCase() + word.substr(1);
}
//.join(' ');

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
