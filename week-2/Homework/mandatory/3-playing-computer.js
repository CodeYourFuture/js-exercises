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

      //because b is not defined with a value as x and a ....

  2. Remove the line that throws the error.
  3. What is printed to the console?
            2     6    4    9   6    13   8
      /// 2 the value of x , 6 the value of a , moving inside 'for loop' where i starts with value 0 and end with 4,
     console d must be an even number and console e must be an odd number
     first console d prints  4 where i=0 + x=2 + x=2 based on the f2 called function, 
    then console e = 9 where i=1 + a=6 + the increment of a=2,,,,, back to the loop 6 is printed as value
    of d where i=2 + x=2 + x=2,, console 13 is e when i=3 + a=6 + the increment a=4,,,,, last printed console is 8 
      when i=4 + x=2 + x=2.

  4. How many times is "f1" called?
    ///// 2 times when i 1 and 3 
  5. How many times is "f2" called?
  ////// 3 times when i was 0, 2, 4 
  6. What value does the "a" parameter take in the first "f1" call?
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
       6 + 2 the increment 'a = a + 1 ;' = 8 
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
  a = a+1 ;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}
