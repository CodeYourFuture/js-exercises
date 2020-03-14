// this function does find that the staions that uses a paricular means of transport.
function journeyPlanner(locationsLondon, meansOfTransport) {
  return locationsLondon
    .filter(places => places.includes(meansOfTransport))
    .map(locations => (locations = locations[0]))
}

const londonLocations = [
  ['Angel', 'tube', 'bus'],
  ['London Bridge', 'tube', 'river boat'],
  ['Tower Bridge', 'tube', 'bus'],
  ['Greenwich', 'bus', 'river boat'],
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
  'journeyPlanner function works - case 1',
  arraysEqual(journeyPlanner(londonLocations, 'river boat'), [
    'London Bridge',
    'Greenwich',
  ]),
)

test(
  'journeyPlanner function works - case 2',
  arraysEqual(journeyPlanner(londonLocations, 'bus'), [
    'Angel',
    'Tower Bridge',
    'Greenwich',
  ]),
)

test(
  'journeyPlanner function works - case 3',
  arraysEqual(journeyPlanner(londonLocations, 'tube'), [
    'Angel',
    'London Bridge',
    'Tower Bridge',
  ]),
)
