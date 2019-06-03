var numberOfStudents = 21;
var numberOfMentors = 4;

var lowerPercentage =
  (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100;

var preciseLowerPercentage = Math.round(lowerPercentage);

var higherPercentage = 100 - preciseLowerPercentage;

console.log("Percentage students: " + higherPercentage);
console.log("Percentage mentors: " + preciseLowerPercentage);
