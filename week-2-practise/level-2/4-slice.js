// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the item removed
// - remove the item at the specified index

/*function remove(arr, index) {
  return arr.slice(0, index);
}



function remove(arr, index) {
  var kkk = arr.slice(0, index);
  var mmm = arr.slice(index + 1);
  var mmo = kkk.concat(mmm);
  return mmo.join();
}

*/

function remove(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

/*DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNames = remove(names, 1);

console.log(newNumbers);
console.log(newNames);
//console.log(numbers);
//console.log(names);
/* 
  EXPECTED RESULT
  ---------------
  [1, 2]
  [Irina, Mozafar]
*/
