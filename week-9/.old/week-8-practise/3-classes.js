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
  constructor(windows, colour) {
    this.windows = windows
  }

  monthlyEnergyBill(windows) {
    let base = 40 // base energy bill without windows
    let multiplier = 1.2 // energy bill expected to go up 20% for each additional window
    
    return base + windows*multiplier
  }
}
