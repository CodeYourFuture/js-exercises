var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
//The percentage function
function percentage(numberOfStudents, numberOfMentors) {
  var total = numberOfStudents + numberOfMentors;
  var percentageOfStudents = (numberOfStudents / total) * 100;
  var percentageOfMentors = (numberOfMentors / total) * 100;
  printPercentage(percentageOfStudents, percentageOfMentors);
}

//print the percentage message
function printPercentage(percentageOfStudents, percentageOfMentors) {
  console.log("Percentage students: " + Math.round(percentageOfStudents) + "%");
  console.log("Percentage mentors: " + Math.round(percentageOfMentors) + "%");
}

//prints the metors greetin
function printGreeting(name) {
  console.log("Hello " + name.toUpperCase());
}

percentage(15, 8);
printGreeting("Daniel");
printGreeting("Irina");
printGreeting("Mimi");
printGreeting("Rob");
printGreeting("Yohannes");
