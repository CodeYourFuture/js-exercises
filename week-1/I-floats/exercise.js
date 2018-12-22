var numberOfStudents = 15;
var numberOfMentors = 8;
var percentagestudent = Math.round(numberOfStudents * 100 / (numberOfStudents + numberOfMentors));
var percentagementors = Math.round(
  (numberOfMentors * 100) / (numberOfStudents + numberOfMentors)
);
console.log("Percentage Students: " + percentagestudent+ " %");
console.log("Percentage Mentors: " + percentagementors + " %");
