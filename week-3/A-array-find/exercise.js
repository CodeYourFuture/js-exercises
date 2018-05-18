/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

var testScores = [90, 50, 100, 25, 81, 66, 80];

function sortNumber(a, b) {
  return a - b;
}

function findLowestPassScore(item) {
  return item > 60;
}

var lowestPassScore = testScores.sort(sortNumber).find(findLowestPassScore);

console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
