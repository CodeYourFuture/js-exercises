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
    this.amount = 100.0;
  }

  make_deposit(amount) {
    this.amount += amount;
  }

  check_balance() {
    console.log("Balance : " + this.amount);
  }

  make_withdrawl(amount) {
    // I assume the input amount is in number format
    if (amount > this.amount) {
      console.log("Sorry, the balance is not enough");
    } else {
      this.amount -= amount;
    }
  }
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario
atm.check_balance();
