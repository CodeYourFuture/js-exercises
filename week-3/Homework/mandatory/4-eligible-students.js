//this function does filter students with attendance more than 8 and return their corresponding names.
function eligibleStudents(arrayAttendance) {
  return arrayAttendance
    .filter(attendance => attendance[1] >= 8)
    .map(student => student[0])
}

const attendances = [
  ['Ahmed', 8],
  ['Clement', 10],
  ['Elamin', 6],
  ['Adam', 7],
  ['Tayoa', 11],
  ['Nina', 10],
]

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
  'eligibleStudents function works',
  arraysEqual(eligibleStudents(attendances), [
    'Ahmed',
    'Clement',
    'Tayoa',
    'Nina',
  ]),
)
