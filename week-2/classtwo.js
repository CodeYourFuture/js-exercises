const assert = require('assert')
const mentorCount = 4 // TODO
const studentCount = 13// TODO
assert(mentorCount < studentCount);

const capacity = 25
const people = 10// TODO
assert(capacity > people);
const name1 = "min" // TODO
const name2 = "min" // TODO
assert(name1 === name2);
const number1 = 4// TODO
const number2 = 5// TODO
assert(number1 !== number2);
const thisNumber = 10 // TODO
const thatNumber =  10 // TODO
assert(thisNumber === thatNumber);


const thisArray = [1, 2, 3, 4, 5];
let thatArray = [1, 2, 3, 4, 5];
 thatArray = thisArray;
assert(thisArray === thatArray)


function numberChecker(num){
 if (typeof num == "number"){
    if (num > 20){
      return `${num} is greater than 20`
    } else if (num === 20){
      return `${num} is equal to 20`
    } else if (num < 20){
      return `${num} is less than 20`;
    }
 }
  else {
    return`${num} isn't even a number`
  }
}


console.log(numberChecker(40))
console.log(numberChecker(11))
console.log(numberChecker(-20))
console.log(numberChecker("7"))

function weatherforecast(mood) {
  if (mood === "happy") {
    return "Good job, you're doing great!";
  } else if (mood === "sad") {
    return `${"Every cloud has a silver lining"}`;
  } else if (typeof mood === "number") {
    return `${"Beep beep boop"}`;
  } else {
    return "I'm sorry, I'm still learning about feelings!";
  }
}
weatherforecast("2");
console.log(weatherforecast("mad"));


function checkName(username){
  let isCaptilised= username[0] === username[0].toUpperCase();
  let checkLength= username.length > 5 && username.length <10;
 if (isCaptilised && checkLength ){
    // if (65<=username[0]<=90 && username.lenght <10 && ){
      return `username  valid`
    }else
      return  `username invalid `
   
    
}

console.log(checkName("Mnnninhkkjjjjj"))

let fruits=['strawberry','kiwi','orange','banana' ]
// Replace 'apple' with 'raspberry' and 'fig' with 'pineapple'

for (i= 0 ; i < fruits.length; i++){
   console.log(fruits[i])
}
// Write a function to remove the duplicate elements of
// a given array and return the new length of the array. 
//Sample array: [20, 20, 30, 40, 50, 50, 50]
// After removing the duplicate elements 
//the function should return 4 as the new length of the array.