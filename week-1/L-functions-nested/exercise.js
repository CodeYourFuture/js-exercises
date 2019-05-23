var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upCase(name) {
  return name.toUpperCase();
}

function greeating() {
  return (
    "HELLO " +
    upCase(mentor1) +
    "\n" +
    "HELLO " +
    upCase(mentor2) +
    "\n" +
    "HELLO " +
    upCase(mentor3) +
    "\n" +
    "HELLO " +
    upCase(mentor4) +
    "\n" +
    "HELLO " +
    upCase(mentor5)
  );
}
console.log(greeating());
