/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];
// var group = ["Omar", "Austine", "Dany", "Swathi"];
var groupIsOnlyStudents = group.every( member => students.some(student => student === member));
// var groupIsOnlyStudents = group.every( member => !!students.find(student => member === student));// complete this statement
if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only studnets
