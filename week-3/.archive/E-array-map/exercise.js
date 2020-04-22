// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// 1. Function Declaration
function multiplyBy100(number) {
  return number * 100;
}

let numbersMultiplied = numbers.map(multiplyBy100);

console.log(numbersMultiplied);

// 2. Callback function declared inside method function
let numbersMultiplied = numbers.map(function multiplyBy100(number) {
  return number * 100;
});

console.log(numbersMultiplied);

// 3. Function name removed for brevity (& function not needed elsewhere)
let numbersMultiplied = numbers.map(function (number) {
  return number * 100;
});

console.log(numbersMultiplied);

// 4. Arrow Function with implicit return (removed {})
let multiplyBy100 = numbers.map((number) => number * 100);

console.log(numbersMultiplied);
