/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

var testScores = [90, 50, 100, 25, 81, 66, 80];
testScores.sort(function(a, b){return a - b});
var lowestPassScore = testScores.find(
  function(element) { return element > 60; }
);
console.log(lowestPassScore);

/*
EXPECTED OUTPUT */
// 66
