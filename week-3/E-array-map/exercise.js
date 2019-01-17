// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function timesHundred(number) {
  return number * 100;
}

var numbersTimesHundred1 = numbers.map(timesHundred);

var numbersTimesHundred2 = numbers.map(function timesHundred2(number) {
  return number * 100;
});

var numbersTimesHundred3 = numbers.map(function(number) {
  return number * 100;
});

var numbersTimesHundred4 = numbers.map(number => {
  return number * 100;
});

var numbersTimesHundred5 = numbers.map(number => number * 100);

console.log(
  numbersTimesHundred1,
  numbersTimesHundred2,
  numbersTimesHundred3,
  numbersTimesHundred4,
  numbersTimesHundred5
);
