/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/
function transactionFee(price) {
	return price * 0.01;
}
function convertToUSD(price) {
	return price * 1.4 + transactionFee(price);
}
function convertToBRL(price) {
	return price * 3.78328 + transactionFee(price);
}
/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = 'The life and times of Mozafar Haider';
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log('Product: ' + product);
console.log('Price in USD: ' + priceInUSD);
console.log('Price in BRL: ' + priceInBRL);
