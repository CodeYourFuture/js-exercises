/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

To be safe, they need to land on the first unamed planet that has Oxygen levels between 19.5% and 23.5%.

Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

Some string methods that might help you here are .replace() and .substring(). Let's look at a quick
example before trying the exercise.
*/

// /* .replace() allows us to add something where we removed something*/
// let greeting = "Good Morning";
// greeting.replace("Morning", "Evening"); // outputs Good Evening

// /* .substring() allows us to remove things from strings */
// let dessert = "ice cream and pancakes";

// let newdessert = dessert.substring(0, 9);

// console.log(newdessert); // returns ice cream

/* + + + + + + + */
/* Now try the exercise */

// let oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];

// const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"];

// function oxy(level) {
//   return level.substring(0, 4);
// }

// console.log(oxy("24.2%"));

function safeLevels(arr) {
  let newoxygenLevels1 = arr.map(function (level) {
    let str = level.substring(0, 4);

    return str;
  });

  console.log(newoxygenLevels1);

  let nooxygenLevels1 = newoxygenLevels1.map(function conTono(no) {
    return parseFloat(no);
  });

  console.log(nooxygenLevels1);

  function filterout(nos) {
    return nos > 19.5 && nos < 25.5;
  }
  console.log(filterout);

  let result = nooxygenLevels1.filter(filterout);

  // function safeLevels(result) {
  let result2 = Math.min(...result);

  return `${result2}%`;
}

// console.log(safeLevels(result));

// let result2 = Math.min(...result);

// let finalSafeLevel = result2.toString() + "%";

// console.log(finalSafeLevel);

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
