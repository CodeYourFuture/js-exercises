/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors = studentCount > mentorCount ? true : false; // finish this statement

var roomMaxCapacity = 25;
var enoughSpaceInRoom =
  roomMaxCapacity >= moreStudentsThanMentors ? true : false; // finish this statement

var personA = "Daniel";
var personB = "Irina";
var sameName = personA === personB ? true : false; // finish this statement

/* 
  DO NOT EDIT BELOW THIS LINE
  ---------------------------*/

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
/*function milley(name) {
  return name.includes("&")
    ? name.replace(/&/g, " and ") +
        ' we have change all the "&" signs we have in our sentence '
    : name + " No modifications comitted"; // /\&/.test(name)//return name.replace(/\&/g, " and ");
}

var millley = milley("ikafjifjdfhfdhajh");
console.log(millley);
*/
