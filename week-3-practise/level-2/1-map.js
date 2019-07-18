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
var locationsByBoat1 = londonLocations
  .filter(ter => ter.includes("river boat"))
  .map(riv => riv[0]);
//var locationsByBoat = locationsByBoat1.map(river);
// function te(febeney) {
//   if (febeney.includes("river boat")) {
//     return febeney;
//   }
// }

console.log(locationsByBoat1);
//console.log(locationsByBoat1[0]);
/* EXPECTED OUTPUT
["London bridge", "Greenwich"]
*/
