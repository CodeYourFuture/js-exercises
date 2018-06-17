/* 
  Using .forEach() print the numbers 0 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 0-15 has been provided.
*/

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
arr.forEach(element =>
  console.log(
    element % 3 === 0
      ? element % 5 === 0
        ? "FizzBuzz"
        : "Fizz"
      : element % 5 === 0
        ? "Buzz"
        : element
  )
);

//---------solved with .map-----
// var final = arr.map(function(numbers) {
//   if (numbers % 5 == 0 && numbers % 3 == 0) {
//     return "fizzbuzz";
//   } else if (numbers % 5 == 0) {
//     return "buzz";
//   } else if (numbers % 3 == 0) {
//     return "fizz";
//   } else {
//     return numbers;
//   }
// });
// console.log(final);

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
