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

export function reversesAndCaptilises(text) {
  return text
    .split("")
    .reverse()
    .join("")
    .toUpperCase();
}

// Function that returns text with every other letter capitlised

export function everyOtherLetterCapitilised(text) {
  text = text.split("");
  for (i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      text[i] = text[i].toUpperCase();
    }
  }
  return text.join("");
}

//Faucntion that returns text with every other letter in small case

export function everyOtherLetterTolowerCase(text) {
  return text.toLowerCase();
}