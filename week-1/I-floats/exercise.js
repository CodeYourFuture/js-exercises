var numberOfStudents = 15;
var numberOfMentors = 8;

function percentage(numberOfStudents, total) {
  return 100 * numberOfStudents / total;
}
var precisePercentageOfStudents = percentage(15, 23);
var precisepercentageOfMentors = percentage(8, 23);

var roughPercentageOfStudents = Math.round(precisePercentageOfStudents) + "%";
var roughpercentageOfMentors = Math.round(precisepercentageOfMentors) + "%";

console.log("Percentage students: " + roughPercentageOfStudents);
console.log("Percentage mentors: " + roughpercentageOfMentors);
