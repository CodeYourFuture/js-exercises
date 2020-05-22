// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//way 1
function multiple100(number) {
  return number * 100;
}
var numbersMultiplied = numbers.map(multiple100);
console.log("way 1", numbersMultiplied);
//some different ways
//way 2
var numbersMultiplied1 = numbers.map(function multiple100V2(number) {
  return number * 100;
});
console.log("way 2", numbersMultiplied1);

//way 3
var numbersMultiplied2 = numbers.map(function (number) {
  return number * 100;
});
console.log("way 3", numbersMultiplied2);

//way 4
var numbersMultiplied3 = numbers.map((number) => {
  return number * 100;
});
console.log("way 4", numbersMultiplied3);

//way 5
var numbersMultiplied4 = numbers.map((number) => number * 100);
console.log("way 5", numbersMultiplied4);
