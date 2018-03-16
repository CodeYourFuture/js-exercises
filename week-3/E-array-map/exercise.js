// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
function multipliedBy100(num) {
  return num * 100;
}

// var newArray = numbers.map(multipliedBy100);

/*var newArray = numbers.map(function multipliedBy100(num) {
  return num * 100; 
});  */

/* var newArray = numbers.map(function(num) {
  return num * 100;
}); */

/* var newArray = numbers.map(num=> {
  return num * 100;
}); */

var newArray = numbers.map(num => num * 100);
console.log(newArray);
