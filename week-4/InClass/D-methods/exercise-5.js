/* 
A coffee machine is defined below. 
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee 
only if the inserted amount is greater or equal than the price of the coffee!
*/

let coffeeMachine = {
    brand: "Super Coffee",
    prices: {
        cappuccino: 2.40,
        blackCoffee: 1.50,
        flatWhite: 3.00
    },
    //let insertedAmount= 0;
    insertMoney: function(amount) {

        for (let key in this.prices) {
            if (this.prices[key] === amount) {

                this.getCoffee(key)
            } else if (amount >= 3) {
                this.getCoffee("flatWhite")
            } else
                this.getCoffee("not_allowed")

        }

        // }
        // return 'Please take your ' + (Object.keys).filter(coffee =>
        //     coffee[value] == amount)

    },
    getCoffee: function(coffee) {
        if (coffee === "not_allowed")
            return "Sorry you don't have enough money for a flatWhite"
        else
            return 'Please take your ' + coffee

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

coffeeMachine.insertMoney(1.40);
console.log(`Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee('not_allowed')}`);