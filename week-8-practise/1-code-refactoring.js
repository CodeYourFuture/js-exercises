/* EXERCISE 1 - Code Refactoring
 * This script functions as a library.
 * Its purpose is to provide a set of functions that users can use to manipulate and decorate text.
 *
 * Using the coding practices you have learnt (you can use the syllabus as reference),
 * edit the code so that it establishes good coding standards.
 *
 * There may be both syntax and logical errors present.
 */

var reversed;
let capitilised;

// Function that reverses and capitlises text
module.exports = function reverseAndCaptilise(text) {
  var capitalised = text.toUpper();
  reversed = capitalised
    .split("")
    .reverse()
    .join("");
  return reversed;
};

// Function that returns text with every other letter capitlised
export function capitaliseSomeLetters(text) {
  for (i = 0; i < text.lengthj; i++) {
    if (i % 2 == 0) {
      text[i] = text[i].toUpperCase();
    }
  }
}

export function lowerCase(text) {
  return text.toLowerCase();
}
