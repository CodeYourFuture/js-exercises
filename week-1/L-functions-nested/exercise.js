function percentageStudents(numberOfStudents, totalNumberPeople) {
  return Math.round((numberOfStudents / totalNumberPeople) * 100);
}
function percentageMentors(numberOfMentors, totalNumberPeople) {
  return Math.round((numberOfMentors / totalNumberPeople) * 100);
}
console.log("Percentage students: " + percentageStudents(15, 23) + "%");
console.log("Percentage mentors: " + percentageMentors(8, 23) + "%");

//return names with uppercase and a greeting
function shoutyGreeting(mentor) {
  console.log("HELLO " + mentor.toUpperCase());
}
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

shoutyGreeting(mentor1);
shoutyGreeting(mentor2);
shoutyGreeting(mentor3);
shoutyGreeting(mentor4);
shoutyGreeting(mentor5);
