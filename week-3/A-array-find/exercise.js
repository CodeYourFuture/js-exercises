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
