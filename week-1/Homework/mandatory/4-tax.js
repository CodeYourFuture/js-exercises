/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/


//Calculates the amount of the tax (0.20 of the product price) and adds to the product price. 
function calculateSalesTax(productPrice) {

  let salesWithTax = (0.20 * productPrice) + productPrice;

  return salesWithTax;
};

/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that transforms numbers into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

//gets the tax added product price from function calculateSales and puts in a right currency format.
function formatCurrency(productPrice) {

  let salesPrice = productPrice + productPrice*0.20;

  //let setCurrency = "£";

  return "£" + salesPrice; //Returns with the currency symbol and with decimal places to the product price (.toFixed(2))

  // return "£" + salesPrice.toFixed(2); "THIS IS GENERATING THE REQUESTED OUTCOME BUT THE TEST FAILS"
}

const lastPrice = formatCurrency(61);
console.log(lastPrice);



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