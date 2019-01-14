// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var numbersDoubled = numbers.map(function(num) {
  return num * 100;
});

function doubleNumbers(number) {
  return number * 100;
}

var numbersDoubledAgain = numbers.map(doubleNumbers);

var numbersDoubledYetAgain = numbers.map(number => {
  return number * 100;
});

var numbersDoubledForTheLastTime = numbers.map(number => number * 100);

console.log(numbersDoubled);
console.log(numbersDoubledAgain);
console.log(numbersDoubledYetAgain);
console.log(numbersDoubledForTheLastTime);
