/* 
Alice has a list of good friends. 
Define a method "makeFriend" to add a new friend to her list.
*/


let person = {
    name: "Alice",
    friends: ["John", "Nina"],
    makeFriend: function(addFriend) {
        return this.friends.push(addFriend);
        //this.friends = this.friends + "," + `${addFriend}`;
    }
};


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");

console.log(`Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`);



// let person = {
//     name: "Alice",
//     age: 25,
//     currentAddress: "Glasgow",
//     changeAddress: function (newAddress) {
//         this.currentAddress = newAddress;
//     },

//     celebrateBirthday: function () {
//         this.age = this.age + 1;
//     }
// };

// person.changeAddress();