var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
var Students = numberOfStudents / total;
var Mentors = numberOfMentors / total;

var PercentageStudents = Math.round(Students * 100);
var PercentageMentors = Math.round(Mentors * 100);
console.log("Percentage mentors:" + PercentageMentors + "%");
console.log("Percentage students:" + PercentageStudents + "%");
