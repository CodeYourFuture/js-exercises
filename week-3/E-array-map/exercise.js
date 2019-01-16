// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function multiplyBy100 (number){
return number*100;
}

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var newNumbers = numbers.map(multiplyBy100);
console.log(newNumbers);

//************Method 2 **************/
var newNumbers2 = numbers.map(function(number){
    return number*100})
console.log(newNumbers2);

////*******************Method 3 */
 var newNumber3 = numbers.map(number=>{
     return number*100
 })
 console.log(newNumber3);