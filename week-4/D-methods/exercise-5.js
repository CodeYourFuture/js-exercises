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
    cappuccino: 2.4, // coffeeMachine.insertedAmount >= coffeeMachine.prices.cappuccino return take ur +coffe
    blackCoffee: 1.5,
    flatWhite: 3.0
  },
  insertedAmount: 0,
  insertMoney: function(amount) {
    return (coffeeMachine.insertedAmount = amount);
  },
  getCoffee: function(coffee) {
    if (coffeeMachine.insertedAmount < coffeeMachine.prices.blackCoffee) {
      return "Sorry you do not have enough money for " + coffee;
    } else if (
      coffeeMachine.insertedAmount >= coffeeMachine.prices.blackCoffee
    ) {
      return "Please take your " + coffee;
    }
    if (coffeeMachine.insertedAmount < coffeeMachine.prices.flatWhite) {
      return "Sorry you do not have enough money for " + coffee;
    } else if (coffeeMachine.insertedAmount >= coffeeMachine.prices.flatWhite) {
      return "Please take your " + coffee;
    }
    if (coffeeMachine.insertedAmount < coffeeMachine.prices.cappuccino) {
      return "Sorry you do not have enough money for " + coffee;
    } else if (
      coffeeMachine.insertedAmount >= coffeeMachine.prices.cappuccino
    ) {
      return "Please take your " + coffee;
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

coffeeMachine.insertMoney(3.0);
console.log(
  "Expected result: 'Please take your flatWhite'. Actual result: " +
    coffeeMachine.getCoffee("flatWhite")
);

coffeeMachine.insertMoney(1.3);
console.log(
  "Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: " +
    coffeeMachine.getCoffee("flatWhite")
);

//console.log(coffeeMachine.prices.cappuccino);
