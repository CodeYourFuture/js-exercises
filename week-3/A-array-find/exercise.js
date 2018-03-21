/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

function isPass(score) {
  return score > 60;
}
function sortScoreAscending(a, b) {
  return a - b;
}
// ?
var testScores = [90, 50, 100, 25, 81, 66, 80];

var lowestPassScore = testScores.sort(sortScoreAscending).find(isPass);

console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
