/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/

var name = "Daniel";
var role = "mentor";

var name2 = "Harun";
var role2 = "student";

if (role2 === "student") {
  console.log("Hi, My name is " + name2);
}
if (role === "stuent") {
  console.log("Hi, My name is " + name2);
}

/* 
EXPECTED RESULT
---------------
My name is Harun
*/
