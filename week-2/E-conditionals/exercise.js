/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/

var name = "Daniel",
  role = "mentor";

var name2 = "Harun",
  role2 = "student";

if (name2 === "Daniel") {
  console.log("Hi, My name is " + name);
} else {
  console.log("Hi, My name is " + name2);
}

/* 
EXPECTED RESULT
---------------
My name is Harun
*/
