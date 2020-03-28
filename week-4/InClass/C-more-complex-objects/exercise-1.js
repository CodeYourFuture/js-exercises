/*
  Given the following house - follow the instructions below.

  Make sure you run the file after and it outputs the correct results.
*/

let house = {
    address: "1 Kinning Park",
    previousOwners: ["Claire M.", "John A."],
    currentOwner: {
      firstName: "Margaret",
      lastName: "Conway"
    }
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// - change the address of "house" to '51 Berkley Road'

house.address = '51 Berkley Road';
console.log(house.address);

// - change the previous owners of "house" to ["Brian M.", "Fiona S."]

house.previousOwners = ["Brian M.", "Fiona S."];
console.log(house.previousOwners);


// - change the last name of the current owner of "house" to "Montgomery"


house.currentOwner.lastName = "Montgomery";
console.log(house.currentOwner.lastName);



/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log("Expected result: 51 Berkley Road. Actual result: " + house.address);
console.log("Expected result: Brian M., Fiona S. Actual result: " + house.previousOwners.toString());
console.log("Expected result: Montgomery. Actual result: " + house.currentOwner.lastName);