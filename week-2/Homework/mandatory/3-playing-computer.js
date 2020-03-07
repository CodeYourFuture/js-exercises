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

let x = 2;
let a = 2;
let b = 6;

const f1 = function(a, b) {
  return a + b;
};

const f2 = function(a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);

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
// there is no variable b declaration, i would add it to escape error,
//but it is required to remove a line in this case i would also remove a declaration
//and pass both variables to the function as parameters. i wrote this and then understood thatthisprogram is not only a function.
//I have the only solution to declare a and b to run it.
// i think f2 is called 3 times because 0 gives 0 remainder when devided by 2
//at the same time f1 is called in 2 cases when i=1 and i= 3.
//I confirmed it by counting logged lines 3 logs for tree log lines before calling loop with f functions and 5
//for 3X*2+2*f1 calls.
