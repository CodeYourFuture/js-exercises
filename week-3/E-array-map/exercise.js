// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function ans(num) {
  return num * 100;
}
var total = numbers.map(ans);

console.log(total);

var scores = [5, 3, 7, 1, 9, 4];
var result = scores.map(function(a) {
  if (a >= 5) {
    return "High";
  } else {
    return "Low";
  }
});
console.log(result);
