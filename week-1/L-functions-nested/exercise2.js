var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function mentors ( names) {
    return names.toUpperCase(names);
}
function greetings (names){
    return "HELLO "+ mentors(names)
}
console.log (greetings(mentor1));
console.log(greetings(mentor2));
console.log(greetings(mentor3));
console.log(greetings(mentor4));
console.log(greetings(mentor5));