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
  make_deposit(num) {
    this.amount += num;
  }
  make_withdrawl(num) {
    if (this.amount - num > 0) {
      this.amount -= num;
    } else {
      console.log(
        "Sorry you don't have enough balance to withdrawl this amount!"
      );
    }
  }
  check_balance() {
    console.log(this.amount);
  }
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario
