/*
Before we go the big story;  we will introduce more string methods. Some of the methods you're using in Array have similar ones with strings
Methods like : IndexOf, Include, Search, Slice , Spilt and more. You can always google how a method of a string work
Here is links for some of them 
https://www.w3schools.com/js/js_string_methods.asp
https://javascript.info/string#quotes


Now let's do this small exercise
Using string mapulation methods update the checkCodeIsThere() function 
- The function will have a string as a paramter
-The function should check if the string has the word "code" exists in the string
- If it does exist, return the index of it, if not return not found 
Hint: search string methods like Includes, IndexOF can be helpful 
*/

function checkCodeIsThere(stringText) {
  let magicWord = "code";
  //edit code below
  if (stringText) {
    return stringText;
  } else {
    return "Not found";
  }
}

/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.

  Return an array of where I can go if I only want to use a specific mode of transport.

  NOTE: only the names should be returned, not the means of transport.
*/
//Hint some string methods needed as well as array methods
//search slice and includes for string
// and filter and map for array

function journeyPlanner() {}

/* ======= TESTS - DO NOT MODIFY ===== */

const string1 = "I Love coding and perfect code makes me happy";
const string2 = "I don't like to do coding";
const string3 = "Can you scan the barcode for me";

const londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
  ["Greenwich", "bus", "river boat"],
];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "checkCodeIsThere function works - case 1",
  checkCodeIsThere(string1) === 26
);

test(
  "checkCodeIsThere function works - case 2",
  checkCodeIsThere(string2) === "Not found"
);
test(
  "checkCodeIsThere function works - case 3",
  checkCodeIsThere(string3) === 20
);
test(
  "journeyPlanner function works - case 1",
  arraysEqual(journeyPlanner(londonLocations, "river boat"), [
    "London Bridge",
    "Greenwich",
  ])
);

test(
  "journeyPlanner function works - case 2",
  arraysEqual(journeyPlanner(londonLocations, "bus"), [
    "Angel",
    "Tower Bridge",
    "Greenwich",
  ])
);

test(
  "journeyPlanner function works - case 3",
  arraysEqual(journeyPlanner(londonLocations, "tube"), [
    "Angel",
    "London Bridge",
    "Tower Bridge",
  ])
);
