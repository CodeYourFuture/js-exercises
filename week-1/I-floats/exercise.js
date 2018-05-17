var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;

var percentageStudents = numberOfStudents / total * 100;

console.log("Percentage Students : " + (Math.round(percentageStudents) + "%"));

var percentageMentors = numberOfMentors / total * 100;

console.log("Percentage mentors : " + (Math.round(percentageMentors) + "%"));
