var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function uppermentors(mentor) {
  return mentor.toUpperCase();
}
function shoutygreeting(mentor) {
  var upper = uppermentors(mentor);
  return "HELLO " + upper;
}

var shoutygreeting1 = shoutygreeting(mentor1);
var shoutygreeting2 = shoutygreeting(mentor2);
var shoutygreeting3 = shoutygreeting(mentor3);
var shoutygreeting4 = shoutygreeting(mentor4);
var shoutygreeting5 = shoutygreeting(mentor5);

console.log(shoutygreeting1);
console.log(shoutygreeting2);
console.log(shoutygreeting3);
console.log(shoutygreeting4);
console.log(shoutygreeting5);
