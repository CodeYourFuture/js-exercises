/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Alexandra", "Annam", "Mikey", "Karim", "Ahmed"];
var longNameThatStartsWithA = names.find(function(name) {
  return name[0].includes("A") && name.length > 7;
});

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"

/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

/*
Ignore! 

*/

var testScores = [90, 50, 100, 25, 81, 66, 80];
var filterResults = testScores.filter(filterScores).sort(function(num1, num2) {
  return num1 - num2;
});

var findLowestPass = filterResults.find(function(num) {
  return num >= 60;
});

function filterScores(num) {
  return num >= 60;
}

console.log(findLowestPass);

/* EXPECTED OUTPUT */
// 66
