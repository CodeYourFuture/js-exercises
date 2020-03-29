/* 
A coffee machine is defined below. 
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee 
only if the inserted amount is greater or equal than the price of the coffee!
*/

<<<<<<< Updated upstream:week-4/D-methods/exercise-5.js
var coffeeMachine = {
=======
<<<<<<< Updated upstream:week-4/InClass/D-methods/exercise-5.js
let coffeeMachine = {
>>>>>>> Stashed changes:week-4/InClass/D-methods/exercise-5.js
    brand: "Super Coffee",
    prices: {
        cappuccino: 2.40,
        blackCoffee: 1.50,
        flatWhite: 3.00
    },
    insertedAmount: 0,
    insertMoney: function(amount) {

    },
    getCoffee: function(coffee) {

    }
=======
var coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 3.0
  },
  insertedAmount: 0,
  insertMoney: function(amount) {},
  getCoffee: function(coffee) {}
>>>>>>> Stashed changes:week-4/D-methods/exercise-5.js
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

<<<<<<< Updated upstream:week-4/InClass/D-methods/exercise-5.js
coffeeMachine.insertMoney(2.40);
console.log("Expected result: 'Please take your cappuccino'. Actual result: " + coffeeMachine.getCoffee('cappuccino'));

coffeeMachine.insertMoney(1.50);
console.log("Expected result: 'Please take your blackCoffee'. Actual result: " + coffeeMachine.getCoffee('blackCoffee'));

coffeeMachine.insertMoney(4.00);
console.log("Expected result: 'Please take your flatWhite'. Actual result: " + coffeeMachine.getCoffee('flatWhite'));

coffeeMachine.insertMoney(2.40);
console.log("Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: " + coffeeMachine.getCoffee('flatWhite'));

=======
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
>>>>>>> Stashed changes:week-4/D-methods/exercise-5.js
