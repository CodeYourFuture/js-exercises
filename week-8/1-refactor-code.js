// Refactor the following code using the good coding practices discussed
//
// Add comments where you believe the code could be improved
//
// Make sure to consider if it has/is
// - Good naming
// - Good commenting
// - Clear logic
// - Concise
// - Good formatting
// - DRY
// - Single responsibility
// - Avoiding unnecessary specific number

personIncome = (salary, taxCode, incomeTax1, incomeTax2) => {
  var studentLoan = (salary - 17775) * 0.09, grossIncome = salary;
  (taxCode === "1150L") ? nationalInsurance = salary * 0.1 : (taxCode === "ST") ? nationalInsurance = salary * 0.05 : nationalInsurance = salary * 0.08
  var deductions = nationalInsurance + incomeTax1 + incomeTax2 + studentLoan;
  salary -= deductions;

  return `Your gross income is £${grossIncome} and your net income is £${salary}.`
}

console.log(personIncome(28000, "1150L", 1000, 580));
