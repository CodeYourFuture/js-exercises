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
        this.currentbalance = 0
    }
    check_balance() {
        console.log(this.currentbalance)
    }
    make_deposit(depositAmount) {
        this.currentbalance += depositAmount
        return this.currentbalance
    }
    make_withdrawl(withdrawAmount) {
        this.currentbalance -= withdrawAmount
        return this.currentbalance
    }
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);
atm.make_withdrawl(500); // Your ATM should be able to handle this scenario
atm.check_balance();
