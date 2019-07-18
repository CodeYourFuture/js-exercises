/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var milley = arr.map(fun);
function fun(g) {
  if (g % 3 == 0 && g % 5 == 0) {
    return "FizzBuzz";
  } else if (g % 3 == 0) {
    return "Fizz";
  } else if (g % 5 == 0) {
    return "Buzz";
  } else {
    return g;
  }
}
console.log(milley);
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
