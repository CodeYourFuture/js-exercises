//arrays of objects

let  destination1 = {
 destinationName :  "Edinburgh" ,  distanceKms :  80 ,
 transportations:  [ "car",   "bus" , "  train"] 
};
 
 let  destination2 = {
 destinationName :  "London" ,  distanceKms :  650, 
 transportations:  [ "car",   "bus" , "  train"] 
};
let  destination3 = {  destinationName :  "Paris" ,  distanceKms :  900,   transportations:  [ "train" , "  plane"] 
};
let  destination4 = {  destinationName :  "Dublin",   distanceKms :  350,   transportations:  [ "plane" , "ferry"] 
};
let  travelDestinations = [destination1, destination2, destination3, destination4];




let  destinationNamesWithin500Kms = travelDestinations
  .filter(destination => destination.distanceKms <= 500)
  .map(destination => destination.destinationName)
  .join(", ")

console .log(`  Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`   );

let  destinationNameReachableByFerry = travelDestinations.filter(destination => destination.transportations.includes("ferry")).map(destination => destination.destinationName)


console .log(`  Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry} `)  ;