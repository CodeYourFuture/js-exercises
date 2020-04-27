/*
  CURRENCY FORMATTING
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/

function convertToUSD(num) {
  let exchangeRate = num * 1.4;
  return exchangeRate;
}
console.log(convertToUSD(32));
/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/
function convertToBRL(priceInBRZ) {
  let addingPercent = 1.01;
  let totalFee = addingPercent * priceInBRZ * 5.7;
  return totalFee;
}
console.log(convertToBRL(30));

// function myMethod(number) {
//   var myNumber = number.toFixed(2);
//   var sign = "£";
//   var result = sign + myNumber;
//   return result;
// }
// console.log(myMethod(18.0));

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("convertToUSD function works", convertToUSD(32) === 44.8);
test("convertToBRL function works", convertToBRL(30) === 172.71);
