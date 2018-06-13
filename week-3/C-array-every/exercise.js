/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
function allStudents(student){
  for (var i = 0; i < student.length; i++){
    if (student === students[i])
    return allStudents;
  }
}
var groupIsOnlyStudents = group.every(allStudents); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only studnets
