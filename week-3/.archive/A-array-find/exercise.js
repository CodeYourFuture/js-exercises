/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Brockoit", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];



//var longNameThatStartsWithA = findLongNameThatStartsWithA();


function findLongNameThatStartsWithA (name){
  return name.length > 7 && name.startsWith("A"); 
}
var startsA = names.find(findLongNameThatStartsWithA);

console.log(startsA);


