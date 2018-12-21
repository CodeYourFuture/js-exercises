//percentage function

var student = 104;
var mentor = 56;
var total = student + mentor;
var percentMentor = Math.round((mentor * 100) / total);
var percentStudent = Math.round((student * 100) / total);
function message() {
  var var1 =
    "percentage of mentors is " +
    percentMentor +
    "%" +
    " and percentage of student is  " +
    percentStudent +
    "%";

  return var1;
}
console.log(message());

// Message function
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function mentors(name) {
  return name.toUpperCase(name);
}
function greeting(name) {
  return "HELLO  " + mentors(name);
}
console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));
