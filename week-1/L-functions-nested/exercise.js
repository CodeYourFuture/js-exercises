var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//exercise1
var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

var studentPerc = (numberOfStudents * 100) / total;
var mentorsPerc = (numberOfMentors * 100) / total;

var roundStudentPerc = Math.round(studentPerc);
var roundMentorsPecr = Math.round(mentorsPerc);

console.log("percentage students: " + roundStudentPerc + "%");
console.log("Percentage mentors: " + roundMentorsPerc + "%");

//exercise 2
function mentors(name) {
  return name.toUpperCase(name);
}
function greeting(name) {
  return "HELLO" + mentors(name);
}
console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));
