/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing onl the names of the who have attended AT LEAST 8 classes
*/
console.clear(); // Clear all old outputs and see your new output.

function eligibleStudents(array) {
  let newArray = array.filter(Element => Element[1] >= 8); // Check that who have attended AT LEAST 8 classes
  return (newArray.map(Element => Element[0])); // Returns an array containing only the names of the who have attended AT LEAST 8 classes
}

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
    console.log(`${test_name}:\x1b[32mPASSED\x1b[0m`); // show PASSED with green color in console
  } else {
    console.log(`${test_name}:\x1b[31mFAILED\x1b[0m`); // show FAILED with red color in console
  }

}

test("eligibleStudents function works",
  arraysEqual(
    eligibleStudents(attendances), ["Ahmed", "Clement", "Tayoa", "Nina"]
  )
)