/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
function tidyUpString(strArr) {

}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {

}

/* 
Write a function that removes an element from an array
The function must:
- NOT change the original array
- return a new array with the item removed
- remove the item at the specified index
*/

function remove(arr, index) {
  return; // complete this statement
}

/*
Write a function that formats an array of numbers into a string with the percentage symbol appended e.g. "10%"
*/

function formatPercentage(arr) {

}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
    let status;
    if (expr) {
        status = "PASSED"
    } else {
        status = "FAILED"
    }

    console.log(`${test_name}: ${status}`)
}

test("tidyUpString function works - case 1", tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]) === ["daniel", "irina", "gordon", "ashleigh"])
test("tidyUpString function works - case 1", tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]) === ["daniel", "irina", "gordon", "ashleigh"])

test("validate function works - case 1", validate(10) === true)
test("validate function works - case 2", validate(18) === true)
test("validate function works - case 3", validate(17) === false)
test("validate function works - case 4", validate("Ten") === false)
test("validate function works - case 5", validate(108) === false)

test("remove function works - case 1", remove([10, 293, 292, 176, 29]) === )
test("remove function works - case 2")

test("formatPercentage function works - case 1")
test("formatPercentage function works - case 2")