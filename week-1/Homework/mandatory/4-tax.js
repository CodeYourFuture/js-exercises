/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

function calculateSalesTax(price) {
  let taxRate = (price * 20) / 100;//calculate tax rate
   const tax = taxRate;//stored the tax into the variables so it can be change easier
   const priceIncludesText = price +tax; //adds tax to the price
   return priceIncludesText;// returns final price 
}
 let priceSetByBusiness = calculateSalesTax(15); //stores a function call to variable
 console.log(priceSetByBusiness);//console logs function calls.
/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that transforms numbers into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function formatCurrency(price) {
  let priceSetByBusiness = calculateSalesTax(price);//calls a previous function
  let convertion= Math.round(priceSetByBusiness*100)/100;// rounds a previous function up to decimal
  let finalPrice = '£'+ convertion; // adds currency symbol to to 
  return finalPrice;
}
 
let priceFormat = formatCurrency(34);
console.log(priceFormat);

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

test("calculateSalesTax function - case 1 works", calculateSalesTax(15) === 18)
test("calculateSalesTax function - case 2 works", calculateSalesTax(17.5) === 21)
test("calculateSalesTax function - case 3 works", calculateSalesTax(34) === 40.8)

test("formatCurrency function - case 1 works", formatCurrency(15) === "£18")
test("formatCurrency function - case 2 works", formatCurrency(17.5) === "£21")
test("formatCurrency function - case 3 works", formatCurrency(34) === "£40.8")