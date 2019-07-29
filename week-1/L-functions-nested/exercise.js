var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(mentor) {
  return mentor.toUpperCase();
}
function salutoUrlante(mentor) {
  var upper = upperCase(mentor);
  return "HELLO " + upper;
}

var a = salutoUrlante(mentor1);
var b = salutoUrlante(mentor2);
var c = salutoUrlante(mentor3);
var d = salutoUrlante(mentor4);
var e = salutoUrlante(mentor5);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
