var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
//
function nameToUpperCase(mentorName){
    displayMessage(mentorName.toUpperCase());
}
//
function displayMessage(string){
    console.log("HELLO", string);
}
console.log("~~~~~~~~~~~~~Output~~~~~~~~~~~~~~");
nameToUpperCase(mentor1);
nameToUpperCase(mentor2);
nameToUpperCase(mentor3);
nameToUpperCase(mentor4);
nameToUpperCase(mentor5);
console.log("~~~~~~~~~~~~~end~~~~~~~~~~~~~~~~~");