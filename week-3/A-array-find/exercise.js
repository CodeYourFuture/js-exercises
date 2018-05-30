/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/



var testScores = [90, 50, 100, 25, 81, 66, 80];
var sortedScores = testScores.sort(function(a, b){
   return a - b;
  console.log(sortedScores);
});

var lowestPassScore =testScores.find(function(score){
     return score > 60;
});
console.log(lowestPassScore);
/* EXPECTED OUTPUT */
// 66
