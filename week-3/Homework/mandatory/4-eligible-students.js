/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
  (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes and plus

  oldArr
  let newArr

  const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6], 
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]
- sort() in descending 
- filter() - returns every element 
- forEach()
- multi-dimentional array sort

*/ //[[string index 0],[number =index 1]]

// function eligibleStudents(attendance) {
//   let studentNames2 = attendance.filter(e => e[1] >= 8)
//   return studentNames2.map(e => e[0])
// }

function eligibleStudents(oldStudentlist) {
  let newStudentlist = [];
  //loops through each student name
for(let i = 0; i < oldStudentlist.length; ++i) {
//checks second index is greater than 8 or more
  if (oldStudentlist[i][1] >=8) {
newStudentlist.push(oldStudentlist [i][0]);
}
}
//console.log(newStudentlist)
 return newStudentlist;
}


// console.log(eligibleStudents([["Ahmed", 8],["Clement", 10],["Elamin", 6],
// ["Adam", 7],["Tayoa", 11],["Nina", 10]]))

//forEach


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