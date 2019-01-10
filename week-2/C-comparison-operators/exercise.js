/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

var studentCount = 16;
var mentorCount = 9;
if (studentCount>mentorCount) {
 var moreStudentsThanMentors=true;
} else {
  var moreStudentsThanMentors = false;
}; // finish this statement

var roomMaxCapacity = 25;
if (studentCount + mentorCount <= roomMaxCapacity){
  var enoughSpaceInRoom=true; // finish this statement
} else {
  var enoughSpaceInRoom = false; 
}

var personA = "Daniel";
var personB = "Irina";
if (personA==personB){
  var sameName=true; // finish this statement
} else {
  var sameName = false; // finish this statement
}


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName);

/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/
