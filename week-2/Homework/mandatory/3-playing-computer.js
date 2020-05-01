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

  1.Q.This program throws an error. Why? (If you can't find it, try executing it).
  1.A. "b" is not defined, because it is not possible to print an output without inpu/value the error is in the line 38.
  2.Q. Remove the line that throws the error. 2.A. Done.
  3.Q. What is printed to the console?
  3.A. print out to the values of f1() f2()  :
      6
      4
      9
      6
      13
      8
  4.Q. How many times is "f1" called?
  4.A. twice .
  5.Q. How many times is "f2" called?
  5.A. 3 times.
  6. What value does the "a" parameter take in the first "f1" call? 
  6.A."a" takes 6 in the first f1 call.
  7. What is the value of the "a" outer variable when "f1" is called for the first time? 
  7.A. it's 9.
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
