// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplyByhundred(num) {
  return num * 100;
}

var newNumber = numbers.map(multiplyByhundred);

var numMultiply = numbers.map(function multiply(num) {
  return num * 1000;
});

var multiplesOfFive = numbers.map(function(num) {
  return num * 5;
});

var numTriple = numbers.map(num => {
  return (num * 3).toFixed(2);
});

//implicite return
var newNum = numbers.map(num => num * 200);

console.log(newNumber);
console.log(numMultiply);
console.log(multiplesOfFive);
console.log(numTriple);
console.log(newNum);
