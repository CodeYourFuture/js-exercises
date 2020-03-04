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

let x = 2; //"2" is assigned to variable "x"
let a = 6; //"6" is assigned to variable "a"

const f1 = function(a, x) { //create a function ans name it as "f1"
  return a + x;
};
console.log(f1(a,5))  //This prints 11 as f1 returns the value of a + x (5 assigned to X below as parameter in the f1) means 6 + 5 =11

const f2 = function(a, b) {
  return a + b + x;
};

console.log(x);  //prints the value of global variable x = 2
console.log(a);  //prints the value of global variable a = 6
//console.log(b); This throws the error

for (let i = 0; i < 2; ++i) { //from 0 (including) to 5 (exculuding) do the following for 
  a = a + 1;
  if (i % 2 === 0) {      //if i is a n even number then execute f1 function. Executes for 3 times (for 0, 2 and 4)
    const d = f2(i, x);
    console.log(d);
    //console.log(a); 
  } else {
    const e = f1(i, a); //This is called for 2 times (for 1 and 3)
    console.log(e);
    //console.log(a); first a value is 8
  }
}
