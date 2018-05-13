/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/

  
function roleIsStudent(name, role) {

 
  if(role=="student") {
    console.log('My name is ' + name2);
  }
}
  



var name = "Daniel";
var role = "mentor";

var name2 = "Harun";
var role2 = "student";

roleIsStudent(name, role);
roleIsStudent(name2, role2);



/* 
EXPECTED RESULT
---------------
My name is Harun
*/
