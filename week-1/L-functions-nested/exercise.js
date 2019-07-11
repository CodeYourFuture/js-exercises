// exercise 2 below
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function mentorUp(str) {
  return str.toUpperCase();
}
function greeting(str, mentor) {
  return str + " " + mentorUp(mentor);
}

console.log(greeting("HELLO", mentor1));
console.log(greeting("HELLO", mentor2));
console.log(greeting("HELLO", mentor3));
console.log(greeting("HELLO", mentor4));
console.log(greeting("HELLO", mentor5));

// exercise 1 below

var students = 15;
var mentors = 8;
var total = students + mentors;
function percentage(num1, num2) {
  return (num1 * 100) / num2;
}

function createRoundedNum(str1, str2, a, b) {
  return str1 + Math.round(percentage(a, b)) + str2;
}
var message = createRoundedNum("Percentage students: ", "%", students, total);
var message2 = createRoundedNum("Percentage mentors: ", "%", mentors, total);
console.log(message);
console.log(message2);
