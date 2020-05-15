//
// // let = console.log;
// const macbook = {
//     operatingSystem: 'macOS Sierra',
//     screenResolution: '2880x1800',
//     screenSize: '15.4 inch',
//     usbPorts: 2,
//     hdmiPort: 1,
//     storage: '512gb'
//     // ... Other specs
// }
// let xx = 'usbPorts'
// console.log(macbook['usbPorts'])
// delete macbook.storage
// console.log(macbook);

///////////////////////////////////////////////////////////////////////////////////
// let kitten = {
//     furColour: "orange",
//     age: "23"
// };

// let laptop = {
//     brand: "Lenovo",
//     ram: "5GB"
// }

// let phone = {
//     operatingSystem: "iOS",
//     hasStylus: true,
//     megapixels: 12,
//     batteryLife: "24 hours"

// }
// console.log(laptop['ram'])
///////////////////////////////////////////////////////////////////////////////////
// let phone = {
//     brand: 'iPhone',
//     model: 'iPhone X',
//     launchYear: 2017,
//     isUnlocked: true
// }
//     ;

// let phoneBrand = phone.brand;
// let phoneLaunchYear = phone["launchYear"];

// console.log(phoneBrand);
// console.log(phoneLaunchYear);
///////////////////////////////////////////////////////////////////////////////////////////
// let kitten = {
//     name: "Gilbert"
// }

// console.log(kitten.name);
//////////////////////////////////////////////////////////////////////////////////////////
// let dog = {
//     name: "Billy",
//     wantsToPlay: false,
// };

// // WRITE CODE BELOW THIS LINE
// dog.name = "Rex"
// dog.wantsToPlay = true
// // WRITE CODE ABOVE THIS LINE

// console.log(dog.name);
// console.log(dog.wantsToPlay);
// //////////////////////////////////////////////////////////////////////////////////////////

// let house = {
//     address: "1 Kinning Park",
//     previousOwners: ["Claire M.", "John A."],
//     currentOwner: {
//         firstName: "Margaret",
//         lastName: "Conway",
//     },
// };

// /*
//   DO NOT EDIT ANYTHING ABOVE THIS LINE

//   WRITE YOUR CODE BELOW
// */


// // - change the address of "house" to '51 Berkley Road'
// house.address = "51 Berkley Road";
// // - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// house.previousOwners = ["Brian M.", "Fiona S."];
// // - change the last name of the current owner of "house" to "Montgomery"

// house.currentOwner.lastName = "Montgomery";
/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

// console.log(
//     `Expected result: 51 Berkley Road. Actual result: ${house.address}`
// );
// console.log(
//     `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
// );
// console.log(
//     `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
// );
//////////////////////////////////////////////////////////////////////////////////////////

let house = {
    address: "1 Kinning Park",
    previousOwners: ["Claire M.", "Stephen B."],
    newCurrentOwner: {
        firstName: "Margaret",
        lastName: "Conway",
    },
    isForSale: false
};

let newCurrentOwner = {
    firstName: "Georgina",
    lastName: "Hernandez",
    currentOwner: {
        firstName: "Margaret",
        lastName: "Conway",
    },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE
 
  WRITE YOUR CODE BELOW
*/

// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"

// - from the list of previous owners, replace only "John A." with "Stephen B."

// - give the house a new property called 'isForSale' with the value 'false'

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
    `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
    house.currentOwner === newCurrentOwner
    }`
);
console.log(
    `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
);
console.log(`Expected result: false. Actual result: ${house.isForSale}`);