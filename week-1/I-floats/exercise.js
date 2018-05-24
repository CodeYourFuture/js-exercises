var numberOfStudents = 15;
var numberOfMentors = 8;
var percentageStudents = Math.round(
  100 * numberOfStudents / (numberOfStudents + numberOfMentors)
);

var percentageMentors = Math.round(
  100 * numberOfMentors / (numberOfStudents + numberOfMentors)
);

console.log("percentage of students", percentageStudents, "%");

console.log("percentage of mentors", percentageMentors, "%");
