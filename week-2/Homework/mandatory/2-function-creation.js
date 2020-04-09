/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/

function tidyUpString(strArr) {
  let newArray = [];
  for (let i = 0; i < strArr.length; i++) {
    newArray.push(strArr[i].trim().replace("/", "").toLowerCase());
  }
  return newArray;
}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if (typeof num === "number" && num % 2 === 0 && num <= 100) {
    return true;
  } else {
    return false;
  }
}

console.log(validate(10));
console.log(validate(18));
console.log(validate(17));
console.log(validate("Ten"));
console.log(validate(108));

/* 
Write a function that removes an element from an array
The function must:
- NOT change the original array
- return a new array with the item removed
- remove the item at the specified index - The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

  use: slice - The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
*/

function remove(array, index) {
  let array1 = array.slice(0, index);
  let array2 = array.slice(index + 1, array.length)
  let array3 = array1.concat(array2);
  return array3;
}

console.log(remove([10, 293, 292, 176, 29], 3));
console.log(remove(["a", "b", "c", "d", "e", "f", "g"], 6));

/*
 Write a function that:
 - takes an array of numbers as input
 - returns an array of strings formatted as percentages (e.g. 10 => "10%")
  *will need a method that formats something...
  *you will need to concat, ``,
 - the numbers must be rounded to 2 decimal places
  *Math.round
  *toFixed
 - numbers greater 100 must be replaced with 100
  *replace method??
 */

 // function signature 
 // input - what type?
 //output - what type?

function formatPercentage(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > 100) {
      num = 100;
    }
    if (Math.floor(num) !== Math.ceil(num)) {
    num = num.toFixed(2);
    //num = Number("num");
    } 
    num = num + "%";
    newArray.push(num);
  }
  console.log(newArray);
  return newArray;
}

console.log([23, 18, 187.2, 0.372]);

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
    "ashleigh",
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
    "f",
  ])
);

test(
  "formatPercentage function works - case 1",
  arraysEqual(formatPercentage([23, 18, 187.2, 0.372]), [
    "23%",
    "18%",
    "100%",
    "0.37%",
  ])
);
