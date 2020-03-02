/*
  CURRENCY FORMATTING
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/

function convertToUSD(price) {// price as input
     let gbpToUSD = price * 1.4; // converts pounds to dollar
     return gbpToUSD;// returns the conversion

    } 
   console.log(convertToUSD(32));// calls the function 
/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertToBRL(price) {// price as input
  let onePercentOfPrice = (price*1)/100 // calculates transaction fee of 1%;
   let exchangeFee = price + onePercentOfPrice; // adds the fee to the price.
  let gbpToBRL = exchangeFee * 5.7;// converts pounds included fee to Brasilian Real
   return gbpToBRL; // return the converted currency
  }

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
      status = "PASSED"
  } else {
      status = "FAILED"
  }

  console.log(`${test_name}: ${status}`)
}

test('convertToUSD function works', convertToUSD(32) === 44.8)
test('convertToBRL function works', convertToBRL(30) === 172.71)
