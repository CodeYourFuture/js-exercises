/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/

var name = "Daniel";
var role = "mentor";

var name2 = "Harun";
var role2 = "student";

if (role === "student") {
  console.log("Hi, My name is " + name);
} else {
  console.log(name + " it's a mentor");
}


if (role2 === "student") {
  console.log("Hi, My name is " + name2);
} else  {
  console.log(name + " it's a mentor");
}

/* 
EXPECTED RESULT
---------------
My name is Harun
*/
