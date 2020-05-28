/* 
Challenge 1: Famous Writers

Did you know you can also have an Array of Objects? You might think "This is madness!" but in everyday coding life
it is quite frequent combination. Just think about it what benefits we can get from this construct.

Object lets you store multiple values in a single variable, then you can store complex objects in an array.
Let's assume you have list of data about people names and their birthday and you would like to print each name
with corresponding birthdays together. Storing these information in different arrays and then pairing them up
makes the iteration unnecessarily complicated, code will be less intuitive, needs extra cognitive effort to
reason about and last but not least it can be error-prone for example you pick up the wrong birthday to a name.

In this exercise you will practice how to access to Objects stored in Array and to their properties.
You already know different ways how to loop through Arrays, it won't be different in this case too.
The only extra is that you have to use values inside Objects.
*/

// We've created an array of objects for you here:
let writers = [
	{
		firstName: "Virginia",
		lastName: "Woolf",
		occupation: "writer",
		age: 59,
		alive: false,
	},

	{
		firstName: "Zadie",
		lastName: "Smith",
		occupation: "writer",
		age: 41,
		alive: true,
	},

	{
		firstName: "Jane",
		lastName: "Austen",
		occupation: "writer",
		age: 41,
		alive: false,
	},

	{
		firstName: "bell",
		lastName: "hooks",
		occupation: "writer",
		age: 64,
		alive: true,
	},
];

/*
Exercise I
  Loop through the Array, and for each object, `console.log()` out the below sentence and
  insert corresponding values to the place holder that are indicated in courle braces:
  "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
*/

let writers = {
	firstName: "Virginia",
	lastName: "Woolf",
	occupation: "writer",
	age: 59,
	alive: false,

	objectWriterVirginia: function () {
		return (
			"Hi " +
			" my name is " +
			this.firstName +
			" " +
			this.lastName +
			" I am " +
			" " +
			this.age +
			" " +
			"years old " +
			"and work a s a" +
			this.occupation
		);
	},
};

for (let objectVirginia of writers.objectWriterVirginia()) {
	console.log(objectVirginia);
}

/*
Exercise II
  Only `console.log()` out the writers who are in their 40s (meaning between 40 and 49)
  and not with us anymore, use the below sentence format:
  "Writer {firstName} {lastName} died at {age} years old."
*/

let writers = {
	firstName: "Jane",
	lastName: "Austen",
	occupation: "writer",
	age: 41,
	alive: false,
	died: "Died,",

	objectWritersJane: function () {
		return (
			this.firstName +
			" " +
			this.lastName +
			" is " +
			this.died +
			" " +
			this.age +
			" " +
			"years old "
		);
	},
};
console.log(writers.objectWritersJane());

/*
Exercise III
  Only `console.log()` out contemporary (meaning still alive) writers who are in their forties:
  "Hi, my name is {firstName} {lastName}. I am {age} years old."
*/

let writers = {
	firstName: "Zadie",
	lastName: "Smith",
	occupation: "writer",
	age: 41,
	alive: true,
	notDied: "Alive,",

	objectWriterZadie: function () {
		return (
			this.firstName +
			" " +
			this.lastName +
			" is " +
			this.notDied +
			" " +
			this.age +
			" " +
			"years old "
		);
	},
};

console.log(writers.objectWriterZadie());
