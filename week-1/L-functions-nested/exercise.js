function percentage(number) {
  return Math.round(number);
}

function message(numberOfStudents, numberOfMentors) {
  var total = numberOfStudents + numberOfMentors;
  var studentsPercentage = (100 * numberOfStudents) / total;
  var mentorsPercentage = (100 * numberOfMentors) / total;
  var roughStudentsPercentage = percentage(studentsPercentage);
  var roughMentorsPercentage = percentage(mentorsPercentage);
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

console.log(message(15, 25));
