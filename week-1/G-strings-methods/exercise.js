// Start by creating a variable `message`
var greetingStart = "My name is ";
var name = "Mesut ";

var nameLength = name.trim().length;

var greeting =
  greetingStart +
  name.trim() +
  " and " +
  greetingStart +
  nameLength +
  " characters long.";

console.log(greeting);
