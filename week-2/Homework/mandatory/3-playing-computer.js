/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  task 1 
  1. This program throws an error. Why? (If you can't find it, try executing it).  //because "b" is not defined because it had no varruble with the value./
  2. Remove the line that throws the error.
task 2
  3. What is printed to the console?  // 2, 6, 4, 9, 6, 13, 8   
  console.log(x);   2
  console.log(a);   6
  console.log(d);   4, 6, 8 
  console.log(e);   9, 13
  4. How many times is "f1" called?   // 1st call of f1 is when consol.log(e) = 9,  //  last time f1 is called and resulting in console.log(e) = 13  
  5. How many times is "f2" called?  // 1st call of f2 is when console.log(d) = 4, second time f2 is called and resulting in console.log(d) = 6   // last time f2 is called and resulting in console.log(d) = 8
  6. What value does the "a" parameter take in the first "f1" call?        // value 8 
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
*/
    
let x = 2;
let a = 6;

const f1 = function(a, b) {   //  a = i, b = a from the "else" staitment.   // a = 1 , b= 8 now return line 30          //a = 3, b = 10                   
  return a + b;  //  (a = 1) + (b = 8) = 9                  // (a = 3) + (b = 10) = 13 
};

const f2 = function(a, b) {   //  a = i, b = x from the "if" staitment.   // a =0 , b= 2  now return line 34, a = 2, b = 2, x = 2, result 6    // a = 4, b = 2,
  return a + b + x;   // a = 0, + b = 2, + x = 2 = 4 -- (a = 2) + (b = 2) + (x = 2) = 6   //  (a = 4) + b = 2, x = 2 result 8    
};a =0 , b= 2  

console.log(x); 
console.log(a); 
//console.log(b);

for (let i = 0; i < 5; ++i) {   // i = 0,1,2,3,4   less then 5 and then the loop end and it gose to line 51, 
  a = a + 1;   //  a is a new variable = to the old variable "let a = 6" then + 1 = answer new variable // a = 7, 8, 9, 10, 11           

  if (i % 2 === 0) {             // if i is a even number it only taks the number comes from the for loop, % 2, then the loop will enter the "if" statment,   
    const d = f2(i, x);    //  i = 0, x = 2     //  i = 2, x = 2  // i = 4, x = 2 
    console.log(d);     // const f2 function will return 4, 
  } else {
    const e = f1(i, a);           // i = 1, a = 7 + 1 = 8 . i = 3, a = 9 + 1 = 10 
    console.log(e);                                  // shows 9 on turminal.
  }
}
