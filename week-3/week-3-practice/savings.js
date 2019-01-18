/*
I have looked at my financial outgoings and discovered that I can make monthly savings with things I don’t use or need anymore. 
I have a bank account that I dont use. It has £20, I just want to use the account to put money in and not take money out.
I want to save for a year and would like to know how much i will have in my bank account if i put my monthly saving in.
Using .forEach() print the amount that I will have in my bank account after a year.
  
My bank account has been provided
An array with my monthly cost item has been provided
Console.log has been provided
*/

var myBankAccount = 20;
var monthlyCostItem = [["coffee", 10], ["gym", 25], ["magazine", 12]];
function addToTotalSaving(amount) {
  myBankAccount += amount[1] * 12;
}
monthlyCostItem.forEach(addToTotalSaving);

console.log("In a year, you will have £" + myBankAccount + " in your account");
/* EXPECTED OUTPUT */
/*In a year, you will have £584 in your account*/
