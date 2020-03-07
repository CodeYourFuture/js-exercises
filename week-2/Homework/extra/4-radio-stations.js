// `getAllFrequencies` goes here
function getAllFrequencies() {
  let frequencies = [];
  let a = 87;
  for(var i=0;i<22;i++){
      frequencies.push(a);
      a = a+1;
  }
  return frequencies;
}
// `getStations` goes here
 function getStations() {
      let stations=[];
      let allStations = getAllFrequencies();
       for (let i=0;i<allStations.length;i++) {
         let newFreq = isRadioStation(allStations[i]);
         if (newFreq === true){ 
            stations.push(allStations[i]);
         }
   }
  return stations.sort();
 }
console.log(getStations());

// `searchRadioWaves` goes here

function searchRadioWaves(){
  let callStations = getStations();
  if (callStations.length > 0) {
    console.log("🎶 station found at ${frequency}, enjoy!");
  }
  else {
    console.log("No station found at ${frequency}, moving on");
  }
};
searchRadioWaves();


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
        return Math.floor(Math.random() * ((10800 - 8700 + 1) + 8700) / 100);
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
