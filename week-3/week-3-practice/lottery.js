/*
I would like to play the National lottery and would like to use different numbers every time. 
National lottery requires 6 set of numbers.  
Please use .map() to print each set of number which should be between 1 and 59.

A array with 6 sets of numbers has been provided
Console.log has been provided
*/

const numbers = [1, 2, 3, 4, 5, 6];
var lottery = numbers.map(array => Math.round(Math.random() * 59));

console.log("Good luck, your numbers are " + lottery);

/* EXPECTED OUTPUT */
/*Good luck, your numbers are " "*/
