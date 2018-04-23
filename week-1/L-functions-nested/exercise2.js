var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
//
function stringToUpperCase(myName){
    displayMessage(myName.toUpperCase());
}
//
function displayMessage(string){
    console.log("HELLO", string);
}
console.log("~~~~~~~~~~~~~Output~~~~~~~~~~~~~~");
stringToUpperCase(mentor1);
stringToUpperCase(mentor2);
stringToUpperCase(mentor3);
stringToUpperCase(mentor4);
stringToUpperCase(mentor5);
console.log("~~~~~~~~~~~~~end~~~~~~~~~~~~~~~~~");