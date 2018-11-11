function percentage(number, total) {
  return (number / total) * 100;
}

function message(type, number, total) {
  return (
    "the number of " +
    type +
    " is " +
    Math.round(percentage(number, total)) +
    "%"
  );
}
var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;

console.log(message("Students", numberOfStudents, total));
console.log(message("Mentors", numberOfMentors, total));
