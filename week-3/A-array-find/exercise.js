/*
  You are given an array of names.
  Using .find(), we'd like to find the first name
  which starts with A and is longer than 7 letters.
*/

// -- Complete this function -->
function findLongNameThatStartsWithA(names) {
  if (names.length > 7 && names.startsWith("A")) {
    return true;
  }
}

// DEBUG (check your function works by calling it with some sample input)
var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed"
];

var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);

console.log(longNameThatStartsWithA); // Expected output: "Alexandra"

module.exports = { findLongNameThatStartsWithA };
