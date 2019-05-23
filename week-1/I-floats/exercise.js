var numberOfStudents = 15;
var numberOfMentors = 8;

var lowerPercentage =
  (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100;

var preciseLowerPercentage = Math.round(lowerPercentage);

var higherPercentage = 100 - preciseLowerPercentage;

console.log("Percentage students: " + higherPercentage);
console.log("Percentage mentors: " + preciseLowerPercentage);
