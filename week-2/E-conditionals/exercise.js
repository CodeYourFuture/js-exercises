/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/

var name = "Daniel";
var role = "mentor";

var name2 = "Harun";
var role2 = "student";
var favFood = "Pizza";

//role2 = true;

if (role2 === "Floater") {
  console.log("Hello my name is " + name2);
} else if (favFood === "Pizza") {
  console.log("Hello my name is " + name2);
} else {
  console.log("No Name");
}

/* 
EXPECTED RESULT
---------------
My name is Harun
*/
