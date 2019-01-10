// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function captialise(str) {
  // complete this function
  var myString = str.split("");
  myString[0] = myString[0].toUpperCase();
  return myString.join("");
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "].map(tidyUpString);
var mentorsTidyAndCapitalised = mentors.map(captialise);

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
