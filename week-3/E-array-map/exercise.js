// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
/*Case 1*/

var multiplyNumbers = numbers.map(number => {
  return number * 100;
});

console.log(multiplyNumbers);

/*Case 2*/

var multiplyNumbers = numbers.map(function(number) {
  return number * 100;
});

/*Case 3 */

var multiplyNumbers = numbers.map(function multiplyNumbers(number) {
  return number * 100;
});
