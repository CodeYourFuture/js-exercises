// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
//1.
function multipliedBy100(number) {
  return number * 100;
}
var numbersmultipliedBy100 = numbers.map(multipliedBy100);
//2.

var numbersmultipliedBy100 = numbers.map(function multipliedBy100(number) {
  return number * 100;
});
//3.
var numbersmultipliedBy100 = numbers.map(function(number) {
  return number * 100;
});
//4.
var numbers = [1, 2, 3];
var numbersmultipliedBy100 = numbers.map(number => {
  return number * 100;
});
//5.
var numbersmultipliedBy100 = numbers.map(number => number * 100);
