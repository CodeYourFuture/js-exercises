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
    this.money = 100;
  }
  make_deposit(deposit) {
    this.money += deposit;
    // console.log(this.money);
  }
  check_balance() {
    console.log(this.money);
  }
  make_withdraw(Withdraw) {
    if (this.money - Withdraw > 0) {
      this.money -= Withdraw;
    } else {
      console.log("Sorry you don't have enough money in your account");
    }
  }
}

let atm = new ATM(); // Create the AT
atm.make_deposit(200),
  atm.check_balance(),
  atm.make_withdraw(100),
  atm.check_balance(),
  atm.make_withdraw(500);
// Your ATM should be able to handle this scenario
