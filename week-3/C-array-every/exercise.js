/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

var groupIsOnlyStudents = group.every(groupIsOnlyStudents); // complete this statement
function groupIsOnlyStudents(students) {
  if (students) {
    console.log("The group contains only students");
  } else {
    console.log("The group does not contain only students");
  }
}

/* EXPECTED RESULT */

// The group does not contain only students
