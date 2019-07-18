/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.

*/
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

var longNameThatStartsWithA = names.find(
  str => str.length > 7 && str.charAt(0) == "A"
);

console.log(longNameThatStartsWithA);
/*
// EXPECTED OUTPUT
// "Alexandra"

// FIND THE LONGEST NAME FROM GIVE ARRAY

var arr = [
  "jib",
  "khanjjjj",
  "zeemmmmms",
  "kashan",
  "shan",
  "fu",
  "zing",
  "jayasuriya"
];
var milley = arr.sort((a, b) => b.length - a.length)[0];
console.log(milley);


function minMax(arr) {
  // fix me!
  var y = [];
  var v = [];
  y.push(arr.sort((a, b) => b - a)[0]);
  v.push(arr.sort((a, b) => a - b)[arr.length - 1]);
  return v;
}
console.log(minMax([8, 5, 3, 2, 5, 1]));

var n = [8, 5, 3, 2, 5, 1];
console.log(Math.max(...n), Math.min(...n));
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]; // fix me!
}
console.log(minMax([8, 5, 3, 2, 5, 1]));
*/
