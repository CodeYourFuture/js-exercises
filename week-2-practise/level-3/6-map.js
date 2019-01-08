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
//  return str[0].toUpperCase();// complete this function
return tidyUpString(str).charAt(0).toUpperCase()+tidyUpString(str).slice(1);
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidyAndCapitalised =  mentors.map(captialise);

console.log(mentorsTidyAndCapitalised);
/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
