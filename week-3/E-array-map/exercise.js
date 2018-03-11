// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var hundredNumbers1 = numbers.map(num => num * 100);

var hundredNumbers2 = numbers.map(num => {
  return num * 100;
});

var hundredNumbers3 = numbers.map(function(num) {
  return num * 100;
});

var hundredNumbers = numbers.map(function multiply(num) {
  return num * 100;
});
console.log(hundredNumbers);
console.log(hundredNumbers1);
console.log(hundredNumbers2);
console.log(hundredNumbers3);
