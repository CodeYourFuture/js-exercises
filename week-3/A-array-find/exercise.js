/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Alexandra", "Annam", "Mikey", "Karim", "Ahmed"];

//var longNameThatStartsWithA = names.find(LongNameThatStartsWithA);

//function LongNameThatStartsWithA(name) {
// return name[0] === "A" && name.length > 7; // Original attempt in class
//}

// console.log(longNameThatStartsWithA);

console.log(names.find(name => name[0] === "A" && name.length > 7)); //Trying out arrow function to complete

/* EXPECTED OUTPUT */
// "Alexandra"
