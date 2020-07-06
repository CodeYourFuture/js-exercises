/*

 Create a simple ATM machine.

 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.

 You should start with a balance of 100.0 pounds in your account.

 */

class ATM {
  constructor() {
    this.balance = 100.0;
  }
  make_deposit(amount) {
    this.balance += amount;
  }
  check_balance() {
    console.log(`Your balance : ${this.balance}`);
  }
  make_withdrawl(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("You don't have enough credit in your balance.");
    }
  }
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario
