/* 
  Using .forEach() print the numbers 0 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 0-15 has been provided.
*/

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function multipleOf(num){
  if(num % 3 === 0 && num % 5 === 0){
    return "FizzBuzz";
  } else if(num % 5 === 0){
    return "Buzz"
  } else if(num % 3 === 0){
    return "Fizz"
  } return num;
};

console.log(arr.forEach(multipleOf));

// function multipleOf3(num){
//   if(num % 3 === 0){
//     return "Fizz";
//   }
// };

// function multipleOf5(num){
// if(num % 5 === 0){
//   return "Buzz";
//   }
// };

// function multipleOf3And5(num){
//   if(num % 3 === 0 && num % 5 === 0){
//     return "FizzBuzz";
//   }
// };
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
