var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfMentors + numberOfStudents;

var perOfStudents = numberOfStudents / sum * 100;
var raund = Math.round(perOfStudents);
var perOfMentors = numberOfMentors / sum * 100;
var raund2 = Math.round(perOfMentors);
console.log('Percentage students: ' + raund + '%');
console.log('Percentage mentors: ' + raund2 + '%');
