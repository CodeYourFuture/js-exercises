/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
function tidyUpString(strArr) {
  for (let i = 0; i < strArr.length; ++i) {
    /*replacing any forward slashes (/) in the strings 
    and replace it with an empty space 
    and then trimming the paces and 
    after changing all to lower case.
    */
    strArr[i] = strArr[i]
      .replace('/', '')
      .trim()
      .toLowerCase()
  }
  return strArr
}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  // returns the boolean value of the expression
  return typeof num === 'number' && num % 2 === 0 && num <= 100

}

/* 
Write a function that removes an element from an array
The function must:
- NOT change the original array
- return a new array with the item removed
- remove the item at the specified index
*/

function remove(arr, index) {
  let clearArr = [] //a new  empty array
  for (let item = 0; item < arr.length; ++item) {
    // for loop for checking the whole array
    if (item !== index) {
      //if the index is not equal to the element to be removed
      clearArr.push(arr[item]) // add the array element to the new array "push"
    }
  }
  return clearArr // return the new array with the item been removed
}

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
  for (let item = 0; item < arr.length; ++item) {
    if (arr[item] > 100) {
      arr[item] = '100%'
    } else {
      arr[item] = arr[item].toPrecision(2) + '%'
    }
  }
  return arr
}

/* ======= TESTS - DO NOT MODIFY ===== */

function arraysEqual(a, b) {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length != b.length) return false

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }

  return true
}

function test(test_name, expr) {
  let status
  if (expr) {
    status = 'PASSED'
  } else {
    status = 'FAILED'
  }

  console.log(`${test_name}: ${status}`)
}

test(
  'tidyUpString function works - case 1',
  arraysEqual(tidyUpString(['/Daniel ', 'irina ', ' Gordon', 'ashleigh ']), [
    'daniel',
    'irina',
    'gordon',
    'ashleigh',
  ]),
)
test(
  'tidyUpString function works - case 2',
  arraysEqual(
    tidyUpString(['/Sanyia ', ' Michael ', 'AnTHonY ', '   Tim   ']),
    ['sanyia', 'michael', 'anthony', 'tim'],
  ),
)

test('validate function works - case 1', validate(10) === true)
test('validate function works - case 2', validate(18) === true)
test('validate function works - case 3', validate(17) === false)
test('validate function works - case 4', validate('Ten') === false)
test('validate function works - case 5', validate(108) === false)

test(
  'remove function works - case 1',
  arraysEqual(remove([10, 293, 292, 176, 29], 3), [10, 293, 292, 29]),
)
test(
  'remove function works - case 1',
  arraysEqual(remove(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 6), [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]),
)

test(
  'formatPercentage function works - case 1',
  arraysEqual(formatPercentage([23, 18, 187.2, 0.372]), [
    '23%',
    '18%',
    '100%',
    '0.37%',
  ]),
)
