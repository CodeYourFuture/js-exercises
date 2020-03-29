/*
    Given the same "house" object again

    Write the code for the functions as per the description above them
*/

<<<<<<< Updated upstream:week-4/C-more-complex-objects/exercise-3.js
var kinningParkHouse = {
=======
<<<<<<< Updated upstream:week-4/InClass/C-more-complex-objects/exercise-3.js
let kinningParkHouse = {
>>>>>>> Stashed changes:week-4/InClass/C-more-complex-objects/exercise-3.js
    address: "1 Kinning Park",
    price: 180000,
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway",
      email: "margaret@fake-emails.com"
    }
};

var parkAvenueHouse = {
    address: "50 Park Avenue",
    price: 195000,
    currentOwner: {
      firstName: "Marie",
      lastName: "McDonald",
      email: "marie.m@real-emails.com"
    }
=======
var kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com"
  }
};

var parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com"
  }
>>>>>>> Stashed changes:week-4/C-more-complex-objects/exercise-3.js
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  return (
    kinningParkHouse.currentOwner.firstName +
    " " +
    kinningParkHouse.currentOwner.lastName
  );
}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
  let newArray = [];
  newArray =
    kinningParkHouse.currentOwner.email +
    ", " +
    parkAvenueHouse.currentOwner.email;
  return newArray;
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
  if (kinningParkHouse.price < parkAvenueHouse.price) {
    return "1 Kinning Park";
  } else {
    return "50 Park Avenue";
  }
}

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
<<<<<<< Updated upstream:week-4/C-more-complex-objects/exercise-3.js
console.log("Expected result: Margaret Conway. Actual result: " + getOwnerFullName(kinningParkHouse));
console.log("Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: " + getEmailAddresses(kinningParkHouse, parkAvenueHouse));
console.log("Expected result: 1 Kinning Park. Actual result: " + getCheapestAddress(parkAvenueHouse, kinningParkHouse));
=======
<<<<<<< Updated upstream:week-4/InClass/C-more-complex-objects/exercise-3.js
console.log(`Expected result: Margaret Conway. Actual result: ${getOwnerFullName(kinningParkHouse)}`);
console.log(`Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(kinningParkHouse, parkAvenueHouse)}`);
console.log(`Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(parkAvenueHouse, kinningParkHouse)}`);
=======
console.log(
  "Expected result: Margaret Conway. Actual result: " +
    getOwnerFullName(kinningParkHouse)
);
console.log(
  "Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: " +
    getEmailAddresses(kinningParkHouse, parkAvenueHouse)
);
console.log(
  "Expected result: 1 Kinning Park. Actual result: " +
    getCheapestAddress(parkAvenueHouse, kinningParkHouse)
);
>>>>>>> Stashed changes:week-4/C-more-complex-objects/exercise-3.js
>>>>>>> Stashed changes:week-4/InClass/C-more-complex-objects/exercise-3.js
