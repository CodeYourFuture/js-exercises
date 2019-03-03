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
reverseAndCaptilise = text => {
  var capitilised = text.toUpperCase()
  reversed = capitilised.split('').reverse().join('') 

  return reversed
  }

// Function that returns text with every other letter capitlised
capitiliseAllLetters = text => text.toUpperCase()
// This function returns string which is converted to lower case
lowerCase = text => text.toLowerCase()