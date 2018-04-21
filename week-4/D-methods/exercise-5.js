/* 
A coffee machine is defined below. 
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee 
only if the inserted amount is greater or equal than the price of the coffee!
*/

var coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 3.0
  },
  insertedAmount: 0,
  insertMoney: function(amount) {
    this.insertedAmount = amount;
  },
  getCoffee: function(coffee) {
    switch (coffee) {
      case "cuppuccino":
        return this.insertedAmount > this.prices.cappuccino
          ? "Sorry you don't have enough money for a cappuccino"
          : "Please take your cuppuccino";

      case "blackCoffee":
        return this.insertedAmount > this.prices.blackCoffee
          ? "Sorry you don't have enough money for a blackoffee"
          : "Please take your blackCoffee";

      case "flatWhite":
        return this.insertedAmount > this.prices.blackCoffee
          ? "Sorry you don't have enough money for a flatWhite"
          : "Please take your blackCoffee";

      default:
        return (
          "There is no such coffee in this coffee machine. Please, try any of these options: " +
          Object.keys(this.prices)
        );
    }
  }
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.4);
console.log(
  "Expected result: 'Please take your cappuccino'. Actual result: " +
    coffeeMachine.getCoffee("cappuccino")
);

coffeeMachine.insertMoney(1.5);
console.log(
  "Expected result: 'Please take your blackCoffee'. Actual result: " +
    coffeeMachine.getCoffee("blackCoffee")
);

coffeeMachine.insertMoney(4.0);
console.log(
  "Expected result: 'Please take your flatWhite'. Actual result: " +
    coffeeMachine.getCoffee("flatWhite")
);

coffeeMachine.insertMoney(2.4);
console.log(
  "Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: " +
    coffeeMachine.getCoffee("flatWhite")
);
