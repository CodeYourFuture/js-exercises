/* 
  Using .forEach() print the numbers 0 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 0-15 has been provided.
*/

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

arr.forEach(num => {
  console.log(
    num % 3 === 0
      ? num % 5 === 0
        ? "FizzBuzz"
        : "Fizz"
      : num % 5 === 0
        ? "Buzz"
        : num
  );
});

// arr.forEach(num => {
//   switch (true) {
//     case num % 3 == 0 && num % 5 == 0:
//       console.log("FizzBuzz");
//       break;
//     case num % 3 == 0:
//       console.log("Fizz");
//       break;
//     case num % 5 == 0:
//       console.log("Buzz");
//       break;
//     default:
//       console.log(num);
//   }
// });

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
*/
