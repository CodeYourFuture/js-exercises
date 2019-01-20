/*You are given an array of names.

Using.find(), we 'd like to find the first name which starts with A and is longer than 7 letters.

  */




// write your code here

function findLongNameThatStartsWithA(name) {

  return ((name.length > 7) && (name[0] === "A"));

}



var names = ["Rakesh", "Alexandra", "Annam", "Mikey", "Karim", "Ahmed"];

var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA)



console.log(longNameThatStartsWithA);



/* EXPECTED OUTPUT */

// "Alexandra"








// /* 
//   You are given an array of test scores.
//   Any result over 60 is a pass. 
//   Using .find() (and any other array methods necessary), find the lowest pass score
// */

// var testScores = [90, 50, 100, 25, 81, 66, 80];
// var lowestPassScore = findLowestPassScore(testScores);

// console.log(lowestPassScore);

// /* EXPECTED OUTPUT */
// // 66