var name = "mozafar";
// split into characters
var characters = name.split("");

// change the first character to uppercase and assign it to the first
characters[0] = characters[0].toUpperCase();

// change the last character to uppercase and assign it to the last
var lastIndex = characters.length - 1;
characters[lastIndex] = characters[lastIndex].toUpperCase();

// join the characters
var result = characters.join("");
console.log(result);

/*
EXPECTED RESULT
  ---------------
  MozafaR
*/
