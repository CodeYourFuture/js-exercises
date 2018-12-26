function precentage(numbers) {
  return Math.round(100 * number);
}

function massage(numberOfStudents, numberOfMentors) {
  var total = numberOfStudents + numberOfMentors;
  var precentageStudents = (numberOfStudents / total) * 100;
  var precentageMentors = (numberOfMentors / total) * 100;

  var massage1 = "Precentage Students: " + precentageStudents + "%";
  var massage2 = "Precentage Mentors: " + precentageMentors + "%";

  console.log(massage1);
  console.log(massage2);
}

massage(27, 10);
