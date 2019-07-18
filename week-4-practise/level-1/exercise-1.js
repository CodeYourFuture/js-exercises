/* Challenge 1: Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:



var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];
("Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}.");

var milley = writers.map(
  obj =>
    "Hi, my name is " +
    obj.firstName +
    " " +
    obj.lastName +
    ". I am " +
    obj.age +
    " years old,and work as a " +
    obj.occupation
);
console.log(milley);

//If you want an extra challenge, only `console.log()` the writers that are alive.

//var live = writers.filter(obj => obj.alive === true).map(obj => obj.firstName);
console.log(
  writers.filter(obj => obj.alive === true).map(obj => obj.firstName)
);

function aliasGen(firstname, lastname) {
  var milley = firstname.charAt(0);
  var jibran = lastname.charAt(0);

  if (/[A-Z]/.test(milley) && /[A-Z]/.test(jibran)) {
    return firstName.milley + " " + surName.jibran;
  } else if (/[a-z]/.test(milley) && /[a-z]/.test(jibran)) {
    milley = milley.toUpperCase();
    jibran = jibran.toUpperCase();
    return firstName.milley + " " + surName.jibran;
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}
var firstName = {
  A: "Alpha",
  B: "Beta",
  C: "Cache",
  D: "millgh",
  E: "hiii",
  M: "Malware"
};
var surName = { A: "Analogue", B: "Bomb", C: "Catalyst", M: "Mountain" };
var millleyeye = aliasGen("Mike", "Millington");
console.log(millleyeye);
*/
function aliasGen(firstname, lastname) {
  var milley = firstname.charAt(0);
  var jibran = lastname.charAt(0);

  if (/[A-Z]/.test(milley) && /[A-Z]/.test(jibran)) {
    return firstName[milley] + " " + surName[jibran];
  } else if (/[a-z]/.test(milley) && /[a-z]/.test(jibran)) {
    milley = milley.toUpperCase();
    jibran = jibran.toUpperCase();
    return firstName[milley] + " " + surName[jibran];
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}
var firstName = {
  A: "Alpha",
  B: "Beta",
  C: "Cache",
  D: "millgh",
  E: "hiii",
  M: "Malware"
};
var surName = { A: "Analogue", B: "Bomb", C: "Catalyst", M: "Mountain" };
var millleyeye = aliasGen("mike", "mcllington");
console.log(millleyeye);
