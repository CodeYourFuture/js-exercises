/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  var var1 = str.charAt(0);
  var var2 = var1.toUpperCase();
  var var4 = str.charAt(str.length - 1);
  var var5 = var4.toUpperCase();

  var6 = str;

  var var3 = str.slice(1);

  return var2.concat(var3);
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
// console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
