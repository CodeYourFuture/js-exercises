var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function UpperCase(name) {
  return name.toUpperCase();
}
function Greeting(name) {
  var upperNames = UpperCase(name);
  return "HELLO, " + upperNames;
}
console.log(Greeting(mentor1));
console.log(Greeting(mentor2));
console.log(Greeting(mentor3));
console.log(Greeting(mentor4));
console.log(Greeting(mentor5));
