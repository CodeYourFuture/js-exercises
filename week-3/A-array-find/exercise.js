/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

var testScores = [90, 50, 100, 25, 81, 66, 80];

var lowestPassScore = testScores.find(function(testScores) {
  return testScores > 60;
});
console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
//var longName = names.find(isLongName);

// i HAve correctly wrote the function but i have no idea why the result comes 90
