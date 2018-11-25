/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

function isOver60(score) {
  return score > 60;
}
function findLowestPassScore(nums) {
  return nums
    .sort(function(a, b) {
      return a - b;
    })
    .find(isOver60);
} // I used  function(a,b) to sort the scores from lowest to largest as numbers
// then the function .find will return the first value meet the condition in isOver60.

var testScores = [90, 50, 100, 25, 81, 66, 80];
var lowestPassScore = findLowestPassScore(testScores);

console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
