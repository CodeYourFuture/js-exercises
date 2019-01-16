// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
function multipliedBy100(number) {
  return number * 100;
}
var numberMultipliedBy100 = numbers.map(multipliedBy100);
var numberMultipliedBy100 = numbers.map(function multipliedBy100(number) {
  return number * 100;
});
var numberMultipliedBy100 = numbers.map(number => {
  return number * 100;
});
var numberMultipliedBy100 = numbers.map(number => number * 100);

console.log(numberMultipliedBy100);
