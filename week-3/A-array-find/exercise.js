/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/
function findLowestPassScore(num) {
  return num.sort((a, b) => a - b).find(num => num > 60); //using ES6
}
var testScores = [90, 50, 100, 25, 81, 66, 80];
var lowestPassScore = findLowestPassScore(testScores);

console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
