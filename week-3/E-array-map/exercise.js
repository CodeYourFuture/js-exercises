// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var milley = numbers.map(multipley);
function multipley(num) {
  return num * 100;
}
console.log(milley);

var koreka = milley.map(function(num) {
  if (num > 20 && num <= 40) {
    return "hhhhh";
  } else {
    return "ffff";
  }
});

console.log(koreka);
