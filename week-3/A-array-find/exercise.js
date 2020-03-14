/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here


const names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];
function longNameThatStartsWithA(word) {
  return word.length > 7 && word.charAt(0) === "A"
}
// let found = names.find(word => word.length > 7 && word.charAt(0) === "A")
// return found
console.log(names.find(longNameThatStartsWithA))






/* EXPECTED OUTPUT */
// "Alexandra"
