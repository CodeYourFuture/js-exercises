/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

    
*/

class ShoppingCart {
  // Add your code here
  constructor() {
    this.allItems = [];
  }

  addItem(items) {
    this.allItems.push(items)
  }
  cartContains() {
    // Use console.log() to output everything contained in your cart
    return this.allItems;
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

console.log(myCart.cartContains());
