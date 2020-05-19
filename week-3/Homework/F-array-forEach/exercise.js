/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function printingNumbers(x) {
  if (x % 15 === 0) {
    console.log("FizzBuzz");
  } else if (x % 5 === 0) {
    console.log("Buzz");
  } else if (x % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(x);
  }
}

var result = arr.forEach(printingNumbers);

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
'Fizz'
13
14
'FizzBuzz'
*/
