/* 
The following code contains syntax errors - try and fix them!
Once you fix them, run this file, it should output the correct values!
*/

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
};

/* 
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.changeAddress("Edinburgh");
console.log(person.currentAddress); // should output "Edinburgh"

person.celebrateBirthday();
console.log(person.age); // should output 26