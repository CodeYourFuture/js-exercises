/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/

var name = "Daniel";
var role = "mentor";

var name2 = "Harun";
var role2 = "student";

//Check for person 1
if (role2) {
  console.log("Hi, My name is " + name2);
}

// Test for person 2
if (role) {
  console.log("Hi, My name is " + name);
}
//else {
//console.log("Hi, My name is " + name);
//}

/* 
EXPECTED RESULT
---------------
My name is Harun
*/
