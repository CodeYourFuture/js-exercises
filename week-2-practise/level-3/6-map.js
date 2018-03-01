// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. A new array (`mentorsTidy`) should be created containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function captialise(str) {
  var cashe = str[0].toUpperCase() + str.slice(1, str.lenght);
  return cashe;
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidyAndCapitalised = mentors.map(tidyUpString).map(captialise);

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
