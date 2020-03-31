/*
    Given the same "house" object again

    Follow the instructions below and then run the file 
    and make sure it outputs the correct results
*/

<<<<<<< Updated upstream:week-4/C-more-complex-objects/exercise-2.js
var house = {
=======
<<<<<<< Updated upstream:week-4/InClass/C-more-complex-objects/exercise-2.js
let house = {
>>>>>>> Stashed changes:week-4/InClass/C-more-complex-objects/exercise-2.js
    address: "1 Kinning Park",
    previousOwners: ["Claire M.", "John A."],
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway"
    }
};

var newCurrentOwner = {
    firstName: "Georgina",
    lastName: "Hernandez"
=======
var house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway"
  }
};

var newCurrentOwner = {
  firstName: "Georgina",
  lastName: "Hernandez"
>>>>>>> Stashed changes:week-4/C-more-complex-objects/exercise-2.js
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// - from the list of previous owners, replace only "John A." with "Stephen B."
// - give the house a new property called 'isForSale' with the value 'false'

house.currentOwner = newCurrentOwner;

house.previousOwners[1] = " Stephen B.";

house.isForSale = false;

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
<<<<<<< Updated upstream:week-4/InClass/C-more-complex-objects/exercise-2.js
    "Did you correctly assign the new owner using the given variable?",
<<<<<<< Updated upstream:week-4/C-more-complex-objects/exercise-2.js
    "Expected result: true. Actual result: " + (house.currentOwner === newCurrentOwner));
console.log("Expected result: Claire M., Stephen B. Actual result: " + house.previousOwners.toString());
console.log("Expected result: false. Actual result: " + house.isForSale);
=======
    `Expected result: true. Actual result: ${(house.currentOwner === newCurrentOwner)}`);
console.log(`Expected result: Claire M., Stephen B.Actual result: ${house.previousOwners.toString()}`);
console.log(`Expected result: false.Actual result: ${house.isForSale}`);
=======
  "Did you correctly assign the new owner using the given variable?",
  "Expected result: true. Actual result: " +
    (house.currentOwner === newCurrentOwner)
);
console.log(
  "Expected result: Claire M., Stephen B. Actual result: " +
    house.previousOwners.toString()
);
console.log("Expected result: false. Actual result: " + house.isForSale);
>>>>>>> Stashed changes:week-4/C-more-complex-objects/exercise-2.js
>>>>>>> Stashed changes:week-4/InClass/C-more-complex-objects/exercise-2.js
