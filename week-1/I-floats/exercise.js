var numberOfStudents = 15;
var numberOfMentors = 8;

var lowerPercentage =
  (numberOfMentors / (numberOfMentors + numberOfStudents)) * 100;

var roughStudents = Math.round(lowerPercentage);

var higerPercentage = 100 - lowerPercentage;

var roughMentors = Math.round(higerPercentage);

console.log(roughStudents);
console.log(roughMentors);
