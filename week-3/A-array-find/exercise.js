/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/
function findLowestPassScore(score){
  var lowestNum = score.sort(function(a ,b){return a-b;});
  return lowestNum.find(function(num){return num > 60});

  /*for(var i = 0; i < score.length; i++){
    if(lowestNum[i] > 60){
      return lowestNum[i];
    }
  }
  //return lowestNum;*/
}

var testScores = [90, 50, 100, 25, 81, 66, 80];
var lowestPassScore = findLowestPassScore(testScores);

console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
