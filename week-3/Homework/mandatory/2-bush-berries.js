// this function checks if every string in the array is pink then bush is safe otherwise it is toxic.

function bushChecker(bushBerries) {
  let bushBerryColours = bushBerries.every(
    berryColour => berryColour === 'pink',
  )
  if (bushBerryColours) {
    return 'Bush is safe to eat from'
  } else {
    return 'Toxic! Leave bush alone!'
  }
}

let bushBerryColours1 = ['pink', 'pink', 'pink', 'neon', 'pink', 'transparent']
let bushBerryColours2 = ['pink', 'pink', 'pink', 'pink']

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
  'bushChecker funtion works - case 1',
  bushChecker(bushBerryColours1) === 'Toxic! Leave bush alone!',
)
test(
  'bushChecker funtion works - case 2',
  bushChecker(bushBerryColours2) === 'Bush is safe to eat from',
)
