// Using array method, create a new array with `numbers` has  integar square root

// An array with numbers  has been provided.

var arr = [4, 9, 16, 27, 36, 51, 64, 81, 122, 144];
function squareRoot(number) {
  var newNumber = Math.sqrt(number) + "";
  if (newNumber.includes(".") === false) {
    return number;
  }
}
var newArr = arr.map(squareRoot).filter(number => number !== undefined);
console.log(newArr);
// /* EXPECTED RESULT */

// [ 4, 9, 16, 36, 64, 81, 144 ]
