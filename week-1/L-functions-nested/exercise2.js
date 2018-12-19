var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function mentors(names){
    return names.toUpperCase(names);
}

function shoutGreetings(names){
    return "HELLO "+ mentors(names);

}
console.log(shoutGreetings(mentor1));
console.log(shoutGreetings(mentor2));
console.log(shoutGreetings(mentor3));
console.log(shoutGreetings(mentor4));
console.log(shoutGreetings(mentor5));


