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
  return tidyUpString(str).toUpperCase(); // complete this function
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidyAndCapitalised = mentors.map(captialise);

var kkkkk = mentors.map(tidyUpString);
//var mentorsTidyAndCapitalised = kkkkk.map(captialise);

console.log(mentorsTidyAndCapitalised);
console.log(kkkkk);
/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/

/* mentors.map(names =>
  names
    .trim()
    .replace("/", "")
    .toUpperCase()
);
*/
