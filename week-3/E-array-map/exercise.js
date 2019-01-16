// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function multipliedBy100(number) {
  return number * 100;
}
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numsmultipliedBy100 = numbers.map(multipliedBy100);
console.log(numsmultipliedBy100);

//Using different syntax:
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var nnumsmultipliedBy100 = numbers.map(function multipliedBy100(number) {
  return number * 100;
});
console.log(nnumsmultipliedBy100);
