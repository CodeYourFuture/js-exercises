/* The following numbers are ages for a group of students. Create a function so that you’ll find out their ages “in total” after 10 years
Hint: Use find method */
var numbers = [18, 17, 19, 16];
var checkingAges = numbers.map(number => number + 10);
var totalAgeInTotal = checkingAges.reduce((a, b) => a + b, 0);

console.log(totalAgeInTotal);
/* EXPECTED RESULT
 -----------
110
 */
