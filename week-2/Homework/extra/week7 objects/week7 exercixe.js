/* let  laptop = {
    brand: "macbookair",
    screenSize: 13,
    isTouchScreen: No
};
console.log(laptop);

let car ={
    color: "white",
    isElectric: true
};
console.log(car);



let kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown"
};
console.log (kitten);

let phone = {
    brand:'iPhone',
    model: 'iPhone X',
    launchYear: '2017',
    isUnlocked: true
};

let phoneBrand = phone.brand;
let phoneLaunchYear = phone['launchYear'];

console.log(phoneBrand);
console.log(phoneLaunchYear); */

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
// - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// - change the last name of the current owner of "house" to "Montgomery"


/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(`Expected result: 51 Berkley Road. Actual result: ${house.address}`);
console.log(`Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`);
console.log(`Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`);