/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

  Use the tests to confirm which message to return
*/

console.clear(); // Clear all old outputs and see your new output.

function bushChecker(arry) { // This function is for check bushs
  return (arry.filter(Element => Element != "pink")).length > 0 ? "Toxic! Leave bush alone!" : "Bush is safe to eat from"; // This line is for check berries is safe or not safe
}

/* ======= TESTS - DO NOT MODIFY ===== */

let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

function test(test_name, expr) {
  let status;
  if (expr) {
    console.log(`${test_name}:\x1b[32mPASSED\x1b[0m`); // show PASSED with green color in console
  } else {
    console.log(`${test_name}:\x1b[31mFAILED\x1b[0m`); // show FAILED with red color in console
  }
}

test("bushChecker funtion works - case 1", bushChecker(bushBerryColours1) === "Toxic! Leave bush alone!")
test("bushChecker funtion works - case 1", bushChecker(bushBerryColours2) === "Bush is safe to eat from")