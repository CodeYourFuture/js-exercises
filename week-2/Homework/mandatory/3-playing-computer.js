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
  // b is not defined.
  2. Remove the line that throws the error.
  //Done!
  3. What is printed to the console?
  // 2 6 4 9 6 13 8
  when i = 0  a =7   f2 is called and gives 4
  when i = 1  a = 8  f1 is called and gives 9
  when i = 2  a = 9  f2 is called and gives 6
  when i = 3  a =10  f1 is called and gives 13
  when i = 4  a =11  f2 is called and gives 8
  4. How many times is "f1" called? 
  // 2 
  5. How many times is "f2" called?
  //3
  6. What value does the "a" parameter take in the first "f1" call?
   a = 8
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  a = 7
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
