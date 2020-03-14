// this functon does check street names that contains "Lane".
function getLanes(streetNames) {
  return streetNames.filter(streetContainlane =>
    streetContainlane.includes('Lane'),
  )
}

const streetNames = [
  'Abchurch Lane',
  "Adam's Court",
  'Addle Hill',
  'Addle Lane',
  'Alban Highwalk',
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
  'getLanes function works',
  arraysEqual(getLanes(streetNames), ['Abchurch Lane', 'Addle Lane']),
)
