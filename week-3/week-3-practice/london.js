/*
I am new to london and would like to know what transport I can take to different Locations.
Using .map() print where I can go if I only want to use the river boat.

An array with London Location has been provided
Console.log has been provided
*/

var londonLocation = [
  ["London Bridge", "tube", "bus", "river boat"],
  ["Tower bridge", "tube", "bus"],
  ["Greenwich", "tube", "bus", "river boat"]
];

var londonLocationTransport = londonLocation.map(function(item) {
  return [item[0], item[3]];
});

console.log(londonLocationTransport);

/* EXPECTED OUTPUT */
/*London bridge, river boat*/
/*Greenwich, river boat*/
