/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

  Use the tests to confirm which message to return
*/


//let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
//let bushBerryColours2 = ["pink", "pink", "pink", "pink"]



function bushChecker(arr) {
  let safeBerries = arr.every(element => element === "pink");

  if (safeBerries){
   //
    console.log( " Bush is safe to eat from ")//when i didn't put this one it wasn't work why?
    return " Bush is safe to eat from"
  }
  return "Toxic! Leave bush alone!";
}
//test: /Users/User1/Documents/GitHub/js-exercises/week-3/Homework/mandatory/2-bush-berries.js
//bushChecker funtion works - case 1: PASSED
// Bush is safe to eat from 
//bushChecker funtion works - case 1: FAILED



/* ======= TESTS - DO NOT MODIFY ===== */

let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("bushChecker funtion works - case 1", bushChecker(bushBerryColours1) === "Toxic! Leave bush alone!")
test("bushChecker funtion works - case 1", bushChecker(bushBerryColours2) === "Bush is safe to eat from")
