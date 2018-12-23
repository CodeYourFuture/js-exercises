function roundPercentage (number) {
return Math.round (number);
}
function message (numberOfStudents, numberOfMentors){
var totalNumberOfPeople = numberOfStudents + numberOfMentors;
var percentageOfStudents = roundPercentage(numberOfStudents * 100 / totalNumberOfPeople);
var percentageOfMentors= roundPercentage(numberOfMentors * 100 / totalNumberOfPeople);

var message1 = "Percentage students: " + percentageOfStudents + "%";
var message2 = "Percentage mentors: " + percentageOfMentors + "%";
console.log (message1);
console.log (message2);
} 
message (15, 8);
