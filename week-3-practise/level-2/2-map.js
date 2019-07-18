/*
Only students who have attended enough classes are eligible to sit an exam.
You have an array named "attendanceCounts"  which contains all the students' names and their attendance counts.
Produce a new array named "eligibleStudentNames" containing only the NAMES 
of the students who have attended AT LEAST 8 classes.
*/

var attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
];

var eligibleStudentNames = attendances.filter(milley).map(ferhan);
//var eligibleStudentNames1 = eligibleStudentNames.map(ferhan);

function milley(name) {
  if (name[1] >= 8) {
    return name;
  }
}
// TODO: Complete this line.
function ferhan(name) {
  return name[0];
}

console.log(eligibleStudentNames);

/* expected output
[ 'Ahmed', 'Clement', 'Tayoa', 'Nina' ]
Note: student attendance counts should NOT be included in your console output.
*/
