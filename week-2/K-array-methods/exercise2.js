/*
  Array methods - concat
  ----------------------
  The variable everyone should be an array containing both mentors and students.
*/

var mentors = ["Daniel", "Irina", "Rares"];
var students = ["Rukmini", "Abdul", "Austine", "Swathi"];

var everyone = mentors.concat(students)
var everyone1 = [...mentors, ...students]

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(everyone);
console.log(everyone1);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Rares", "Rukmini", "Abdul", "Austine", "Swathi"]
*/