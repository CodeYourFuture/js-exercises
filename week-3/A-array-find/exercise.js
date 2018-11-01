/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/
function compareNumbers(a, b) {
  return a - b;
}
var testScores = [90, 50, 100, 25, 81, 66, 80];
var sorted = testScores.sort(compareNumbers);

function findLowestPassScore(testScores) {
  return testScores >= 60;
}
var lowestPassScore = sorted.find(findLowestPassScore);
console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
