/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

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

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

function findLongNameThatStartsWithA(n) {
  return n.length > 7;
}

var longName = names.find(findLongNameThatStartsWithA);

function myC() {
  if (longName[0] === "A") {
    return "the name is: " + longName;
  } else {
    return "No";
  }
}
console.log(myC());

/* EXPECTED OUTPUT */
// "Alexandra"
