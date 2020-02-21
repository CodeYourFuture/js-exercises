/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function containonlyStudent(index){
 /* if(group[index] <= students[index]){

  }*/
  //var collection = group.includes(students);

} 

var groupIsOnlyStudents = group.every(containonlyStudent) ; // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
