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
    this.balance = 100.0;
  }
  make_deposit(number) {
    if (typeof number === "number" && number >= 0) {
      this.balance += number;
    } else {
      console.log("Please input a positive number!");
    }
  }
  check_balance() {
    console.log("Your current Balance is : " + this.balance);
  }
  make_withdrawl(number) {
    if (typeof number === "number" && number >= 0) {
      if (number > this.balance) {
        console.log(
          "You don't have enough in your account! want to make a deposite instead?"
        );
      } else {
        this.balance -= number;
      }
    } else {
      console.log("Please input a positive number!");
    }
  }
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);
atm.make_withdrawl(500); // Your ATM should be able to handle this scenario
