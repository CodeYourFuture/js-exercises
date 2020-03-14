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
  7. What is the value of the "a" outer variable when "f1" is called for the first time? 7
*/

let x = 2;
let a = 6;
//let b = 3;
const f1 = function(a, b) { //variable b is missing. Otherwise the function is adding up two variables
  return a + b;
};

const f2 = function(a, b) { //variable b is missing. Otherwise the function is adding up three variables
  return a + b + x;
};

console.log(x); //prints the value of x
console.log(a); //prints the value of a
console.log(b); //prints the value of b if exists

for (let i = 0; i < 5; ++i) {  //loops upto includign i=4
  a = a + 1;                   //increments a 
  if (i % 2 === 0) {           // i = even number is true
    const d = f2(i, x); //called 3 times
    console.log(d);
  } else {
    const e = f1(i, a); //called 2 times
    console.log(e);
  }
}