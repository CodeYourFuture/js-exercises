/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi"];


// function groupIsOnlyStudents(students, group) {

//   group.every(function checkIt(element) {
//     students.includes(element)
//   })

// };

function groupIsOnlyStudents(students, group) {

  return group.every(element => students.includes(element))

};
console.log(groupIsOnlyStudents(students, group))
// complete this statement

if (groupIsOnlyStudents(students, group)) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students