// Write a function `first5` that:
// - returns the first 5 lteritems from a provided array
var first5 = function(number) {
   return number.slice(0,5);
 }

/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3, 4, 5, , 6, 7, 8];
var first5Numbers = first5(numbers);

console.log(first5Numbers);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4, 5]
*/
