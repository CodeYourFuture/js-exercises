// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function hundredTimes1(number) {
  return number * 100;
}
var numbers100 = numbers.map(hundredTimes1);
console.log(numbers100);
////////////////////
var numbers101 = numbers.map(function hundredTimes2(number) {
  return number * 100;
});
console.log(numbers101);
//////////////////
var numbers102 = numbers.map(number => {
  return number * 100;
});
console.log(numbers102);
////////////////////////
var numbers103 = numbers.map(number => number * 100);
console.log(numbers103);
