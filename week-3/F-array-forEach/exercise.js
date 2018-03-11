/* 
  Using .forEach() print the numbers 0 to 99, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  You have been given an array with 100 empty items.
*/

var arr = new Array(100);
for (i = 0; i < 100; i++) {
  arr[i] = i;
}
arr.forEach(function(index) {
  if (index === 0) {
    console.log(index);
  } else if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz");
  } else if (index % 3 === 0) {
    console.log("Fizz");
  } else if (index % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(index);
  }
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
... etc ...
*/
