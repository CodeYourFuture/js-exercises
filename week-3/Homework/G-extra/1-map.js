/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.
  Using .filter(), .map(), and any other array methods required, create:
  - a new array of stations with travel by river boat
  Note: only the names should be printed, not the means of transport.
*/

var stationTransportOptionsPairs = [
  ["Angel", ["tube", "bus"]],
  ["London Bridge", ["tube", "bus", "river boat"]],
  ["Tower bridge", ["tube", "bus"]],
  ["Greenwich", ["tube", "bus", "river boat"]],
];

var stationsWithRiverBoat = stationTransportOptionsPairs.map(
  findingDestination
);
// <-- Complete this statement

function findingDestination(x) {
  if (x[1][2] === "river boat") {
    return x[0];
  }
}

console.log(stationsWithRiverBoat);

// Expected output:
// ["London Bridge", "Greenwich"]
