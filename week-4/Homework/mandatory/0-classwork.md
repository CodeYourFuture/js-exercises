## Classwork

Firstly, complete any exercises you did not complete during class. They are essential practice for the rest of the homework tasks.

If you get stuck, reach out to your classmates on Slack for help!
/*
Given the same "house" object again

Follow the instructions below and then run the file and make sure it outputs the correct results
*/

let house = {
    address: "1 Kinning Park",
    previousOwners: ["Claire M.", "John A."],
    
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway"
    }
    
};

let newCurrentOwner = {
    firstName: "Georgina",
    lastName: "Hernandez"
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

let house = {
    address: "1 Kinning Park",
    previousOwners: ["Claire M.", "John A."],
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway"
    }   
};

house.isForSale = false

let newCurrentOwner = {
    firstName: "Georgina",
    lastName: "Hernandez"
};
house.currentOwner = newCurrentOwner;
house.previousOwners[1]= "Stephen.B";

// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// - from the list of previous owners, replace only "John A." with "Stephen B."
// - give the house a new property called 'isForSale' with the value 'false'


/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
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
    insertedAmount: 0,
    insertMoney: function(amount) {

    },
    getCoffee: function(coffee) {

    }
};

