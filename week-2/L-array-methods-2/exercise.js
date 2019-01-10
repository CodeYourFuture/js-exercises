/*
  Array methods - .slice()
  ------------------------
  The variable `firstFive` should contain the first five items of `everyone`
  The variable `lastFive` should contain the last five items of `everyone`
*/

var everyone = [
  "Daniel",
  "Irina",
  "Rares",
  "Rukmini",
  "Abdul",
  "Austine",
  "Swathi"
];

var firstFive = everyone.slice(0,5); // complete this statement
var lastFive = everyone.slice(everyone.length-5,everyone.length); // complete this statement

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(firstFive);
console.log(lastFive);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Rares", "Rukmini", "Abdul"]
  ["Rares", "Rukmini", "Abdul", "Austine", "Swathi"]
*/
