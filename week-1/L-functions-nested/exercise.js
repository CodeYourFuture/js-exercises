var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shout() {
  var mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];
  var size = mentors.length;
  for (i = 0; i < size; i++) {
    var upperName = mentors[i].toUpperCase();
    console.log("HELLO " + upperName);
  }
}
shout();
