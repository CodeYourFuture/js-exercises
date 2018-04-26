var numberOfStudents = 15;
var numberOfMentors = 8;
var numberOfStudentsAndMents = numberOfMentors + numberOfStudents;

var preceStudents = numberOfStudents * 100 / numberOfStudentsAndMents;
var preceMents = numberOfMentors * 100 / numberOfStudentsAndMents;



console.log("Precentage students: " +  Math.round(preceStudents) + "%");
console.log("Precentage students: " + Math.round(preceMents) + "%");