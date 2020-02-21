// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
function mult(num){
    return num * 100;

}
var newNumber = numbers.map(mult);
console.log(newNumber);

//output [ 10, 20, 30, 40, 50 ]