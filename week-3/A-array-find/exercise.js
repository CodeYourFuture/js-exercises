/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

var haystack = [90, 50, 100, 25, 81, 66, 80];

function findLowestPassScore(num) {
  return num > 60;
}

function byNumber(a, b) {
  return a - b;
}

var sortedScores = haystack.sort(byNumber);
var lowestPassScore = sortedScores.find(findLowestPassScore);

console.log(sortedScores, lowestPassScore);

/* EXPECTED OUTPUT */
// 66
