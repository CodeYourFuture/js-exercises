/* 
  You are given an string array of numbers.
  Using array methods (any array methods), find reverse array as a number.
  If there is 0 before the number you should remove it and print tidy number.
*/

var stringNumber = ["2", "9", "0", "2", "4", "6", "0"];
var number = stringNumber.reverse();

function filterZeros(arr) {
  if (arr[0] == arr.indexOf("0")) {
    var newArray = arr.slice(1);
    return newArray;
  }
}
var joinArray = filterZeros(number).join("");
var tidyNumber = Number(joinArray);
console.log(tidyNumber);

/* EXPECTED OUTPUT */
// 642092
