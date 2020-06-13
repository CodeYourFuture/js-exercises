/* 
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/


let destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
    transportations: ["car", "bus", "train"]
};

let destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"]
};

let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"]
};

let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"]
};

let travelDestinations = [
    destination1, 
    destination2, 
    destination3, 
    destination4
];

// [
//     {destinationName: "Dublin", distanceKms: 350},
//     {destinationName: "Dublin", distanceKms: 350},
//     {destinationName: "Dublin", distanceKms: 350},
// ]

// ["Dublin", "Paris", "Edinburgh"]

<<<<<<< Updated upstream

// 1. Print in the console 
// 2. all the destination names
// 3. more than 300 kms far away and reachable by train.
=======
let destinationNameReachableByFerry = travelDestinations
  .filter((destination) => destination.transportations.includes("ferry"))
  .map((destination) => destination.destinationName);
// Complete here

function byTrain300km(destination) {
  return (
    destination.distanceKms > 300 &&
    destination.transportations.includes("train")
  );
}

let destinationNamesMoreThan300KmsAwayByTrain = travelDestinations
  .forEach(byTrain300km(destination));
// Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

function isReachable(destination) {
    let isFar = destination.distanceKms > 300;
    let trainReachable = destination.transportations.includes("train");
    return isFar && trainReachable;
}

let reachableDestinations = travelDestinations.filter(isReachable);

function transformDestination(destination) {
    let destinationName = destination.destinationName;
    return destinationName;
}

let destinationNames = reachableDestinations.map(transformDestination);


function printToConsole(destinationName) {
    console.log(destinationName);
}

destinationNames.forEach(printToConsole);
