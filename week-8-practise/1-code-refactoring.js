/* EXERCISE 1 - Code Refactoring
 * This script functions as a library.
 * Its purpose is to provide a set of functions that users can use to manipulate and decorate text.
 *
 * Using the coding practices you have learnt (you can use the syllabus as reference),
 * edit the code so that it establishes good coding standards.
 *
 * There may be both syntax and logical errors present.
 */

// Function that reverses and capitlises text
function reverseAndCaptilise(inputStr) {
  return inputStr
    .toUpperCase()
    .split("")
    .reverse()
    .join("");
}

// Function that returns text with every other letter capitalized
function everyOtherLetterCapitalized(inputStr) {
  var output = inputStr.split("");
  for (var i = 1; i < output.length; i += 2) {
    output[i] = output[i].toUpperCase();
  }
  return output.join("");
}

console.log(everyOtherLetterCapitalized("hello"));

function lowerCase(inputStr) {
  return inputStr.toLowerCase();
}
