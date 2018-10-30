/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var mentors = ["Austine", "Dany", "Swathi", "Daniel"];

function isAMentor(name) {
  return students.includes(name);
}


; // logs false

var groupIsOnlyStudents=mentors.every(isAMentor); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only studnets
