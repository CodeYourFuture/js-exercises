/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors = studentCount > mentorCount; // finish this statement

var roomMaxCapacity = 25;
var enoughSpaceInRoom = roomMaxCapacity => sudentCount + mentorCount; // finish this statement

var personA = "Daniel";
var personB = "Irina";
var sameName = personA == personB; // finish this statement
var a = 1 === "1";

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName);
console.log(a);
/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/
