function round(number) {
  return Math.round(100 * number);
}
function message(numberOfStudents, numberOfMentors) {
  var total = numberOfStudents + numberOfMentors;
  var percentageStudents = round(numberOfStudents / total);
  var percentageMentors = round(numberOfMentors / total);
}

message(65, 35);
