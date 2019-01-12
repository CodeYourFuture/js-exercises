/*
  BOOLEAN WITH COMPARISON OPERATORS/*
  BOOLEAN LITERALS/*
  BOOLEAN LITERALS
  ----------------
  This program needs some variables to log the expected result.
  Add the required variables with the correct boolean values assigned.
*/
/* var codeYourFutureIsGreat = true;
var mozafarIsCool = false;
var caluclationCorrect = true;
var moreThan10Students = false; */

/*----------------
  This program needs some variables to log the expected result.
  Add the required variables with the correct boolean values assigned.
*/
/*var codeYourFutureIsGreat = true;
var mozafarIsCool = false;
var caluclationCorrect = true;
var moreThan10Students = false;*\


 /* ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors;
if (studentCount > mentorCount) {
  moreStudentsThanMentors = true;
}
// finish this statement

var roomMaxCapacity = 25;
var enoughSpaceInRoom;
if (roomMaxCapacity > studentCount) {
  enoughSpaceInRoom = true;
} // finish this statement

var personA = "Daniel";
var personB = "Irina";
var sameName; // finish this statement
if (personA !== personB) {
  sameName = false;
} else {
  return true;
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
