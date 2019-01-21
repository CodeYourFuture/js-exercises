/*
You are working in a car dealer. You have "isManulCars" cars on sale. "isManulCars" array contains nested arrays showing each car by the make and and either is Manual or not as pairs(if it is true it is manual). One customer is calling you to buy a manual car.
- Make a list of manual cars on sale by completeing the statement on line 15.
*/

var isManualCars = [
  ["Honda", true],
  ["Nissan", false],
  ["BMW", true],
  ["Ford", true],
  ["Hyundai", true],
  ["Toyota", false]
];

var carsManual = isManualCars.filter(car => {
  return car[1] === true;
}); //Complete this statement

//DO NOT EDIT BELOW THIS LINE
var carsManualList = carsManual.forEach(function(carManual) {
  console.log(carManual[0]);
});
/* EXPECTED OUTPUT */
"Honda", "BMW", "Ford", "Hyundai";
