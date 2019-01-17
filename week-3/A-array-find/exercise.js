/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

var names = ["Rakesh", "Alexandra", "Annam", "Mikey", "Karim", "Ahmed"];
var longNameThatStartsWithA = names.find(function(name) {
  return name[0] === "A" && name.length > 7;
});

console.log(longNameThatStartsWithA);
/* EXPECTED OUTPUT */
// 66
