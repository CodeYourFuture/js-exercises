// Using the .map() method, create a new array with `numbers` multiplied by 10
// Write multiple solutions using different syntax

var numbers = [1, 2, 3, 4, 5];
// write your code here
var numbersMultiplied = numbers.map(multiply);
function multiply(number) {
  return number * 10;
}
var numbersMultiplied = numbers.map(function(number) {
  return number * 10;
});
var numbersMultiplied = numbers.map(number => {
  return number * 10;
});
var numbersMultiplied = numbers.map(number => number * 10);
console.log(numbersMultiplied);
// Expected output = [10, 20, 30, 40, 50];
