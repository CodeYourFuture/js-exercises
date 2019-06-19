// Start by creating a variables `numberOfStudents` and `numberOfMentors`
var numberOfStudents = 21,
  numberOfMentors = 5;

console.log("Number of students: " + numberOfStudents);
console.log("Number of mentor: " + numberOfMentors);
console.log(
  "Total number of students and mentors: " +
    (numberOfMentors + numberOfStudents)
);

var total = numberOfMentors + numberOfStudents;
var percent = (numberOfMentors * 100) / total;
console.log(percent.toFixed(2));
