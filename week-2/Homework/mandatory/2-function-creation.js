/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
let strArr = ["/Daniel ", "irina ", " Gordon", "ashleigh "];

function tidyUpString(strArr) {
  const newStrArr = strArr.map((string) => {
    const letters = string.trim().split("");
    return letters
      .map((letter) => {
        if (letter === "/") return "";
        return letter.toLowerCase();
      })
      .join("");
  });
  return newStrArr;
}
console.log(tidyUpString(strArr));

// let strArr = ["/Daniel ", "irina ", " Gordon", "ashleigh "];

// function tidyUpString(strArr) {
//   let newstrArr = [];
//   for (i = 0; i <= strArr.length; i++) {
//     newstrArr[i] = strArr[i].trim().replace("/", "").toLowerCase();
//     console.log(newstrArr);
//   }

//   return newstrArr;
// }
// tidyUpString(strArr);

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if (num === num && num % 2 == 0 && num <= 100) {
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
- remove the item at the specified index
*/

let arr = ["a", "b", "c", "d", "e", "f", "g"];
function remove(arr, index) {
  arr.splice(index, 1);

  return arr;

  // complete this statement
}

console.log(remove(arr, 2));

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
  let newarr = [];
  let finalarr = [];
  for (i = 0; i < arr.length; i++) {
    newarr[i] = parseFloat(arr[i].toFixed(2));
    if (newarr[i] > 100) {
      newarr[i] = 100;
    }
    finalarr[i] = newarr[i].toString() + "%";
  }
  return finalarr;
}

console.log(formatPercentage([23, 18, 187.2, 0.372]));

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
