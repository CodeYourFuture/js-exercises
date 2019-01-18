// you are given two array names and teamName
//write a function to check if the right team name is selected.
//hint use array.every method

var names = [
  "David",
  "Julio",
  "Marcathy",
  "Sammy",
  "Deadly",
  "carmel",
  "Esus",
  "Damina"
];
var teamName = ["Frank", "Junior", "Smart", "Gene", "Marcus", "zack", "Fabio"];

var teamOnlyList = names.every(name => teamName.includes(name) !== true); // complete this statement

//Do not edit below this line
if (teamOnlyList) {
  console.log("this is the right team name, let play.");
} else {
  console.log("This is not the right team names");
}

/* Expected output
this is the right team name, let play

*/
