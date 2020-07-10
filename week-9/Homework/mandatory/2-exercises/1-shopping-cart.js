/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

    
*/

class ShoppingCart {
	constructor(toiletRoll, eggs, pasta) {
		this.toiletRoll = toiletRoll;
		this.eggs = eggs;
		this.pasta = pasta;
	}
	cartContains() {
		console.log("Your Shopping cart has 3 Items:");
		console.log("Toilet Roll " + this.toiletRoll);
		console.log("Egg" + this.eggs);
		console.log("Pasta" + this.pasta);
	}
}

let myCart = new ShoppingCart(" ", " ", " ");

myCart.cartContains();
