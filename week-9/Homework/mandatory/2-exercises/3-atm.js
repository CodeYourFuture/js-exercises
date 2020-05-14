class ATM {
        // Add your code here
    constructor(){
        this.balance = 100;
         this.myDeposit = 0;
         this.withDrawl = 0;
    }
    check_balance(){
        console.log(this.balance)
    }
    make_deposit(addMoney){
        this.myDeposit = 0;
        this.myDeposit += addMoney;
        this.balance += this.myDeposit;
        console.log(this.balance);
    }
    make_withdrawl(looseMoney){
        if(this.balance <= looseMoney){
            console.log("you don't have enough money to do this transaction")
        }
        else{
        this.withDrawl = looseMoney;
        this.balance -= this.withDrawl;
        console.log(this.balance);
        }
    }
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);
atm.make_withdrawl(500); // Your ATM should be able to handle this scenario
// my codes for trying different situation
atm.make_deposit(700);
atm.make_withdrawl(500);