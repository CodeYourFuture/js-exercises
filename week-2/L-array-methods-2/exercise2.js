/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It ,should, return, a ,string, with the first letter in uppercase
  For example, capitailise("hello) should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  var koreka = str.split("");
  koreka[0] = koreka[0].toUpperCase;
  return koreka.join("");
}
var name = "daniel";
console.log(capitalise(name));

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- 
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello world"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
