// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the item removed
// - remove the item at the specified index

function remove(arr, index) {
   arr.splice(index, 1);
   return arr;
 
  
// complete this statement
/*if(index>-1){
  Array.splice(index, 2);
}*/
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNames = remove(names, 1);

console.log(newNumbers);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2]
  [Irina, Mozafar]
*/

//*var array = [2, 5, 9];
//var index = array.indexOf(5);
//if (index > -1) {
  //array.splice(index, 1);
//}*/