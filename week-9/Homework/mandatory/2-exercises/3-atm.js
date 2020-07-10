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
    make_deposit(depositAmount) {
        this.balance += depositAmount;
        return this.balance;
    }
    check_balance() {
        return this.balance;
    }

    make_withdrawl(depositAmount) {
        if (this.balance <= depositAmount) {
            console.log('you do not have enough money for transaction');
        }
        else {
            this.balance -= depositAmount;
            return this.balance
        }
    }


}

let atm = new ATM(); // Create the ATM

console.log(atm.make_deposit(200));
console.log(atm.check_balance());
console.log(atm.make_withdrawl(100));

console.log(atm.make_withdrawl(500)); // Your ATM should be able to handle this scenario