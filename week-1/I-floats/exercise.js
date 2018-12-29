var numberOfStudents = 15;
var numberOfMentors = 8;
var studentsAndMentors = numberOfStudents + numberOfMentors;
var percentageOfStudents = (numberOfStudents/studentsAndMentors)* 100;
var percentageOfMentors = (numberOfMentors/studentsAndMentors)* 100;
console.log (Math.round(percentageOfStudents)+"%");
console.log(Math.round(percentageOfMentors)+"%");