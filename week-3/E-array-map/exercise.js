// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// 1. normal syntax
function multipliesByHundred(number) {
  return number * 100;
}

var multipliedByHundred = numbers.map(multipliesByHundred);

console.log(multipliedByHundred);

//2. function copied inside the method call

var multipliedByHundred = numbers.map(function multipliesByHundred(number) {
  return number * 100;
});
console.log(multipliedByHundred);
// 3.Function name ommitted
var multipliedByHundred = numbers.map(function(number) {
  return number * 100;
});
console.log(multipliedByHundred);
//4.Arrow function
var multipliedByHundred = numbers.map(number => {
  return number * 100;
});
console.log(multipliedByHundred);
//5 Implicit return
var multipliedByHundred = numbers.map(number => number * 100);
console.log(multipliedByHundred);
