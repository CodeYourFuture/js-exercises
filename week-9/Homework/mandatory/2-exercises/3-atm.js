/*

 Create a simple ATM machine.

 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.

 You should start with a balance of 100.0 pounds in your account.

 */
class ATM {
    constructor(currentBalance){
        this.account =currentBalance;
    }
    deposit(amount){
        console.log("your account after deposit is ", this.account += amount, " £")
    }
    checkBalance (){
        console.log("you balance now is £ " ,this.account)
    }
    withdrawl (withdrawAmount){
        if(this.account >= withdrawAmount){
         console.log("£ ",this.account -= withdrawAmount)
        }else{
         console.log("sorry buddy your balance is not enough to do the withdraw")
          }
        }
    }
    // Add your code here
let atm = new ATM(100); // Create the ATM
atm.deposit(200);
atm.checkBalance();
atm.withdrawl(100);
atm.withdrawl(500); // Your ATM should be able to handle this scenario