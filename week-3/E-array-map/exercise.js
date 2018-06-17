// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function multipleByHundred(number){
    return number * 100;
}

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var results = numbers.map(multipleByHundred);

console.log(results);