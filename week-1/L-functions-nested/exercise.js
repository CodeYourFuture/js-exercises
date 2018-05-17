function greeting(){
    return "HELLO" + upperCase();
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(mentor1);
console.log(mentor2);
console.log(mentor3);
console.log(mentor4);
console.log(mentor5);

function consoleMentor(mentor) {
    var mentorUpperCase = mentor.toUpperCase();
    console.log("HELLO " + mentorUpperCase);
}

consoleMentor(mentor1);
consoleMentor(mentor2);
consoleMentor(mentor3);
consoleMentor(mentor4);
consoleMentor(mentor5);
