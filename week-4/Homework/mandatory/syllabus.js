// let laptop = {
//   brand: "Lenovo",
//   screenSize: 13,
//   isTouchscreen: true
// };

// console.log(laptop);
// console.log(laptop.brand);
// console.log(laptop["brand"]);

/*
Console.log the values of each property of "kitten"
*/

// let kitten = {
//   ageMonths: 3,
//   isFemale: true,
//   furColour: "brown"
// };

// console.log(kitten.ageMonths);
// console.log(kitten["isFemale"]);

/*
Write code in the space provided so that the expected values output
*/

// let dog = {
//   name: "Billy",
//   wantsToPlay: false
// };

// WRITE CODE BELOW THIS LINE
// dog.name = "Rex";
// dog.wantsToPlay = "true";
// WRITE CODE ABOVE THIS LINE

// console.log(dog.name);
// console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true

/*
Given the following house - follow the instructions below.

Make sure you run the file after and it outputs the correct results.
*/

// let house = {
//   address: "1 Kinning Park",
//   previousOwners: ["Claire M.", "John A."],
//   currentOwner: {
//     firstName: "Margaret",
//     lastName: "Conway"
//   }
// };

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// house.address = "51 Berkley Road";
// house.previousOwners = ["Brian M.", "Fiona S."];
// house.currentOwner.lastName = "Montgomery";
// - change the address of "house" to '51 Berkley Road'
// - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// - change the last name of the current owner of "house" to "Montgomery"

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

// console.log(
//   `Expected result: 51 Berkley Road. Actual result: ${house.address}`
// );
// console.log(
//   `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
// );
// console.log(
//   `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
// );

/*
Given the same "house" object again

Follow the instructions below and then run the file and make sure it outputs the correct results
*/

// let house = {
//   address: "1 Kinning Park",
//   previousOwners: ["Claire M.", "John A."],
//   currentOwner: {
//     firstName: "Margaret",
//     lastName: "Conway"
//   }
// };

// let newCurrentOwner = {
//   firstName: "Georgina",
//   lastName: "Hernandez"
// };

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// house.currentOwner = newCurrentOwner;
// house.previousOwners[1] = "Stephen B.";
// house.isForSale = false;
// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// - from the list of previous owners, replace only "John A." with "Stephen B."
// - give the house a new property called 'isForSale' with the value 'false'

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
// console.log(
//   `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${house.currentOwner ===
//     newCurrentOwner}`
// );
// console.log(
//   `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
// );
// console.log(`Expected result: false. Actual result: ${house.isForSale}`);
// console.log(house);

/*

Given the same "house" object again

Write the code for the functions as per the description above them

*/

// let kinningParkHouse = {
//   address: "1 Kinning Park",
//   price: 180000,
//   currentOwner: {
//     firstName: "Margaret",
//     lastName: "Conway",
//     email: "margaret@fake-emails.com"
//   }
// };

// let parkAvenueHouse = {
//   address: "50 Park Avenue",
//   price: 195000,
//   currentOwner: {
//     firstName: "Marie",
//     lastName: "McDonald",
//     email: "marie.m@real-emails.com"
//   }
// };

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
    return `${house.currentOwner.firstName} ${house.currentOwner.lastName}`;
}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
    return `${house1.currentOwner.email}, ${house2.currentOwner.email}  `;
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
    return house2.address;
}

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
// console.log(
//   `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
//     kinningParkHouse
//   )}`
// );
// console.log(
//   `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
//     kinningParkHouse,
//     parkAvenueHouse
//   )}`
// );
// console.log(
//   `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
//     parkAvenueHouse,
//     kinningParkHouse
//   )}`
// );

/*

A person named Alice is defined below.
  1. Add a method "greet" so this person can say hello.
  2. Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.

*/

// let person = {
//   name: "Alice",
//   age: 25,
//   greet: function() {
//     return "Hello everybody";
//   },
//   sayName: function() {
//     return " My name is " + this.name;
//   }
// };

// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// console.log(
//   `Expected result: Hello everybody. Actual result: ${person.greet()}`
// );
// console.log(
//   `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
// );

/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

// let person = {
//   name: "Alice",
//   age: 25,
//   currentAddress: "Glasgow",
//   changeAddress: function(newAddress) {
//     currentAddress = newAddress;
//   },
//   celebrateBirthday: function() {
//     this.age = this.age + 1;
//   }
// };

/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

// let person = {
//   name: "Alice",
//   age: 25,
//   currentAddress: "Glasgow",
//   changeAddress: function(newAddress) {
//     currentAddress = newAddress;
//   },
//   celebrateBirthday: function() {
//     this.age = this.age + 1;
//   }
// };

// person.currentAddress = "Edinburgh";
// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// person.changeAddress("Edinburgh");
// console.log(
//   `Expected result: Edinburgh. Actual result: ${person.currentAddress}`
// );

// person.celebrateBirthday();
// console.log(`Expected result: 26. Actual result: ${person.age}`);

/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

// let person = {
//   name: "Alice",
//   friends: ["John", "Nina"],
//   makeFriend: function() {
//     this.friends.push("Bob");
//   }
// };

// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// person.makeFriend("Bob");

// console.log(
//   `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
// );

/*
A coffee machine is defined below.
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee
only if the inserted amount is greater or equal than the price of the coffee!
*/

// let coffeeMachine = {
//     brand: "Super Coffee",
//     prices: {
//         cappuccino: 2.4,
//         blackCoffee: 1.5,
//         flatWhite: 3.0
//     },
//     insertedAmount: 0,
//     insertMoney: function (amount) {
//         this.insertedAmount = amount
//     },

//     getCoffee: function (coffee) {
//         return this.insertedAmount >= this.prices[coffee] ? 'Please take your ' + coffee : 'Sorry you dont have enough money for a ' + coffee


//     }
// };


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

// coffeeMachine.insertMoney(2.4);
// console.log(
//     `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
//     "cappuccino"
//   )}`
// );
// coffeeMachine.insertMoney(1.5);
// console.log(
//     `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
//     "blackCoffee"
//   )}`
// );

// coffeeMachine.insertMoney(4.0);
// console.log(
//     `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
//     "flatWhite"
//   )}`
// );

// coffeeMachine.insertMoney(2.4);
// console.log(
//     `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
//     "flatWhite"
//   )}`
// );