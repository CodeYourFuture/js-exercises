/*Biggest number possible: write a program that takes an array of single digit numbers 
and returns the biggest number possible, when all  digits are combined.  An array of numbers 
is provided.*/

var digits = [7, 2, 4, 3, 8];

//function biggestNumber() {
var biggestNumber = digits.sort(function biggestNumber(a, b) {
  return b - a;
});
// input your code here

console.log(biggestNumber.join(""));

// Expected result 87432
