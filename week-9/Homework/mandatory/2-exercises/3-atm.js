/*

 Create a simple ATM machine.

 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.

 You should start with a balance of 100.0 pounds in your account.

 */

class ATM {
    constructor () {
        this.accountBalance = 100;
        this.deposit = 0;
        return this.accountBalance;
    }   
    make_deposit(deposit) {
        this.deposit = deposit;
        return this.deposit;
    }
    check_balance() {
        this.accountBalance += this.deposit;
        return this.accountBalance
    }
    make_withdrawl(withdraw) {
        this.withdraw = withdraw;
        return this.withdraw;
    }
}
let atm = new ATM(); // Create the ATM


atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario