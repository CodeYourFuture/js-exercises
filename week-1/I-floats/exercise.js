var numberOfStudents = 15;
var numberOfMentors = 8;
var precentOfStudents = Math.round(
  numberOfStudents / (numberOfMentors + numberOfStudents) * 100
);
var precentOfMentors = Math.round(
  numberOfMentors / (numberOfMentors + numberOfStudents) * 100
);
console.log("Precent of students " + precentOfStudents + "%");
console.log("Precent of mentors " + precentOfMentors + "%");
