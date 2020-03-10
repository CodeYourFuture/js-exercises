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
 * - Return only the frequencies that are radio stations.
 */
// `getStations` goes here


/* ======= TESTS - DO NOT MODIFY ======= */

function getAvailableStations() {
  // Using `stations` as a property as defining it as a global variable wouldn't
  // always make it initialized before the function is called
  if (!getAvailableStations.stations) {
    const stationCount = 4;
    getAvailableStations.stations = new Array(stationCount)
      .fill(undefined)
      .map(function() {
        return Math.floor(Math.random() * (108 - 87 + 1) + 87);
      })
      .sort(function(frequencyA, frequencyB) {
        return frequencyA - frequencyB;
      });
  }

  return getAvailableStations.stations;
}

function isRadioStation(frequency) {
  return getAvailableStations().includes(frequency);
}

const assert = require("assert");

function test(testName, fn) {
  try {
    fn();
    console.log(`\n✅ ${testName}: PASS`);
  } catch (error) {
    console.log(
      `\n❌ ${testName}: FAIL (see details below)\n\n${error.message}`
    );
  }
}

test("getAllFrequencies() returns all frequencies between 87 and 108", function() {
  const frequencies = getAllFrequencies();
  assert.deepStrictEqual(frequencies, [
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108
  ]);
});

test("getStations() returns all the available stations", () => {
  const stations = getStations();
  assert.deepStrictEqual(stations, getAvailableStations());
});
