var paintShop = require("./paint-cars");

test("Paint shop", function() {
  var cars = [
    { make: "Ford", model: "Fiesta", colour: "Red" },
    { make: "Land Rover", model: "Defender", colour: "Muddy" },
    { make: "Toyota", model: "Prius", colour: "Silver" },
    { make: "Honda", model: "Civic", colour: "Yellow" }
  ];

  var unpaintedCars = [
    { make: "Ford", model: "Fiesta", colour: "Red" },
    { make: "Land Rover", model: "Defender", colour: "Muddy" },
    { make: "Toyota", model: "Prius", colour: "Silver" },
    { make: "Honda", model: "Civic", colour: "Yellow" }
  ];

  var repaintedCars = [
    { make: "Ford", model: "Fiesta", colour: "Pink" },
    { make: "Land Rover", model: "Defender", colour: "Muddy" },
    { make: "Toyota", model: "Prius", colour: "Silver" },
    { make: "Honda", model: "Civic", colour: "Yellow" }
  ];

  var output = paintShop(cars, "Pink");

  expect(output).toEqual(repaintedCars);
  expect(cars).toEqual(unpaintedCars);
});
