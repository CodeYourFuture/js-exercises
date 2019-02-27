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
  static convertSqrfeetToSqrmeters(sqrfeetValue) {
    let sqrmetersValue = (sqrfeetValue / 10.764).toFixed(2)
    return `${sqrfeetValue} square feet = ${sqrmetersValue} square meters.`
  }
  calculateMonthlyEnergyBill() {
    let base = 40;// base energy bill without windows
    let multiplier = 1.2; // energy bill expected to go up 20% for each additional window
    return base * Math.pow(multiplier, this.windows);
  }
  //getter that return calcalculateMonthlyEnergyBill() output,
  get monthlyEnergyBill() {
    return this.calculateMonthlyEnergyBill();
  }
  calculateHousePrice() {
    let base = 50000;// base haouse price outside London
    let londonFactor = 1.8; //the value of the houses based in London is expected to increase by 80%
    let price = base + (10000 * this.numberOfRooms)// house prices out of London
    if (this.location === "London") {
      price = price * londonFactor; // house prices in London increases by london factor
    }
    return price;
  }
  // getter that return calculateHousePrice() output
  get housePrice() {
    return this.calculateHousePrice();
  }
}

// function that compares house prices and monthly energy bills
function compare(firstHouse, secondHouse, valueToCompare) {
  if (firstHouse[valueToCompare] > secondHouse[valueToCompare]) {
    return `${valueToCompare} of ${firstHouse.colour} house is more than ${secondHouse.colour} house`;
  } else if (firstHouse[valueToCompare] < secondHouse[valueToCompare]) {
    return `${valueToCompare} of ${secondHouse.colour} house is more than ${firstHouse.colour} house`;
  } else {
    return `${valueToCompare} of ${firstHouse.colour} house and ${secondHouse.colour} house is equal`;
  }
}

//instances of blue and brown houses
const blueHouse = new House(5, "blue", 2, "London");
const brownHouse = new House(3, "brown", 2, "Woking");
console.log(compare(blueHouse, brownHouse, "housePrice"));// comparing house prices
console.log(compare(blueHouse, brownHouse, "monthlyEnergyBill"));// comparing monthly energy bills
// Static methods are called on the class, but not on instances of the class.
// Because of the static keyword, we can only access convertSqrfeetToSqrmeters() by appending it to the `House` class.
// We cannot access the convertSqrfeetToSqrmeters() method from instances of the `House` class.
// if we try to access convertSqrfeetToSqrmeters() method from instances of the `House` class we get TyprError.
console.log(House.convertSqrfeetToSqrmeters(950)); //converting square feet to square meter with static function

//console.log(blueHouse.monthlyEnergyBill, brownHouse.monthlyEnergyBill);
//console.log(brownHouse.housePrice, blueHouse.housePrice);