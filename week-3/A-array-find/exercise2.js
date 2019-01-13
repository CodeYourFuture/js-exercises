/*
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
findLongNameThatStartsWithA = names =>names.find(x => x[0] === "A" && x.length > 7);
var names = ["Rakesh", "Alexandra", "Annam", "Mikey", "Karim", "Ahmed"];
var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
