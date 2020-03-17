/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

  Use the tests to confirm which message to return
*/
// let checkPinkBerries = berries.
// function bushChecker(berries) {
// if (berries === "pink") {
//   return "Bush is safe to eat from"}
// // } else if (berries === )
// else {
//   return "Toxic! Leave bush alone!"
// }
// }

//   for(let i=0; i < listOfBerryColours.length; i++){  
//   let berryColour = listOfBerryColours[i];  
    
//     if(berryColour !== "pink") {
//       return "Toxic! Leave bush alone";
//     } else {
//       return "Bush is safe to eat from";
//     }
// }

function bushChecker(bushBerryColours) {
  if (bushBerryColours.includes("neon", "transparent")){
    return "Toxic! Leave bush alone!";
  } else {
    return "Bush is safe to eat from";
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

test("bushChecker function works - case 1", bushChecker(bushBerryColours1) === "Toxic! Leave bush alone!")
test("bushChecker function works - case 1", bushChecker(bushBerryColours2) === "Bush is safe to eat from")
