/*

 Create a simple ATM machine.

 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.

 You should start with a balance of 100.0 pounds in your account.

 */

class ATM {
    
        balance = 0;

    make_deposit(amount){
        this.balance += amount;
    }

    check_balance(){
        console.log(this.balance)
    }

    make_withdrawal(amount){
        this.balance -= amount;
    }
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawal(100);

atm.make_withdrawal(500); // Your ATM should be able to handle this scenario