/* EXERCISE 3 - Classes
 * 3.a
 * An incomplete House class is defined below. The House class should accept the following parameters:
 *  - windows
 *  - colour (must default to white - you can use ES6 default parameters syntax)
 *  - number of rooms
 *  - location
 *
 * 3.b
 * A method has already been created which computes the energy cost based on the number of windows
 *
 * The House class should also have a method which computes the price of the house based on the location and number of rooms
 *  - The price should have a base value of 50,000GBP, with an addition of 10,000GBP for each room it has (if it's a
 *  studio flat, the room number should be 0)
 *  - If the house is based in London, the value of the house should increase by 80%
 *
 * 3.c
 * This is where you flex your Googling skills! The House class should also implement a static method. Use Google
 * to research what static methods are and implement a static method for the House class which calculates the number of
 * square feet into square meters
 *
 * 3.d
 * Using your newly created class
 *  - Instantiate (hint: new House())a brown house with 3 windows and 2 bedrooms that is based in Woking
 *  - Instantiate another blue house with 5 windwos and 2 bedrooms that is based in London
 *  - Return and compare the price of the two houses
 *  - Return and compare the energy bill of the two houses
 *  - Return how many square meters are in 950 square feet
 */

class House {
  constructor(
    windows,
    location,
    numberOfBedRooms,
    colour = "White",
    houseValue = 50000
  ) {
    this.windows = windows;
    this.location = location;
    this.numberOfBedRooms = numberOfBedRooms;
    this.colour = colour;
    this.houseValue = houseValue;
  }
  // Method
  monthlyEnergyBill() {
    let base = 40; // base energy bill without windows
    let multiplier = 1.2; // energy bill expected to go up 20% for each additional window
    let output = base + this.windows * multiplier;
    return output;
  }
  calculateLocationPrice() {
    if (this.location == "London") {
      this.houseValue = this.houseValue + (80 / 100) * this.houseValue;
    }
    return this.houseValue;
  }
  calculatePropertyPrice() {
    let baseValue = this.calculateLocationPrice();
    let perAdditionalBedRoom = 10000;
    let totalPropertyPrice =
      baseValue + perAdditionalBedRoom * this.numberOfBedRooms;
    return totalPropertyPrice;
  }
  static convertSquareMetersToFeet(numOfMeters) {
    let conversionRate = 0.092903;
    return (numOfMeters / conversionRate).toFixed(2);
  }
}

function diff(a, b) {
  return Math.abs(a - b);
}

function compareHouseValues(house1, house2) {
  let londonProp = house1.calculatePropertyPrice();
  let wokingProp = house2.calculatePropertyPrice();
  let difference = diff(londonProp, wokingProp);

  let mostExpensiveHouse;
  if (londonProp > wokingProp) {
    mostExpensiveHouse = house1;
  } else {
    mostExpensiveHouse = house2;
  }

  return `${
    mostExpensiveHouse.location
  } is the most expensive house by £${difference}`;
}

function compareMonthlyElectricityBill(house1, house2) {
  let londonProp = house1.monthlyEnergyBill();
  let wokingProp = house2.monthlyEnergyBill();
  let difference = diff(londonProp, wokingProp).toFixed(2);

  let cheapestEnergy;
  if (londonProp < wokingProp) {
    cheapestEnergy = house1;
  } else {
    cheapestEnergy = house2;
  }

  return `${
    cheapestEnergy.location
  } has the cheapest energy bill by £${difference}`;
}

var londonHouse = new House(5, "London", 2, "Blue");
var wokingHouse = new House(3, "Woking", 2, "Brown");

console.log(compareHouseValues(londonHouse, wokingHouse));
console.log(compareMonthlyElectricityBill(londonHouse, wokingHouse));
console.log(
  `There are ${House.convertSquareMetersToFeet(950)} feet in 950 meters`
);
