/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

To be safe, they need to land on the first unamed planet that has Oxygen levels between 19.5% and 23.5%.

Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%
*/
// function safeLevels(yourFunc) {
//
//   const abracaOutput = yourFunc(abracaArray);

//   return abracaOutput;
// }
// function myfunc(names) {
//   let newAbraca = names.map(makeUpper);
//   return newAbraca;
// }
// function makeUpper(name) {
//   name = name.toUpperCase();
//   return name;
// }

// console.log(safeLevels(myfunc));

function safeLevels(arr1) {
  const found = arr1.find(x => "19.5%" < x && x < "23.5%");
  // let common = [];

  // for (let i = 0; i < arr1.length; i++) {
  //   if ("19.5%" < arr1[i] && arr1[i] < "23.5%") {
  //     common = arr1[i];
  //     break;
  //   }
  // }
  // return common;
  return found;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"];

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "safeLevels function works - case 2",
  safeLevels(oxygenLevels1) === "19.9%"
);

test(
  "safeLevels function works - case 2",
  safeLevels(oxygenLevels2) === "20.2%"
);
