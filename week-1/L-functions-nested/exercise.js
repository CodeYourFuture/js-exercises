var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function getAgeInDays(age) {
  return age * 365;
}

function createCreeting(name, age) {
  var ageInDays = getAgeInDays(age);
  var message =
    "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
  return message;
}

console.log(createCreeting("Awel", 28));

function percentage(numberOfStudents, total) {
  return 100 * numberOfStudents / total;
}
var precisePercentageOfStudents = percentage(15, 23);
var precisepercentageOfMentors = percentage(8, 23);
var roughPercentageOfStudents = Math.round(precisePercentageOfStudents);
var roughpercentageOfMentors = Math.round(precisepercentageOfMentors);

function message(percentage) {
  return "Percentage students: " + percentage;
}
console.log(message(roughPercentageOfStudents));
console.log(message(roughpercentageOfMentors));
