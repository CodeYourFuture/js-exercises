/* 
Alice has a list of good friends. 
Define a method "makeFriend" to add a new friend to her list.
*/

let person = {
  name: "Alice",
  friends: ["John", "Nina"],
};

function makeFriend(newFriend) {
  return this.friends.push(newFriend);
}
person.makeFriend = makeFriend;
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.makeFriend("Bob");

console.log(
  `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
);
