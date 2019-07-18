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
        cappuccino: 2.40,
        blackCoffee: 1.50,
        flatWhite: 3.00
    },
    insertedAmount: 0,
    insertMoney: function(amount) {
        this.insertedAmount = amount;
    },
    getCoffee: function(coffee) {
        switch(coffee){
            case "cappuccino":
                if(this.insertedAmount >= this.prices.cappuccino){
                    return 'Please take your cappuccino';
                }
                else{
                    return "Sorry you don't have enough money for a cappuccino";
                }
                break;
            case "blackCoffee":
                if(this.insertedAmount >= this.prices.blackCoffee){
                    return 'Please take your blackCoffee';
                }
                else{
                    return "Sorry you don't have enough money for a blackCoffee";
                }
                break;
            case "flatWhite":
                if(this.insertedAmount >= this.prices.flatWhite){
                    return 'Please take your flatWhite';
                }
                else{
                    return "Sorry you don't have enough money for a flatWhite";
                }
                break;
            default:
                break;
        }
    }
};


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.40);
console.log("Expected result: 'Please take your cappuccino'. Actual result: " + coffeeMachine.getCoffee('cappuccino'));

coffeeMachine.insertMoney(1.50);
console.log("Expected result: 'Please take your blackCoffee'. Actual result: " + coffeeMachine.getCoffee('blackCoffee'));

coffeeMachine.insertMoney(4.00);
console.log("Expected result: 'Please take your flatWhite'. Actual result: " + coffeeMachine.getCoffee('flatWhite'));

coffeeMachine.insertMoney(2.40);
console.log("Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: " + coffeeMachine.getCoffee('flatWhite'));

