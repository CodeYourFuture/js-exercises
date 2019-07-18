/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

//var groupIsOnlyStudents = false; // complete this statement
var groupIsOnlyStudents = group.every(check => students.includes(check));
/*function checkIf(name) {
  if (students.includes(name)) {
    return true;
  } else {
    return false;
  }
}
*/
if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only studnets
