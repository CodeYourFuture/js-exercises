/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

    
*/

class ShoppingCart {
  constructor() {
    this.shopping = [];
  }

  addItem(item) {
    this.shopping.push(item);
  }
  // Add your code here

  cartContains() {
    // Use console.log() to output everything contained in your cart
    console.log(
      `Your cart has ${this.shopping.length} items: ${this.shopping}`
    );
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.cartContains();
