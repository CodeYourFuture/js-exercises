// let flower = "rose";
// flower

// console.log(flower)

// function boolChecker(bool) {
//   if ( typeof bool === "string" ) {
//     return "You've given me a bool, thanks!";
//   }// if true go inside 

//   return "No bool, not cool.";


// }

// console.log(boolChecker("hello"))

// x= 1
// if (x===1){
//   return "hello"
// }

// const assert = require("assert")// assert module  provide function a


// const assert =require("assert")

// function add(a,b){
//   assert(typeof a === 'number')
//   assert(typeof b === 'number')

//   return a+b
// }
// console.log(add('helo',2))

const assert = require('assert')
const mentorCount = 4 // TODO
const studentCount = 13// TODO
assert(compare(mentorCount < studentCount));

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
const thatArray = [1, 2, 3, 4, 5];
//assert(thisArray === thatArray)