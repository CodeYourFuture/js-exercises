/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

To be safe, they need to land on the first unamed planet that has Oxygen levels between 19.5% and 23.5%.

Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%
*/

function safeLevels(oxygenLevels) {
  /*loops through the array using map return converted float array */
  const floatConversion = oxygenLevels.map(element=>parseFloat(element));//used arrow fuction as map argument.
  
  /*finds oxygen level of the floated array it is important to note '.find returns first element that meets the requirement'*/
  const findOxyLevel = floatConversion.find(element => element > 19.5 && element < 23.5); //used arrow fuction as find argument.
   
  /*Converts the returned required oxygen to string*/ 
  const stringify = findOxyLevel.toString();
  /*adds percentage to the stringifyed result*/ 
  const percentify = `${stringify+'%'}`;
  /*I always use console log to make sure results are correct*/
  console.log(percentify);
    return percentify;   
}
/* ======= TESTS - DO NOT MODIFY ===== */

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"]
const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"]

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
    "safeLevels function works - case 1",
    safeLevels(oxygenLevels1) === "19.9%"
);

test(
    "safeLevels function works - case 2",
    safeLevels(oxygenLevels2) === "20.2%"
);