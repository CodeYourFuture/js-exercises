var numberOfStudents = 15;
var numberOfMentors = 8;
var numberTotal = numberOfStudents + numberOfMentors;

var percentageStu = (numberOfStudents * 100) / numberTotal;
var percentageMen = (numberOfMentors * 100) / numberTotal;
var roundedStu = Math.round(percentageStu);
var roundedMen = Math.round(percentageMen);
var roundedStuSen = "Percentage students: " + roundedStu + "%";
var roundedMenSen = "Percentage mentors: " + roundedMen + "%";

console.log(roundedStuSen);
console.log(roundedMenSen);
