var numberOfStudents = 18;
var numberOfMentors = 3;
var syuzde = 100 / (numberOfStudents + numberOfMentors) * numberOfStudents;
var myuzde = (100 / (numberOfStudents + numberOfMentors)) * numberOfMentors;
var syuzdetam=Math.round(syuzde);
var myuzdetam=Math.round(myuzde);
console.log("Percentage students:"+syuzdetam);
console.log("Percentage mentors:"+myuzdetam);
