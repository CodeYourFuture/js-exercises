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

let x = 2;// variable x assigned to 2
let a = 6;// variable a assigned to 6

const f1 = function(a, b) {//f1 is a function with a prameters  a and b
  return a + b;// sums a and returns the result  However this would return an error because 'b' is not defined
};

const f2 = function (a, b) {//f2 is a function with a prameters  a and b
  return a + b + x; // returns an error b is not defined
};

console.log(x);// prints 2
console.log(a);//prints 6
//console.log(b); // need to be removed becouse it will give an error.

for (let i = 0; i < 5; ++i) {//for loop
  a = a + 1; // a is 7
  if (i % 2 === 0) {// if i is even 
    const d = f2(i, x); // calls a function d once  incrementation of i  x would be 2
    console.log(d);// console logs the function
  } else {
    const e = f1(i, a);// calls function  a would be 7  
    console.log(e); // console logs it 
  }
}
