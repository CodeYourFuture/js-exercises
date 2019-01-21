/*
You are working in a car dealer. You have "carsOnSaleWithProductionYear" cars on sale. This array contains nested arrays showing each car by the make and production year as pairs. You manager asked you to make  a new list of cars on sale by the make and age.
- Make a list of cars on sale by completeing the statement on line 15.
*/

var carsOnSaleWithProductionYear = [
  ["Honda", 2015],
  ["Nissan", 2016],
  ["BMW", 2017],
  ["Ford", 2016],
  ["Hyundai", 2015],
  ["Toyota", 2014]
];

var carsOnSaleWithAge = carsOnSaleWithProductionYear.map(car => {
  return [car[0], 2019 - car[1]];
}); //Complete this statement

//DO NOT EDIT BELOW THIS LINE
console.log(carsOnSaleWithAge);
