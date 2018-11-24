// 1. Update the variable `sortedNums`.
// It should contain the values of `nums` and `nums2` in ascending order
// Tip: you might need to read the documentation for .sort (search "mdn array sort")

var nums = [10, 1, 5, 29, 100];
var nums2 = [11, 6, 3, 29, 12];
var sortedNums = nums.concat(nums2).sort(function(a, b) {
  return a - b;
}); // complete this statement
//if we don't use the compare function the numbers will convert to strings and sorts
// according to that ,which will lead to mistakes like  100 less than 29 and the result
// will be like this [1,10,100,11,12,29,29,3,5,6]

console.log(sortedNums);

// 2. Using code, show that the variables nums and nums2 were not changed

/* 
  EXPECTED RESULT
  ---------------
  [ 1, 3, 5, 6, 10, 11, 12, 29, 29, 100 ]
*/
