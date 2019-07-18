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

function buscar(arr){
  if(arr.search("Lane")>0){
	return arr[0];
  }
} 

var locationsByBoat = londonLocations.map(element => element).filter(element => element.indexOf("river boat") > -1);
locationsByBoat = locationsByBoat.map(element => element[0]);

console.log(locationsByBoat);

/* EXPECTED OUTPUT
["London bridge", "Greenwich"]
*/
