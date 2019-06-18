/*
I am new to London and would like to know what transport I can take to different famous locations.
An array with London locations have been provided.
Using .map(), print where I can go if I only want to use the river boat.
Note: only the names should be printed, not the means of transport.
*/

var londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "bus", "river boat"],
  ["Tower bridge", "tube", "bus"],
  ["Greenwich", "tube", "bus", "river boat"]
];

var locationsByBoat1 = londonLocations.filter(teresa(names));
var locationsByBoat = locationsByBoat1.map(firstnames(names));
function teresa(names) {
  if (names.includes("river boat")) {
    return names;
  }
}
function firstnames(names) {
  return names[0];
}
console.log(locationsByBoat);

/* EXPECTED OUTPUT
["London bridge", "Greenwich"]
*/
