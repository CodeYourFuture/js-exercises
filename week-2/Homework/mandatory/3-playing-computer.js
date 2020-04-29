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

  1. This program throws an error. Why? (If you can't find it, try executing it). // b is undefined//
  2. Remove the line that throws the error. //removed//
  3. What is printed to the console?
  //i= 0 , a = 7 , f2 = 4
 i= 1 , a = 8 , f1 = 9
 i= 2 , a = 9 , f2 = 6
 i= 3 , a = 10 , f1 = 13
 i= 4 , a = 11 , f2 = 8//

  4. How many times is "f1" called?        //2//
  5. How many times is "f2" called?        //3//
 . What value does the "a" parameter take in the first "f1" call?       //1//
  7. What is the value of the "a" outer variable when "f1" is called for the first time?    //8//
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);    //2//
console.log(a);    //6//


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
