// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//first way
// function numsMultiply(numbers) {
//   return numbers * 100;
// }
// var newNumbers = numbers.map(numsMultiply);
// console.log(newNumbers);

//second way
// var newNumbers = numbers.map(function(num) {
//   return num * 100;
// });
// console.log(newNumbers);

//Third Way
// var newNumbers = numbers.map(num => {
//   return num * 100;
// });
// console.log(newNumbers);

//Fourth Way
var newNumbers = numbers.map(nums => nums * 100);
console.log(newNumbers);
