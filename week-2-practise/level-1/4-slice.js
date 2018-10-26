// Write a function `first5` that:
// - returns the first 5 items from a provided array

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3, 4, 5, , 6, 7, 8];
var first5Numbers = numbers.slice(0,5);
var a=numbers.slice(0,7)-first5Numbers.slice(5,7)
console.log(first5Numbers);
console.log(a);


/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4, 5]
*/
