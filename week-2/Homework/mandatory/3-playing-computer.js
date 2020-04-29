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
  2. Remove the line that throws the error.
  3. What is printed to the console?
  4. How many times is "f2" called?-------3 times when value of i is 0 2 and 4---basically when remainder is 0
  5. How many times is "f1" called? -----2 times when value of i is 1 and 3--basically when remainder is not 0
  6. What value does the "a" parameter take in the first "f1" call? --- a is initialized as 6 so it is a=a+1 so it takes
  7 when it first time called
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
-- the value of a is 6

/*what is printed on console
first is value of x which is 2.
second is value of a which is 6
than in the for loop 0%2 which is 0 so it will call f2 with value i=0 and x=2 */


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
  console.log('value of a is '+ a);
  if (i % 2 === 0) {
    console.log('value of i is' + i);
   
    const d = f2(i, x);
    
    console.log(d);
  } else {
    console.log('value of i is in second function' + i);
    const e = f1(i, a);
    console.log(e);
  }
}
