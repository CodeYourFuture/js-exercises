// Start by creating a variables `numberOfStudents` and `numberOfMentors`
var numberOfStudents = 21;
var numberOfMentors = 5;

var message = "Number of students: " + numberOfStudents;
var message2 = "Number of mentors: " + numberOfMentors;
var message3 =
  "Total number of students and mentors: " +
  (numberOfStudents + numberOfMentors);

var percentageOfMentors =
  (numberOfMentors * 100) / (numberOfStudents + numberOfMentors);

console.log(message);
console.log(message2);
console.log(message3);
console.log(percentageOfMentors);
