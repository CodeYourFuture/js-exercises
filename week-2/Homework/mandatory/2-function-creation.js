/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
console.clear(); // clean all outputs in console and when you run the code you'll see only last output

function tidyUpString(strArr) {
  var newArr = strArr;
  for (let i = 0; i < newArr.length; i++) { // this is loop for reed all items in arry 
    newArr[i] = newArr[i].trim(); // return items in arry without any space at the begining and end of strings!
    var container = ""; // empety container for keep arry items without "/"!
    for (let j = 0; j < newArr[i].length; j++) { // this is a loop for check all char in all items in arry!
      if (newArr[i].charAt(j) !== "/") {
        container += newArr[i].charAt(j); // if char is not equal "/" so add to container!
      }
    }
    newArr[i] = container.toLocaleLowerCase(); // replace old value of newArr[i] to new value without any space at the begining and end of string and without any "/"! 
  }
  return newArr;
}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  isNumber = typeof(num) === "number"; // If num is number then return true (isNaN check the variable if is number return falas and with "!" )
  isEven = (num % 2) == 0; // If num is even then return true
  lessThanHandred = num <= 100; // If num is less than 100 or equal 100 return true
  if (isNumber && isEven && lessThanHandred) { // Check three variable if they are true return true if not return false
    return true;
  } else {
    return false;
  };
}

/* 
Write a function that removes an element from an array
The function must:
- NOT change the original array
- return a new array with the item removed
- remove the item at the specified index
*/

function remove(arr, index) {
  var newArr = arr;
  newArr.splice(index, 1); // remove from the index and one item
  return newArr; // complete this statement
}

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) { // Loop for reed items in aryy 
    let greaterThan100 = (arr[i] > 100); // If number greater than 100 return true if not return false
    let checkdecimalNumber = arr[i] % 1 == 0; // If number hase decimal (0.372) return true if not return false
    newArr.push(`${(greaterThan100? 100 : checkdecimalNumber? arr[i]:arr[i].toFixed(2))}%`); // if number greater than 100 return 100, if hase decimal fixed to two decimal number if not return number
  }
  return newArr;
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
    console.log(`${test_name}:\x1b[32mPASSED\x1b[0m`); // show PASSED with green color in console!
  } else {
    console.log(`${test_name}:\x1b[31mFAILED\x1b[0m`); // show FAILED with red color in console!
  }
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