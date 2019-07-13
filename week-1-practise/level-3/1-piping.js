/*
  PIPING FUNCTIONS
  ================
  Using the provided functions:
  - multiply `startingValue` by 2
  - add 10
  - format
  - assign to the variable `result`

  As a learning exercise (you wouldn't do this normally), do all of the above in 1 line of code 


var startingValue = 5;
var result;
result = format(add(10, multiply(2, startingValue)));
/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- 

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function format(num) {
  return "£" + num.toFixed(2);
}

console.log("Expected result: 20.00");
console.log("Actual result: " + result);
*/
function findUniq(arr) {
  // do magic
  var j = 1;
  var i = 0;
  var m = [];
  if (arr[i] != arr[j]) {
    if (arr[j] === arr[j++]) {
      m.push(arr[i]);
    } else {
      m.push(arr[j]);
    }
  }
  return m;
}

var milli = findUniq([2, 2, 2, 2, 2, 24]);
console.log(milli);

// var m = [];
//while (arr[i] === arr[j]) {
//m.push(arr[j]);
//j++;
// }
//return arr[j];
//}
