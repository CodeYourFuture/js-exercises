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

var destinationNamesWithin500Kms = [];
var checking = travelDestinations.filter(
  travelDestinations =>
    travelDestinations.distanceKms < 500
      ? destinationNamesWithin500Kms.push(travelDestinations.destinationName)
      : ""
);

var destinationNameReachableByFerry = [];
var checkFerry = travelDestinations.map(item =>
  item.transportations.filter(
    element =>
      element === "ferry"
        ? destinationNameReachableByFerry.push(item.destinationName)
        : ""
  )
);

var destinationNamesMoreThan300KmsAwayByTrain = [];
var checkDistance = travelDestinations.filter(
  element =>
    element.distanceKms > 300
      ? element.transportations.map(
          item =>
            item === "train"
              ? destinationNamesMoreThan300KmsAwayByTrain.push(
                  element.destinationName
                )
              : ""
        )
      : ""
);

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
