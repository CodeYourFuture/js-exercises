/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order (without using the built-in javascript
sort method 😎)

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

// function sortAges(arr) {

// }



function sorteAges(arr){
  const onlyNumbers = [];
  for(index = 0; index < arr.length; index++) {
    const element = arr[index];
      // console.log(element, 'is a number', isNaN)
     if(!isNaN(element)){     // isNaN returns a boolean, the function checks if the element passed in "is NOT a Number"
      // console.log(element)
      onlyNumbers.push(element)
    }
  }
  return onlyNumbers;
}


function sortNumbers(arr) {
 
  var len = arr.length,
      i, j;
  let current, previous;
  for (i=len-1; i >= 0; i--){
      for (j=len-i; j >= 0; j--){
          if (arr[j] < arr[j-1]){
            previous = arr[j-1];
            current = arr[j];  
            arr[j-1] = current;
            arr[j] = previous; 
          }
      }
  }
return arr;
}
// end here

function sortAges(arr) {
  const arrayWithNoNoneNumbers = sorteAges(arr)
  const sortedArray = sortNumbers(arrayWithNoNoneNumbers)
    console.log('SORTED', sortedArray)
    return sortedArray;
/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = ['🎹', 100, '💩', 55, '🥵', '🙈', 45, '🍕', 'Sanyia', 66, 'James', 23, '🎖','Ismeal']
const agesCase2 = ['28', 100, 60, 55, '75', '🍕', 'Elamin']

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
  
    return true;
}

function test(test_name, expr) {
    let status;
    if (expr) {
      status = "PASSED";
    } else {
      status = "FAILED";
    }
  
    console.log(`${test_name}: ${status}`);
}
  
test(
    "sortAges function works - case 1",
    arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100])
);
  
test(
    "sortAges function works - case 2",
    arraysEqual(sortAges(agesCase2), [55, 60, 100])
);