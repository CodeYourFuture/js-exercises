/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/
function findLowestPassScore(str) {
  str.sort(function(a, b) {
    return a - b;
  });
  var cash = str.find(function(num) {
    return num > 60;
  });
  return cash;
}
var testScores = [90, 50, 100, 25, 81, 66, 80];
var lowestPassScore = findLowestPassScore(testScores);

console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
