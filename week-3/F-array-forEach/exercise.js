/* 
  Using .forEach() print the numbers 0 to 99, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  You have been given an array with 100 empty items.
*/

var arr = new Array(100); // same as var arr = [undefined, undefined, ..., undefined]

for (var i = 0; i < 100; i++) {
  arr[i] = i;
}
function printNumber(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
arr.forEach(printNumber);
/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'FizzBuzz'
13
14
'FizzBuzz'
... etc ...
*/
