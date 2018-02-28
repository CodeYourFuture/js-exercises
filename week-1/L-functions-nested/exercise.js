function studentsAndMentors(students, mentors) {
  return students + mentors;
}

var students = 15;
var mentors = 20;
var studentsAndMentorsTotal = studentsAndMentors(students, mentors);
var PercentStudents = 100 * students / studentsAndMentorsTotal;
var PercentMentors = 100 * mentors / studentsAndMentorsTotal;

console.log("Percentage students:" + Math.round(PercentStudents) + "%");
console.log("Percentage mentors:" + Math.round(PercentMentors) + "%");
