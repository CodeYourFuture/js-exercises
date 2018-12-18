//Calculates the percentage
function percentage(numberOfMentors, numberOfStudents) {
  var total = numberOfMentors + numberOfStudents;

  var percentageStudents = Math.round((numberOfStudents * 100) / total);
  var percentageMentors = Math.round((numberOfMentors * 100) / total);

  showPercentage(percentageMentors, percentageStudents);
}

//Prints the percentage
function showPercentage(percentageStudents, percentageMentors) {
  console.log("Percentage Students: " + percentageStudents + "%");
  console.log("Percentage Mentors: " + percentageMentors + "%");
}

percentage(8, 15);

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//Return names in uppercase
function greetingMentor(mentor) {
  console.log("HELLO " + mentor.toUpperCase());
}

greetingMentor(mentor1);
greetingMentor(mentor2);
greetingMentor(mentor3);
greetingMentor(mentor4);
greetingMentor(mentor5);
