// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  var tidyStr = str
    .trim()
    .toLowerCase()
    .replace("/", "");
  return captialise(tidyStr);
}

function captialise(tidyStr) {
  return tidyStr
    .charAt(0)
    .toUpperCase()
    .concat(tidyStr.slice(1));
}

// complete this function

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidyAndCapitalised = mentors.map(tidyUpString);

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
