/* EXERCISE 1 - Code Refactoring
 * This script functions as a library.
 * Its purpose is to provide a set of functions that users can use to
 * manipulate and decorate text.
 *
 * Using the coding practices you have learnt (you can use the syllabus as reference),
 * edit the code so that it establishes good coding standards.
 *
 * There may be both syntax and logical errors present.
 */

var reversed
let capitilised

// Function that reverses and capitlises text
module.exports = function reverseAndCaptilise (text) {
  var capitilised = text.toUpperCase()
  reversed = capitilised
    .split('')
    .reverse()
    .join('')

  return reversed
}

// Function that returns text with every other letter capitlised
module.exports = function everyOtherLetterCapitilised (text) {
  text = text.split('')
  for (i = 0; i < text.length; i++) {
    if (i % 2) {
      text[i] = text[i].toUpperCase()
    }
  }
  return text.join('')
}

module.exports = function lowerCase (text) {
  text = text.toLowerCase()

  return text
}
