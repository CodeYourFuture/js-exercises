function percentage(number) {
  return Math.round(100 * number);
}
function massage(numberOfStudents, numberOfMentors) {
  var total = numberOfStudents + numberOfMentors;
  var percentageStudents = percentage(numberOfStudents / total);
  var percentageMentors = percentage(numberOfMentors / total);

  var massage1 = "Percentage Students = " + percentageStudents + "%";
  var massage2 = "Percentage Mentors =" + percentageMentors + "%";

  console.log(massage1);
  console.log(massage2);
}

massage(26, 10);
