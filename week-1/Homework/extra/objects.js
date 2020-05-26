// let laptop = {
//   brand: "Apple",
//   screensize: 15,
//   isTouchScreen: false, 
//   ram: 200
// }

// console.log(laptop)                //output all object information
// console.log(Object.keys(laptop))   //output all properties
// console.log(laptop.brand)
// console.log(laptop["screensize"])  //second method to access data

// laptop.spaceStorage = 15        
// laptop.brand = "Lenovo" 
// laptop["screensize"] = 12     //add a new property and value
// // console.log(laptop)


// /*
// Given the same "house" object again
// Follow the instructions below and then run the file and make sure it outputs the correct results
// */
// let house = {
//     address: "1 Kinning Park",
//     previousOwners: ["Claire M.", "John A."],
//     currentOwner: {
//       firstName: "Margaret",
//       lastName: "Conway",
//     },
//   };
//   let newCurrentOwner = {
//     firstName: "Georgina",
//     lastName: "Hernandez",
//   };
//   /*
//     DO NOT EDIT ANYTHING ABOVE THIS LINE
//     WRITE YOUR CODE BELOW
//   */
//   // - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
//   house.currentOwner=newCurrentOwner;
//   // - from the list of previous owners, replace only "John A." with "Stephen B."
//   house.previousOwners[1] = "Stephen B.";
//   // - give the house a new property called 'isForSale' with the value 'false'
//   house.isForSale = false;
//   /*
//     DO NOT EDIT ANYTHING BELOW THIS LINE
//   */
//   console.log(
//     `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
//       house.currentOwner === newCurrentOwner
//     }`
//   );
//   console.log(
//     `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
//   );
//   console.log(`Expected result: false. Actual result: ${house.isForSale}`);

/*
A person named Alice is defined below.
  1. Add a method "greet" so this person can say hello.
  2. Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.
*/
let person = {
    name: "Alice",
    age: 25,
    sayName() {
        
    }
  };


  function greet () {
     return "Hello everybody"
  }

  person.greet = greet;
  /*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  console.log(
    `Expected result: Hello everybody. Actual result: ${person.greet()}`
  );
  console.log(
    `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
  );