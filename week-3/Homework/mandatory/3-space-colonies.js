// this function does filter names that starts with "A" and has length grater than 7
function colonisers(voyagersName) {
  return voyagersName.filter(name => name.startsWith('A') && name.length > 7)
}

const voyagers = [
  'Adam family',
  'Potter family',
  'Eric',
  'Aldous',
  'Button family',
  'Jude',
  'Carmichael',
  'Bunny',
  'Asimov',
  'Oscar family',
  'Avery family',
  'Archer family',
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
  'colonisers function works',
  arraysEqual(colonisers(voyagers), [
    'Adam family',
    'Avery family',
    'Archer family',
  ]),
)
