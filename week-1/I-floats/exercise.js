function percentage(numberOfMentors, numberOfStudents) {
  var total = numberOfMentors + numberOfStudents;

  var percentageStudents = Math.round((numberOfStudents * 100) / total);
  var percentageMentors = Math.round((numberOfMentors * 100) / total);

  console.log("Percentage Students: " + percentageStudents + "%");
  console.log("Percentage Mentors: " + percentageMentors + "%");
}

percentage(8, 15);
