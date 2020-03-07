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
/*My answers
1. b is not declared
2. I commented out line  
3. 2 6 4 9 6 13 8
4. twice
5 three times
6.a in the first f1 call is 8.
7. 8

*/
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
//console.log(b); b is not defined

for (let i = 0; i < 5; ++i) {
  a = a + 1;//7
  if (i % 2 === 0) { //if it is even
    const d = f2(i, x);  
    console.log(d);//4 6 8
  } 
  else {
    const e = f1(i, a); // 
    console.log(e);
  }
}
