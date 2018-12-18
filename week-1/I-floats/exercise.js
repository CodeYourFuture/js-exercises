var numberOfStudents = 15;
var numberOfMentors = 8;
var totalPeople = numberOfStudents + numberOfMentors;
var percentageOfStudents = (numberOfStudents / totalPeople) * 100;
var percentageOfMentors = (numberOfMentors / totalPeople) * 100;
console.log("Percentage students: " + Math.round(percentageOfStudents) + "%");
console.log("Percentage mentors: " + Math.round(percentageOfMentors) + "%");