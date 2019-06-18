// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

// solution 1:
function teresa(number) {
  return number * 100;
}
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var numbersNew = numbers.map(teresa);
console.log(numbersNew);

//solution 2 with callback function:
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersNew = numbers.map(function(number) {
  return number * 100;
});

console.log(numbersNew);

//solution 3 with callback function:
var numbers = [2, 4, 5, 7, 8];
var strings = numbers.map(function(number) {
  if (number > 5) {
    return "big";
  } else {
    return "small";
  }
});
console.log(strings);
