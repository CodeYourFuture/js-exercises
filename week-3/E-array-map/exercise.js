// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiply(num) {
  return num * 100;
}

var newNumbers = numbers.map(multiply);

console.log(newNumbers);

var newNumbers2 = numbers.map(function multiplyNumber(number) {
  return number * 100;
});

console.log(newNumbers2);

var newNumbers3 = numbers.map(function(number) {
  return number * 100;
});

console.log(newNumbers3);
