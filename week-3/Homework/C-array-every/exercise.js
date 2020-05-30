/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

var groupIsOnlyStudents = group.every(function (x) {
  return students.includes(x);
});

//var groupIsOnlyStudents = group.every((x) => students.includes(x));
console.log(groupIsOnlyStudents);
/* EXPECTED RESULT */

// The group does not contain only students
