// Playing computer
//
// Aim: to understand and predict the answers of loops, and if statmetns
//
// You need write the answers of the below questions  1-7

/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  //It throws an error because b is not defined.
  2. Remove the line that throws the error.
  3. What is printed to the console?
  //In the console is printed 2 and 6.
  4. How many times is "f1" called?
  //In the f1 is called twice odd number.
  5. How many times is "f2" called?
  //The f2 is called three times even numbers
  6. What value does the "a" parameter take in the first "f1" call?
//In the first call it takes the place of 7 .
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
// it takes the place of 9

*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
// console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}
