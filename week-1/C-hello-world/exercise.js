//console.log("Hello world");
/*
Calculate the Max / Min value from an array

By @loverajoel on Feb 14, 2016

The built -in functions Math.max() and Math.min() find the maximum and minimum value of the arguments, respectively.

    Math.max(1, 2, 3, 4); // 4
Math.min(1, 2, 3, 4); // 1

These functions will not work as- is with arrays of numbers.However, there are some ways around this.

    Function.prototype.apply() allows you to call a function with a given this value and an array of arguments.

var numbers = [1, 2, 3, 4];
Math.max.apply(null, numbers) // 4
Math.min.apply(null, numbers) // 1

Passing the numbers array as the second argument of apply() results in the function being called with all values in the array as parameters.

A simpler, ES2015 way of accomplishing this is with the new spread operator.

var numbers = [1, 2, 3, 4];
Math.max(...numbers) // 4
Math.min(...numbers) // 1

This operator causes the values in the array to be expanded, or “spread”, into the function’s arguments.


var arr = [
  "jib",
  "khanjjjj",
  "zeemmmmms",
  "kashan",
  "shan",
  "fu",
  "zing",
  "jayasuriya"
];
//var x = arr.sort((a, b) => a.length - b.length)[arr.length - 1];
//console.log(x);
let x = arr.reduce((a, b) => (b.length > a.length ? b : a));
console.log(x);
*/ function exercise1() {
  // TODO: Insert the result of this promise into the
  // #exercise1 element. Hint: .then()
  functionA().then(ex => {
    console.log(ex);
  });
}

function exercise2() {
  // TODO: Insert the result of this promise into the
  // #exercise2 element. Hint: .catch()
  functionB().then(ex => {
    console.log(ex);
  });
}

//function exercise3() {
// TODO: Insert the result of this promise into the
// #exercise3 element. Notice how it takes longer than
// the others to finish
//functionC();
//}

//function exercise4() {
// TODO: Take the result of this promise and concatenate
// your name onto the end of it. Then return your
// concatenated string as a promise. Finally insert
// the result of your promise and insert it into the
// #exercise4 element
//functionD();
//}

//
// -------------------------------------
//
// DON'T EDIT THE FUNCTIONS BELOW!
// THEY ARE PROVIDED FOR YOU
//
// -------------------------------------
//
function functionA() {
  return Promise.resolve("A Promising Promise");
}

function functionB() {
  return Promise.reject("A Unpromising Promise");
}

/*function functionC() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("A Longer Promise");
    }, 2000);
  });
}

function functionD() {
  return Promise.resolve("A Promise from: ");
}
*/
exercise1();
exercise2();
//exercise3();
//exercise4();
