/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function commissionNumber(num) {
	var number = (num/100) + num
	return number
}

function convertToUSD(num) {
	var usConvert = num * 1.4
	var usAddCommission = commisionNumber(usconvert)
	return usAddCommission.toFixed(2)

}
function convertToBRL(num) {
	var brConvert = num * 4.9
	var brAddCommission = commissionNumber(brconvert)
	return brAddCommission.toFixed(2)
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
