/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing onl the names of the who have attended AT LEAST 8 classes
*/

// const namesMinimumEight = []
// const arrZero = arr[0]
// if (arrZero[1] >= 8) {
//   namesMinimumEight.push(arrZero[0])
// }

// console.log('arr', namesMinimumEight)
// function eligibleStudents(arr) {
//   const namesMinimumEight = []

//   arr.forEach(function (element) {
//     if (element[1] >= 8) {
//       namesMinimumEight.push(element[0])
//     }
//   })
//   return namesMinimumEight
// }
function eligibleStudents(arr) {
  const namesMinimumEight = []
  arr.forEach(function (element) {
    if (element[1] >= 8) {
      namesMinimumEight.push(element[0])
    }
  })
  return namesMinimumEight
}

// check if the each array in an array on the index 1 is > 8
// if yes than return just the first element of the array 

/* ======= TESTS - DO NOT MODIFY ===== */

const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]


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

test("eligibleStudents function works",
  arraysEqual(
    eligibleStudents(attendances), ["Ahmed", "Clement", "Tayoa", "Nina"]
  )
)