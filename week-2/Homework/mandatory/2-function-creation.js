/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
function tidyUpString(strArr) {// takes an arr
    for(let i =0;i<strArr.length;i++){// loops through an Arr 
        strArr[i] =strArr[i].trim();// trims arr elements
        strArr[i] = strArr[i].replace(/\//,'');// removes the fowardslash
        strArr[i] = strArr[i].toLowerCase();// makes array elements lovercase
      }
     return strArr;// returns a final revised array.
    }
/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  
  if(typeof num !== 'number'){// checks type of number is string returns false
    return false; 
   }else if(num%2 !== 0){ // if number is odd returns false
     return false;
   }else if(num > 100){// if num is greater than 100 returns false
      return false;
    }else{
       return true;// returns true if all the above conditions are false
    }
      
    }
      
    


/* 
Write a function that removes an element from an array
The function must:
- NOT change the original array
- return a new array with the item removed
- remove the item at the specified index
*/

function remove(arr, indexToRemove) {
   let newArr = arr.filter(function(element,index){// creates new array and filters  the array
      return indexToRemove !==index ; // returns the array excluding the specific index 
   })
  
  console.log(newArr);// console logs array
   return  newArr; // complete this statement
}

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {// takes  arr
    let stringArr = arr.map(function(number){ // loops through the numb arr using map
      const finalNumber = number >100 ? 100: number; // if number greater than returns 100 else return a number.
      return `${Math.round(finalNumber*100)/100}%`; // rounds 2 desimal and stringfys it
    })
    console.log(stringArr)
    return stringArr;
  }

/* ======= TESTS - DO NOT MODIFY ===== */

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
  "tidyUpString function works - case 1",
  arraysEqual(tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]), [
    "daniel",
    "irina",
    "gordon",
    "ashleigh"
  ])
);
test(
  "tidyUpString function works - case 2",
  arraysEqual(
    tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
    ["sanyia", "michael", "anthony", "tim"]
  )
);

test("validate function works - case 1", validate(10) === true);
test("validate function works - case 2", validate(18) === true);
test("validate function works - case 3", validate(17) === false);
test("validate function works - case 4", validate("Ten") === false);
test("validate function works - case 5", validate(108) === false);

test(
  "remove function works - case 1",
  arraysEqual(remove([10, 293, 292, 176, 29], 3), [10, 293, 292, 29])
);
test(
  "remove function works - case 1",
  arraysEqual(remove(["a", "b", "c", "d", "e", "f", "g"], 6), [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ])
);

test(
  "formatPercentage function works - case 1",
  arraysEqual(formatPercentage([23, 18, 187.2, 0.372]), [
    "23%",
    "18%",
    "100%",
    "0.37%"
  ])
);