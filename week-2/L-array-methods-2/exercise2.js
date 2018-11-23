/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  var word = str.split("");
  const letterUp = word[0].toUpperCase();
  word.shift();
  word.unshift(letterUp);
  return word.join(" ");
}
/*function capitalise(str) {
  word = str.split(" ");
  for (var i = 0, x = word.length; i < x; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].substr(1);
  }
  return word.join(" ");
}*/
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
