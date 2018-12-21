var numberOfStudents = 15;

var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;
var percentageStudents = Math.round((100 * numberOfStudents) / total);
var percentageMentors = Math.round((100 * numberOfMentors) / total);

var message1 = "percentage students: " + percentageStudents + "%";
var message2 = "percentage mentors: " + percentageMentors + "%";

console.log(message1);
console.log(message2);
