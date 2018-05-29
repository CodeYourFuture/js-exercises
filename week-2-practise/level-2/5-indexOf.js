// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the first item matching `valueToRemove` removed
// TIP: Use the .indexOf() method

function remove(arr, index) {
   arr.splice().indexOf(index, 1);
  // complete this statement
  return arr;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNames = remove(names, "Ashleigh");

console.log(newNumbers);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3]
  [Irina, Mozafar]
*/
/*var my_array = ["baseball", "basketball", "tennis", "golf"];
        var start_index = 1
        var number_of_elements_to_remove = 2;
        var removed_elements = my_array.splice(start_index, number_of_elements_to_remove, "boxing", "bowling", "volleyball");
        console.log(removed_elements);
        //["tennis", "golf"]
        console.log(my_array);
        //["baseball", "boxing", "bowling", "volleyball", "golf"];*/
    