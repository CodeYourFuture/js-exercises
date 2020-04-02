/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing onl the names of the who have attended AT LEAST 8 classes
*/
/*
function eligibleStudents(attendances) {
  const result = attendances.lastIndexOf(Element => Element > 8 );
  console.log (result);
  console.log (attendances);
}
*/
function eligibleStudents(attendances){
  let result = [];
  for (let i = 0 ; i < attendances.length ; i++){
     if (attendances[i][1] >= 8){
       result.push(attendances[i][0]);
     }  
  }
  console.log(result);
  return result;
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