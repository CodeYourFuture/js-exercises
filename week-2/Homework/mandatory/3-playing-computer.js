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
        We try to log "b" on console but "b" is not defined and it will throw an error.
  2. Remove the line that throws the error.
        Done
  3. What is printed to the console?
        My prediction was 2, 6, 2, 9, 4, 13 6.  Correct : 2 , 6, 4, 9, 6, 13, 8. 
        My calculation for the f2 function was wrong since i did not think it would add x becuase there were only two parameters.
        If I added x (2) for each time f2 called I would find the correct answer.
  4. How many times is "f1" called?
        2 times (when i equals to 1 and 3)
  5. How many times is "f2" called?
        3 times (when i equals to 0 ,2 and 4)
  6. What value does the "a" parameter take in the first "f1" call?
        1
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
        8
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
