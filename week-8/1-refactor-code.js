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

function myFunction(salary, taxCode, incomeTax1, incomeTax2, ownsCar) { // Not good naming and ownsCar's value is never read
  var totalIncomeTax = incomeTax1 + incomeTax2;
  var studentLoan = (salary - 17775) * 0.09;    // Avoiding unnecessary specific number
  var originalSalary = salary; // No need to use originalSalary that is the same as salary.
  var nationalInsurance = null; //Not clear and not logic

// Need to apply good formating

  if (taxCode === "1150L") {
    nationalInsurance = salary * 0.1;
  } else if (taxCode === "ST") {      //It should be "else"
    nationalInsurance = salary * 0.05;
  } else {                             //It should be "eUnnecessarylse if"
    nationalInsurance = salary * 0.08;
  }

  var deductions = [nationalInsurance, totalIncomeTax, studentLoan];

  salary = salary - deductions[0]; 
  salary = salary - deductions[1];  // Unnecessary repeating. It should be done in one line as salary =- (deductions[0]+deductions[1]+deductions[2])
  salary = salary - deductions[2];  // Unnecessary repeating.

  return (
    "Your gross income is �" +
    originalSalary.toString() +
    " and your net income is �" +
    salary.toString() +
    "."
  );
}

console.log(myFunction(28000, "1150L", 1000, 580, false));
