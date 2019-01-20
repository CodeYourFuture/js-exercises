/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function isStudentName(studentName) {
  return (name === studentName);
}
var groupIsOnlyStudents = group.every(function checkEveryName(name) {
  return (students.find(function isStudentName(studentName) {
    return (name === studentName);
  }))
}); // complete this statement


if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only studnets