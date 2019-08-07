//function carsSoldPerBrand(make) {
//return (this.make = make);
//}
function carsSoldPerBrand(obj) {
  return obj.make;
}
var carsSold = [
  { make: "Ford", modnel: "Fiesta", colour: "Red", price: 5999 },
  { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
  { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
  { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
  { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
  { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
  { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 }
];
var result = carsSold.map(carsSoldPerBrand);
console.log(result);

module.exports = carsSoldPerBrand;
