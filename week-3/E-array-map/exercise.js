// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var newArr = numbers.map(multi100);

function multi100(a) {
  return a * 100;
}

console.log("old array");
console.log(numbers);
console.log("new array");
console.log(newArr);

//----------------------------------------

var newArr2 = numbers.map(function(a1) {
  return a1 * 100;
});
console.log("nuovo array");
console.log(newArr2);
