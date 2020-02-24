/*
  CURRENCY FORMATTING
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/
const USDtoPound = 1.4; //exchange rate is 1.4 $ to £)
const BRLtoPound = 5.7; //exchange rate is 5.7 BRL to £
const serviceFeePercent = 1; //in percent

function convertToUSD(priceInPound) {
  return priceInPound * USDtoPound;
}

/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function calcFee(price, feeInPercent) {
  //calculate the service fee according to the Prcentage of Service fee
  //which has defined globally

  return (price * feeInPercent) / 100;
}

function convertToBRL(priceInPound) {
  /* you did not mentiond in the question
  shall we get the service fee after conversion or before
  */

  //first I convert pound to BRL according the rate
  PoudntoBRL = priceInPound * BRLtoPound;

  //I calcullate the Service Fee with calcFee Fucntion
  serviceFee = calcFee(PoudntoBRL, serviceFeePercent);
  //I added these two feee
  return PoudntoBRL + serviceFee;
}

console.log(convertToBRL(30, 1));

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
