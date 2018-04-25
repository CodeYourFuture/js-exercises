var numberOfStudents = 20;
var numberOfMentors = 8;
var sum = numberOfStudents +numberOfMentors;
var percentagestudents;
var percentagementors;

percentagestudents = numberOfStudents/sum*100;
percentagementors = numberOfMentors/sum*100;
console.log(Math.round(percentagestudents)+"%");
console.log(Math.round(percentagementors)+"%");
