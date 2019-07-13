/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

// function capitalise(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

function capitalise(str) {
  var arr = str.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}

// function capitalise(s) {
//   return s && s[0].toUpperCase() + s.slice(1);
// }

// function capitalise(s) {
//   return s[0].toUpperCase() + s.slice(1);
// }
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = capitalise("daniel");

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
