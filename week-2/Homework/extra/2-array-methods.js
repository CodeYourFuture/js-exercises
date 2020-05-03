/*
Following are set of small functions that you need to create using loops and array methods 

*/
//1)Find the Smallest Number in an Array
//Create a function that takes an array of numbers and return the smallest number in it

function findSmallestNum(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr[0]);
  return arr;
}

findSmallestNum([354, 15, 114, 2]); //Expected: 2
findSmallestNum([-76, 1, -79, 1, 0]); //Expected: -79

//2)Checking Even Numbers
//Create a function that takes in an array and returns true if all its values are even, and false otherwise.
function checkAllEven(arr) {
  console.log(arr.every((p) => p % 2 == 0));
}

checkAllEven([1, 2, 2, 6, 9, 4]); //Expected: false

checkAllEven([2, 4, 6]); //Expected: true
//3)Half, Quarter and Eighth
//Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.
function getHalfQuarterEighth(number) {
  let arr = [];
  arr.push(number / 2, number / 4, number / 8);
  console.log(arr);
}
getHalfQuarterEighth(6); //Expected:[3, 1.5, 0.75]

//4)Add the index to the number
//Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...
function addIndexes(arr) {
  var arrayAdd = [];
  for (let i = 0; i < arr.length; i++) {
    arrayAdd.push(arr[i] + i);
  }
  console.log(arrayAdd);
}
addIndexes([1, 4, 3, 4, 5]); //Expected: [1, 5, 5, 7, 9]

//4)Get the Sum of All Array Elements
//Create a function that takes an array and returns the sum of all numbers in the array.
function getSumOfItems(arr) {
  let sum = 0;
  arr.forEach((k) => {
    sum += k;
  });
  console.log(sum);
}

getSumOfItems([-2, 84, 23]); //Expected: 105
