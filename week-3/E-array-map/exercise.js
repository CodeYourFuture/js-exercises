// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
//ES5
var numbersMultipliedBy100 = numbers.map(function multiplyBy100(number){
    return number * 100;
});
console.log(numbersMultipliedBy100);
numbersMultipliedBy100 = numbers.map(function(number) { //anonymous function 
  return number * 100;
});
//ES6
numbersMultipliedBy100 = numbers.map((number) => {
  //explicit return
  return number * 100;
});
console.log(numbersMultipliedBy100);

numbersMultipliedBy100 = numbers.map(number => number * 100); //implicit return
console.log(numbersMultipliedBy100);

console.log(numbersMultipliedBy100);