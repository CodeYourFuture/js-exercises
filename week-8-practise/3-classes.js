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
  constructor(windows, colour = "blue", numberOfRooms, location) {
    this.windows = windows;
    this.colour = colour;
    this.numberOfRooms = numberOfRooms;
    this.location = location;
  }

  monthlyEnergyBill(windows) {
    let base = 40; // base energy bill without windows
    let multiplier = 1.2; // energy bill expected to go up 20% for each additional window

    return base + windows * multiplier;
  }

  housePrice() {
    let baseValue = 50000;
    let roomsAddedPrice = 10000 * this.numberOfRooms;
    let totalValue = baseValue + roomsAddedPrice;
    return this.location === "London" ? (totalValue *= 1.8) : totalValue;
  }

  static feetIntoMetersSquar(feet) {
    const oneMetInFootSq = 0.092903;
    return feet * oneMetInFootSq;
  }
}

//comparePrice function receives the houses in an array  as a parameter and compare the price for the two houses
function comparePrice(houses) {
  if (houses[0].housePrice() > houses[1].housePrice()) {
    console.log(
      `The ${houses[0].colour.toUpperCase()} house is £${houses[0].housePrice() -
      houses[1].housePrice()} more expensive than ${houses[1].colour.toUpperCase()} House`
    );
  } else if (houses[0].housePrice() < houses[1].housePrice()) {
    console.log(
      `The ${houses[1].colour.toUpperCase()} house is  £${houses[1].housePrice() -
      houses[0].housePrice()} more expensive than ${houses[0].colour.toUpperCase()} House`
    );
  } else {
    console.log("Both houses are equally priced");
  }
}

//compareEnergy function receives the houses in array as a parameter and compare the energy for the two houses
function compareEnergy(houses) {
  if (
    houses[0].monthlyEnergyBill(houses[0].windows) >
    houses[1].monthlyEnergyBill(houses[1].windows)
  ) {
    console.log(
      `The ${houses[0].colour.toUpperCase()} house energy bill is  ${houses[0].monthlyEnergyBill(
        houses[0].windows
      ) -
      houses[1].monthlyEnergyBill(
        houses[1].windows
      )} more expensive than ${houses[1].colour.toUpperCase()} House`
    );
  } else if (
    houses[0].monthlyEnergyBill(houses[0].windows) <
    houses[1].monthlyEnergyBill(houses[1].windows)
  ) {
    console.log(
      `The ${houses[1].colour.toUpperCase()} house energy bill is  ${houses[1].monthlyEnergyBill(
        houses[1].windows
      ) -
      houses[0].monthlyEnergyBill(
        houses[0].windows
      )} more expensive than ${houses[0].colour.toUpperCase()} House`
    );
  } else {
    console.log("Both house's energy bills are equally priced");
  }
}

//Declaring two House instances
var brownHouse = new House(3, "brown", 2, "Woking");
var blueHouse = new House(5, "blue", 2, "London");
comparePrice([brownHouse, blueHouse]);
compareEnergy([brownHouse, blueHouse]);

console.log(
  `There is ${House.feetIntoMetersSquar(950)} meter square in 950 foot square`
);

/*When we declare a method as static it's not called on the instances instead they are called on 
the class itself, we don't need to create an instance of 
that class to access  the method we can access it directly use class name and the dot notation 
*/