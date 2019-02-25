var numberOfStudents = 15;
var numberOfMentors = 8;
var PercentageOfStudents, PercentageOfMentors;

var totalNumbersOfStudentsAndMentors = numberOfStudents + numberOfMentors;

PercentageOfMentors = numberOfMentors / totalNumbersOfStudentsAndMentors * 100;
PercentageOfStudents = numberOfStudents / totalNumbersOfStudentsAndMentors * 100;

console.log("Percentage of Student: " + Math.round(PercentageOfStudents) + '%');
console.log("Percentage of mentors " + Math.round(PercentageOfMentors) + '%');