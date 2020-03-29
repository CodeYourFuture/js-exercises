/* 
The following code contains syntax errors - try and fix them!
Once you fix them, run this file, it should output the correct values!
*/

<<<<<<< Updated upstream:week-4/InClass/D-methods/exercise-3.js

var person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: (newAddress) {
        currentAddress = newAddress;
    },
    celebrateBirthday: function {
        that.age = that.age + 1;
    }
=======
var person = {
  name: "Alice",
  age: 25,
  currentAddress: "Glasgow",
  changeAddress: function(newAddress) {
    return (this.currentAddress = newAddress);
  },
  celebrateBirthday: function() {
    this.age = this.age + 1;
  }
>>>>>>> Stashed changes:week-4/D-methods/exercise-3.js
};

/* 
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.changeAddress("Edinburgh");
<<<<<<< Updated upstream:week-4/D-methods/exercise-3.js
console.log("Expected result: Edinburgh. Actual result: " + person.currentAddress);
=======
<<<<<<< Updated upstream:week-4/InClass/D-methods/exercise-3.js
console.log(`Expected result: Edinburgh. Actual result: ${person.currentAddress}`);
=======
console.log(
  "Expected result: Edinburgh. Actual result: " + person.currentAddress
);
>>>>>>> Stashed changes:week-4/D-methods/exercise-3.js
>>>>>>> Stashed changes:week-4/InClass/D-methods/exercise-3.js

person.celebrateBirthday();
console.log("Expected result: 26. Actual result: " + person.age);
