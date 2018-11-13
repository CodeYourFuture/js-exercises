var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function greeting(name) {
  return "Hello " + name.toUpperCase();
}

console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));

var numberOfStudents = 15;
var numberOfMentors = 8;

function percentage(num, sum) {
  return Math.round((num / sum) * 100);
}
function here(num, sum) {
  var show = percentage(num, sum);
  return "Percentage Of Students : " + show + "%";
}

console.log(here(numberOfStudents, numberOfMentors + numberOfStudents));
console.log(here(numberOfMentors, numberOfMentors + numberOfStudents));
