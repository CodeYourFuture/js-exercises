/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

var groupIsOnlyStudents = function(students, group) {
  return group.every(element => students.includes(element));
}; // complete this statement

console.log(groupIsOnlyStudents(students, group));

if (groupIsOnlyStudents(students, group)) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
