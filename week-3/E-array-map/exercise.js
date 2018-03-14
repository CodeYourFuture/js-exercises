// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
function double(numbers) {
  return numbers * 2;
}
var numbersDoubled1 = numbers.map(double);
var numbersDoubled2 = numbers.map(function double(number) {
  return number * 2;
});
var numbersDoubled3 = numbers.map(function(number) {
  return number * 2;
});
var numbersDoubled4 = numbers.map(number => number * 2);

console.log("First method: " + numbersDoubled1);
console.log("Second method: " + numbersDoubled2);
console.log("Third method: " + numbersDoubled3);
console.log("Fourth method: " + numbersDoubled4);
