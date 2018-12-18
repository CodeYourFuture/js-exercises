var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;
var studentPercentage = numberOfStudents / total;
var studentRoughPercentage = Math.round(100 * studentPercentage);
var mentorPercentage = numberOfMentors / total;
var mentorRoughPercentage = Math.round(100 * mentorPercentage);

var message1 = "Percentage students : " + studentRoughPercentage + "%";
var message2 = "Pecentage mentors : " + mentorRoughPercentage + "%";

console.log(message1);
console.log(message2);
