/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/

function main(name, role) {
  if (role === "student") {
    console.log("My name is " + name);
  }
}

var name1 = "Daniel";
var role1 = "mentor";

var name2 = "Harun";
var role2 = "student";

main(name1, role1);
main(name2, role2);

/* 
EXPECTED RESULT
---------------
My name is Harun
*/
