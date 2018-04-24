// Exercise 1//
function result(a, b) {
  return Math.round(a / (a + b) * 100) + "%";
}
var mentors = result(8, 15);
var students = result(15, 8);

function greeting(a, b) {
  return "Percentage mentors: " + a + "\n" + "Percentage Students: " + b;
}
var message = greeting(mentors, students);
console.log(message);

//console.log(calcpercent);
/*var student = "Percentage students: " + calcpercent;
console.log(student);
calcpercent = result(15, 8);
var mentors = "Percentage mentors: " + calcpercent;
console.log(mentors);*/

//Exercise 2 //

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutoutNames(a) {
  return a.toUpperCase();
}
var a = shoutoutNames(mentor1);
var b = shoutoutNames(mentor2);
var c = shoutoutNames(mentor3);
var d = shoutoutNames(mentor4);
var e = shoutoutNames(mentor5);

function shoutyGreeting(a, b, c, d, e) {
  return (
    "HELLO " +
    a +
    "\n" +
    "HELLO " +
    b +
    "\n" +
    "HELLO " +
    c +
    "\n" +
    "HELLO " +
    d +
    "\n" +
    "HELLO " +
    e
  );
}
var shouting = shoutyGreeting(a, b, c, d, e);
console.log(shouting);
