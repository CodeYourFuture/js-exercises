// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

//var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

/* var multiplyByHundred = numbers.map(function(number) {
  return number * 100;
});
console.log(multiplyByHundred);*/

//
//var s = "overpopulation";
//console.log(s.charAt(0));
//console.log(s.charAt(s.length - 1));
/*var result = s.split("");*/

var dev = [1, -2, 4, -5];
var max = dev.reduce(function(a, b) {
  return Math.max(a, b);
});
var min = dev.reduce(function(a, b) {
  return Math.min(a, b);
});
//console.log(max);
console.log(min, max);
