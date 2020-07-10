/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

    
*/

class ShoppingCart {
  constructor() {
    this.item = [];
  }
  addItem(item) {
    this.item.push(" " + item);
  }
  // Add your code here
  cartContains() {
    // Use console.log() to output everything contained in your cart
    console.log(`Your shopping cart has ${this.length} items: ${this.item}`);
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.cartContains();
// console.log(myCart);
