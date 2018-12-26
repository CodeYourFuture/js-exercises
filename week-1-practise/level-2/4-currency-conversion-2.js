/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

var feePercentage = 1 / 100;

function convertToUSD(price) {
  //$1.4 to £1
  var exchangeRate = price * 1.4;
  var fee = exchangeRate * feePercentage;
  var totalPrice = exchangeRate + fee;

  return "$" + totalPrice.toFixed(2);
}

//funtion for converting to the Brazilian real (exchange rate is 3.92real to $1) 2.55 real to £1
function convertToBRL(price) {
  var exchangeRate = price * 2.55;
  var fee = exchangeRate * feePercentage;
  var totalPrice = exchangeRate + fee;

  return "R$" + totalPrice.toFixed(2);
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);
