var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfMentors + numberOfStudents ;
console.log("Percentage of students: " + Math.round( (numberOfStudents * 100) / sum ) + "%" );
console.log("Percentage of mentors: " + Math.round( (numberOfMentors * 100) / sum ) +"%");