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
function reverseAndCapitalise(word) {
  let capitalised = word.toUpperCase();
  let reversed = capitalised
    .split("")
    .reverse()
    .join("");
  return reversed;
}
// Function that returns text with every other letter capitlised

function everyOtherLetterCapitilised(word) {
  return word.toUpperCase();
}

function transformTextToLowerCase(word) {
  let result = word.toLowerCase();
  return result;
}
//console.log(reverseAndCapitalise("estrela"))

//console.log(everyOtherLetterCapitilised("mdkmdkmdkm"))

//console.log(transformTextToLowerCase("IvinaJJJ"))
