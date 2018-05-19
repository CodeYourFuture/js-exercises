/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

var testScores = [90, 50, 100, 25, 81, 66, 80];
function overSixty (score) {
  return score > 60;
}


function sortScores (a, b){
  return a-b;
}
testScores = testScores.filter(overSixty);
testScores = testScores.sort(sortScores);






lowestPassScore = testScores[0];
console.log(lowestPassScore);


//console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
