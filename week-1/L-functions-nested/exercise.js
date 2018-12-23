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
