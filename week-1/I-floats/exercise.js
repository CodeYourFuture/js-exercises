var numberOfStudents = 20;
var numberOfMentors = 8;
var total = numberOfStudents+numberOfMentors;
var studentsPerc = Math.round(numberOfStudents * 100 / total);
var mentorsPerc = Math.round(numberOfMentors * 100 / total);
console.log('Percentage student: ' + studentsPerc + '%');
console.log('Percentage mentors: ' + mentorsPerc + '%');
