function percentage(number) {
  var roughPercentage = Math.round(100 * number);
  return roughPercentage;
}

function message(numberOfStudents, numberOfMentors) {
  var total = numberOfStudents + numberOfMentors;
  var studentsPercentage = numberOfStudents / total;
  var mentorsPercentage = numberOfMentors / total;
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
