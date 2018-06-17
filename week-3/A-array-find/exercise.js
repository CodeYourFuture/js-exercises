/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

var testScores = [90, 50, 100, 25, 81, 66, 80];
var lowestPassScore = findLowestPassScore(testScores);

function isPass(score) {
  return score > 60;
}
function findLowestPassScore(testScores) {
  var sortedTestscore = testScores.sort(function(a, b) {
    return a - b;
  });
  //console.log(sortedTestscore);
  return sortedTestscore.find(isPass);

  // OR sortedTestscore.find(function(num){num > 60});
}
console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
