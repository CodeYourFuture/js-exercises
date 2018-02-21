var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function greeting(name) {
  var upperName = name.toUpperCase();
  return upperName;
}
function finalGreeting(name) {
  var newName = greeting(name);
  var message = "HELLO  " + newName;
  return message;
}
var shoutyGreeting = finalGreeting(mentor1);
console.log(shoutyGreeting);
var shoutyGreeting = finalGreeting(mentor2);
console.log(shoutyGreeting);
var shoutyGreeting = finalGreeting(mentor3);
console.log(shoutyGreeting);
var shoutyGreeting = finalGreeting(mentor4);
console.log(shoutyGreeting);
var shoutyGreeting = finalGreeting(mentor5);
console.log(shoutyGreeting);
