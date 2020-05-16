// 1. Write a function (`capitalise`) that capitalises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `capitalise` function

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];

function tidyUpString(str) {
  return str.trim().toLowerCase().replace("/", "");
}

function capitalise(str) {
  let resultingItem = str.charAt(0).toUpperCase() + str.slice(1);
  return resultingItem;
  // complete this function
}

let mentorsTidy = mentors.map(tidyUpString);
let mentorsTidyAndCapitalised = mentorsTidy.map(capitalise);

console.log(mentorsTidyAndCapitalised);

/*
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
