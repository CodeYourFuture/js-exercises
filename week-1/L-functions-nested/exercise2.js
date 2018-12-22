function capitalize(name) {
  return name.toUpperCase();
}

function greet(name) {
  return "HELLO " + capitalize(name);
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(greet(mentor1));
console.log(greet(mentor2));
console.log(greet(mentor3));
console.log(greet(mentor4));
console.log(greet(mentor5));
