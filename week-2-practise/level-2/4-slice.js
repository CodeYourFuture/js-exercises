// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the item removed
// - remove the item at the specified index

function remove(arr, index) {
  var newArr = arr.slice(0, index);
  var newArr2 = arr.slice(index, arr.lenght);
  newarr3 = newArr.concat(newArr2);

  return console.log(arr.length);
  return console.log(newArr2);
  return console.log(newArr);
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3, 4, 5, 6];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 4);
var newNames = remove(names, 1);
/*
console.log(newNumbers);
console.log(newNames);
console.log(numbers);
console.log(names);
*/
/* 
  EXPECTED RESULT
  ---------------
  [1, 2]
  [Irina, Mozafar]
*/
