/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

  Use the tests to confirm which message to return

  This exercise can be solved in a few different ways. One way might include the array methods
  .some() and .every(). The .some() method tests to see if some of the values (at least 1) in an array 
  match what you're looking for and returns true or false. .every() will only return true 
  if all values match watch you're looking for. Let's first look at an example that will 
  teach you how to use these methods.
 */

let array = [12, 73, 92, 45, 100, 14, 61];

array.some((value) => {return (value % 2 == 0)}); /* this will return true as SOME values 
will have a remainder of 0 i.e. they are even numbers*/

array.every((value) => {return (value % 2 == 0)}); /* this will return false as not ALL 
values will have a remainder of 0 i.e. there are some odd numbers in the array too*/

/* + + + + + + + + + + + + + + */

/* Now try to complete the exercise */

function bushChecker(colourBush) {
  let checkPink = colourBush.every((berriesPink) => berriesPink === "pink");
  if (checkPink) {
    //you can also write  if (arr.every(pinkBerries => pinkBerries === "pink"))
    return "Bush is safe to eat from";
  } else {
    return "Toxic! Leave bush alone!";
  }
}

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
