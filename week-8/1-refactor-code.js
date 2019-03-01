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

function calculateNetSalary (salary, taxCode, incomeTax1, incomeTax2, ownsCar) {
  var totalIncomeTax = incomeTax1 + incomeTax2
  var studentLoan = (salary - 17775) * 0.09
  var originalSalary = salary
  var nationalInsurance = null
  /// calculationg National Insurance based on tax code
  if (taxCode === '1150L') {
    nationalInsurance = salary * 0.1
  } else if (taxCode === 'ST') {
    nationalInsurance = salary * 0.05
  } else {
    nationalInsurance = salary * 0.08
  }
  // Aplying deductions
  salary = salary - nationalInsurance - totalIncomeTax - studentLoan

  return (
    'Your gross income is £' +
    originalSalary.toString() +
    ' and your net income is £' +
    salary.toString() +
    '.'
  )
}

console.log(calculateNetSalary(28000, '1150L', 1000, 580, false))
