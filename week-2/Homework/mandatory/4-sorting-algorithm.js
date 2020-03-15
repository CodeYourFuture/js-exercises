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
research: https://stackoverflow.com/questions/7502489/bubble-sort-algorithm-javascript
-https://dev.to/ryan_dunton/bubble-sorting-for-beginners-in-js-2opp
-https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php
*/

//step1 - created a function will filter the datatype and select all the numbers in the array
function sortAges(arr) {
  //let dataType;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    //dataType = typeof (arr[i]); 
    //if (dataType === "number") {
      if (typeof arr[i] === "number") {
      newArray.push(arr[i]);
    }
  }
//Step2 - This section swaps numbers in ascending order
  let swap;
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[i] > newArray[j]) {
        swap = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = swap;
      }
    }
  }
   return newArray;
}

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