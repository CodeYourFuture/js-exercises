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
    constructor(){
        this.balance += 100.0;
    }

    make_deposit(addNum){
        this.balance + addNum
    }

    make_withdrawl(WithdrawSum) {
        this.balance - WithdrawSum
    }
    check_balance(total){
        console.log(this.balance > 0 ? this.balance : "not enough money left")
    }

}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario