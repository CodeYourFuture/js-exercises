// Using the .map() method, create a new array with `numbers` divided by 2
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [10, 20, 30, 40, 50];

//var numbersDividedBy2 = numbers.map(function divideBy2(number) {
//  return number / 2;
//});

//var numbersDividedBy2 = numbers.map(function(number) {
//    return number / 2;
//});

var numbersDividedBy2 = numbers.map(number => {
  return number / 2;
});

console.log(numbersDividedBy2);

// Expected output = [5, 10, 15, 20, 25];
