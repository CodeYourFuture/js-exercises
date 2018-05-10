/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/

var name = "Daniel";
var role = "mentor";

var name2 = "Harun";
var role2 = "student";
if (role2) {
  return name2;
} else {
  return name;
}

console.log("Hi, My name is " + name);
console.log("Hi, My name is " + name2);
/* 
EXPECTED RESULT
---------------
My name is Harun
*/
