var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;
console.log(totalNumber);

var myNumberOfMentors = (numberOfMentors * 100) / totalNumber;
var myNumberOfStudents = (numberOfStudents * 100) / totalNumber;
console.log("Percentage Mentors: " + Math.round(myNumberOfMentors) + "%");
console.log("Percentage Students: " + Math.round(myNumberOfStudents) + "%");
