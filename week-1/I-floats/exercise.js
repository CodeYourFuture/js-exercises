var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber= numberOfStudents + numberOfMentors;

var preciseAge = 30.612437;
var roughAge = Math.round(preciseAge);

console.log( 'Percentage students: ' + (Math.round((numberOfStudents/totalNumber)*100))+'%');
console.log( 'Percentage students: ' + (Math.round((numberOfMentors/totalNumber)*100))+'%');
