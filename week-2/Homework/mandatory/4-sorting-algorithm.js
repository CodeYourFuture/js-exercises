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

function sortAges(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) { // Fill newArr with only numbers in arr
    if (typeof(arr[i]) == "number") {
      newArr.push(arr[i]); // If it's number then push to newArry   
    }
  }
  console.log(`\x1b[44m\x1b[1m Original Arry :  ${newArr} \x1b[0m`); // Print newArr that hase only number with blue backgroundColor and Bold style
  for (let i = 0; i < newArr.length; i++) { // This loop and second loop are for check all items in arry and swap them to sort
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] > newArr[j]) { // if item with i index is greater than item with j(i+1) index it's mean next itme swap them
        let container = newArr[i]; // Container is a free space to hold items for swap
        newArr[i] = newArr[j];
        newArr[j] = container;
        console.log(`\x1b[100m\x1b[1m  Swapped Arry : \x1b[41m ${newArr} \x1b[0m`); // Print Swapped arry with lightGrey and red backgroundColor and Bold style
      }
    }
  }
  console.log(`\x1b[42m\x1b[1m   Sorted Arry :  ${newArr} \x1b[0m`); // Print Sorted arry with green backgroundColor and Bold style
  return newArr;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = ['🎹', 100, '💩', 55, '🥵', '🙈', 45, '🍕', 'Sanyia', 66, 'James', 23, '🎖', 'Ismeal']
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
    console.log(`${test_name}:\x1b[32mPASSED\x1b[0m`); // show PASSED with green color in console
  } else {
    console.log(`${test_name}:\x1b[31mFAILED\x1b[0m`); // show FAILED with red color in console
  }
}

test(
  "sortAges function works - case 1",
  arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100])
);

test(
  "sortAges function works - case 2",
  arraysEqual(sortAges(agesCase2), [55, 60, 100])
);