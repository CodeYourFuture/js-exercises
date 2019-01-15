var numberOfStudents = 15;
var numberOfMentors = 8;
var classTotal = numberOfMentors + numberOfStudents;
var message = "Percentage of students: " + Math.round(numberOfStudents/classTotal * 100) 
+ "% \n" + "Percentage of mentors: " + Math.round(numberOfMentors/classTotal * 100) + "%";

console.log(message);