/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/
//This solution is using methods .splite() and .slice()
function capitalise(str) {
  var character1 = str.split("");
  var tLength = str.length;
  var str = character1[0].toUpperCase() + str.slice(1, tLength);
  return str;
}
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
