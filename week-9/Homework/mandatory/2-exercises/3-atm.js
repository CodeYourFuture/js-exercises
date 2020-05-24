/*

 Create a simple ATM machine.

 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.

 You should start with a balance of 100.0 pounds in your account.

 */

class ATM {
    constructor(){
       this.balance=100;
    }
    // Add your code here
    make_deposit(num){
      this.balance = this.balance + num;
        
       
    }

    check_balance(){
       return this.balance;
    }

    make_withdrawl(num){
       this.balance = this.balance - num;
       
    }

}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
console.log(atm.check_balance());
atm.make_withdrawl(100);
console.log(atm.check_balance());
console.log(atm.make_withdrawl(500));
console.log(atm.check_balance()); // Your ATM should be able to handle this scenario