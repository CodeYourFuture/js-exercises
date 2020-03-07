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
   let numberArr =[];// new array to store numbera
  for(let i = 0; i < arr.length;i++){ // loops throw the length of an array
        if(typeof arr[i]!== typeof'string'){// checks if array elements are number
           numberArr.push(arr[i]);// push the numbers into new array
        }
      }
      let swapped; // variable to hold a swap
      for(let j= numberArr.length; j > 0;j--){// loops though the array desending order
        for(let k = 0; k < j;k++){ // loops through the array assending order
             if(numberArr[k] > numberArr[k + 1]){//as it loops checks two neibouring elements if its greater  swaps them around 
                swapped =  numberArr[k]; // element is assigned to swapped
                numberArr[k] = numberArr[k + 1]; // element assinged to next element 
                numberArr[k + 1] = swapped; // next goes to the swap  loop continus until every elements be sorted
              }
            }
          
          }
          console.log(numberArr);// checks the array value  
          return numberArr; // returns the sorted value.
      
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