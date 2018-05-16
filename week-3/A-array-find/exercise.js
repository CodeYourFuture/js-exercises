/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

var testScores = [90, 50, 100, 25, 81, 66, 80];
var lowestPassScore = findLowestPassScore(testScores);
function findLowestPassScore(testScores){
  

let findLowestPassScore = (scores) => {
  return scores.sort((a,b)=> a-b).find((score) => score > 60);
}
var lowestPassScore = findLowestPassScore(testScores);

console.log(lowestPassScore);
}
/*function  findLowestPassScore(testScores){
  var passValues = testScores.filter(isOver60);
  var lowerNum = Math.min.apply(Math,passValues);
  return lowerNum;
}
function isOver60(num) {
  return num > 60 ;
}



console.log(findLowestPassScore(testScores));*/

/* EXPECTED OUTPUT */
// 66
