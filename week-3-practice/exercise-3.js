// You have an array of names:

var names = ["Bart", "Samantha", "Abz", "Ivina", "Zareen"];

// You know that Abz is shortened from his full name "Abdullah", and Bart is shortened from “Bartholomew” (Yes my parents did that to me and high school was FULL of Simpsons and biblical reference jokes before you ask) ,you want to check if the the array has any shortened names.

// Write a function that checks for abbreviated names (4 characters or less)

// write code here
function isNickname(name) {
  return name.length <= 4;
}

if (names.some(isNickname)) {
  return console.log(true);
} else {
  return console.log(false);
}

// check your array of names using the .some () method.

// Expected output = 'true'
