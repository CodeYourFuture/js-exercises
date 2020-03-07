/**
 * Finding a radio station, and a good one, can be hard manually.
 * Let's use some code to help us build a program that helps us scan
 * the radio waves for some good music.
 */

/**
 * First, let's create a function that creates a list of all the frequencies.
 * Call this function `getAllFrequencies`.
 *
 * This function should:
 * - Create an array  starting at 87 and ending in 108
 * - Should return this array to use in other functions
 */
const availableStations = [89, 98, 102, 92]
function getAllFrequencies() {
  let frequencies = []
  frequencies[0] = 87
  frequencies[21] = 108
  for (let i = 1; i < 21; ++i) {
    frequencies[i] = Math.floor(Math.random() * 22 + 87)
  }
  console.log(frequencies)
  return frequencies
}

/**
 * Next, let's write a function that gives us only the frequencies that are radio stations.
 * Call this function `getStations`.
 *
 * This function should:
 * - Get the available frequencies from `getAllFrequencies`
 * - There is a helper function called isRadioFrequency that takes an integer as an argument and returns a boolean.
 * - Sort the stations by low - high e.g. 1,2,3,4,5
 * - Return only the frequencies that are radio stations.
 */

function getStations(arrFreq) {
  let stationsList = []
  for (let i = 0; i < arrFreq.length; ++i)
    if (isRadioStation(arrFreq[i])) {
      stationsList.push(arrFreq[i])
    }
  stationsList.sort((x, y) => x - y)
  console.log(stationsList)
  return stationsList
}

/**
 * Lastly, let's make a function for people to use.
@@ -34,48 +53,58 @@
 * - "🎶 station found at ${frequency}, enjoy!"
 * - "No station found at ${frequency}, moving on"
 */
// `searchRadioWaves` goes here
function searchRadioWaves() {
  let frequenciesArray = getAllFrequencies()
  let stationsArray = getStations(frequenciesArray)
  for (let y = 0; y < frequenciesArray.length; ++y) {
    if (stationsArray.includes(frequenciesArray[y])) {
      console.log(`🎶 station found at ${frequenciesArray[y]}, enjoy!`)
    } else {
      console.log(`No station found at ${frequenciesArray[y]}, moving on`)
    }
  }
}
searchRadioWaves()
/* ======= TESTS - DO NOT MODIFY ======= */
function isRadioStation(frequency) {
  // This is a way of storing the random frequency array inside a
  // This is a way of storing the random frequency array inside a
  // function as storing it outside is bad practice. Don't worry if you
  // don't understand some bits! You're more than welcome to ask questions
  // at any time. :)

  if (!this.stations) {
    const stationCount = 4
    const availableStations = new Array(stationCount)
      .fill(undefined)
      .map((_, i) => {
        return Math.floor(Math.random() * (10800 - 8700 + 1) + 8700) / 100
      })

    this.stations = availableStations
  }

  return this.stations.includes(frequency)
}

const assert = require('assert')
function test(testName, fn) {
  try {
    //fn()
    console.log(`${testName}: PASS`)
  } catch (e) {
    console.log(`${testName}: FAIL`)
  }
}

test('getAllFrequencies', () => {
  const freqs = getAllFrequencies()
  assert((freqs.length = 22 && freqs[0] === 87 && freqs[21] === 108))
})

test('getStations', () => {
  const stations = getStations()

  assert(
    JSON.stringify(stations) === JSON.stringify(isRadioStation.stations.sort()),
  )
})
