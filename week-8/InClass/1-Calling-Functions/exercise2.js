/*
ONLY CHANGE LINE 23 to answer this question

This code has a bug - if we run it we see the result "NaN"
This means "Not a Number", we get this when we try to multiply (or divide, add, subtract etc)
a variable which is not of type = number

Why are we getting this result?

Please fix this code so we get the result 10

ONLY CHANGE LINE 23
*/

function doubleNumber(num) {
  num = num * 2;
  return num;
}

let a = 5;

// ONLY CHANGE CODE ON LINE 23
let b = doubleNumber(a);

console.log(b);
