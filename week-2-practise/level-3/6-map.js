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

function capitalise(str) {
  var removeRestLetters = str.slice(1);
  var removeFirstLetter = str.slice(0, 1);
  var addCapitalLetter = removeFirstLetter.toUpperCase();
  return addCapitalLetter.concat(removeRestLetters);
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];

var mentorsMapped = mentors.map(tidyUpString);

var mentorsTidyAndCapitalised = [];

mentorsMapped.forEach(function(element) {
  var change = capitalise(element);
  mentorsTidyAndCapitalised.push(change);
});
console.log(mentorsTidyAndCapitalised);
/*
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
