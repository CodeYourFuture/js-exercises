var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumberPeople = numberOfStudents + numberOfMentors;
var percentageOfPeople = "The percentage of students are " + Math.round(numberOfStudents/totalNumberPeople*100) +"% and the percentage of mentors are "+ Math.round(numberOfMentors/totalNumberPeople*100)+"%.";
console.log(percentageOfPeople);