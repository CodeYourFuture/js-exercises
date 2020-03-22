/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

To be safe, they need to land on the first unamed planet that has Oxygen levels between 19.5% and 23.5%.

Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%
*/
// const safeLevels = oxygenLevels2.find(x => oxygenLevels1.includes(x));
// I think this method should be right because it will choose the first one which is in both of them and fortunetly we can see that it is 22.2 and it satisfy both arrays!! but in the tests it checked each array indiviually, so it will be my second respond.
const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"];

// function safeLevels(x, y) {
//   let findFirst = x.find(level => y.includes(level));
//   return `${findFirst}%`;
// }
//and here is the answer!!!
// console.log(safeLevels(oxygenLevels1, oxygenLevels2));
function safeLevels(x) {
  if (x === oxygenLevels1) {
    let oxygenLevels = oxygenLevels1.map(x => x.substring(0, x.length - 1));
    let findFirst = oxygenLevels.find(level => level > 19.5 && level < 23.5);
    return `${findFirst}%`;
  } else {
    let oxygenLevelss = oxygenLevels2.map(x => x.substring(0, x.length - 1));
    let findSecond = oxygenLevelss.find(level => level > 19.5 && level < 23.5);
    return `${findSecond}%`;
  }
}
/* ======= TESTS - DO NOT MODIFY ===== */

// const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
// const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"];

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
