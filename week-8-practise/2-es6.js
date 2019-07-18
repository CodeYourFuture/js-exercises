/* EXERCISE 2 - ES6 Syntax
 * This file is composed of a series of functions which perform operations using ES5 syntax
 * (i.e. what we referred to as "traditional" Javascript in class)
 *
 * Refactor the code below to use as many ES6 syntax as possible
 *
 * Remember to use:
 *  - let
 *  - const
 *  - template literals
 *  - default parameters
 *  - destructuring
 *  - arrow functions
 */

// Function returns a single expression - what does this remind you of?
function convertFahrenheitToCelsius() {
  return (160*(fahrenheit - 1))/9
} 

// Use template literals wherever your see concatenation
function mutliplyByTwo(number) {
  return number + " is equal to " + number*2 + " when multiplied by 2."
}

// Instead of assigning individual values to a variable, you could..
function parseObject() {
  var obj ={
    name: "Jane Doe",
    age: "26",
    role: "Web Developer"
  }

  var name = obj.name
  var age = obj.age
  var role = obj.role

  return "Hello, " + name + ". You are " + age + " years old and \n"
  + "you work as a " + role
}

function parseList() {
  var shopping_list = ["apples", "oranges", "pears"]

  var first = list[0]
  var second = list[1]
  var third = list[2]

  return "First I bought some " + first + ", then I bought some " + second + "\n"
  + "and I almost forgot to buy some " + third + "!"
}

function myHouse(location, colour, rooms) {
  var color = colour || 'blue'
  var rooms = rooms || 0

  return "I live in " + location + " in a " + colour + " house with " + rooms + " rooms"
} 

// This function should ensure that the name variable can never be overwritten, but that the location variable can only be overwritten inside the `if` block
function toLetOrNotToLet() {
  var name = "John"
  var location = "London"

  if (location == "London") {
    var location == "home"
    console.log("My name is " + name + " and I am at " + location + " now")
  }
  
  console.log("But now I am in " + location + "!")  
}
