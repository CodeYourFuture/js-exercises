var numberOfStudents = 15;
var numberOfMentors = 8;

var Total = numberOfStudents + numberOfMentors;

console.log('Percentage students:' + Math.round((numberOfStudents/Total) * 100) + '%'); 

console.log('Percentage mentors:' + Math.round((numberOfMentors/Total) * 100)+ '%' );