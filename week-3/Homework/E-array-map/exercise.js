// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

// FIRST SOLUTION

var numbersOne = [0.1, 0.2, 0.3, 0.4, 0.5];
function multiplyNumbersOne(x) {
  return x * 100;
}
var numbersMultipliedOne = numbersOne.map(multiplyNumbersOne);
console.log(numbersMultipliedOne);

// SECOND SOLUTION

var numbersTwo = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersMultipliedTwo = numbersTwo.map(function multiplyNumbersTwo(x) {
  return x * 100;
});
console.log(numbersMultipliedTwo);

// THIRD SOLUTION

var numbersThree = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersMultipliedThree = numbersThree.map(function (x) {
  return x * 100;
});
console.log(numbersMultipliedThree);

// FOURTH SOLUTION

var numbersFour = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersMultipliedFour = numbersFour.map((x) => {
  return x * 100;
});
console.log(numbersMultipliedFour);

// FIFTH SOLUTION

var numbersFour = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersMultipliedFour = numbersFour.map((x) => x * 100);
console.log(numbersMultipliedFour);
