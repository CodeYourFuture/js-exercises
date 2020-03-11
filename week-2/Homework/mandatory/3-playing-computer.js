/*
  You have to predict the output of this program WITHOUT EXECUTING IT.
  In order to do this, try writing down the value that all variables take
  during each step of the program execution.
  Answer the following questions:
  
Task 1 
  1. This program throws an error. Why? (If you can't find it, try executing it).  
  // "b" is not defined and throws up an error because it is not a variable and has therefore not been given a value.

  2. Remove the line that throws the error. 
  //  error is commented out - console.log(b)

Task 2 - for loop exercise - 
  3. What is printed to the console? 
  console.log(x);   2, -, 2, -, 2
  console.log(a);   7, 8, 9, 10, 11
  console.log(d);   4, -, 6, -, 8
  console.log(e);   -, 9, -, 13, -,

  4. How many times is "f1" called?   
  // f1 is called 2 times (1st time f1 is called is when console.log(e) =[ 9 ], last time f1 is called the console.log(e) returns = [ 13 ]  

  5. How many times is "f2" called?  
  // f2 is called 3 times (1st call of f2 is when console.log(d) = [ 4 ], second time is when console.log(d) = [ 6 ], financial time time f2 is called console.log(d) returns = [ 8 ]

  6. What value does the "a" parameter take in the first "f1" call?        
  // a parameter =  value [ 8 ] 

  7. What is the value of the "a" outer variable when "f1" is called for the first time?
 // I don't understand the question???  Do you mean variable "let a = 6"???

//Final table result of playing computer task 

//                 Table of values
//-------------------------------------------------------
//   i   |   a   |   d   |   e   |   f1   |   f2   |
//-------------------------------------------------------
//   0   |   7   |   4   |   -   |   --   | 1 time |
//   1   |   8   |       |   9   | 1 time |   --   |
//   2   |   9   |   6   |   -   |   --   | 1 time |
//   3   |   10  |       |   13  | 1 time |   --   |
//   4   |   11  |   8   |   -   |   --   | 1 time |
//--------------------------------------------------------
//   5   |   11  |   8   |   13  | 2 times| 3 times|

*/
    
let x = 2;
let a = 6;
const f1 = function(a, b) {   
  // a = i, b = a from the "else" statement dealing [odd numbers]. 
  // 1st time f1 is called the argument is (a = 1 , b = 8)  //  2nd time f1 is called the argument is (a = 3, b = 10)                   
  return a + b;  
  // 1st f1 result "(a = 1) + (b = 8) = 9"  // 2nd f1 result "(a = 3) + (b = 10) = 13" 
};
const f2 = function(a, b) {   
  //  a = i, b = x from the "if" statement dealing with [even numbers].   
  // 1st time f2 is called (a = 0 , b = 2)  // 2nd time f2 is called (a = 2, b = 2)  //3rd time f2 is called (a = 4, b = 2)
  return a + b + x;   
  // 1st f2 result (a = 0) + (b = 2) + (x = 2) = [ 4 ]  // 2nd f2 result (a = 2) + (b = 2) + (x = 2) = [ 6 ]   
  // 3rd f2 result (a = 4) + (b = 2) + (x = 2) = [ 8 ]    
}
console.log(x); 
console.log(a); 
//console.log(b); == Task 1 - answer - error - no variable / no value assigned

//Task 2 - 
for (let i = 0; i < 5; ++i) {   
// for loop result of [let i ] = 0,1,2,3,4 is less then 5 and then the loop ends. 
  a = a + 1;   
//  a is a new variable = old variable + 1 = answer new variable 
// new variable a = 7, 8, 9, 10, 11           
  if (i % 2 === 0) {       
// if [ i ] is an even number resulting from the for loop, then divide by number % 2 with zero remainder, then enter the "if" statement   
    const d = f2(i, x);    
//  (i = 0, x = 2)     //  (i = 2, x = 2)   // (i = 4, x = 2) 
    console.log(d); 
  } else {                
// if [ i ] is an odd number resulting from the for loop, then enter the "else" statement   
    const e = f1(i, a);    
// (i = 1, a = 7 + 1 = 8) // (i = 3, a = 9 + 1 = 10) 
    console.log(e);                       
  }
}
