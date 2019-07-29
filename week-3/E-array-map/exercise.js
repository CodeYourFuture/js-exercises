// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var newArray = [];

function times10(number) {
  return number * 100;
}

var numbers = numbers.map(function(e) {
  newArray.push(times10(e));
});

console.log(newArray);
