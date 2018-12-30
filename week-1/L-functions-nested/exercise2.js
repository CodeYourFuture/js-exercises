var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function changeNameUpperCase(name) {
    return name.toUpperCase();
}

function createGreeting(name) {
    return console.log ("HELLO " + changeNameUpperCase (name));
}

createGreeting(mentor1);
createGreeting(mentor2);
createGreeting(mentor3);
createGreeting(mentor4);
createGreeting(mentor5);
