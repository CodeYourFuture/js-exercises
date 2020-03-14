// this function search for the oxugen levels on the array and return the first percentage found.
function safeLevels(oxygenLevels) {
  return oxygenLevels.find(
    oxygenrPercentage =>
      oxygenrPercentage > '19.5%' && oxygenrPercentage < '23.5%',
  )
}

const oxygenLevels1 = ['24.2%', '11.3%', '19.9%', '23.1%', '29.3%', '20.2%']
const oxygenLevels2 = ['30.8%', '20.2%', '18.8%', '19.5%', '23.5%', '31.6%']

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
  'safeLevels function works - case 1',
  safeLevels(oxygenLevels1) === '19.9%',
)

test(
  'safeLevels function works - case 2',
  safeLevels(oxygenLevels2) === '20.2%',
)
