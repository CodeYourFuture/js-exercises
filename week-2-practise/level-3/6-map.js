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

var mentorsTidyAndCapitalised = mentors.map(function(str) {
  var makeTidyAndCaps = tidyUpString(str);
  return capitalise(makeTidyAndCaps);
});

console.log(mentorsTidyAndCapitalised);
/*
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
