// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// function multiplyByHundred(number) {
//   return number * 100;
// }
// var numbersHundred = numbers.map(multiplyByHundred);
// console.log(numbersHundred);

// const map100 = numbers.map(x => x * 100);
// console.log(map100);

var numbersMultipliedByHundred = numbers.map(function hundredMulitply(number) {
  return number * 100;
});

console.log(numbersMultipliedByHundred);
