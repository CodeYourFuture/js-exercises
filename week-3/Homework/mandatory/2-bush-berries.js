// /*
//   The space travellers have safely landed and are foraging for food in the natural wildlife.

//   There are bushes with many different colour berries.
//   The pink berries are the ONLY safe ones to eat.
//   If any other berries are present, it's best not to eat from the bush at all!

//   Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

//   Use the tests to confirm which message to return
// */
// function pink(berryColor){ 
//   berryColor === "pink";
// }

function bushChecker(array) { //checks whether every element is pink
  let check = array.every(berryColor => berryColor === "pink");
  

    if (check === true) { //if check is true
    return "Bush is safe to eat from";
  } else{ //if check is false
   return "Toxic! Leave bush alone!";
  }
}



let bushBerryColours3 = ["pink", "pink", "pink", "h"]

console.log(bushChecker(bushBerryColours3))
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

