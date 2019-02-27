/* EXERCISE 1 - Code Refactoring
 * This script functions as a library. 
 * Its purpose is to provide a set of functions that users can use to manipulate and decorate text.
 *
 * Using the coding practices you have learnt (you can use the syllabus as reference),
 * edit the code so that it establishes good coding standards. 
 *
 * There may be both syntax and logical errors present.
 */


// this function handle the split the reverse ad the join method
export function reverseAndCaptilise(text) {
  return text
    .split("")
    .reverse()
    .join("")
    .toUpperCase();
}

//this function will transform all text to upperCase,
export function everyOtherLetterCapitilised(text) {
  return text.toUpperCase();
}

//this function will tranform all the text to lowerCase;
export function lowerCase(text) {
  return text.toLowerCase();
}

// please note the function call  below is just  to test that the function are working accordingly,
// to test this function call  remove the  word export from all the functions. and this line of code will run.
console.log(reverseAndCaptilise("clement"));
console.log(everyOtherLetterCapitilised("mildred"));
console.log(lowerCase("MARY"));