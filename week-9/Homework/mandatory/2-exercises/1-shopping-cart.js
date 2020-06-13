/*
Complete the rest of this code to create an online shopping cart.
The output of running your code should be:
    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs
*/

class ShoppingCart {
  // Add your code here
  constructor() {
    this.cart = [];
  }

  addItem = (item) => {
    this.cart.push(item);
  };

  listItems = () => {
    console.log(`Your shopping cart has ${this.cart.length} items: `);
  };

  cartContains() {
    this.cart.forEach((item, index) => {
      console.log(index + 1 + ": " + item);
    });
    // Use console.log() to output everything contained in your cart
  }
}
let myCart = new ShoppingCart(); // Creates an empty shopping cart
myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");
myCart.listItems();
myCart.cartContains();
