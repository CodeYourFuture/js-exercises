/* 
  Using .forEach() print the numbers 0 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”
  An array with numbers 0-15 has been provided.
*/

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var a = arr.map(function(item) {
  if (item >= 3 && item % 3 == 0) {
    return "Fuzz";
  }

  return arr.splice(item, 1, "fuzz");
  //return arr.slice(0, item, "Fuzz")   //.concat(item);
  //return arr.slice(0, item).concat("Fuzz");
});

// var b = arr.map(function(item) {
//   if (item >= 5 && item % 5 == 0) {
//     return "Buzz";
//   }
//   return arr.splice(item, 1, "Buzz");
// });

// arr.forEach(function(num) {
//   console.log(num);
// });

var a = arr.forEach(function(item) {
  if (item % 3 == 0) {
    return "Fuzz";
  }
  //return arr.splice(item, 1, "fuzz");

  console.log(arr.splice(item, 1, "fuzz"));
});

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
