// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function mumultipliedBy100(number) {
  return number * 100;
}
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var mumultipliedBy100_v1 = numbers.map(mumultipliedBy100);

var mumultipliedBy100_v2 = numbers.map(function mumultipliedBy100(number) {
  return number * 100;
});

var mumultipliedBy100_v3 = numbers.map(function(number) {
  return number * 100;
});

var mumultipliedBy100_v4 = numbers.map(number => {
  return number * 100;
});

var mumultipliedBy100_v4 = numbers.map(number => number * 100);

console.log(mumultipliedBy100_v1);
console.log(mumultipliedBy100_v2);
console.log(mumultipliedBy100_v3);
console.log(mumultipliedBy100_v4);
