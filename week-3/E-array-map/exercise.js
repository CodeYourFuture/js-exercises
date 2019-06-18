// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function myMultiplay(num) {
  return num * 100;
}

var myNumbers = numbers.map(myMultiplay);
console.log(myNumbers);
var myDifirentNumber = numbers.map(function(n) {
  return n * 10;
});
console.log(myDifirentNumber);
var myDifirentNumber2 = numbers.map(myNum => {
  return myNum * 10;
});
console.log(myDifirentNumber2);
