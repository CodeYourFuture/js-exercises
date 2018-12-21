var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

var percentageStudents = Math.round((100 * numberOfStudents) / total);
var percentageMentors = Math.round((100 * numberOfMentors) / total);

var massage1 = "Percentage Students = " + percentageStudents + "%";
var massage2 = "Percentage Mentors =" + percentageMentors + "%";

console.log(massage1);
console.log(massage2);
