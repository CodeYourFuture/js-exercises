/*
You are working in a car dealer. You have "carsOnSale" cars on sale at the moment at your database. You have learned that "Mercedes" has been sold in the morning and "newCarsForSale" cars added to the sale.
- One Customer is calling you if you have "Toyota" car on sale.

*/

var carsOnSale = ["Honda", "Mercedes", "Nissan", "BMW"];
var newCarsforSale = ["Ford", "Hyundai", "Toyota"];

carsOnSale.splice(1, 1);
isCarOnSale = carsOnSale.concat(newCarsforSale).some(car => car === "Toyota");
console.log(isCarOnSale); //Finish the statment

/* EXPECTED OUTPUT */
true;
