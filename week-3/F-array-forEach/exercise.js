/* 
  Using .forEach() print the numbers 0 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”
  An array with numbers 0-15 has been provided.
*/

function combine(array){
  if((array % 3) === 0 && (array % 5) === 0){
    array = "FizzBuzz";
  }else if((array % 3) === 0){
    array = "Fizz";
  }else if((array % 5) === 0){
    array = "Buzz";
  }

  console.log(array);
} 

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var results = arr.forEach(combine);

//console.log(results);

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
