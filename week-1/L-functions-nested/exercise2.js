
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function nameUpper(mentor) {
    return mentor.toUpperCase();
}
function createGreeting(mentor) {
    var mentorName = nameUpper(mentor);
    console.log("HI " + mentorName);
}
createGreeting(mentor1);
createGreeting(mentor2);
createGreeting(mentor3);
createGreeting(mentor4);
createGreeting(mentor5);