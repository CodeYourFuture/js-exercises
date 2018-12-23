var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumberOfPeople = numberOfStudents + numberOfMentors;
var percentageOfStudents = Math.round(numberOfStudents * 100 / totalNumberOfPeople);
var percentageOfMentors= Math.round(numberOfMentors * 100 / totalNumberOfPeople);

var message1 = "Percentage students: " + percentageOfStudents + "%";
var message2 = "Percentage mentors: " + percentageOfMentors + "%";

console.log (message1);
console.log (message2);

