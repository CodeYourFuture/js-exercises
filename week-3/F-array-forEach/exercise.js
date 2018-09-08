/* 
  Using .forEach() print the numbers 0 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 0-15 has been provided.
*/

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  var arr2 = [];
arr.forEach(function ret(item){
  if (item%3==0){return arr2[arr.indexOf(item)] = "Fizz"}
  else if (item % 5 == 0){ return (arr2[arr.indexOf(item)] = "Buzz");}
  else if (item % 15 == 0){ return (arr2[arr.indexOf(item)] = "FizzBuzz");}
  else return (arr2[arr.indexOf(item)] = item);
  
})
console.log(arr2);

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
