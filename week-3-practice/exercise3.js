/* 
  You are given an array of test scores.
  Any result less than 50 is a fail. 
  Using .find() (and any other array methods necessary), find the lowest fail score
*/
var testScores = [49, 50, 100, 25, 81, 21, 80];
var lowestPassScore = findLowestPassScore(testScores);

console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 21
