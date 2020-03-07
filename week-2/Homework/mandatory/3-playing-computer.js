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

let x = 1;
let a = 2;
let b = 3;
let i = 0;
let g = 0;
let j = 0;

const f1 = function(a, b) {
  g++;
  return a + b;
};

const f2 = function(a, b) {
  j++;
  return a + b + x;
  
};

console.log(`this is x ` + `${x}`);
console.log(`this is a ` + `${a}`);
console.log(`this is b ` + `${b}`);

console.log(`this is g ` + `${g}`);
console.log(`this is j ` + `${j}`);
for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(`this is d ` + `${d}`);
  } else {
    const e = f1(i, a);
    console.log(`this is e ` + `${e}`);
  }
}
