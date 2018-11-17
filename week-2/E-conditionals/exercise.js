/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/

var name = "Daniel";
var role = "mentor";

var name2 = "Harun";
var role2 = "student";

//test person one
if (role === "student") {
  console.log("my name is " + name);
}

//test person two
if (role2 === "student") {
  console.log("My name is " + name2);
}

/* 
EXPECTED RESULT
---------------
My name is Harun
*/
