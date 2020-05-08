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
    this.balance = 100;

    this.make_deposit = (amounttoDeposit) => {
      this.balance += amounttoDeposit;
      console.log(`Thank you ${amounttoDeposit} was added to your account`);
    };
    this.check_balance = () => {
      console.log(`Your balance is ${this.balance} russian dollars`);
    };
    this.make_withdrawl = (toTake) => {
      if (this.balance >= toTake) {
        console.log(`Poor human take you ${toTake} russian dollars`);
      } else {
        console.log("Insufficient balance");
      }
    };
  }
}
// Add your code here

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario
