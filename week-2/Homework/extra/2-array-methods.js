/*
Following are set of small functions that you need to create using loops and array methods 

*/
//1)Find the Smallest Number in an Array
//Create a function that takes an array of numbers and return the smallest number in it

function findSmallestNum(arr) {
   const sortedArr = arr.sort((a,b) => a-b);
   return sortedArr[0];
}
console.log(findSmallestNum([354, 15, 114, 2])); //Expected: 2

findSmallestNum([-76, 1, -79, 1, 0]); //Expected: -79

//2)Checking Even Numbers
//Create a function that takes in an array and returns true if all its values are even, and false otherwise.
function checkAllEven(arr) {
   return arr.every(num => num % 2 === 0);
}

console.log(checkAllEven([1, 2, 2, 6, 9, 4])); //Expected: false

checkAllEven([2, 4, 6]); //Expected: true

//3)Half, Quarter and Eighth
//Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.
function getHalfQuarterEighth(num) {
    let newArr = [];
    newArr.push(num / 2, num /4, num / 8);
console.log(newArr);
}

getHalfQuarterEighth(6); //Expected:[3, 1.5, 0.75]

//4)Add the index to the number
//Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

function addIndexes(arr) {
// const indexAdd = arr.map((x,p) => x + p);
const indexAdd = arr.map(x => x + arr.indexOf(x));
console.log(indexAdd);
}

addIndexes([1, 4, 3, 4, 5]); //Expected: [1, 5, 5, 7, 9]

//4)Get the Sum of All Array Elements
//Create a function that takes an array and returns the sum of all numbers in the array.
function getSumOfItems(arr) {
const total = arr.reduce((a, b) => a + b);
console.log(total);
return total;
}

getSumOfItems([-2, 84, 23]); //Expected: 105
