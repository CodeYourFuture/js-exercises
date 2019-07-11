/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";
function result(str, str1) {
  if (str1 == "mentor") {
    return "Hi, I'm " + str + ", I'm a " + str1 + ".";
  } else {
    return "Hi, I'm" + name + ", I'm a student.";
  }
}

console.log(result(name, danielsRole));
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
