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
     // b is not defined - replace x by b. 

  2. Remove the line that throws the error.
     
  3. What is printed to the console?
  2, 6, 0, 2, 4, 6, 9, 13.    // @ mentor can you please help me understand why the output is 2, 6, 0, 4, 9, 6, 13, 8? 
                              // you can see my reasoning in my notes below. Where am I wrong? 

  4. How many times is "f1" called? 
     twice

  5. How many times is "f2" called?
     3 times

  6. What value does the "a" parameter take in the first "f1" call?
     8 

  7. What is the value of the "a" outer variable when "f1" is called for the first time?
*/   6

let x = 2;                       
let a = 6;   
let b = 0;                      // added b is 0 to remove the error 

const f1 = function (a, b) { 
  
  return a + b;     
                                
};

const f2 = function (a, b) {      
  return a + b + x;
  
};                              //returns sum of 3 parameters

console.log(x);                  // x is 2
console.log(a);                  // a is 6      
console.log(b);                  // b is undefined

for (let i = 0; i < 5; ++i) {  // for loop where i starts at zero, i < 5 is true until i is 4 and the loop keeps going. 
                               // After that, the condition i < 5 becomes false and the loop stops. 
                              // i is incremented by 1 at every new loop. 
 
  a = a + 1;                  // a++; at every loop a is incremented by 1. 
                              // At the start, a is 6, at the end of the loop a is 11

  if (i % 2 === 0) {          // if i is even is true, run code. 
    const d = f2(i, x);       // d = 0 + 2 . 1st, 3rd and 5th loop i is an even number is true. 
                              // 1st loop: d is 2 (0 + 2). 3rd loop d is 4 (2 + 2), 5th loop d is 6 (4 + 2). 
    console.log(d);           // what will log? 2, 4, 6. 
  } else {                    // if i is even is false, run this code.  
    const e = f1(i, a);       // e = i + 6; in 2nd and 4th loop, i is an even number is false. 
                              // 2nd loop: e is 9 (1 + 8), in 4th loop e is 13 (3 + 10). 
    console.log(e);           // What will log? 9 and 13. 
  }
}
