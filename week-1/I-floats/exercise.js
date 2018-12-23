/*var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;
var studentPercentage = numberOfStudents / total;
var studentRoughPercentage = Math.round(100 * studentPercentage);
var mentorPercentage = numberOfMentors / total;
var mentorRoughPercentage = Math.round(100 * mentorPercentage);

var message1 = "Percentage students : " + studentRoughPercentage + "%";
var message2 = "Pecentage mentors : " + mentorRoughPercentage + "%";

console.log(message1);
console.log(message2);
*/

function getRound(number) {
  return Math.round(number);
}

function message(numberOfStudents, numberOfMentors) {
  var totalNumberOfPeople = numberOfStudents + numberOfMentors;
  var roughStudentsPercentage = getRound(
    (100 * numberOfStudents) / totalNumberOfPeople
  );
  var roughMentorsPercentage = getRound(
    (100 * numberOfMentors) / totalNumberOfPeople
  );
  var message =
    "Percentage students : " +
    roughStudentsPercentage +
    "%" +
    "\n" +
    "Percentage mentors : " +
    roughMentorsPercentage +
    "%";
  return message;
}

console.log(message(15, 8));
