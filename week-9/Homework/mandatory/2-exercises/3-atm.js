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
        this.acount = 100;
    }

    make_deposit(amount){
        this.acount += amount;
    }

    check_balance(){
        console.log(this.acount);
    }

    make_withdrawl(amount){
        if(this.acount < amount){
            console.log(`Your balance is ${this.acount} and not enough for this action`);
        } else{
            this.acount -= amount;
        }
    }

}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario