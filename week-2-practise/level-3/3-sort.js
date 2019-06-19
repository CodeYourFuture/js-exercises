// 1. Update the variable `sortedNums`.
// It should contain the values of `nums` and `nums2` in ascending order
// Tip: you might need to read the documentation for .sort (search "mdn array sort")

var nums = [10, 1, 5, 29, 100];
var nums2 = [11, 6, 3, 29, 12];
/* i have concatened the array num with num2 and i sorted in ascend mode the new array */

var sortedNums = nums.concat(nums2).sort(function(a, b) {
  return a - b;// if i change a - b with b - a it sorted in discending mode
}); // complete this statement

console.log(sortedNums);

// 2. Using code, show that the variables nums and nums2 were not changed

/* 
  EXPECTED RESULT
  ---------------
  [ 1, 3, 5, 6, 10, 11, 12, 29, 29, 100 ]
*/
