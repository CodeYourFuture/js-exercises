// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
function multipled(numbers) {
  return numbers * 100;
}

var multipliedNumbers = numbers.map(multipled);

console.log(multipliedNumbers);

//-----second solution------
var multipliedNumbers = numbers.map(function multipled(numbers) {
  return numbers * 100;
});
console.log(multipliedNumbers);
//-------third solution----
var multipliedNumbers = numbers.map(function(numbers) {
  return numbers * 100;
});
console.log(multipliedNumbers);
//-------fourth solution-------
var multipliedNumbers = numbers.map(numbers => {
  return numbers * 100;
});
console.log(multipliedNumbers);
//--------fifth solution ------
var multipliedNumbers = numbers.map(numbers => numbers * 100);
console.log(multipliedNumbers);
