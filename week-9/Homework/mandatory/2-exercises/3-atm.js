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
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log(`Please enter a positive number`);
    }
  }
  check_balance() {
    console.log(`You have ${this.balance} in your account`);
  }
  make_withdrawl(amount) {
    if (this.balance > amount && amount > 0) {
      this.balance -= amount;
    } else {
      console.log(`Sorry, You don't have enough money in your account`);
    }
  }
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario
