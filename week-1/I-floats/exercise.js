var numberOfStudents = 20;
var numberOfMentors = 8;
var total =  numberOfStudents + numberOfMentors;

var percentageStudents = numberOfStudents / total * 100;
var percentageMentors = numberOfMentors / total * 100;

console.log("Percentage Students: " + Math.round(percentageStudents) + "%");
console.log("Percentange Mentors: " + Math.round(percentageMentors) + "%");

