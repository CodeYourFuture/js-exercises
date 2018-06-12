var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// function greeting(mentor) {
//   return "HELLO " + mentor.toUpperCase();
// }

// another best way to code

function greeting(mentor){
  var mentorUpperCase = mentor.toUpperCase();
  console.log("HELLO " + mentorUpperCase);

}


console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));

greeting(mentor1);
greeting(mentor2);
greeting(mentor3);
greeting(mentor4);
greeting(mentor5);