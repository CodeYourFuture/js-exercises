/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

var testScores = [90, 50, 100, 25, 81, 66, 80];
 
function isHighScore(score) {
  return score > 60;
} 

  
var highTestScores = testScores.filter(isHighScore);
var sortedTest=highTestScores.sort((a, b) => a - b);
var finnalTest=sortedTest.find(isHighScore);
console.log(finnalTest);




// /* EXPECTED OUTPUT */
// // 66
