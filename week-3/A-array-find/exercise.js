/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/
const findLowestPassScore = arr => {
  return arr.sort((a, b)=> a-b).find(x => x > 60);
};
var testScores = [90, 50, 100, 25, 81, 66, 80];
var lowestPassScore = findLowestPassScore(testScores);

console.log(lowestPassScore);
console.log(findLowestPassScore(testScores));

/* EXPECTED OUTPUT */
// 66
