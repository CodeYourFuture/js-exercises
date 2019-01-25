/* 
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/

var destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"]
};

var destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"]
};

var destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"]
};

var destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"]
};

var travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4
];

/* 
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

/*
1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/

// Complete here
var destination500 = travelDestinations.filter(inside500);
function inside500(destination) {
  return destination.distanceKms < 500;
}
var destinationNamesWithin500Kms = destination500.map(displayName);
function displayName(destination) {
  return destination.destinationName;
}

//---------------------------------

var reachByFerry = travelDestinations.find(findFerry);
function findFerry(destination) {
  return destination.transportations.includes("ferry");
}
var destinationNameReachableByFerry = reachByFerry.destinationName; // Complete here

//---------------------------------

var reachByTrain = travelDestinations.filter(reachByTrain300);
function reachByTrain300(destination) {
  return (
    destination.distanceKms > 300 &&
    destination.transportations.includes("train")
  );
}
var destinationNamesMoreThan300KmsAwayByTrain = [];

reachByTrain.forEach(getName);
function getName(destination) {
  return destinationNamesMoreThan300KmsAwayByTrain.push(
    destination.destinationName
  );
}

// Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Question 1) Expected result: Edinburgh,Dublin, actual result: " +
    destinationNamesWithin500Kms
);
console.log(
  "Question 2) Expected result: Dublin, actual result: " +
    destinationNameReachableByFerry
);
console.log(
  "Question 3) Expected result: London,Paris, actual result: " +
    destinationNamesMoreThan300KmsAwayByTrain
);
