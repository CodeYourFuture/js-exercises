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
  make_deposit = (deposit) => {
    this.balance += deposit;
  };
  make_withdraw = (withdraw) => {
    if (this.balance > withdraw) {
      this.balance -= withdraw;
    } else {
      console.log(
        `Sorry, you don't have enough money, your balance is ${this.balance}`
      );
    }
  };
  check_balance = () => {
    console.log(this.balance);
  };
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdraw(100);

atm.make_withdraw(500); // Your ATM should be able to handle this scenario
