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
 var newStr = str.toLowerCase().slice(1); 
  var capitalisedLetter = str.charAt(0).toUpperCase();
  var res = capitalisedLetter + newStr;
  return res;
  // complete this function
}
var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
function tidyingMentors(){
var mentorsTidy = mentors.map(tidyUpString);
var mentorsTidyAndCapitalised = mentorsTidy.map(captialise);
return mentorsTidyAndCapitalised;
}
console.log(tidyingMentors());
/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
