/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  return arr[0]; // complete this statement
}

function last(arr) {
  if(arr.length <= 0){
    return "It is an empty Array :)";
  } else{
    return arr[arr.length -1];
  } // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3, 4, 5];
var names = ["Irina", "Ashleigh", "Mozafar","Irina", "Ashleigh"];

console.log(first(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  Mozafar
*/
