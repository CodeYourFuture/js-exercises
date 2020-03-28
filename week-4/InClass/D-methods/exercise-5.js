/* 
A coffee machine is defined below. 
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee 
only if the inserted amount is greater or equal than the price of the coffee!
*/

//The disadvantage of using an if/else statement in this case is that you would have to both update the coffee types and also additional code for the if/ese statement. Where as in the object you can add more coffee products without writing more code as it is using a function.

// let coffeeMachine = {
//   brand: "Super Coffee",
//   prices: {
//       cappuccino: 2.40,
//       blackCoffee: 1.50,
//       flatWhite: 3.00
//   },
//   insertedAmount: 0,
//   insertMoney: function (amount) {
//       return this.insertedAmount = amount
//       console.log(insertMoney)
//   },
//   getCoffee: function (coffee) {
//       if (this.insertedAmount >= this.prices.cappuccino && coffee === "cappuccino") {
//           return (`Please take your ${coffee}`);
//       }
//       if (this.insertedAmount >= this.prices.blackCoffee && coffee === "blackCoffee") {
//           return (`Please take your ${coffee}`);
//       }
//       if (this.insertedAmount >= this.prices.flatWhite && coffee === "flatWhite") {
//           return (`Please take your ${coffee}`);
//       } else {
//           return `Sorry you don't have enough money for a flatWhite. ${coffee}`
//       }
//   }
// }


// coffeeMachine.brand  
//['brand'] = array of strings - all types of coffee's

let coffeeMachine = {
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
    getCoffee: function(coffee) {// this coffee is being told by the user
      /* check if the amount is greater or equal price */
      /* if true dispeanse coffee*/
      /* we going to display the sorry you don't have enough funds*/
      if(this.insertedAmount>=this.prices[coffee]){// if the right amount is inserted then the user gets a correct coffee.
        return "Please take your " + coffee;
    }else{
        return "Sorry you don't have enough money for a " + coffee;
    }

}
};

  
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.40);
console.log(`Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee('cappuccino')}`);

coffeeMachine.insertMoney(1.50);
console.log(`Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee('blackCoffee')}`);

coffeeMachine.insertMoney(4.00);
console.log(`Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee('flatWhite')}`);

coffeeMachine.insertMoney(2.40);
console.log(`Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee('flatWhite')}`);

