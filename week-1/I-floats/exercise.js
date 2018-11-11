var numberOfStudents = 15;
var numberOfMentors = 8;
var rate = numberOfStudents / (numberOfStudents + numberOfMentors);
var rateM = numberOfMentors / (numberOfStudents + numberOfMentors);

console.log("Percentage of Students : " + Math.round(rate * 100) + "%");
console.log("Percentage of Mentors : " + Math.round(rateM * 100) + "%");
