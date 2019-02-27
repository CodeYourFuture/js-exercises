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
function reverseAndCapitilize(text) {
  return text.toUpperCase().split('').reverse().join('');
}

// Function that returns text with every other letter capitlised
function everyOtherLetterCapitilised(text) {
  //converting text to array and making each letter an element of array
  text = text.split('');
  // looping through each letter of the array
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      //converting letter to uppercase if the index number is even
      text[i] = text[i].toUpperCase();
    }
  }
  return text.join("");//converting array back to string
}

function lowerCase(text) {
  return text.toLowerCase()
}

export { reverseAndCapitilize, everyOtherLetterCapitilised, lowerCase };