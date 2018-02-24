var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

var percentageOfStudents = Math.round(numberOfStudents / total * 100);
var percentageOfMentors = Math.round(numberOfMentors / total * 100);

console.log("Percentage students: " + percentageOfStudents + "%");
console.log("Percentage mentors: " + percentageOfMentors + "%");
