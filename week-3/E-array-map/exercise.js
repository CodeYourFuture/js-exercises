// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbers100 = numbers.map(function multiply100(element){return element * 100;})
console.log(numbers100);
function multiply101(element){return element * 100;}
var numbers101 = numbers.map(multiply101)
console.log(numbers101);

var numbers102 = numbers.map(function (element){return element * 100;});
console.log(numbers102);

var numbers103 = numbers.map((element) => {
  return element * 100;
});
console.log(numbers103);