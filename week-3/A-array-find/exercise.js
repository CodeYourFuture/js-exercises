/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
function longName(name) {
  if (name[0] === "A" && name.length > 7) {
    return true;
  } else {
    return false;
  }
}

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

var longNameThatStartsWithA = names.find(longName);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
