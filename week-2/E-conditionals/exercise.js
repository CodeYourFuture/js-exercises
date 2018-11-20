/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/

var name = "Daniel";
var role = "mentor";

var name2 = "Abdoulrazack";
var role2 = "student";

if (role === "student" && role2 === "student") {
  console.log("My name is " + name);
} else {
  console.log("My name is " + name2);
}

/*
if (role == "student" && role2 == "student") {
  console.log("Hi, My name is " + name2);
  console.log("Hi, My name is " + name);
} else if (role !== "student" && role2 == "student") {
  console.log("Hi, My name is " + name2);
} else if (role == "student" && role2 !== "student") {
  console.log("Hi, My name is " + name);
}
*/

/* 
EXPECTED RESULT
---------------
My name is Harun
*/
