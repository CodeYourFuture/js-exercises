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
        this.balance = 100;
    }

    make_deposit(moneyIn){
        this.balance += moneyIn;
    }

    check_balance(){
        console.log(`Your balance : ${this.balance}`);
    }

    make_withdrawl(moneyOut){
        if(this.balance > 100){
            this.balance = this.balance - moneyOut;
        } else {
            console.log(`Insufficient Funds. Your balance is ${this.balance}`);
        }
        
    }


}

let atm = new ATM(); // Create the ATM

// atm.make_deposit(200);
// atm.check_balance();
// atm.make_withdrawl(100);
// atm.check_balance();

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario