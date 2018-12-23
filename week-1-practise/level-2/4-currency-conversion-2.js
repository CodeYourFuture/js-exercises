/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/
function convertToUSD(price) {
  usPrice = price * 1.4;
  var feeForTransactions = (usPrice * 1) / 100;
  var totalPrice = feeForTransactions + usPrice;
  return "$ " + totalPrice.toFixed(2);
}

function convertToBRL(price) {
  brPrice = price * 4.92;
  //Repeting the same code used in the function above
  var feeForTransactions = (brPrice * 1) / 100;
  var totalPrice = feeForTransactions + brPrice;
  return "R$ " + totalPrice.toFixed(2);
}

// Created function to addFee

/*
function convertToUSD(price) {
  usPrice = price * 1.4;
  return "$ " + addFee(usPrice).toFixed(2);
}

function convertToBRL(price) {
  brPrice = price * 4.92;
  return "R$ " + addFee(brPrice).toFixed(2);
}

function addFee(price) {
  var feeForTransactions = (price * 1) / 100;
  var totalPrice = feeForTransactions + price;
  return totalPrice;
}
*/

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);
