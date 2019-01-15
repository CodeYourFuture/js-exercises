/* 
  Using .forEach() print the numbers 0 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 0-15 has been provided.
*/
//create a function that performs on each element in the array.

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

arr.forEach(multiples(item){ 
if (item %3 === 0){
  return "Fizz";
} else if (item %5 === 0){
  return "Buzz";
} else if (item %3 === 0 && item %5 === 0){
  return "FizzBuzz";
} else {
  return item;
}
});

console.log(item);


 /* please ignore this is my working's out 

 function mutliples(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 == 0) {
      sum += i;
    }
  }
  return "fizz";

else if ( i % 5 == 0) {
  sum += i;
}
return "Buzz";

else if (i % 3 != 0) && (i % 5 != 0) {
return "FizzBuzz";
} */



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
