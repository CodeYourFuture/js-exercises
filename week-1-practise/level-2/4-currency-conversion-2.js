/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/
function addfee(price) {
  let fee=price*1/100;
  let money=price-fee;
  return money;
}
function convertToUSD(price) {
  let money=(price*1.3)+addfee(price);
  return money;
}
function convertToBRL(price) {
  let money = (price * 4.7) + addfee(price);
  return money;
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
