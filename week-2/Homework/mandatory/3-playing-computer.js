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
  Because var b in declared inside the f1 and f2 function, that's why we can't print it without call the function.
  2. Remove the line that throws the error.
  Done
  3. What is printed to the console?
  x and a.
  4. How many times is "f1" called?
  Two times
  5. How many times is "f2" called?
  Three times
  6. What value does the "a" parameter take in the first "f1" call?
  6
  7. What is the value of the "a" outer variable when "f1" is called for the first time?..
   8
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

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
