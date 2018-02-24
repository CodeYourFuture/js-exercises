var numberOfStudents = 15;
var numberOfMentors = 8;
var preciseAge = 30.612437;
var roughAge = Math.round(preciseAge); // 30
console.log("PreciseAge = " + roughAge);
//console.log(Math.round(numberOfStudents / numberOfMentors) * 100);
//alert(Math.floor((number1 / number2) * 100)); //w00t!
//console.log("test " + Math.round(numberOfStudents / numberOfMentors));
console.log(
  "percentage numberOfStudents = " +
    Math.round(numberOfStudents / (numberOfStudents + numberOfMentors) * 100) +
    "%"
);

console.log(
  "percentage numberOfMentors= " +
    Math.round(numberOfMentors / (numberOfStudents + numberOfMentors) * 100) +
    "%"
);
//console.log(numberOfStudents / numberOfMentors * 100);
