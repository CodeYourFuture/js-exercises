/*
  Array methods - .map()
  -------------------------
  `numbersDoubled` should be an array containing all every value in `numbers` doubled
  Use the .map() method to transform each item in the array
*/

function double(numbers) {
  return numbers* 2;
}

var numbers = [1, 2, 3, 4];
var numbersDoubled= numbers.map(Math.random()*2);// complete this statement (use map and the double function)

/* forgetting...doing it 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbersDoubled);

/* 
  EXPECTED RESULT
  ---------------
  [2,4,6,8]
*/
//const map1 = array1.map(x => x * 2);