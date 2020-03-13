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

// `getAllFrequencies` goes here

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
// `getStations` goes here

/**
 * Lastly, let's make a function for people to use.
 * When this runs, it should use the above two functions to log to the `console`
 * Call this function `searchRadioWaves`.
 * - "🎶 station found at ${frequency}, enjoy!"
 * - "No station found at ${frequency}, moving on"
 */
// `searchRadioWaves` goes here

/* ======= TESTS - DO NOT MODIFY ======= */

function isRadioStation(frequency) {
  // This is a way of storing the random frequency array inside a 
  // function as storing it outside is bad practice. Don't worry if you
  // don't understand some bits! You're more than welcome to ask questions
  // at any time. :)
  if (!this.stations) {
    const stationCount = 4;
    const availableStations = new Array(stationCount)
      .fill(undefined)
      .map((_, i) => {
        return Math.floor(Math.random() * (10800 - 8700 + 1) + 8700) / 100;
      });

    this.stations = availableStations;
  }

  return this.stations.includes(frequency);
}

const assert = require("assert");

function test(testName, fn) {
  try {
    fn();
    console.log(`${testName}: PASS`);
  } catch (e) {
    console.log(`${testName}: FAIL`);
  }
}

test("getAllFrequencies", () => {
  const freqs = getAllFrequencies();
  assert((freqs.length = 22 && freqs[0] === 87 && freqs[21] === 108));
});

test("getStations", () => {
  const stations = getStations();
  assert(
    JSON.stringify(stations) === JSON.stringify(isRadioStation.stations.sort())
  );
});
