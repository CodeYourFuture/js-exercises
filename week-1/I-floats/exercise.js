var numberOfStudents = 15;
var numberOfMentors = 8;

var precisePercentageStudents =
  (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100;
var percentageStudents = Math.round(precisePercentageStudents);
var precisePercentageMentors =
  (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100;
var percentageMentors = Math.round(precisePercentageMentors);
console.log(
  "Percentage students: " + Math.round(precisePercentageStudents) + "%"
);
console.log("Percentage mentors: " + percentageMentors + "%");
