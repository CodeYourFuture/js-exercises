/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it). 
  2. Remove the line that throws the error.
  3. What is printed to the console? 2 6 4 9 6 13 8
  4. How many times is "f1" called? 2 times
  5. How many times is "f2" called? 3 times
  6. What value does the "a" parameter take in the first "f1" call? if your mean is "i" in line 40 that asigned to "a" in line 22 so is "1", if your mean is "a" in line 40 that asigned to "b" in line 22 so is 8
  7. What is the value of the "a" outer variable when "f1" is called for the first time? if your mean is "a" in line 40 so answer is "8", if your mean is "a" in line 22 so answer is "1"
*/
console.clear(); // clean all outputs in console and when you run the code you'll see only last output

let x = 2;
let a = 6;

const f1 = function(a, b) {
  return a + b;
};

const f2 = function(a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
//console.log(b); // Because b is not defined!                   Table of values
                                             //---------------------------------------------------------     
for (let i = 0; i < 5; ++i) {                //   i   |   a   |   d   |   e   |    f1    |    f2    |
  a = a + 1;                                 //---------------------------------------------------------
  if (i % 2 === 0) {                         //   0   |   7   |   4   |   -   |    --    | 1 times  |
    const d = f2(i, x);                      //   1   |   8   |   -   |   9   | 1 times  |    --    |
    console.log(d);                          //   2   |   9   |   6   |   -   |    --    | 1 times  |
  } else {                                   //   3   |   10  |   -   |   13  | 1 times  |    --    |
    const e = f1(i, a);                      //   4   |   11  |   8   |   -   |    --    | 1 times  |
    console.log(e);                          //---------------------------------------------------------     
  }                                          //   5   |   11  |   8   |   13  | 2 times  | 3 times  |          
}
