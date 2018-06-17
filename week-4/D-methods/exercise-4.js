/* 
Alice has a list of good friends. 
Define a method "makeFriend" to add a new friend to her list.
*/


var person = {
    name: "Alices",
    friends: ["John", "Nina"],
    makeFriend: function(friends) {
        person.friends.push(friends);
    }
};


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");

console.log("Expected result: 'John,Nina,Bob'. Actual result: " + person.friends);