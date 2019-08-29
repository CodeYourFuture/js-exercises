var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperMentors(mentor) {
  return mentor.toUpperCase();
}
function shoutyGreeting(mentor) {
  var upper = upperMentors(mentor);
  return "HELLO " + upper;
}

var shoutygreeting1 = shoutyGreeting(mentor1);
var shoutygreeting2 = shoutyGreeting(mentor2);
var shoutygreeting3 = shoutyGreeting(mentor3);
var shoutygreeting4 = shoutyGreeting(mentor4);
var shoutygreeting5 = shoutyGreeting(mentor5);

console.log(shoutygreeting1);
console.log(shoutygreeting2);
console.log(shoutygreeting3);
console.log(shoutygreeting4);
console.log(shoutygreeting5);
