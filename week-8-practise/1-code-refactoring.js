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
//export 
function reverseAndCaptilise(text){ 
  // var capitlised = text.toUpper()
  // reversed = capitilised.split('').reverse().join('') 

  return text.split('')
  .reverse().join('')
  .toUpperCase();
  };
 
//Function that returns text with every other letter capitlised
//export 
function everyOtherLetterCapitilised(text) {
  var capital = "";
  for (i = 0; i < text.length; i++) {
    capital += i % 2 == 0 ? text.charAt(i).toUpperCase():text.charAt(i);   
       
       
  }
  return capital
}

//export
  function lowerCase(text) {
return text.toLowerCase()

}


console.log(reverseAndCaptilise('Mussie'));

console.log(everyOtherLetterCapitilised('clement'));

console.log(lowerCase('MILDRED'));