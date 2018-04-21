// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var byHundred = numbers.map(num => {
  return num * 100;
});
var byHundred1 = numbers.map(num => num * 100);

var byHundred2 = numbers.map(function(num) {
  return num * 100;
});

var byHundred3 = numbers.map(function multiply(num) {
  return num * 100;
});

console.log(byHundred);
console.log(byHundred1);
console.log(byHundred2);
console.log(byHundred3);
