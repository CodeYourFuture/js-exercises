/*
  Given the following house - follow the instructions below.

  Make sure you run the file after and it outputs the correct results.
*/

//this is a schema and variable data in data the customer has inputted refers to this schema and stores that info in the way this is organised.

var house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway"
  },
  changeAddress: function(newAddress) {
    return (this.address = newAddress);
  }
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/
//to call outside -
house.address = "51 Berkley Road";
console.log(house);

house.previousOwners = ["Brian M.", "Fiona S."];
console.log(house);

house.currentOwner.lastName = "Montgomery";
console.log(house);

//method -this way is more dynamic
//console.log(house.changeAddress("51 Berkley Road"));

// - change the address of "house" to '51 Berkley Road'
// - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// - change the last name of the current owner of "house" to "Montgomery"

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Expected result: 51 Berkley Road. Actual result: " + house.address
);
console.log(
  "Expected result: Brian M., Fiona S. Actual result: " +
    house.previousOwners.toString()
);
console.log(
  "Expected result: Montgomery. Actual result: " + house.currentOwner.lastName
);
