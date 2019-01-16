// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
function multipledBy100(numbers) {
  return numbers * 100;
}
//solution 1

var multipliedNumbers = numbers.map(multipledBy100);

console.log(multipliedNumbers);

//solution 2

var multipliedNumbers = numbers.map(function multipledBy100(numbers) {
  return numbers * 100;
});
console.log(multipliedNumbers);

//solution 3

var multipliedNumbers = numbers.map(function(numbers) {
  return numbers * 100;
});
console.log(multipliedNumbers);

//solution 4

var multipliedNumbers = numbers.map(numbers => {
  return numbers * 100;
});
console.log(multipliedNumbers);

//solution 5

var multipliedNumbers = numbers.map(numbers => numbers * 100);
console.log(multipliedNumbers);
