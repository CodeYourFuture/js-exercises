var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;
var studentPerc = numberOfStudents * 100 / total;
var mentorsPerc = numberOfMentors *100 / total;
var roundStudentPerc = Math.round(studentPerc);
var roundMentorsPerc = Math.round(mentorsPerc);


console.log("Percentage students: "+roundStudentPerc + "%");
console.log("Percentage mentors: "+roundMentorsPerc + "%");
