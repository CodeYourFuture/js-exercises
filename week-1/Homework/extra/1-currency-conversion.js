/*
  CURRENCY FORMATTING
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/

function convertToUSD(priceGBP) {
  let priceUSD = priceGBP * 1.4;
  return priceUSD;
}

/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function applyFee(value) {
  return value * 1.01;
}

function convertToBRL(priceGBP) {
  const feeMultiplier = 1.01;
  let priceBRL = priceGBP * 5.7;
  return applyFee(priceBRL);
}

// This works, but in terms of the DRY principle, which stands for "don't repeat yourself" what you'd want to do is define a separate function which applies the 1% fee, or perhaps have a global variable that holds it. That would mean for example, that if the business later wanted to vary the fee they could do so by changing just that one function. The other thing it helps do is reduce mistakes - since someone won't mistype the value in just one price conversion function.

// So you could have something like:

// const feeMultiplier = 1.01;

// or

// function applyFee(value) { ... }

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
