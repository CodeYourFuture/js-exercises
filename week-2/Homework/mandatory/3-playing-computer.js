/*
  You have to predict the output of this program WITHOUT EXECUTING IT.
  In order to do this, try writing down the value that all variables take
  during each step of the program execution.
  Answer the following questions:
  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.
  3. What is printed to the console?
  4. How many times is "f1" called?
  5. How many times is "f2" called?
  6. What value does the "a" parameter take in the first "f1" call?
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
*/

let x = 2;//assigning variable x to 2
let a = 6;//assigning variable a to 6

const f1 = function(a, b) { //creating a function called f1 taking two parameters a and b
  return a + b; //return addition of a and b
};

const f2 = function(a, b, x) { //this is the other error maybe as parameter takes 3 returns 2
  return a + b;
};
//logging to the console to see output
console.log(x); //global variable 2 is on console
console.log(a); //global variable 6 is printed on console
//console.log(b); //error
//
for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) { //checks if i is an even number and if yes for: 0 2 and 4
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);//called 2 times
    console.log(e);
  }
}