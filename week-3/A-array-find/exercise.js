/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

var testScores = [90, 50, 100, 25, 81, 66, 80];
var sortArr = testScores.sort(function(a, b) {
  return a - b;
});
console.log(sortArr);
var result = sortArr.find(isPassScore);
function isPassScore(testScore) {
  if (testScore > 60) {
    return true;
  }
  return false;
}

console.log(result);
/* EXPECTED OUTPUT */
// 66
