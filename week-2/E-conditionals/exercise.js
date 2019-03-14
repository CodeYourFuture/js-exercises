/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

/* Explaining */

/*
var isAwetHappy = false ;
var isCrisHappy = true ;
function checkifHappy (happy) {
  return happy ;
}
if (checkifHappy (isAwetHappy) ) {
  console.log ("i'm happy")
}
else if (checkifHappy (isCrisHappy)){
  console.log ("I am not happy at all")
}
*/

/*
var isHappy : true ;
if (isHappy) {
  console.log("I'm Happy");
} 
else {
  console.log ("I am not happpy at all");
}

*/

var name = "Daniel";
var danielsRole = "mentor";

if (danielsRole === "mentor") {
  console.log("Hi, I'm " + name + " I'm a " + danielsRole + ".");
} else {
  console.log("Hi, I'm " + name + " I'm a student.");
}

// Write your code here

/* 
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
module.exports = {
  danielsRole
};

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
