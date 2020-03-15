/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

To be safe, they need to land on the first unamed planet that has Oxygen levels between 19.5% and 23.5%.

Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%
*/

console.clear(); // Clear all old outputs and see your new output.

function safeLevels(arry) { // This function finds first save planet 
  let newArry = (arry.map(x => x.slice(0, x.length - 1))); // This line remove percentage in numbers
  return `${(newArry.find(Element => Element > 19.5 && Element < 23.5))}%`; // This line finds first planet - oxygen between 19.5% and 23.5%
}

/* ======= TESTS - DO NOT MODIFY ===== */

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"]
const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"]

function test(test_name, expr) {
  let status;
  if (expr) {
    console.log(`${test_name}:\x1b[32mPASSED\x1b[0m`); // show PASSED with green color in console
  } else {
    console.log(`${test_name}:\x1b[31mFAILED\x1b[0m`); // show FAILED with red color in console
  }
}

test(
  "safeLevels function works - case 2",
  safeLevels(oxygenLevels1) === "19.9%"
);

test(
  "safeLevels function works - case 2",
  safeLevels(oxygenLevels2) === "20.2%"
);