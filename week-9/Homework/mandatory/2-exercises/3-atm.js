/*
 Create a simple ATM machine.
 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.
 You should start with a balance of 100.0 pounds in your account.
 */

class ATM {
  // Add your code here

  constructor() {
    this.balance = 100;
  }

  make_deposit = (amount) => {
    this.balance += amount;
  };

  make_withdrawl = (amount) => {
    amount > this.balance
      ? console.log("Not enough balance")
      : (this.balance -= amount);
  };

  check_balance = () => {
    console.log(this.balance);
  };
}

let atm = new ATM(); // Create the ATM
atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario
atm.make_withdrawl(500); // Your ATM should be able to handle this scenario
