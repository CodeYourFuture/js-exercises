/* 
READ ONLY - this is an example to help you with the next question.

We have written code which does the SAME calculation 3 times! 
Remember the DRY principle - Don't Repeat Yourself.
This is a good time to use a function.

We can write a function to do the calculation, and 
change our code so it CALLS the function 3 times

When we change our code like this we say we are REFACTORING

Look at exercise5-example2.js to see the refactored code.
*/

let width1 = 10;
let height1 = 2;
let length1 = 3;
let volume1 = width1 * height1 * length1;

let width2 = 4;
let height2 = 6;
let length2 = 2;
let volume2 = width2 * height2 * length2;

let width3 = 8;
let height3 = 3;
let length3 = 5;
let volume3 = width3 * height3 * length3;

console.log(volume1);
console.log(volume2);
console.log(volume3);
