var numberOfStudents = 15;
var numberOfMentors = 8;
var percStudents =
  (100 / (numberOfMentors + numberOfStudents)) * numberOfStudents;
var percMentors =
  (100 / (numberOfMentors + numberOfStudents)) * numberOfMentors;
console.log("Percentage students: " + Math.round(percStudents) + "%");
console.log("Percentage mentors: " + Math.round(percMentors) + "%");
