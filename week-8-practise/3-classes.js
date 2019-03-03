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
  constructor(windows, colour, numberOfRooms, location) {
    this.windows = windows;
    this.colour = colour || "white";
    this.numberOfRooms = numberOfRooms || 0;
    this.location = location;
  }

  calculateMonthlyEnergyBill(windows) {
    let base = 40 // base energy bill without windows
    let multiplier = 1.2 // energy bill expected to go up 20% for each additional window
    return base + this.windows*multiplier
  }

  get monthlyEnergyBill() {
    return this.calculateMonthlyEnergyBill();
  }

  calculateHousePrice(numberOfRomms, location){
    let base = 50000;
    let factorOfLondon = 1;
    if (this.location === "London") { 
      return factorOfLondon=1.8;
    }
    return (base + this.numberOfRomms*10000)*factorOfLondon;
  }

  get housePrice(){
    return this.calculateHousePrice();
  }

  static convertSqrfeetToSqrmeters(sqrfeetValue) {
    let sqrmetersValue = (sqrfeetValue / 10.764).toFixed(1)
    return `${sqrfeetValue} square feet = ${sqrmetersValue} square meters.`
  } 
}

function compare(firstHouse, secondHouse, compareUnit) {
  if (firstHouse[compareUnit] > secondHouse[compareUnit]) {
    return `${firstHouse.colour} house's amount of ${compareUnit} is bigger than ${secondHouse.colour} house's amount of ${compareUnit}.`
  } else if (firstHouse[compareUnit] < secondHouse[compareUnit]) {
    return `${secondHouse.colour} house's amount of ${compareUnit} is bigger than ${firstHouse.colour} house's amount of ${compareUnit}.`
  } else {
    return `${secondHouse.colour} house's amount of ${compareUnit} is the equal with ${firstHouse.colour} house's amount of ${compareUnit}.`
  }
}

const blueHouse = new House(5, "blue", 2, "London");

const brownHouse = new House(3, "brown", 2, "Woking");

console.log(compare(blueHouse, brownHouse, "housePrice"));

console.log(compare(blueHouse, brownHouse, "monthlyEnergyBill"));

console.log(House.convertSqrfeetToSqrmeters(950));

/*
The static keyword defines a static method for a class. 
Static methods aren't called on instances of the class. Instead, they're called on the class itself.
In this exercises, we can only access convertSqrfeetToSqrmeters() by appending it to the `House` class.
So, static method calls are made directly on the class and are not callable on instances of the class.
*/