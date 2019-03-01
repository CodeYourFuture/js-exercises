/* EXERCISE 1 - Code Refactoring
 * This script functions as a library.
 * Its purpose is to provide a set of functions that users can use to manipulate and decorate text.
 *
 * Using the coding practices you have learnt (you can use the syllabus as reference),
 * edit the code so that it establishes good coding standards.
 *
 * There may be both syntax and logical errors present.
 */

// Function that reverses and capitalises text
export function reverseAndCapitalise(text) {
  return text
    .split("")
    .reverse()
    .join("")
    .toUpperCase();
}

// Function that returns text with every other letter capitalised
export function capitaliseLetters(text) {
  return text.toUpperCase();
}
// Function that returns text in lowercase
export function lowerCase(text) {
  return text.toLowerCase();
}
