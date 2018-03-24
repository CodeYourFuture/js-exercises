// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function hundredTimes(number) {
  return number * 100;
}

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var hundredTimesNumber1 = numbers.map(hundredTimes);

var hundredTimesNumber2 = numbers.map(function hundredTimes(number) {
  return number * 100;
});

var hundredTimesNumber3 = numbers.map(function(number) {
  return number * 100;
});

var hundredTimesNumber4 = numbers.map(number => {
  return number * 100;
});

var hundredTimesNumber5 = numbers.map(number => number * 100);

console.log(hundredTimesNumber1);
console.log(hundredTimesNumber2);
console.log(hundredTimesNumber3);
console.log(hundredTimesNumber4);
console.log(hundredTimesNumber5);
