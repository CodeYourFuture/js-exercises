var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
var percentageStudent = Math.round((numberOfStudents * 100) / total);
var percentageMentors = Math.round((numberOfMentors * 100) / total);
console.log("Percent of students: " + percentageStudent + " %");
console.log("Percent of mentors: " + percentageMentors + " %");
