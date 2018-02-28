var numberOfStudents = 15;
var numberOfMentors = 8;
var TotalStudentsAndMentors = numberOfMentors + numberOfStudents;
var MentorOverTotatal = numberOfMentors / TotalStudentsAndMentors;
var percentMentors = MentorOverTotatal * 100 + "%";
var PrecisePecent = Math.round(MentorOverTotatal * 100);

console.log(percentMentors);
console.log(PrecisePecent);
