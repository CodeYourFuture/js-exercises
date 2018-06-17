var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;

var perOfStudents = numberOfStudents / total * 100;
var perOfMentors = numberOfMentors / total * 100;

console.log("The percentage of students: " + (Math.round(perOfStudents)) + "%");
console.log("The percentage of mentors: " + (Math.round(perOfMentors)) + "%");

